import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { CreateUsuarioDTO } from "../../dtos/CreateUserDTO";

export class CreateUsuarioUseCase {
  async execute(data: CreateUsuarioDTO): Promise<Usuario> {
    // Validação prévia pode ser adicionada aqui (como validações de schema, verificação de duplicidade de email, etc.)

    const usuarioJaCriado = await prisma.usuario.findUnique({
      where: {
        email: data.email,
      }
    });

    if (usuarioJaCriado) {                 
      throw new Error('Usuário já cadastrado');
    }

    try {
      const novoUsuario = await prisma.usuario.create({
        data: {
          nome: data.nome,
          data_nascimento: data.data_nascimento,
          email: data.email,
          senha: data.senha, // Idealmente você aplicaria uma hash na senha antes de salvar
          cidade: data.cidade,
          tipo_usuario_id: data.tipo_usuario_id,
          tipo_cadastro_id: data.tipo_cadastro_id,
          created_at: new Date(),
        },
      });

      return novoUsuario;
    } catch (error) {
      // Aqui você pode tratar erros, como email já existente, cidade inválida, etc.
      throw new Error('Erro ao criar o usuário: ' + error);
    }
  }
}