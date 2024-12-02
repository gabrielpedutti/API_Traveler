import { prisma } from "../../../../prisma/client";

export class GetNomesLocalUseCase {
  async execute(data: GetNomesLocalDto): Promise<any> {

    console.log(data.id);

    const municipio = await prisma.municipio.findUnique({
      where: {
        id: data.id, // ID do município
      },
      include: {
        estado: {
          select: {
            nm_estado: true, // Nome do estado
            pais: {
              select: {
                nm_pais: true, // Nome do país
              },
            },
          },
        },
      },
    });

    if (!municipio) {
      throw new Error("Município não encontrado");
    }

    return municipio;
  }
}
