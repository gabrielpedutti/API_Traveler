import { NextFunction, Request, Response } from "express";
import { CreateViagemUseCase } from "./CreateViagemUseCase";
import { AppError } from "../../../../errors/AppError";

export class CreateViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    console.log(req.body);
    const { nome, data_inicio, data_fim, usuario_id, status_viagem_id, viagem_destino_id } = req.body;

    if (!nome || !data_inicio || !data_fim || !usuario_id || !viagem_destino_id) {
      return next(
        new AppError("Todos os campos obrigatórios devem ser preenchidos: nome, data_inicio, data_fim, usuario_id, viagem_destino_id", 400)
      );
    }

    const createViagemUseCase = new CreateViagemUseCase();

    try {
      const novaViagem = await createViagemUseCase.execute({
        nome,
        data_inicio,
        data_fim,
        usuario_id,
        status_viagem_id,
        viagem_destino_id
      });

      return res.status(201).json(novaViagem);
    } catch (error) {
      if (!(error instanceof AppError)) {
        return next(new AppError("Erro interno ao criar viagem", 500, error));
      }
      next(error);
    }
  }
}