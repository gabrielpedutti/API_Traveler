import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetTransporteDTO } from "../../dtos/GetTransporteDTO";

export class GetAllTransportesPorViagemUseCase {
  async execute(data:GetTransporteDTO): Promise<Transporte[]> {
    const transportes = await prisma.transporte.findMany({
      where: {
        viagem: {
          id: data.id, // Filtrar por id da viagem
        },
      }
    });

    return transportes;
  }
}