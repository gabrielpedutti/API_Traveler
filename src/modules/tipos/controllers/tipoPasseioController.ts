import { Request, Response } from "express";
import { GetAllTipoPasseioUseCase } from "../useCases/getAllTipoPasseio";

export class TipoPasseioController {
  async getAll(req: Request, res: Response) {
    try {
      const useCase = new GetAllTipoPasseioUseCase();
      const result = await useCase.execute();
      return res.status(200).json(result);
    } catch (error) {
      console.error("Erro ao buscar tipos de Passeio:", error);
      return res.status(500).json({ message: "Erro interno no servidor" });
    }
  }
}
