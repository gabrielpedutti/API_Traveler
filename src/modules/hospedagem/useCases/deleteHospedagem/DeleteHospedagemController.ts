import { NextFunction, Request, Response } from "express";
import { DeleteHospedagemUseCase } from "./DeleteHospedagemUseCase";

export class DeleteHospedagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;

    const deleteHospedagemUseCase = new DeleteHospedagemUseCase();

    try {
      const hospedagemDeletado = await deleteHospedagemUseCase.execute({
        id: Number(id),
      });

      return res.status(200).json({
        message: "Hospedagem deletada com sucesso.",
        hospedagem: hospedagemDeletado,
      });
    } catch (error) {
      next(error);
    }
  }
}
