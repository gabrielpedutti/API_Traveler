import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllTransportesUseCase {
  async execute(): Promise<Transporte[]> {
    const transportes = await prisma.transporte.findMany({});
    
    return transportes;
  }
}