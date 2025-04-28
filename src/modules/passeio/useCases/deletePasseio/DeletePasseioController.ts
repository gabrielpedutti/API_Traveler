import { NextFunction, Request, Response } from "express";
import { DeletePasseioUseCase } from "./DeletePasseioUseCase";

export class DeletePasseioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
    const { id } = req.params;

    const deletePasseioUseCase = new DeletePasseioUseCase();

    try {
      const passeioDeletado = await deletePasseioUseCase.execute({
        id: Number(id),
      });

      return res.status(200).json({
        message: "Passeio deletado com sucesso.",
        passeio: passeioDeletado,
      });
    } catch (error) {
      next(error);
    }
  }
}
