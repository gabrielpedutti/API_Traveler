import { NextFunction, Request, Response } from "express";
import { GetAllDespesasPorUsuarioUseCase } from "./GetAllDespesasPorUsuarioUseCase";

export class GetAllDespesasPorUsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllDespesasPorUsuarioUseCase = new GetAllDespesasPorUsuarioUseCase();

    try {
      const result = await getAllDespesasPorUsuarioUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}