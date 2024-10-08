import { Request, Response } from "express";
import { GetAllUsuariosUseCase } from "./GetAllUsuariosUseCase";

export class GetAllUsuariosController {
  async handle(req: Request, res: Response): Promise<Response> {

    const getAllUsuariosUseCase = new GetAllUsuariosUseCase();

    try {
      const result = await getAllUsuariosUseCase.execute();

      return res.status(201).json(result);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}