import { NextFunction, Request, Response } from "express";
import { GetDespesaUseCase } from "./GetDespesaUseCase";

export class GetDespesaController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;

    const getDespesaUseCase = new GetDespesaUseCase();

    try {
      const despesa = await getDespesaUseCase.execute(Number(id));
      return res.status(200).json(despesa);
    } catch (error) {
      next(error);
    }
  }
}
