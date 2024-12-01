import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetPasseioDTO } from "../../dtos/GetPasseioDTO";

export class GetAllPasseiosPorUsuarioUseCase {
  async execute(data:GetPasseioDTO): Promise<Passeio[]> {
    const passeios = await prisma.passeio.findMany({
      where: {
        viagem: {
          usuario_id: data.id, // Filtro pelo ID do usuário na tabela `viagem`
        },
      }
    });
    
    return passeios;
  }
}