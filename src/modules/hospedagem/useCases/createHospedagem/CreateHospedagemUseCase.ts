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

    if (!viagemExiste) {
      throw new AppError("Viagem não encontrada.");
    }

    const municipioExiste = await prisma.municipio.findUnique({
      where: { id: data.municipio_id },
    });

    if (!municipioExiste) {
      throw new AppError("Município não encontrado.");
    }
    try {
      const novaHospedagem = await prisma.hospedagem.create({
        data: {
          nome: data.nome,
          tipo_id: data.tipo_id,
          data_checkin: data.data_checkin,
          data_checkout: data.data_checkout,
          despesa_id: data.despesa_id,
          viagem_id: data.viagem_id,
          municipio_id: data.municipio_id,
          created_at: new Date(),
        },
      });

      return novaHospedagem;
    } catch (error) {
      throw new Error("Erro ao criar a hospedagem: " + error);
    }
  }
}
