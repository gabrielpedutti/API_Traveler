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
      
    await prisma.despesa.update({
      where: { id: data.despesa_id },
      data: {
        descricao: data.nome,
        data: data.data,
        valor: data.valor,
        updated_at: new Date(),
      },
    });
        
    const transporteAtualizado = await prisma.transporte.update({

      where: { id: data.id },
      data: {
        nome: data.nome,
        tipo_transporte: {
          connect: { id: data.tipo_id },
        },
        data:data.data,
        viagem: {
          connect: { id: data.viagem_id },
        },
        transporte_destino: {
          connect: { id: data.transporte_destino_id },
        },
        documento_anexo: data.documento_anexo,
        updated_at: new Date(),
      },
      include: {
        despesa: {
          select: {
            valor: true,
          },
        },
      },
    });

        return transporteAtualizado;
      } catch (error) {
        throw new Error("Erro ao atualizar o transporte: " + error);
      }
  }
}