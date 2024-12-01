import { NextFunction, Request, Response } from "express";
import { UpdatePasseioUseCase } from "./UpdatePasseioUseCase";

export class UpdatePasseioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const {
      nome,
      tipo_id,
      despesa_id,
      viagem_id,
      municipio_id,
      data,
    } = req.body;

    const updatePasseioUseCase = new UpdatePasseioUseCase();

    try {
      const result = await updatePasseioUseCase.execute({
        id: Number(id),
        nome,
        tipo_id,
        despesa_id,
        viagem_id,
        municipio_id,
        data
      });

      return res.status(200).json(result); // Status 200 para sucesso
    } catch (error) {
      next(error); // Encaminha o erro para o middleware de tratamento
    }
  }
}
