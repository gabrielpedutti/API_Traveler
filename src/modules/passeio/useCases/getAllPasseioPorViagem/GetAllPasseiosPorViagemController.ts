import { NextFunction, Request, Response } from "express";
import { GetAllPasseiosPorViagemUseCase } from "./GetAllPasseiosPorViagemUseCase";

export class GetAllPasseiosPorViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllPasseiosPorViagemUseCase = new GetAllPasseiosPorViagemUseCase();

    try {
      const result = await getAllPasseiosPorViagemUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}