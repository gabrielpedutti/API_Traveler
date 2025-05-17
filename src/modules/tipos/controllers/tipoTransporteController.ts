import { Request, Response } from "express";
import { GetAllTipoTransporteUseCase } from "../useCases/getAllTipoTransporte";

export class TipoTransporteController {
  async getAll(req: Request, res: Response) {
    try {
      const useCase = new GetAllTipoTransporteUseCase();
      const result = await useCase.execute();
      return res.status(200).json(result);
    } catch (error) {
      console.error("Erro ao buscar tipos de Transporte:", error);
      return res.status(500).json({ message: "Erro interno no servidor" });
    }
  }
}
