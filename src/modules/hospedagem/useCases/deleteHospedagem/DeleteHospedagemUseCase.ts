import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DeleteHospedagemDTO } from "../../dtos/DeleteHospedagemDTO";
import { AppError } from "../../../../errors/AppError";

export class DeleteHospedagemUseCase {
  async execute(data: DeleteHospedagemDTO): Promise<Hospedagem> {
    try {
      const hospedagem = await prisma.hospedagem.findUnique({
        where: { id: data.id },
      });

      if (!hospedagem) {
        throw new AppError("Hospedagem não encontrada.");
      }

      // Deleta
      const hospedagemDeletado = await prisma.hospedagem.delete({
        where: { id: data.id },
      });

      return hospedagemDeletado;
    } catch (error) {
      throw new Error("Erro ao deletar a hospedagem: " + error);
    }
  }
}
