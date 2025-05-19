import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetViagemDTO } from "../../dtos/GetViagemDTO";
import { AppError } from "../../../../errors/AppError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class GetViagemUseCase {
  async execute(data: GetViagemDTO): Promise<Viagem> {

    try {

      const viagem = await prisma.viagem.findFirstOrThrow({
        where: {
          id: data.id
        },
        include: {
          viagem_destino: {
            select: {
              nm_municipio: true,
              estado: {
                select: {
                  nm_estado: true,
                  pais: {
                    select: {
                      nm_pais: true,
                    },
                  },
                },
              },
            },
          },
          status_viagem: {
            select: {
              descricao: true,
            },
          },
        },
      });
      return viagem;
    } catch (error: any) {
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2025'
      ) {
        throw new AppError("Viagem não encontrada.", 404, { id: data.id });
      }

      throw new AppError("Erro ao buscar a viagem.", 500, {
        cause: error.message ?? error,
        id: data.id,
      });
    }
  }
}