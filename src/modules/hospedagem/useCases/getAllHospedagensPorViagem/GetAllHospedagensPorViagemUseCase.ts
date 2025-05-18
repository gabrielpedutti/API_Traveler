import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetHospedagemDTO } from "../../dtos/GetHospedagemDTO";

export class GetAllHospedagensPorViagemUseCase {
  async execute(data:GetHospedagemDTO): Promise<Hospedagem[]> {
    const hospedagens = await prisma.hospedagem.findMany({
      where: {
        viagem_id: data.id,
        },
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