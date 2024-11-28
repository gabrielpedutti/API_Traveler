import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateTransporteDTO } from "../../dtos/UpdateTransporteDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateTransporteUseCase {
  async execute(data: UpdateTransporteDTO): Promise<Transporte> {
    const updateData: any = {};

    // Adiciona os campos a serem atualizados se fornecidos
    if (data.nome) updateData.nome = data.nome;
    if (data.tipo_id) updateData.tipo_id = data.tipo_id;
    if (data.despesa_id) updateData.despesa_id = data.despesa_id;
    if (data.viagem_id) updateData.viagem_id = data.viagem_id;
    if (data.transporte_origem_id) updateData.transporte_origem_id = data.transporte_origem_id;
    if (data.transporte_destino_id) updateData.transporte_destino_id = data.transporte_destino_id;
    if (data.data) updateData.data = data.data;

    try {
      // Verifica se pelo menos um campo foi fornecido para atualização
      const hasOptionalField = Object.keys(updateData).length > 0;
      if (!data.id || !hasOptionalField) {
        throw new AppError("Pelo menos um campo deve ser preenchido para atualizar os dados do transporte.");
      }

      // Atualiza o transporte no banco de dados
      const transporte = await prisma.transporte.update({
        where: { id: data.id },
        data: updateData,
      });

      return transporte;
    } catch (error) {
      throw new AppError("Erro ao atualizar o transporte: " + error);
    }
  }
}
