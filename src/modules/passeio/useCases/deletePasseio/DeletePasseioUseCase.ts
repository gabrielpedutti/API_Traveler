import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DeletePasseioDTO } from "../../dtos/DeletePasseioDTO";
import { AppError } from "../../../../errors/AppError";

export class DeletePasseioUseCase {
  async execute(data: DeletePasseioDTO): Promise<Passeio> {
    try {
      // Verifica se o passeio existe antes de deletar
      const passeio = await prisma.passeio.findUnique({
        where: { id: data.id },
      });

      if (!passeio) {
        throw new AppError("Passeio não encontrado.");
      }

      // Deleta o Passeio
      const passeioDeletado = await prisma.passeio.delete({
        where: { id: data.id },
      });

      return passeioDeletado;
    } catch (error) {
      throw new Error("Erro ao deletar o passeio: " + error);
    }
  }
}
