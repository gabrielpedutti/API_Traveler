import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUsuarioDTO } from "../../dtos/CreateUserDTO";
import { AppError } from "../../../../errors/AppError";
import bcrypt from 'bcrypt';

export class CreateUsuarioUseCase {
  async execute(data: CreateUsuarioDTO): Promise<Usuario> {
    // Validação prévia pode ser adicionada aqui (como validações de schema, verificação de duplicidade de email, etc.)

    const usuarioJaCriado = await prisma.usuario.findUnique({
      where: {
        email: data.email
      }
    });

    if (usuarioJaCriado) {                 
      throw new AppError('Usuário já existe!');
    }

    try {
      const saltRounds = 12;
      const senhaHash = await bcrypt.hash(data.senha, saltRounds);

      const novoUsuario = await prisma.usuario.create({
        data: {
          nome: data.nome,
          data_nascimento: data.data_nascimento,
          email: data.email,
          senha: senhaHash,
          municipio: {
            connect: {
              id: data.municipio_id
            }
          },
          created_at: new Date()     
        },
      });

      return novoUsuario;
    } catch (error) {
      // Aqui você pode tratar erros, como email já existente, cidade inválida, etc.
      throw new Error('Erro ao criar o usuário: ' + error);
    }
  }
}