import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateTransporteDTO } from "../../dtos/CreateTransporteDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateTransporteUseCase {
  async execute(data: CreateTransporteDTO): Promise<Transporte> {
    // Validações específicas (ex.: checar se IDs relacionados existem)
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
      const novaDespesa = await prisma.despesa.create({
        data: {
          descricao: data.nome,
          valor: data.valor,
          data: data.data,
          viagem: {
            connect: { id: data.viagem_id },
          },
          tipo_despesa: {
            connect: { id: 2 },
          },
          usuario: {
            connect: { id: viagemExiste.usuario_id },
          },
        },
      });

      try {
        const novoTransporte = await prisma.transporte.create({
          data: {
            nome: data.nome,
            tipo_transporte: {
              connect: { id: data.tipo_id },
            },
            data: data.data,
            documento_anexo: data.documento_anexo,
            despesa: {
              connect: { id: novaDespesa.id },
            },
            viagem: {
              connect: { id: data.viagem_id },
            },
            transporte_destino: {
              connect: { id: data.transporte_destino_id },
            },
            usuario: {
              connect: { id: viagemExiste.usuario_id },
            },
            created_at: new Date(),
          },
        });

        return novoTransporte;
      } catch (error) {
        throw new Error("Erro ao criar o transporte: " + error);
      }
    } catch (error) {
      throw new Error("Erro ao criar a despesa do transporte: " + error);
    }
  }
}
