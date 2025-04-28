import { Hospedagem } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllHospedagensUseCase {
  async execute(): Promise<Hospedagem[]> {
    const hospedagens = await prisma.hospedagem.findMany({});
    
    return hospedagens;
  }
}