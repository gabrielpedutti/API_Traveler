import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateHospedagemDTO } from "../../dtos/CreateHospedagemDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateHospedagemUseCase {
  async execute(data: CreateHospedagemDTO): Promise<Hospedagem> {
    // Validações específicas (ex.: checar se IDs relacionados existem)
    const viagemExiste = await prisma.viagem.findUnique({
      where: { id: data.viagem_id },
    });
    const tipoExiste = await prisma.tipoHospedagem.findUnique({
      where: { id: data.tipo_id },
    });

    const tipoDespesaExiste = await prisma.tipoDespesa.findUnique({
      where: { id: 3 },
    });

    if (!viagemExiste) {
      throw new AppError("Viagem inexistente!", 404);
    }

    if (!tipoExiste) {
      throw new AppError("Tipo não encontrado.", 404);
    }
    
    if (!tipoDespesaExiste) {
      throw new AppError("Tipo de despesa 'hospedagem' não encontrado.", 404);
    }

    // Usando uma transação para garantir atomicidade
    // Se a criação da despesa ou da hospedagem falhar, ambas serão revertidas.
    try {
      const novaHospedagem = await prisma.$transaction(async (transactionClient) => {
        const novaDespesa = await transactionClient.despesa.create({
          data: {
            descricao: data.nome,
            valor: data.valor,
            data: data.data_checkin,
            viagem_id: data.viagem_id,
            tipo_despesa_id: 3, // ID do tipo de despesa para hospedagem
            usuario_id: viagemExiste.usuario_id,
          },
        });

        const hospedagemCriada = await transactionClient.hospedagem.create({
          data: {
            nome: data.nome,
            tipo_id: data.tipo_id,
            data_checkin: data.data_checkin,
            data_checkout: data.data_checkout,
            despesa_id: novaDespesa.id,
            viagem_id: data.viagem_id,
            endereco: data.endereco,
            // documento_anexo agora é opcional, então pode ser undefined/null se não for fornecido
            documento_anexo: data.documento_anexo || null, // Garante que seja null se for undefined
            usuario_id: viagemExiste.usuario_id,
          },
        });

        return hospedagemCriada;
      });

      return novaHospedagem;
    } catch (error: any) {
      if (error instanceof AppError) {
        throw error; 
      }
      console.error("Erro ao criar a hospedagem e despesa:", error);
      throw new AppError("Erro interno ao criar hospedagem e despesa", 500, {
      cause: error.message || error,
    });
    }
  }
}