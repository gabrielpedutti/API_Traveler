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

    const updateData: any = {};

    if (data.descricao) updateData.descricao = data.descricao;
    if (data.valor) updateData.valor = data.valor;
    if (data.data) updateData.data = data.data;
    if (data.viagem_id) updateData.viagem = { connect: { id: data.viagem_id } };
    if (data.tipo_id) updateData.tipo_despesa = { connect: { id: data.tipo_id } };
    updateData.updated_at = new Date();

    const despesaAtualizada = await prisma.despesa.update({

    where: { id: data.id },
    data: updateData,
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
  