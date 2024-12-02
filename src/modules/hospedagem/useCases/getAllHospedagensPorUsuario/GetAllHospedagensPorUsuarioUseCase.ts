import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetHospedagemDTO } from "../../dtos/GetHospedagemDTO";

export class GetAllHospedagensPorUsuarioUseCase {
  async execute(data:GetHospedagemDTO): Promise<Hospedagem[]> {
    const hospedagens = await prisma.hospedagem.findMany({
      where: {
        viagem: {
          usuario_id: data.id, // Filtro pelo ID do usuário na tabela `viagem`
        },
      }
    });
    
    return hospedagens;
  }
}