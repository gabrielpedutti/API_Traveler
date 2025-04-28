import { NextFunction, Request, Response } from "express";
import { GetAllPasseiosPorUsuarioUseCase } from "./GetAllPasseiosPorUsuarioUseCase";

export class GetAllPasseiosPorUsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllPasseiosPorUsuarioUseCase = new GetAllPasseiosPorUsuarioUseCase();

    try {
      const result = await getAllPasseiosPorUsuarioUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}