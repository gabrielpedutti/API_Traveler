import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DeleteTransporteDTO } from "../../dtos/DeleteTransporteDTO";
import { AppError } from "../../../../errors/AppError";

export class DeleteTransporteUseCase {
  async execute(data: DeleteTransporteDTO): Promise<Transporte> {
    try {
      // Verifica se o transporte existe antes de deletar
      const transporte = await prisma.transporte.findUnique({
        where: { id: data.id },
      });

      if (!transporte) {
        throw new AppError("Transporte não encontrado.");
      }

      // Deleta o transporte
      const transporteDeletado = await prisma.transporte.delete({
        where: { id: data.id },
      });

      return transporteDeletado;
    } catch (error) {
      throw new Error("Erro ao deletar o transporte: " + error);
    }
  }
}
