import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdatePasseioDTO } from "../../dtos/UpdatePasseioDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdatePasseioUseCase {
  async execute(data: UpdatePasseioDTO): Promise<Passeio> {
    const updateData: any = {};

    // Adiciona os campos a serem atualizados se fornecidos
    if (data.nome) updateData.nome = data.nome;
    if (data.tipo_id) updateData.tipo_id = data.tipo_id;
    if (data.despesa_id) updateData.despesa_id = data.despesa_id;
    if (data.viagem_id) updateData.viagem_id = data.viagem_id;
    if (data.municipio_id) updateData.municipio_id = data.municipio_id;   
    if (data.data) updateData.data = data.data;

    try {
      // Verifica se pelo menos um campo foi fornecido para atualização
      const hasOptionalField = Object.keys(updateData).length > 0;
      if (!data.id || !hasOptionalField) {
        throw new AppError("Pelo menos um campo deve ser preenchido para atualizar os dados do passeio.");
      }

      // Atualiza o passeio no banco de dados
      const passeio = await prisma.passeio.update({
        where: { id: data.id },
        data: updateData,
      });

      return passeio;
    } catch (error) {
      throw new AppError("Erro ao atualizar o passeio: " + error);
    }
  }
}
