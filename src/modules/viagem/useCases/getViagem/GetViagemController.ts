import { NextFunction, Request, Response } from "express";
import { GetViagemUseCase } from "./GetViagemUseCase";
import { AppError } from "../../../../errors/AppError";

export class GetViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const  id = Number(req.params.id)

    if (isNaN(id) || id <= 0) {
        throw new AppError("ID de viagem inválido.", 400, { idOriginal: req.params.id });
    }

    const getViagemUseCase = new GetViagemUseCase();

    try {
      const result = await getViagemUseCase.execute({id});
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
