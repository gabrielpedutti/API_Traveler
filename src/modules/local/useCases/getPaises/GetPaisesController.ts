import { NextFunction, Request, Response } from "express";
import { GetPaisesUseCase } from "./GetPaisesUseCase";

export class GetPaisesController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getPaisesUseCase = new GetPaisesUseCase();

    try {
      const result = await getPaisesUseCase.execute();
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
