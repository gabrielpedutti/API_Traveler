import { NextFunction, Request, Response } from "express";
import { GetAllHospedagensUseCase } from "./GetAllHospedagensUseCase";

export class GetAllHospedagensController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getAllHospedagensUseCase = new GetAllHospedagensUseCase();

    try {
      const result = await getAllHospedagensUseCase.execute();

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}