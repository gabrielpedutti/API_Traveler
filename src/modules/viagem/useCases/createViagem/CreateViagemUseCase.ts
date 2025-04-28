import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateViagemDTO } from "../../dtos/CreateViagemDTO";

export class CreateViagemUseCase {
  async execute(data: CreateViagemDTO): Promise<Viagem> {

    try {
      if (!data.nome || !data.usuario_id) {
        throw new Error("Os campos 'nome' e 'usuario_id' são obrigatórios.");
      }
      const planejada = 1;

      const novaViagem = await prisma.viagem.create({
        data: {
            nome: data.nome,
            descricao: data.descricao!,
            data_inicio: data.data_inicio!,
            data_fim: data.data_fim!,
            usuario_id: data.usuario_id,
            status_viagem_id: planejada,
            viagem_destino_id: data.viagem_destino_id,
            created_at: new Date()            
        },
      });

      return novaViagem;
    } catch (error) {
      throw new Error('Erro ao criar a viagem: ' + error);
    }
  }
}