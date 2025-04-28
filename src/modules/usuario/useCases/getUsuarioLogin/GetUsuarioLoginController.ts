import { NextFunction, Request, Response } from "express";
import { GetUsuarioLoginUseCase } from "./GetUsuarioLoginUseCase";
import { AppError } from "../../../../errors/AppError";

export class GetUsuarioLoginController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { email, senha } = req.body;

    const getUsuarioLoginUseCase = new GetUsuarioLoginUseCase();

    try {
      const result = await getUsuarioLoginUseCase.execute({ email, senha });
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
