import { Request, Response } from "express";
import { GetAllTipoHospedagemUseCase } from "../useCases/getAllTipoHospedagem";

export class TipoHospedagemController {
  async getAll(req: Request, res: Response) {
    try {
      const useCase = new GetAllTipoHospedagemUseCase();
      const result = await useCase.execute();
      return res.status(200).json(result);
    } catch (error) {
      console.error("Erro ao buscar tipos de hospedagem:", error);
      return res.status(500).json({ message: "Erro interno no servidor" });
    }
  }
}
