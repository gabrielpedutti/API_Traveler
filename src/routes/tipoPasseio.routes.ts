// src/routes/tipo-Passeio.routes.ts
import { Router } from "express";
import { TipoPasseioController } from "../modules/tipos/controllers/tipoPasseioController";

const tipoPasseioRoutes = Router();
const controller = new TipoPasseioController();

tipoPasseioRoutes.get("/", controller.getAll.bind(controller));

export { tipoPasseioRoutes };
