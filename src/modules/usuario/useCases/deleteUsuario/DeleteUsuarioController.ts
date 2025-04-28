import { NextFunction, Request, Response } from "express";
import { DeleteUsuarioUseCase } from "./DeleteUsuarioUseCase";

export class DeleteUsuarioController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const { id } = req.params;

    const deleteUsuarioUseCase = new DeleteUsuarioUseCase();

    try {
      const result = await deleteUsuarioUseCase.execute({id: Number(id)});

      return res.status(201).json(result);

    } catch (error) {
      next(error);
    }
  }
}