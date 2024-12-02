import { NextFunction, Request, Response } from "express";
import { GetAllHospedagensPorUsuarioUseCase } from "./GetAllHospedagensPorUsuarioUseCase";

export class GetAllHospedagensPorUsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const getAllHospedagensPorUsuarioUseCase = new GetAllHospedagensPorUsuarioUseCase();

    try {
      const result = await getAllHospedagensPorUsuarioUseCase.execute( {id:Number(id) });

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}