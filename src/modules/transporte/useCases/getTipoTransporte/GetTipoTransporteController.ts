import { NextFunction, Request, Response } from "express";
import { GetTipoTransporteUseCase } from "./GetTipoTransporteUseCase";

export class GetTipoTransporteController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getTipoTransporteUseCase = new GetTipoTransporteUseCase();

    try {
      const result = await getTipoTransporteUseCase.execute();
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
