import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreatePasseioDTO } from "../../dtos/CreatePasseioDTO";
import { AppError } from "../../../../errors/AppError";

export class CreatePasseioUseCase {
  async execute(data: CreatePasseioDTO): Promise<Passeio> {
    const viagem = await prisma.viagem.findUnique({ where: { id: data.viagem_id } });
    if (!viagem) throw new AppError("Viagem não encontrada.");

    const tipo = await prisma.tipoPasseio.findUnique({ where: { id: data.tipo_id } });
    if (!tipo) throw new AppError("Tipo de passeio não encontrado.");

    const tipoDespesa = await prisma.tipoDespesa.findUnique({ where: { id: 4 } });
    if (!tipoDespesa) throw new AppError("Tipo de despesa 'passeio' não encontrado.");

    try {
      const novaDespesa = await prisma.despesa.create({
        data: {
          descricao: data.nome,
          valor: data.valor,
          data: data.data,
          viagem_id: data.viagem_id,
          tipo_despesa_id: 4,
          usuario_id: viagem.usuario_id,
        },
      });

      const novoPasseio = await prisma.passeio.create({
        data: {
          nome: data.nome,
          tipo_passeio: {
            connect: { id: data.tipo_id },
          },
          data: data.data,
          despesa: {
            connect: { id: novaDespesa.id },
          },
          viagem: {
            connect: { id: data.viagem_id },
          },
          documento_anexo: data.documento_anexo,
          usuario: {
            connect: { id: viagem.usuario_id },
          },
          created_at: new Date(),
        },
      });

      return novoPasseio;
    } catch (error) {
      throw new AppError("Erro ao criar passeio: " + error);
    }
  }
}