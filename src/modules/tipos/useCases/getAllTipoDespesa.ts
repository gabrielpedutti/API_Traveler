import { PrismaClient } from "@prisma/client";
import { TipoDespesaDTO } from "../dto/tipoDespesaDTO";

const prisma = new PrismaClient();

export class GetAllTipoDespesaUseCase {
  async execute(): Promise<TipoDespesaDTO[]> {
    const tipos = await prisma.tipoDespesa.findMany({
      orderBy: { descricao: "asc" },
    });

    return tipos.map(
      (tipo) => new TipoDespesaDTO({ id: tipo.id, descricao: tipo.descricao })
    );
  }
}