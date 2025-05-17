import { Router } from "express";
import { TipoTransporteController } from "../modules/tipos/controllers/tipoTransporteController";

const tipoTransporteRoutes = Router();
const controller = new TipoTransporteController();

tipoTransporteRoutes.get("/", controller.getAll.bind(controller));

export { tipoTransporteRoutes };
