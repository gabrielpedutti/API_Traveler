import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";

export class UpdateDespesaUseCase {
    async execute(id: number, data: Partial<CreateDespesaDTO>): Promise<Despesa> {
      try {
        const updateData = { ...data };
  
        if (Object.keys(updateData).length === 0) {
          throw new AppError("Nenhum dado fornecido para atualização.");
        }
  
        const despesa = await prisma.despesa.update({
          where: { id },
          data: updateData,
        });
  
        return despesa;
      } catch (error) {
        throw new AppError("Erro ao atualizar a despesa: " + error);
      }
    }
  }
  