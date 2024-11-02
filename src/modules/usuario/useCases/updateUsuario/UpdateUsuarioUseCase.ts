import { Usuario } from "@prisma/client";
import { prisma } from "../../../../prisma/client";
import { UpdateUsuarioDTO } from "../../dtos/UpdateUsuarioDTO";
import { AppError } from "../../../../errors/AppError";

export class UpdateUsuarioUseCase {
  async execute(data: UpdateUsuarioDTO): Promise<Usuario> {

    const updateData: any = {};

    if (data.nome && data.nome != null) updateData.nome = data.nome;
    if (data.email && data.email != null) updateData.email = data.email;
    if (data.senha && data.senha != null) updateData.senha = data.senha;
    if (data.municipio_id && data.municipio_id != null && data.municipio_id !== undefined) updateData.municipio_id = data.municipio_id;

    try {

      const hasOptionalField = data.nome || data.email || data.senha || data.municipio_id !== undefined;

      if (!data.id || !hasOptionalField) {
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
      throw new AppError('Erro ao buscar o usuário: ' + error);
    }
  }
}