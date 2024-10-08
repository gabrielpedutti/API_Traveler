import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetUsuarioLoginDTO } from "../../dtos/GetUsuarioLoginDTO";
import { AppError } from "../../../../errors/AppError";

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
      if (error.code === "P2025") {
        throw new AppError('Usuário não encontrado!');
      }
      throw new AppError('Erro ao buscar o usuário: ' + error.message);
    }
  }
}