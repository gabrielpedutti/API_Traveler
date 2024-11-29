import { Despesa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllDespesaUseCase {
    async execute(): Promise<Despesa[]> {
      const despesas = await prisma.despesa.findMany();
      return despesas;
    }
  }
  