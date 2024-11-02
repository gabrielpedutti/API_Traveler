import { Estado } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetEstasdosUseCase {
  async execute(): Promise<Estado[]> {
    const estados = await prisma.estado.findMany({});
    
    return estados;
  }
}