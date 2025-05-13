import { NextFunction, Request, Response } from "express";
import { GetAllHospedagensPorViagemUseCase } from "./GetAllHospedagensPorViagemUseCase";

export class GetAllHospedagensPorViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllHospedagensPorViagemUseCase = new GetAllHospedagensPorViagemUseCase();

    try {
      const result = await getAllHospedagensPorViagemUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}