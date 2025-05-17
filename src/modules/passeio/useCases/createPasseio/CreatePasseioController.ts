import { NextFunction, Request, Response } from "express";
import { CreatePasseioUseCase } from "./CreatePasseioUseCase";

export class CreatePasseioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { nome, tipo_id, data, documento_anexo, viagem_id, valor } = req.body;

    const createPasseioUseCase = new CreatePasseioUseCase();

    try {
      const novoPasseio = await createPasseioUseCase.execute({
        nome,
        tipo_id,
        data,
        viagem_id, 
        documento_anexo,
        valor
      });

      return res.status(201).json(novoPasseio);
    } catch (error) {
      next(error);
    }
  }
}
