import { NextFunction, Request, Response } from "express";
import { GetAllDespesaUseCase } from "./GetAllDespesaUseCase";

export class GetAllDespesaController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const getAllDespesaUseCase = new GetAllDespesaUseCase();

    try {
      const despesas = await getAllDespesaUseCase.execute();
      return res.status(200).json(despesas);
    } catch (error) {
      next(error);
    }
  }
}
