import { Request, Response } from "express";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

export class CreateUsuarioController {
  async handle(req: Request, res: Response): Promise<Response> {
    console.log(req.body);
    const { nome, data_nascimento, email, senha, cidade, tipo_usuario_id, tipo_cadastro_id } = req.body;

    const createUsuarioUseCase = new CreateUsuarioUseCase();

    try {
      const novoUsuario = await createUsuarioUseCase.execute({
        nome,
        data_nascimento,
        email,
        senha,
        cidade,
        tipo_usuario_id,
        tipo_cadastro_id
      });

      return res.status(201).json(novoUsuario);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}