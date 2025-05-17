import { PrismaClient } from "@prisma/client";
import { TipoPasseioDTO } from "../dto/tipoPasseioDTO";

const prisma = new PrismaClient();

export class GetAllTipoPasseioUseCase {
  async execute(): Promise<TipoPasseioDTO[]> {
    const tipos = await prisma.tipoPasseio.findMany({
      orderBy: { descricao: "asc" },
    });

    return tipos.map(
      (tipo) => new TipoPasseioDTO({ id: tipo.id, descricao: tipo.descricao })
    );
  }
}