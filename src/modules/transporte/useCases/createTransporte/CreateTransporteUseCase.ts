import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateTransporteDTO } from "../../dtos/CreateTransporteDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateTransporteUseCase {
  async execute(data: CreateTransporteDTO): Promise<Transporte> {
    const viagem = await prisma.viagem.findUnique({
      where: { id: data.viagem_id },
    });

    const tipo = await prisma.tipoTransporte.findUnique({
      where: { id: data.tipo_id },
    });

    const tipoDespesa = await prisma.tipoDespesa.findUnique({
      where: { id: 2 },
    });

    const destino = await prisma.municipio.findUnique({
      where: { id: data.transporte_destino_id },
    });

    if (!viagem) throw new AppError("Viagem não encontrada.", 404);
    if (!tipo) throw new AppError("Tipo de transporte não encontrado.", 404);
    if (!tipoDespesa) throw new AppError("Tipo de despesa 'transporte' não encontrado.", 404);
    if (!destino) throw new AppError("Município de destino não encontrado.", 404);

    try {
      const novoTransporte = await prisma.$transaction(async (tx) => {
        const novaDespesa = await tx.despesa.create({
          data: {
            descricao: data.nome,
            valor: data.valor,
            data: data.data,
            viagem_id: data.viagem_id,
            tipo_despesa_id: 2,
            usuario_id: viagem.usuario_id,
          },
        });

        const transporteCriado = await tx.transporte.create({
          data: {
            nome: data.nome,
            tipo_id: data.tipo_id,
            data: data.data,
            despesa_id: novaDespesa.id,
            viagem_id: data.viagem_id,
            transporte_destino_id: data.transporte_destino_id,
            documento_anexo: data.documento_anexo || null,
            usuario_id: viagem.usuario_id,
          },
        });

        return transporteCriado;
      });

      return novoTransporte;
    } catch (error: any) {
      console.error("Erro ao criar transporte e despesa:", error);

      if (error instanceof AppError) throw error;

      throw new AppError("Erro interno ao criar o transporte. Tente novamente mais tarde.");
    }
  }
}
