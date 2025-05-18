import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdatePasseioDTO } from "../../dtos/UpdatePasseioDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdatePasseioUseCase {
  async execute(data: UpdatePasseioDTO): Promise<Passeio> {    
    const passeioExistente = await prisma.passeio.findUnique({
      where: { id: data.id },
    });
    if (!passeioExistente) {
      throw new AppError("Passeio não encontrado.");
    }

    const viagem = await prisma.viagem.findUnique({ where: { id: data.viagem_id } });
    if (!viagem) throw new AppError("Viagem não encontrada.");

    const tipo = await prisma.tipoPasseio.findUnique({ where: { id: data.tipo_id } });
    if (!tipo) throw new AppError("Tipo de passeio não encontrado.");

    try {
      await prisma.despesa.update({
        where: { id: data.despesa_id },
        data: {
          descricao: data.nome,
          valor: data.valor,
          data: data.data,
          updated_at: new Date(),
        },
      });
      
      const passeioAtualizado = await prisma.passeio.update({
        where: { id: data.id },
        data: {
          nome: data.nome,
          tipo_passeio: {
            connect: { id: data.tipo_id },
          },
          data: data.data,
          viagem: {
            connect: { id: data.viagem_id },
          },
          documento_anexo: data.documento_anexo,
          usuario: {
            connect: { id: viagem.usuario_id },
          },
          updated_at: new Date(),
        },
        include: {
          despesa: {
            select: {
              valor: true,
            },
          },
          tipo_passeio: {
            select: {
              descricao: true,
            },
          },
        },
      });

      return passeioAtualizado;
    } catch (error) {
      throw new AppError("Erro ao atualizar o passeio: " + error);
    }
  }
}
