import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateViagemDTO } from "../../dtos/UpdateViagemDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateViagemUseCase {
  async execute(data: UpdateViagemDTO): Promise<Viagem> {
    const updateData: any = {};

    if (data.nome) updateData.nome = data.nome;
    if (data.descricao) updateData.descricao = data.descricao;
    if (data.viagem_origem_id) updateData.viagem_origem_id = data.viagem_origem_id;
    if (data.viagem_destino_id) updateData.viagem_destino_id = data.viagem_destino_id;
    if (data.data_inicio) updateData.data_inicio = data.data_inicio;
    if (data.data_fim) updateData.data_fim = data.data_fim;
    if (data.usuario_id) updateData.usuario_id = data.usuario_id;
    if (data.status_viagem_id) updateData.status_viagem_id = data.status_viagem_id;

    try {
      const hasOptionalField =
        data.nome ||
        data.descricao ||
        data.viagem_origem_id ||
        data.viagem_destino_id ||
        data.data_inicio ||
        data.data_fim ||
        data.usuario_id ||
        data.status_viagem_id;

      if (!data.id || !hasOptionalField) {
        throw new AppError("Pelo menos um campo deve ser preenchido para atualizar os dados da viagem.");
      }

      const viagem = await prisma.viagem.update({
        where: {
          id: data.id,
        },
        data: updateData,
      });

      return viagem;
    } catch (error) {
      throw new AppError("Erro ao atualizar a viagem: " + error);
    }
  }
}
