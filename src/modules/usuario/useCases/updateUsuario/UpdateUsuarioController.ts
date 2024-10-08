import { Request, Response } from "express";
import { UpdateUsuarioUseCase } from "./UpdateUsuarioUseCase";

export class UpdateUsuarioController {
  async handle(req: Request, res: Response): Promise<Response> {

    const { id } = req.params;
    const { nome, email, senha, cidade } = req.body;

    const cidadeNum = cidade ? Number(cidade) : null;

    const updateUsuarioUseCase = new UpdateUsuarioUseCase();

    try {
      const result = await updateUsuarioUseCase.execute({id: Number(id), nome, email, senha, cidade: cidadeNum});

      return res.status(201).json(result);

    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}