import { Despesa } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class DeleteDespesaUseCase {
    async execute(id: number): Promise<Despesa> {
      try {
        const despesa = await prisma.despesa.delete({
          where: { id },
        });
  
        return despesa;
      } catch (error) {
        throw new AppError("Erro ao deletar a despesa: " + error);
      }
    }
  }
  