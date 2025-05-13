import { NextFunction, Request, Response } from "express";
import { UpdateHospedagemUseCase } from "./UpdateHospedagemUseCase";

export class UpdateHospedagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const {
      nome,
      tipo_id,
      data_checkin,
      data_checkout,
      viagem_id,
      endereco,
      documento_anexo,
      usuario_id,
      despesa_id,
      valor,
    } = req.body;


    const updateHospedagemUseCase = new UpdateHospedagemUseCase();

    try {
      const result = await updateHospedagemUseCase.execute({
        id: Number(id),
        nome,
        tipo_id,
        data_checkin,
        data_checkout,
        viagem_id,
        endereco,
        documento_anexo,
        usuario_id,
        despesa_id,
        valor,
      });

      return res.status(200).json(result); // Status 200 para sucesso
    } catch (error) {
      next(error); // Encaminha o erro para o middleware de tratamento
    }
  }
}
