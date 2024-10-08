import { Request, Response } from "express";
import { GetUsuarioLoginUseCase } from "./GetUsuarioLoginUseCase";

export class GetUsuarioLoginController {
  async handle(req: Request, res: Response): Promise<Response> {

    const { email, senha } = req.body;

    const getUsuarioLoginUseCase = new GetUsuarioLoginUseCase();

    try {
      const result = await getUsuarioLoginUseCase.execute({email, senha});

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}