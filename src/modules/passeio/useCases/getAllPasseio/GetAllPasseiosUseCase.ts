import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllPasseiosUseCase {
  async execute(): Promise<Passeio[]> {
    const passeios = await prisma.passeio.findMany({
      include: {
        tipo_passeio: {
          select: {
            descricao: true,
          },
        },
      },
    });
    
    return passeios;
  }
}