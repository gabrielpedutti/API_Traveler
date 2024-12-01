import { NextFunction, Request, Response } from "express";
import { GetPasseioUseCase } from "./GetPasseioUseCase";

export class GetPasseioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const  id = Number(req.params.id)

    const getPasseioUseCase = new GetPasseioUseCase();

    try {
      const result = await getPasseioUseCase.execute({id});
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
