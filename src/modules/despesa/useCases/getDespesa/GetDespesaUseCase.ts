import { Despesa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { AppError } from "../../../../errors/AppError";

export class GetDespesaUseCase {
  async execute(id: number): Promise<Despesa> {
    try {
      const despesa = await prisma.despesa.findUnique({
        where: { id },
      });

      if (!despesa) {
        throw new AppError("Despesa não encontrada.");
      }

      return despesa;
    } catch (error) {
      throw new AppError("Erro ao buscar a despesa: " + error);
    }
  }
}
