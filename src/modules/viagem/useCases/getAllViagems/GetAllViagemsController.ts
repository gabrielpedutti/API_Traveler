import { NextFunction, Request, Response } from "express";
import { GetAllViagemsUseCase } from "./GetAllViagemsUseCase";

export class GetAllViagemsController {
  async handle(req: Request, res: Response, next: NextFunction): Promise<Response | void> {

    const getAllViagemsUseCase = new GetAllViagemsUseCase();

    try {
      const result = await getAllViagemsUseCase.execute();

      return res.status(201).json(result);
    } catch (error) {
      next(error)
    }
  }
}