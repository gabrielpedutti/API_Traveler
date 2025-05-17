import { Request, Response } from "express";
import { GetAllTipoDespesaUseCase } from "../useCases/getAllTipoDespesa";

export class TipoDespesaController {
  async getAll(req: Request, res: Response) {
    try {
      const useCase = new GetAllTipoDespesaUseCase();
      const result = await useCase.execute();
      return res.status(200).json(result);
    } catch (error) {
      console.error("Erro ao buscar tipos de Despesa:", error);
      return res.status(500).json({ message: "Erro interno no servidor" });
    }
  }
}
