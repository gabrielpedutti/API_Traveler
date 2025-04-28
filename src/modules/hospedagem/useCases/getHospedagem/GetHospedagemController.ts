import { NextFunction, Request, Response } from "express";
import { GetHospedagemUseCase } from "./GetHospedagemUseCase";

export class GetHospedagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const  id = Number(req.params.id)

    const getHospedagemUseCase = new GetHospedagemUseCase();

    try {
      const result = await getHospedagemUseCase.execute({id});
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
