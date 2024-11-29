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
        }
      });
      return viagem;
    } catch (error) {
        if (error instanceof Error) {
        throw new AppError('Erro ao buscar o viagem: ' + error.message, 500);
      } else {
        throw new AppError('Erro desconhecido ao buscar o viagem', 500);
      }
    }
  }
}