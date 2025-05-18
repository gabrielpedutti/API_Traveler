import { NextFunction, Request, Response } from "express";
import { UpdatePasseioUseCase } from "./UpdatePasseioUseCase";

export class UpdatePasseioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const {
      nome,
      tipo_id,
      data,
      viagem_id,
      documento_anexo,
      valor,
      despesa_id,
    } = req.body;

    const updatePasseioUseCase = new UpdatePasseioUseCase();

    try {
      const result = await updatePasseioUseCase.execute({
        id: Number(id),
        nome,
        tipo_id,
        data,
        viagem_id,
        documento_anexo,
        valor,
        despesa_id,
      });

      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  }
}
