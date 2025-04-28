import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateUsuarioDTO } from "../../dtos/UpdateUsuarioDTO";
import { AppError } from "../../../../errors/AppError";
import bcrypt from 'bcrypt';

export class UpdateUsuarioUseCase {
  async execute(data: UpdateUsuarioDTO): Promise<Usuario> {
    try {
      // Verificar se o usuário existe
      const usuarioExiste = await prisma.usuario.findUnique({
        where: {
          id: data.id
        }
      });

      if (!usuarioExiste) {
        throw new AppError('Usuário não encontrado', 404);
      }

      const updateData: any = {};

      if (data.nome && data.nome != null) updateData.nome = data.nome;
      if (data.email && data.email != null) updateData.email = data.email;
      if (data.senha && data.senha != null) {
        const saltRounds = 12;
        updateData.senha = await bcrypt.hash(data.senha, saltRounds);
      }
      
      // Correção para a relação com município
      if (data.municipio_id && data.municipio_id != null && data.municipio_id !== undefined) {
        updateData.municipio = {
          connect: {
            id: data.municipio_id
          }
        };
      }

      const hasOptionalField = data.nome || data.email || data.senha || data.municipio_id !== undefined;

      if (!hasOptionalField) {
        throw new AppError('Pelo menos um campo deve ser preenchido para atualizar os dados do usuário.');
      }

      const usuario = await prisma.usuario.update({
        where: {
          id: data.id
        },
        data: updateData,
      });
      
      return usuario;
      
    } catch (error) {
      if (error instanceof AppError) {
        throw error;
      }
      throw new AppError('Erro ao atualizar o usuário: ' + error, 500);
    }
  }
}