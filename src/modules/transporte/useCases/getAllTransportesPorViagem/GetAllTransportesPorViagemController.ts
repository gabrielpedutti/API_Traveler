import { NextFunction, Request, Response } from "express";
import { GetAllTransportesPorViagemUseCase } from "./GetAllTransportesPorViagemUseCase";


export class GetAllTransportesPorViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllTransportesPorViagemUseCase = new GetAllTransportesPorViagemUseCase();

    try {
      const result = await getAllTransportesPorViagemUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}