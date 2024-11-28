import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateTransporteDTO } from "../../dtos/CreateTransporteDTO";
import { AppError } from "../../../../errors/AppError";

export class CreateTransporteUseCase {
  async execute(data: CreateTransporteDTO): Promise<Transporte> {
    // Validações específicas (ex.: checar se IDs relacionados existem)
    const viagemExiste = await prisma.viagem.findUnique({
      where: { id: data.viagem_id },
    });

    if (!viagemExiste) {
      throw new AppError("Viagem não encontrada.");
    }

    const origemExiste = await prisma.municipio.findUnique({
      where: { id: data.transporte_origem_id },
    });

    if (!origemExiste) {
      throw new AppError("Município de origem não encontrado.");
    }

    const destinoExiste = await prisma.municipio.findUnique({
      where: { id: data.transporte_destino_id },
    });

    if (!destinoExiste) {
      throw new AppError("Município de destino não encontrado.");
    }

    try {
      const novoTransporte = await prisma.transporte.create({
        data: {
          nome: data.nome,
          tipo_id: data.tipo_id,
          data: data.data,
          despesa_id: data.despesa_id,
          viagem_id: data.viagem_id,
          transporte_origem_id: data.transporte_origem_id,
          transporte_destino_id: data.transporte_destino_id,
          created_at: new Date(),
        },
      });

      return novoTransporte;
    } catch (error) {
      throw new Error("Erro ao criar o transporte: " + error);
    }
  }
}
