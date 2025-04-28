import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetHospedagemDTO } from "../../dtos/GetHospedagemDTO";
import { AppError } from "../../../../errors/AppError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class GetHospedagemUseCase {
  async execute(data: GetHospedagemDTO): Promise<Hospedagem> {

    try {

      const hospedagem = await prisma.hospedagem.findFirstOrThrow({
        where: {
          id: data.id
        }
      });
      
      return hospedagem;
    } catch (error) {
        if (error instanceof Error) {
        throw new AppError('Erro ao buscar a hospedagem: ' + error.message, 500);
      } else {
        throw new AppError('Erro desconhecido ao buscar a hospedagem', 500);
      }
    }
  }
}