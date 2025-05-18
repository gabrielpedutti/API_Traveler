import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateHospedagemDTO } from "../../dtos/UpdateHospedagemDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateHospedagemUseCase {
  async execute(data: UpdateHospedagemDTO): Promise<Hospedagem> {
    try {
      const hospedagemExistente = await prisma.hospedagem.findUnique({
        where: { id: data.id },
      });

      if (!hospedagemExistente) {
        throw new AppError("Hospedagem não encontrada.");
      }  
      
    await prisma.despesa.update({
      where: { id: data.despesa_id },
      data: {
        descricao: data.nome,
        data: data.data_checkin,
        valor: data.valor,
        updated_at: new Date(),
      },
    });
        
    const hospedagemAtualizada = await prisma.hospedagem.update({

      where: { id: data.id },
      data: {
        nome: data.nome,
        tipo_hospedagem: {
          connect: { id: data.tipo_id },
        },
        data_checkin: data.data_checkin,
        data_checkout: data.data_checkout,
        viagem: {
          connect: { id: data.viagem_id },
        },
        endereco: data.endereco,
        documento_anexo: data.documento_anexo,
        updated_at: new Date(),
      },
      include: {
        tipo_hospedagem: {
          select: {
            descricao: true,
          },
        },
        despesa: {
          select: {
            valor: true
          }
        }
      },
    });

      return hospedagemAtualizada;
    } catch (error) {
      throw new AppError("Erro ao atualizar a hospedagem: " + error);
    }
  }
}