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
      throw new AppError("Viagem não encontrada.");
    }

    if (!tipoExiste) {
      throw new AppError("Tipo não encontrado.");
    }
    
    if (!tipoDespesaExiste) {
      throw new AppError("Tipo de despesa 'hospedagem' não encontrado.");
    }

    try {
      const novaDespesa = await prisma.despesa.create({
        data: {
          descricao: data.nome,
          valor: data.valor,
          data: data.data_checkin,
          viagem_id: data.viagem_id,
          tipo_despesa_id: 3,
          usuario_id: viagemExiste.usuario_id,
        },
      });

      const novaHospedagem = await prisma.hospedagem.create({
        data: {
          nome: data.nome,
          tipo_id: data.tipo_id,
          data_checkin: data.data_checkin,
          data_checkout: data.data_checkout,
          despesa_id: novaDespesa.id,
          viagem_id: data.viagem_id,
          endereco: data.endereco,
          documento_anexo: data.documento_anexo,
          usuario_id: viagemExiste.usuario_id,
          created_at: new Date(),
        },
      });

      return novaHospedagem;
    } catch (error) {
      throw new Error("Erro ao criar a hospedagem: " + error);
    }
  }
}
