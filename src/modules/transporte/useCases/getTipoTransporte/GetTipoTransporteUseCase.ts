import { TipoTransporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetTipoTransporteUseCase {
  async execute(): Promise<TipoTransporte[]> {
    const tipoTransporte = await prisma.tipoTransporte.findMany({});
    
    return tipoTransporte;
  }
}