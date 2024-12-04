/* import { Transporte } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetTipoTransporteDTO } from "../../dtos/GetTipoTransporteDTO";


export class GetAllTipoTransporteUseCase {
    async execute(): Promise<Transporte[]> {
      try {
        const tiposTransporte = await prisma.tipoTransporte.findMany({
          select: {
            id: true,
            descricao: true
          }
        });
      
        // Verifica se existem tipos de transporte
        if (!tiposTransporte || tiposTransporte.length === 0) {
          throw new Error('Nenhum Tipo de Transporte encontrado')
        }
                  
        return tiposTransporte;
      }
    }
}
 */