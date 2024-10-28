import { NextFunction, Request, Response } from "express";
import { CreateUsuarioUseCase } from "./CreateUsuarioUseCase";

export class CreateUsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
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
      next(error);
    }
  }
}