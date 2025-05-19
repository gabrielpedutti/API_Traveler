import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateViagemDTO } from "../../dtos/CreateViagemDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateViagemUseCase {
  async execute(data: CreateViagemDTO): Promise<Viagem> {
    const planejada = 1;
    try {
      if (!data.nome || !data.usuario_id) {
        throw new AppError("Os campos 'nome' e 'usuario_id' são obrigatórios.", 400,{
          nome: data.nome,
          usuario_id: data.usuario_id,
        });
      }
      const viagemExistente = await prisma.viagem.findFirst({
      where: {
        nome: data.nome,
        usuario_id: data.usuario_id,
        data_inicio: data.data_inicio,
      },
    });

    if (viagemExistente) {
      throw new AppError("Viagem já cadastrada para esse usuário na mesma data.", 409);
    }

      const novaViagem = await prisma.viagem.create({
        data: {
            nome: data.nome,
            data_inicio: data.data_inicio!,
            data_fim: data.data_fim!,
            usuario_id: data.usuario_id,
            status_viagem_id: planejada,
            viagem_destino_id: data.viagem_destino_id,
            created_at: new Date()            
        },
      });

      return novaViagem;
    } catch (error: any) {
      if (error instanceof AppError) {
    throw error;
    }
    throw new AppError("Erro interno ao criar viagem", 500, {
      cause: error.message || error,
    });
    }
  }
}