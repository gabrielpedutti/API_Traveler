import { NextFunction, Request, Response } from "express";
import { DeleteTransporteUseCase } from "./DeleteTransporteUseCase";

export class DeleteTransporteController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;

    const deleteTransporteUseCase = new DeleteTransporteUseCase();

    try {
      const transporteDeletado = await deleteTransporteUseCase.execute({
        id: Number(id),
      });

      return res.status(200).json({
        message: "Transporte deletado com sucesso.",
        transporte: transporteDeletado,
      });
    } catch (error) {
      next(error);
    }
  }
}
