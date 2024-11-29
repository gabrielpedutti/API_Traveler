import { NextFunction, Request, Response } from "express";
import { UpdateViagemUseCase } from "./UpdateViagemUseCase";

export class UpdateViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const {
      nome,
      descricao,
      viagem_origem_id,
      viagem_destino_id,
      data_inicio,
      data_fim,
      usuario_id,
      status_viagem_id,
    } = req.body;

    const updateViagemUseCase = new UpdateViagemUseCase();

    try {
      const result = await updateViagemUseCase.execute({
        id: Number(id),
        nome,
        descricao,
        viagem_origem_id,
        viagem_destino_id,
        data_inicio: data_inicio ? new Date(data_inicio) : undefined,
        data_fim: data_fim ? new Date(data_fim) : undefined,
        usuario_id,
        status_viagem_id,
      });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
