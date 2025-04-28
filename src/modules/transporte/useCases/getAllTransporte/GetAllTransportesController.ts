import { NextFunction, Request, Response } from "express";
import { GetAllTransportesUseCase } from "./GetAllTransportesUseCase";

export class GetAllTransportesController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getAllTransportesUseCase = new GetAllTransportesUseCase();

    try {
      const result = await getAllTransportesUseCase.execute();

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}