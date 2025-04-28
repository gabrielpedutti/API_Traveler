import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";

export class GetAllUsuariosUseCase {
  async execute(): Promise<Usuario[]> {
    const usuarios = await prisma.usuario.findMany({});
    
    return usuarios;
  }
}