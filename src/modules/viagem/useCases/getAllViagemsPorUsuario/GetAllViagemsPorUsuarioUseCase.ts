import { Viagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetViagemDTO } from "../../dtos/GetViagemDTO";

export class GetAllViagemsPorUsuarioUseCase {
  async execute(data:GetViagemDTO): Promise<Viagem[]> {
    const viagems = await prisma.viagem.findMany({
      where: {
        usuario_id: data.id,
      },
      include: {
        viagem_origem: {
          select: {
            nm_municipio: true,
            estado: {
              select: {
                nm_estado: true,
                pais: {
                  select: {
                    nm_pais: true,
                  },
                },
              },
            },
          },
        },
        viagem_destino: {
          select: {
            nm_municipio: true,
            estado: {
              select: {
                nm_estado: true,
                pais: {
                  select: {
                    nm_pais: true,
                  },
                },
              },
            },
          },
        },
        status_viagem: {
          select: {
            descricao: true,
          },
        },
      },
    });

    // Corrigir o aninhamento dos resultados
    const resultadoAplainado = viagems.map((viagem) => ({
      ...viagem,
      viagem_origem: {
        nm_municipio: viagem.viagem_origem?.nm_municipio,
        nm_estado: viagem.viagem_origem?.estado?.nm_estado,
        nm_pais: viagem.viagem_origem?.estado?.pais?.nm_pais,
      },
      viagem_destino: {
        nm_municipio: viagem.viagem_destino?.nm_municipio,
        nm_estado: viagem.viagem_destino?.estado?.nm_estado,
        nm_pais: viagem.viagem_destino?.estado?.pais?.nm_pais,
      },
    }));
    
    return resultadoAplainado;
  }
}