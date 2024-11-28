import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllViagemsUseCase {
  async execute(): Promise<Viagem[]> {
    const viagems = await prisma.viagem.findMany({});
    
    return viagems;
  }
}