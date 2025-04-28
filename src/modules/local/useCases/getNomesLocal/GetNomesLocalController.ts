import { NextFunction, Request, Response } from "express";
import { GetNomesLocalUseCase } from "./GetNomesLocalUseCase";

export class GetNomesLocalController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const { id } = req.params;

    const getNomesLocalUseCase = new GetNomesLocalUseCase();

    console.log(id);

    try {
      const result = await getNomesLocalUseCase.execute( { id: Number(id) });
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
