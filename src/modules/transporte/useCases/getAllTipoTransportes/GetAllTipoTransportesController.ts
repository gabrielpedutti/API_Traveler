/* import { NextFunction, Request, Response } from "express";
import { GetAllTipoTransporteUseCase } from "./getAllTipoTransportesUseCase";

export class GetTipoTransporteController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const  id = Number(req.params.id)
    const getTipoTransporteUseCase = new GetAllTipoTransporteUseCase();

    try {
      const result = await getTipoTransporteUseCase.execute({id});
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
 */