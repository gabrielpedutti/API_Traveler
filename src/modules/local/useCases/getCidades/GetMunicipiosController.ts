import { NextFunction, Request, Response } from "express";
import { GetMunicipiosUseCase } from "./GetMunicipiosUseCase";

export class GetMunicipiosController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const idEstado = parseInt(req.query.idEstado as string);

    const getMunicipiosUseCase = new GetMunicipiosUseCase();

    try {
      const result = await getMunicipiosUseCase.execute(idEstado);
      
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
