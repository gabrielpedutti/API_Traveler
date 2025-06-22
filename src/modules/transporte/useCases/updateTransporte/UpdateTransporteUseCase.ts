import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateTransporteDTO } from "../../dtos/UpdateTransporteDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateTransporteUseCase {
  async execute(data: UpdateTransporteDTO): Promise<Transporte> {
    const viagemExiste = await prisma.viagem.findUnique({
      where: { id: data.viagem_id },
    });

    const tipoExiste = await prisma.tipoTransporte.findUnique({
      where: { id: data.tipo_id },
    });

    const tipoDespesaExiste = await prisma.tipoDespesa.findUnique({
      where: { id: 2 },
    });

    if (!viagemExiste) {
      throw new AppError("Viagem não encontrada.");
    }

    if (!tipoExiste) {
      throw new AppError("Tipo não encontrado.");
    }
    
    if (!tipoDespesaExiste) {
      throw new AppError("Tipo de despesa 'transporte' não encontrado.");
    }

    const destinoExiste = await prisma.municipio.findUnique({
      where: { id: data.transporte_destino_id },
    });

    if (!destinoExiste) {
      throw new AppError("Município de destino não encontrado.");
    }


    try {
      const transporteExistente = await prisma.transporte.findUnique({
        where: { id: data.id },
      });

      if (!transporteExistente) {
        throw new AppError("Transporte não encontrado.");
      }  

    const updateDespesaData: any = {};
      if (data.nome) updateDespesaData.descricao = data.nome;
      if (data.valor !== undefined) updateDespesaData.valor = data.valor;
      if (data.data) updateDespesaData.data = data.data;
      updateDespesaData.updated_at = new Date();
      
    await prisma.despesa.update({
      where: { id: data.despesa_id },
      data: updateDespesaData,
    });

    const updateTransporteData: any = {};
      if (data.nome) updateTransporteData.nome = data.nome;
      if (data.tipo_id) {
        updateTransporteData.tipo_transporte = {
          connect: { id: data.tipo_id },
        };
      }
      if (data.data) updateTransporteData.data = data.data;
      updateTransporteData.viagem = {
        connect: { id: data.viagem_id },
      };
      if (data.transporte_destino_id) {
        updateTransporteData.transporte_destino = {
          connect: { id: data.transporte_destino_id },
        };
      }
      if (data.documento_anexo !== undefined) {
        updateTransporteData.documento_anexo = data.documento_anexo;
      }
      updateTransporteData.updated_at = new Date()

    const transporteAtualizado = await prisma.transporte.update({
      where: { id: data.id },
      data: updateTransporteData,
      include: {
        tipo_transporte: {
          select: {
            descricao: true,
          },
        },
        despesa: {
          select: {
            valor: true
          }
        }
      },
    });

        return transporteAtualizado;
      } catch (error) {
        throw new Error("Erro ao atualizar o transporte: " + error);
      }
  }
}