import { Despesa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetDespesaDTO } from "../../dtos/GetDespesaDTO";

export class GetAllDespesasPorUsuarioUseCase {
  async execute(data:GetDespesaDTO): Promise<Despesa[]> {
    const despesas = await prisma.despesa.findMany({
      where: {
        viagem: {
          usuario_id: data.id, // Filtro pelo ID do usuário na tabela `viagem`
        },
      }
    });
    
    return despesas;
  }
}