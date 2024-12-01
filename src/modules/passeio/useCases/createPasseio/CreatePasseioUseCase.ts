import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreatePasseioDTO } from "../../dtos/CreatePasseioDTO";
import { AppError } from "../../../../errors/AppError";

export class CreatePasseioUseCase {
  async execute(data: CreatePasseioDTO): Promise<Passeio> {
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
      const novoPasseio = await prisma.passeio.create({
        data: {
          nome: data.nome,
          tipo_id: data.tipo_id,
          data: data.data,
          despesa_id: data.despesa_id, //rever
          viagem_id: data.viagem_id,
          transporte_origem_id: data.transporte_origem_id,
          transporte_destino_id: data.transporte_destino_id,
          created_at: new Date(),
        },
      });

      return novoPasseio;
    } catch (error) {
      throw new Error("Erro ao criar o passeio: " + error);
    }
  }
}
