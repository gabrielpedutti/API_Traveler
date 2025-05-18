import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetHospedagemDTO } from "../../dtos/GetHospedagemDTO";

export class GetAllHospedagensPorUsuarioUseCase {
  async execute(data:GetHospedagemDTO): Promise<Hospedagem[]> {
    const hospedagens = await prisma.hospedagem.findMany({
      where: {
        usuario_id: data.id,
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