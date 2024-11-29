import { NextFunction, Request, Response } from "express";
import { CreateDespesaUseCase } from "./CreateDespesaUseCase";

export class CreateDespesaController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { descricao, valor, data, usuario_id, viagem_id, tipo_despesa_id } = req.body;

    const createDespesaUseCase = new CreateDespesaUseCase();

    try {
      const despesa = await createDespesaUseCase.execute({
        descricao,
        valor,
        data,
        usuario_id,
        viagem_id,
        tipo_despesa_id,
      });

      return res.status(201).json(despesa);
    } catch (error) {
      next(error);
    }
  }
}
