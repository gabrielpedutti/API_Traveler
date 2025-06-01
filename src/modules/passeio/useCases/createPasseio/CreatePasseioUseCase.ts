import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreatePasseioDTO } from "../../dtos/CreatePasseioDTO";
import { AppError } from "../../../../errors/AppError";

export class CreatePasseioUseCase {
  async execute(data: CreatePasseioDTO): Promise<Passeio> {
    const viagem = await prisma.viagem.findUnique({
      where: { id: data.viagem_id },
    });
    if (!viagem) throw new AppError("Viagem não encontrada.", 404);

    const tipo = await prisma.tipoPasseio.findUnique({
      where: { id: data.tipo_id },
    });
    if (!tipo) throw new AppError("Tipo de passeio não encontrado.", 404);

    const tipoDespesa = await prisma.tipoDespesa.findUnique({
      where: { id: 4 },
    });
    if (!tipoDespesa) throw new AppError("Tipo de despesa 'passeio' não encontrado.", 404);

    try {
      const novoPasseio = await prisma.$transaction(async (tx) => {
        const novaDespesa = await tx.despesa.create({
          data: {
            descricao: data.nome,
            valor: data.valor,
            data: data.data,
            viagem_id: data.viagem_id,
            tipo_despesa_id: 4,
            usuario_id: viagem.usuario_id,
          },
        });

        const passeioCriado = await tx.passeio.create({
          data: {
            nome: data.nome,
            tipo_id: data.tipo_id,
            data: data.data,
            despesa_id: novaDespesa.id,
            viagem_id: data.viagem_id,
            documento_anexo: data.documento_anexo || null,
            usuario_id: viagem.usuario_id,
          },
        });

        return passeioCriado;
      });

      return novoPasseio;
    } catch (error: any) {
      console.error("Erro ao criar passeio e despesa:", error);

      if (error instanceof AppError) throw error;

      throw new AppError("Erro interno ao criar o passeio. Tente novamente mais tarde.");
    }
  }
}
