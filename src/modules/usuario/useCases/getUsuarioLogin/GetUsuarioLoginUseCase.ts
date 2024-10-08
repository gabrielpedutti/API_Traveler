import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetUsuarioLoginDTO } from "../../dtos/GetUsuarioLoginDTO";

export class GetUsuarioLoginUseCase {
  async execute(data: GetUsuarioLoginDTO): Promise<Usuario> {

    try {
      const usuario = await prisma.usuario.findFirstOrThrow({
        where: {
          email: data.email,
          senha: data.senha
        }
      });
      
      return usuario;
    } catch (error) {
      throw new Error('Erro ao buscar o usuário: ' + error);
    }
  }
}