import { Despesa } from "@prisma/client";
import { AppError } from "../../../../errors/AppError";
import { prisma } from "../../../../prisma/client";
import { UpdateDespesaDTO } from "../../dtos/UpdateDespesaDTO";

export class UpdateDespesaUseCase {
    async execute(data: UpdateDespesaDTO): Promise<Despesa> {
      const viagemExiste = await prisma.viagem.findUnique({
        where: { id: data.viagem_id },
    });
    if (!viagemExiste) {
      throw new AppError("Viagem não encontrada.");
    }

    const tipoExiste = await prisma.tipoDespesa.findUnique({
      where: { id: data.tipo_id },
    });
    if (!tipoExiste) {
      throw new AppError("Tipo não encontrado.");
    }
      
    try {
      const despesaExistente = await prisma.despesa.findUnique({
      where: { id: data.id },
    });

    if (!despesaExistente) {
      throw new AppError("Despesa não encontrada.");
    } 
    const despesaAtualizada = await prisma.despesa.update({

    where: { id: data.id },
    data: {
      descricao: data.descricao,
      tipo_despesa: {
        connect: { id: data.tipo_id },
      },
      data:data.data,
      valor:data.valor,
      viagem: {
        connect: { id: data.viagem_id },
      },
      updated_at: new Date(),
    },
    include: {
      tipo_despesa: {
        select: {
          descricao: true,
        },
      }
    },
    });
  
        return despesaAtualizada;
      } catch (error) {
        throw new AppError("Erro ao atualizar a despesa: " + error);
      }
    }
  }
  