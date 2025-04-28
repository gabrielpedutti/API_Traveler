import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { GetUsuarioLoginDTO } from "../../dtos/GetUsuarioLoginDTO";
import { AppError } from "../../../../errors/AppError";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import bcrypt from 'bcrypt';

export class GetUsuarioLoginUseCase {
  async execute(data: GetUsuarioLoginDTO): Promise<Usuario> {
    try {
      // Primeiro buscamos o usuário apenas pelo email
      const usuario = await prisma.usuario.findUnique({
        where: {
          email: data.email
        }
      });
      
      // Se não encontrou o usuário
      if (!usuario) {
        throw new AppError('Usuário ou Senha inválidos!', 404);
      }
      
      // Verifica se a senha corresponde ao hash
      const senhaCorreta = await bcrypt.compare(data.senha, usuario.senha);
      
      // Se a senha não corresponder
      if (!senhaCorreta) {
        throw new AppError('Usuário ou Senha inválidos!', 404);
      }
      
      return usuario;
    } catch (error) {
      if (error instanceof AppError) {
        throw error; // Repassa o erro se já for um AppError
      } else if (error instanceof PrismaClientKnownRequestError && error.code === "P2025") {
        throw new AppError('Usuário ou Senha inválidos!', 404);
      } else if (error instanceof Error) {
        throw new AppError('Erro ao buscar o usuário: ' + error.message, 500);
      } else {
        throw new AppError('Erro desconhecido ao buscar o usuário', 500);
      }
    }
  }
}