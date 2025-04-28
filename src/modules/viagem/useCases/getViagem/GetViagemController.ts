import { NextFunction, Request, Response } from "express";
import { GetViagemUseCase } from "./GetViagemUseCase";

export class GetViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const  id = Number(req.params.id)
    const getViagemUseCase = new GetViagemUseCase();

    try {
      const result = await getViagemUseCase.execute({id});
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
