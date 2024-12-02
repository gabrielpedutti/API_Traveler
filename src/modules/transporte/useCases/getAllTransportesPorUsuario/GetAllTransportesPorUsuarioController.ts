import { NextFunction, Request, Response } from "express";
import { GetAllTransportesPorUsuarioUseCase } from "./GetAllTransportesPorUsuarioUseCase";

export class GetAllPasseiosPorUsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllTransportesPorUsuarioUseCase = new GetAllTransportesPorUsuarioUseCase();

    try {
      const result = await getAllTransportesPorUsuarioUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}