import { Router } from "express";
import { TipoDespesaController } from "../modules/tipos/controllers/tipoDespesaController";

const tipoDespesaRoutes = Router();
const controller = new TipoDespesaController();

tipoDespesaRoutes.get("/", controller.getAll.bind(controller));

export { tipoDespesaRoutes };
