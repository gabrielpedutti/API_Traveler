import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllHospedagensUseCase {
  async execute(): Promise<Hospedagem[]> {
    const hospedagens = await prisma.hospedagem.findMany({
      include: {
        tipo_hospedagem: {
          select: {
            descricao: true,
          },
        },
        despesa: {
          select: {
            valor: true
          }
        }
      },
    });
    
    return hospedagens;
  }
}