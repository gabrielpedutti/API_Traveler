import { Despesa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetDespesaDTO } from "../../dtos/GetDespesaDTO";

export class GetAllDespesasPorViagemUseCase {
  async execute(data:GetDespesaDTO): Promise<Despesa[]> {
    const despesas = await prisma.despesa.findMany({
      where: {
        viagem: {
          id: data.id, // Filtrar por id da viagem
        },
      }
    });
    
    return despesas;
  }
}