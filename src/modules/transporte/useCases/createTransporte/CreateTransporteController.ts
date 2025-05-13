import { NextFunction, Request, Response } from "express";
import { CreateTransporteUseCase } from "./CreateTransporteUseCase";

export class CreateTransporteController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { nome, tipo_id, data, viagem_id, transporte_destino_id, documento_anexo, valor } = req.body;

    const createTransporteUseCase = new CreateTransporteUseCase();

    try {
      const novoTransporte = await createTransporteUseCase.execute({
        nome,
        tipo_id,
        data,
        viagem_id,
        transporte_destino_id,
        documento_anexo,
        valor
      });

      return res.status(201).json(novoTransporte);
    } catch (error) {
      next(error);
    }
  }
}
