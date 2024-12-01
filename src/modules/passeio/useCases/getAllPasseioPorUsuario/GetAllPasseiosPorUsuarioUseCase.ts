import { Passeio } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetPasseioDTO } from "../../dtos/GetPasseioDTO";

export class GetAllPasseiosPorUsuarioUseCase {
  async execute(data:GetPasseioDTO): Promise<Passeio[]> {
    const passeios = await prisma.passeio.findMany({
      where: { id: data.id }
    });
    
    return passeios;
  }
}