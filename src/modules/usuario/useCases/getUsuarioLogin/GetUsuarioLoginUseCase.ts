import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetUsuarioLoginDTO } from "../../dtos/GetUsuarioLoginDTO";
import { AppError } from "../../../../errors/AppError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

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
      if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
        throw new AppError('Usuário ou Senha inválidos!', 404);
      } else if (error instanceof Error) {
        throw new AppError('Erro ao buscar o usuário: ' + error.message, 500);
      } else {
        throw new AppError('Erro desconhecido ao buscar o usuário', 500);
      }
    }
  }
}