import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { DeleteUsuarioDTO } from "../../dtos/DeleteUsuarioDTO";

export class DeleteUsuarioUseCase {
  async execute(data: DeleteUsuarioDTO): Promise<Usuario> {

    try {
      const usuario = await prisma.usuario.delete({
        where: {
          id: data.id
        }
      });
      
      return usuario;
      
    } catch (error) {
      throw new Error('Erro ao buscar o usuário: ' + error);
    }
  }
}