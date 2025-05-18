import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateHospedagemDTO } from "../../dtos/UpdateHospedagemDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateHospedagemUseCase {
  async execute(data: UpdateHospedagemDTO): Promise<Hospedagem> {
    try {
      const hospedagemExistente = await prisma.hospedagem.findUnique({
        where: { id: data.id },
      });

      if (!hospedagemExistente) {
        throw new AppError("Hospedagem não encontrada.");
      }

      // Atualiza a despesa associada
      const updateDespesaData: any = {};
      if (data.nome) updateDespesaData.descricao = data.nome;
      if (data.valor !== undefined) updateDespesaData.valor = data.valor;
      if (data.data_checkin) updateDespesaData.data = data.data_checkin;
      updateDespesaData.updated_at = new Date();

      await prisma.despesa.update({
        where: { id: data.despesa_id },
        data: updateDespesaData,
      });

      const updateHospedagemData: any = {};

      if (data.nome) updateHospedagemData.nome = data.nome;
      if (data.tipo_id) {
        updateHospedagemData.tipo_hospedagem = {
          connect: { id: data.tipo_id },
        };
      }
      if (data.data_checkin) updateHospedagemData.data_checkin = data.data_checkin;
      if (data.data_checkout) updateHospedagemData.data_checkout = data.data_checkout;

      updateHospedagemData.viagem = {
        connect: { id: data.viagem_id },
      };

      updateHospedagemData.usuario = {
        connect: { id: data.usuario_id },
      };

      if (data.endereco) updateHospedagemData.endereco = data.endereco;
      if (data.documento_anexo) updateHospedagemData.documento_anexo = data.documento_anexo;

      updateHospedagemData.updated_at = new Date();

      const hospedagemAtualizada = await prisma.hospedagem.update({
        where: { id: data.id },
        data: updateHospedagemData,
        include: {
          tipo_hospedagem: {
            select: { descricao: true },
          },
          despesa: {
            select: { valor: true },
          },
        },
      });

      return hospedagemAtualizada;
    } catch (error) {
      throw new AppError("Erro ao atualizar a hospedagem: " + error);
    }
  }
}