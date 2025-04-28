import { NextFunction, Request, Response } from "express";
import { GetAllUsuariosUseCase } from "./GetAllUsuariosUseCase";

export class GetAllUsuariosController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getAllUsuariosUseCase = new GetAllUsuariosUseCase();

    try {
      const result = await getAllUsuariosUseCase.execute();

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}