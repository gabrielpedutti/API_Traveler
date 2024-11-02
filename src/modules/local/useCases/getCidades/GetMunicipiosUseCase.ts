import { Municipio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetMunicipiosUseCase {
  async execute(): Promise<Municipio[]> {
    const municipios = await prisma.municipio.findMany({});
    
    return municipios;
  }
}