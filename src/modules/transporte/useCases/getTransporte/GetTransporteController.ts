import { NextFunction, Request, Response } from "express";
import { GetTransporteUseCase } from "./GetTransporteUseCase";

export class GetTransporteController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.body;

    const getTransporteUseCase = new GetTransporteUseCase();

    try {
      const result = await getTransporteUseCase.execute({id});
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
