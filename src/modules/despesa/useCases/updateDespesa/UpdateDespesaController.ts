import { NextFunction, Request, Response } from "express";
import { UpdateDespesaUseCase } from "./UpdateDespesaUseCase";

export class UpdateDespesaController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const {
      descricao,
      tipo_id,
      data,
      viagem_id,
      usuario_id,
      valor
    } = req.body;

    const updateDespesaUseCase = new UpdateDespesaUseCase();

    try {
      const result = await updateDespesaUseCase.execute({
        id: Number(id),
        descricao,
        tipo_id,
        data,
        viagem_id,
        usuario_id,
        valor
      });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
