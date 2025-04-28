import { NextFunction, Request, Response } from "express";
import { GetAllViagemsPorUsuarioUseCase } from "./GetAllViagemsPorUsuarioUseCase";

export class GetAllViagemsPorUsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllViagemsPorUsuarioUseCase = new GetAllViagemsPorUsuarioUseCase();

    try {
      const result = await getAllViagemsPorUsuarioUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}