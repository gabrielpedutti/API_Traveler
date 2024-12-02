import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetViagemDTO } from "../../dtos/GetViagemDTO";

export class GetAllViagemsPorUsuarioUseCase {
  async execute(data:GetViagemDTO): Promise<Viagem[]> {
    const viagems = await prisma.viagem.findMany({
      where: {
        usuario_id: data.id, // Filtro pelo ID do usuário na tabela `viagem`
      }
    });
    
    return viagems;
  }
}