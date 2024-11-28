import { NextFunction, Request, Response } from "express";
import { CreateViagemUseCase } from "./CreateViagemUseCase";

export class CreateViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    console.log(req.body);
    const { nome, descricao, data_inicio, data_fim, usuario_id, status_viagem_id, viagem_origem_id, viagem_destino_id } = req.body;

    const createViagemUseCase = new CreateViagemUseCase();

    try {
      const novaViagem = await createViagemUseCase.execute({
        nome,
        descricao,
        data_inicio,
        data_fim,
        usuario_id,
        status_viagem_id,
        viagem_origem_id,
        viagem_destino_id
      });

      return res.status(201).json(novaViagem);
    } catch (error) {
      next(error);
    }
  }
}