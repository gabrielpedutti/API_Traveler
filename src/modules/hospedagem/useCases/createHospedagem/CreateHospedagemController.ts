import { NextFunction, Request, Response } from "express";
import { CreateHospedagemUseCase } from "./CreateHospedagemUseCase";

export class CreateHospedagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { nome, tipo_id, data_checkin, data_checkout, viagem_id, valor, endereco, documento_anexo } = req.body;

    const createHospedagemUseCase = new CreateHospedagemUseCase();

    try {
      const novaHospedagem = await createHospedagemUseCase.execute({
        nome,
        tipo_id,
        data_checkin,
        data_checkout,
        valor,
        viagem_id,
        endereco,
        documento_anexo
      });

      return res.status(201).json(novaHospedagem);
    } catch (error) {
      next(error);
    }
  }
}
