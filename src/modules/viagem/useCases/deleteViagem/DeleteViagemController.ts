import { NextFunction, Request, Response } from "express";
import { DeleteViagemUseCase } from "./DeleteViagemUseCase";

export class DeleteViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;

    const deleteViagemUseCase = new DeleteViagemUseCase();

    try {
      const viagemDeletado = await deleteViagemUseCase.execute({
        id: Number(id),
      });

      return res.status(200).json({
        message: "Viagem deletado com sucesso.",
        viagem: viagemDeletado,
      });
    } catch (error) {
      next(error);
    }
  }
}
