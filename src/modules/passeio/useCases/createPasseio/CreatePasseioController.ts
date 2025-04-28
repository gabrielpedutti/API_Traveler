import { NextFunction, Request, Response } from "express";
import { CreatePasseioUseCase } from "./CreatePasseioUseCase";

export class CreatePasseioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { nome, tipo_id, data, despesa_id, viagem_id, municipio_id } = req.body;

    const createPasseioUseCase = new CreatePasseioUseCase();

    try {
      const novoPasseio = await createPasseioUseCase.execute({
        nome,
        tipo_id,
        data,
        despesa_id,
        viagem_id,
        municipio_id,
      });

      return res.status(201).json(novoPasseio);
    } catch (error) {
      next(error);
    }
  }
}
