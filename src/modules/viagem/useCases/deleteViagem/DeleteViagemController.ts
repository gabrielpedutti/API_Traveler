import { NextFunction, Request, Response } from "express";
import { DeleteViagemUseCase } from "./DeleteViagemUseCase";
import { AppError } from "../../../../errors/AppError";

export class DeleteViagemController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;
    const viagemId = Number(id);

    if (isNaN(viagemId)) {
        throw new AppError("ID inválido para deletar viagem.", 400, { id });
    }

    const deleteViagemUseCase = new DeleteViagemUseCase();

    try {
      const viagemDeletado = await deleteViagemUseCase.execute({
        id: viagemId,
      });

      return res.status(200).json({
        message: "Viagem deletada com sucesso.",
        viagem: viagemDeletado,
      });
    } catch (error) {
      next(error);
    }
  }
}
