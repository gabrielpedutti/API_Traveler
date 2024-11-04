import { Estado } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetEstadosUseCase {
  async execute(idPais: number): Promise<Estado[]> {
    const estados = await prisma.estado.findMany({
      where: {
        pais_id: idPais
      },
      orderBy: {
        nm_estado: 'asc',
      },
    });
    
    return estados;
  }
}