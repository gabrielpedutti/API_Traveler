import { NextFunction, Request, Response } from "express";
import { UpdateDespesaUseCase } from "./UpdateDespesaUseCase";

export class UpdateDespesaController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const data = req.body;

    const updateDespesaUseCase = new UpdateDespesaUseCase();

    try {
      const despesa = await updateDespesaUseCase.execute(Number(id), data);
      return res.status(200).json(despesa);
    } catch (error) {
      next(error);
    }
  }
}
