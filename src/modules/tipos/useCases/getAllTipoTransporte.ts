import { PrismaClient } from "@prisma/client";
import { TipoTransporteDTO } from "../dto/tipoTransporteDTO";

const prisma = new PrismaClient();

export class GetAllTipoTransporteUseCase {
  async execute(): Promise<TipoTransporteDTO[]> {
    const tipos = await prisma.tipoTransporte.findMany({
      orderBy: { descricao: "asc" },
    });

    return tipos.map(
      (tipo) => new TipoTransporteDTO({ id: tipo.id, descricao: tipo.descricao })
    );
  }
}