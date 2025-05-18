import { Despesa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateDespesaDTO } from "../../dtos/CreateDespesaDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateDespesaUseCase {
  async execute(data: CreateDespesaDTO): Promise<Despesa> {
    const usuarioExiste = await prisma.usuario.findUnique({
      where: { id: data.usuario_id },
    });

    if (!usuarioExiste) {
      throw new AppError("Usuário não encontrado.");
    }

    const viagem = await prisma.viagem.findUnique({
      where: { id: data.viagem_id },
    });

    if (!viagem) {
      throw new AppError("Viagem não encontrada.");
    }

    if (!data.tipo_id) {
      throw new AppError("Campo tipo_id é obrigatório.");
    }

    try {
      const despesa = await prisma.despesa.create({
        data: {
          descricao: data.descricao,
          valor: data.valor,
          data: data.data,
          usuario: {
              connect: { id: viagem.usuario_id },
            },
          viagem: {
              connect: { id: data.viagem_id },
            },
          tipo_despesa: {
              connect: { id: data.tipo_id },
            },
        },
      });

      return despesa;
    } catch (error) {
      throw new AppError("Erro ao criar despesa: " + error);
    }
  }
}
