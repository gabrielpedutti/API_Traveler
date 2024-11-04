import { Municipio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMunicipiosUseCase {
  async execute(idEstado: number): Promise<Municipio[]> {
    const municipios = await prisma.municipio.findMany({
      where: {
        estado_id: idEstado
      },
      orderBy: {
        nm_municipio: 'asc',
      },
    });
    
    return municipios;
  }
}