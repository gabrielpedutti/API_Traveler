import { NextFunction, Request, Response } from "express";
import { DeleteDespesaUseCase } from "./DeleteDespesaUseCase";

export class DeleteDespesaController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;

    const deleteDespesaUseCase = new DeleteDespesaUseCase();

    try {
      const despesa = await deleteDespesaUseCase.execute(Number(id));
      return res.status(200).json({
        message: "Despesa deletada com sucesso.",
        despesa,
      });
    } catch (error) {
      next(error);
    }
  }
}
