import { Despesa } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateDespesaDTO } from "../../dtos/CreateDespesaDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateDespesaUseCase {
  async execute(data: CreateDespesaDTO): Promise<Despesa> {
    const usuarioExiste = await prisma.usuario.findUnique({
      where: { id: data.usuario_id },
    });

    if (!usuarioExiste) {
      throw new AppError("Usuário não encontrado.");
    }

    const viagemExiste = await prisma.viagem.findUnique({
      where: { id: data.viagem_id },
    });

    if (!viagemExiste) {
      throw new AppError("Viagem não encontrada.");
    }

    try {
      const despesa = await prisma.despesa.create({
        data: {
          descricao: data.descricao,
          valor: data.valor,
          data: data.data,
          usuario_id: data.usuario_id,
          viagem_id: data.viagem_id,
          tipo_despesa_id: data.tipo_despesa_id,
        },
      });

      return despesa;
    } catch (error) {
      throw new AppError("Erro ao criar despesa: " + error);
    }
  }
}
