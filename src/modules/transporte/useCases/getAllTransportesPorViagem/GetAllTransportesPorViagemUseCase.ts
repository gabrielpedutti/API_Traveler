import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetTransporteDTO } from "../../dtos/GetTransporteDTO";

export class GetAllTransportesPorViagemUseCase {
  async execute(data: GetTransporteDTO): Promise<Transporte[]> {
    const transportesComRelacoes = await prisma.transporte.findMany({
      where: {
        viagem: {
          id: data.id,
        },
      },
      include: {
        tipo_transporte: {
          select: {
            descricao: true,
          },
        },
        despesa: {
          select: {
            valor: true,
          },
        },
        transporte_destino: {
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
      },
    });

    const transportesTransformados = transportesComRelacoes.map((transporte) => {
      const { transporte_destino, ...restoDoTransporte } = transporte;

      let tdTransformado = null;
      if (transporte_destino) {
        tdTransformado = {
          nm_municipio: transporte_destino.nm_municipio,
          nm_estado: transporte_destino.estado?.nm_estado,
          nm_pais: transporte_destino.estado?.pais?.nm_pais,
        };
      }

      return {
        ...restoDoTransporte,
        transporte_destino: tdTransformado,
      };
    });

    return transportesTransformados as Transporte[];
  }
}