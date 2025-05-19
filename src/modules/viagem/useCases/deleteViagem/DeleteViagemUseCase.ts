import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DeleteViagemDTO } from "../../dtos/DeleteViagemDTO";
import { AppError } from "../../../../errors/AppError";

export class DeleteViagemUseCase {
  async execute(data: DeleteViagemDTO): Promise<Viagem> {
    try {
      // Verifica se o viagem existe antes de deletar
      const viagem = await prisma.viagem.findUnique({
        where: { id: data.id },
      });

      if (!viagem) {
        throw new AppError("Viagem não encontrada.", 404, { id: data.id });
      }

      // Deleta o viagem
      const viagemDeletado = await prisma.viagem.delete({
        where: { id: data.id },
      });

      return viagemDeletado;
    } catch (error: any) {
      if (error instanceof AppError) throw error;

      throw new AppError("Erro ao deletar a viagem", 500, {
        cause: error.message ?? error,
        id: data.id,
      });
    }
  }
}
