import { NextFunction, Request, Response } from "express";
import { GetAllPasseiosUseCase } from "./GetAllPasseiosUseCase";

export class GetAllPasseiosController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getAllPasseiosUseCase = new GetAllPasseiosUseCase();

    try {
      const result = await getAllPasseiosUseCase.execute();

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}