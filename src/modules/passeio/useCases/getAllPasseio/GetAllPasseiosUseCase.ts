import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllPasseiosUseCase {
  async execute(): Promise<Passeio[]> {
    const passeios = await prisma.passeios.findMany({});
    
    return passeios;
  }
}