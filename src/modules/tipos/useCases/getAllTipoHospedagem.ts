import { PrismaClient } from "@prisma/client";
import { TipoHospedagemDTO } from "../dto/tipoHospedagemDTO";

const prisma = new PrismaClient();

export class GetAllTipoHospedagemUseCase {
  async execute(): Promise<TipoHospedagemDTO[]> {
    const tipos = await prisma.tipoHospedagem.findMany({
      orderBy: { descricao: "asc" },
    });

    return tipos.map(
      (tipo) => new TipoHospedagemDTO({ id: tipo.id, descricao: tipo.descricao })
    );
  }
}