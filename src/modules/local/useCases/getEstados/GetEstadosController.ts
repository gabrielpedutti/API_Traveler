import { NextFunction, Request, Response } from "express";
import { GetEstasdosUseCase } from "./GetEstadosUseCase";

export class GetEstadosController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getPaisesUseCase = new GetEstasdosUseCase();

    try {
      const result = await getPaisesUseCase.execute();
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
