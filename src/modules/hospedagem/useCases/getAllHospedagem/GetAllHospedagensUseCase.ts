import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllHospedagensUseCase {
  async execute(): Promise<Hospedagem[]> {
    const hospedagens = await prisma.hospedagem.findMany({
      include: {
        despesa: {
          select: {
            valor: true
          }
        }
      }
    });
    
    return hospedagens;
  }
}