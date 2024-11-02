import { Pais } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetPaisesUseCase {
  async execute(): Promise<Pais[]> {
    const paises = await prisma.pais.findMany({});
    
    return paises;
  }
}