import { NextFunction, Request, Response } from "express";
import { GetAllDespesasPorViagemUseCase } from "./GetAllDespesasPorViagemUseCase";

export class GetAllDespesasPorViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllDespesasPorViagemUseCase = new GetAllDespesasPorViagemUseCase();

    try {
      const result = await getAllDespesasPorViagemUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}