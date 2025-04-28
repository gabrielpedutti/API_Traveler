import { NextFunction, Request, Response } from "express";
import { GetEstadosUseCase } from "./GetEstadosUseCase";

export class GetEstadosController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const idPais = parseInt(req.query.idPais as string);

    const getPaisesUseCase = new GetEstadosUseCase();

    try {
      const result = await getPaisesUseCase.execute(idPais);
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
