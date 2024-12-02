import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetTransporteDTO } from "../../dtos/GetTransporteDTO";

export class GetAllTransportesPorUsuarioUseCase {
  async execute(data:GetTransporteDTO): Promise<Transporte[]> {
    const transporte = await prisma.passeio.findMany({
      where: {
        viagem: {
          usuario_id: data.id, // Filtro pelo ID do usuário na tabela `viagem`
        },
      }
    });

    return transporte;
  }
}