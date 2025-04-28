import { NextFunction, Request, Response } from "express";
import { UpdateTransporteUseCase } from "./UpdateTransporteUseCase";

export class UpdateTransporteController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const {
      nome,
      tipo_id,
      despesa_id,
      viagem_id,
      transporte_origem_id,
      transporte_destino_id,
      data,
    } = req.body;

    const updateTransporteUseCase = new UpdateTransporteUseCase();

    try {
      const result = await updateTransporteUseCase.execute({
        id: Number(id),
        nome,
        tipo_id,
        despesa_id,
        viagem_id,
        transporte_origem_id,
        transporte_destino_id,
        data,
      });

      return res.status(200).json(result); // Status 200 para sucesso
    } catch (error) {
      next(error); // Encaminha o erro para o middleware de tratamento
    }
  }
}
