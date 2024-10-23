import { Request, Response } from "express";
import { GetUsuarioLoginUseCase } from "./GetUsuarioLoginUseCase";
import { AppError } from "../../../../errors/AppError";

export class GetUsuarioLoginController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { email, senha } = req.body;

    const getUsuarioLoginUseCase = new GetUsuarioLoginUseCase();

    try {
      const result = await getUsuarioLoginUseCase.execute({ email, senha });
      return res.status(200).json(result);
    } catch (error) {
      if (error instanceof AppError) {
        return res.status(error.statusCode).json({ message: error.message });
      }
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}
