import { Despesa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllDespesaUseCase {
    async execute(): Promise<Despesa[]> {
      const despesas = await prisma.despesa.findMany({
      include: {
        tipo_despesa: {
          select: {
            descricao: true,
          },
        },
      },
    });
      return despesas;
    }
  }
  