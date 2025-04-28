import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetTransporteDTO } from "../../dtos/GetTransporteDTO";
import { AppError } from "../../../../errors/AppError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export class GetTransporteUseCase {
  async execute(data: GetTransporteDTO): Promise<Transporte> {

    try {

      const transporte = await prisma.transporte.findFirstOrThrow({
        where: {
          id: data.id
        }
      });
      
      return transporte;
    } catch (error) {
        if (error instanceof Error) {
        throw new AppError('Erro ao buscar o transporte: ' + error.message, 500);
      } else {
        throw new AppError('Erro desconhecido ao buscar o transporte', 500);
      }
    }
  }
}