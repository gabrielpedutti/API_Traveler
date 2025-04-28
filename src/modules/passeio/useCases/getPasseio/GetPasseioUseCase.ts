import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetPasseioDTO } from "../../dtos/GetPasseioDTO";
import { AppError } from "../../../../errors/AppError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class GetPasseioUseCase {
  async execute(data: GetPasseioDTO): Promise<Passeio> {

    try {

      const passeio = await prisma.passeio.findFirstOrThrow({
        where: {
          id: data.id
        }
      });
      
      return passeio;
    } catch (error) {
        if (error instanceof Error) {
        throw new AppError('Erro ao buscar o passeio: ' + error.message, 500);
      } else {
        throw new AppError('Erro desconhecido ao buscar o Passeio', 500);
      }
    }
  }
}