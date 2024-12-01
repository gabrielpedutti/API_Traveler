import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateHospedagemDTO } from "../../dtos/UpdateHospedagemDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateHospedagemUseCase {
  async execute(data: UpdateHospedagemDTO): Promise<Hospedagem> {
    const updateData: any = {};

    // Adiciona os campos a serem atualizados se fornecidos
    if (data.nome) updateData.nome = data.nome;
    if (data.tipo_id) updateData.tipo_id = data.tipo_id;
    if (data.despesa_id) updateData.despesa_id = data.despesa_id;
    if (data.viagem_id) updateData.viagem_id = data.viagem_id;
    if (data.tipo_hospedagem_id) updateData.tipo_hospedagem_id = data.tipo_hospedagem_id;
    if (data.municipio_id) updateData.municipio_id = data.municipio_id;
    if (data.data_checkin) updateData.data_checkin = data.data_checkin;
    if (data.data_checkout) updateData.data_checkout = data.data_checkout;

    try {
      // Verifica se pelo menos um campo foi fornecido para atualização
      const hasOptionalField = Object.keys(updateData).length > 0;
      if (!data.id || !hasOptionalField) {
        throw new AppError("Pelo menos um campo deve ser preenchido para atualizar os dados da hospedagem.");
      }

      // Atualiza o transporte no banco de dados
      const hospedagem = await prisma.hospedagem.update({
        where: { id: data.id },
        data: updateData,
      });

      return hospedagem;
    } catch (error) {
      throw new AppError("Erro ao atualizar a hospedagem: " + error);
    }
  }
}
