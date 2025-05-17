// src/routes/tipo-hospedagem.routes.ts
import { Router } from "express";
import { TipoHospedagemController } from "../modules/tipos/controllers/tipoHospedagemController";

const tipoHospedagemRoutes = Router();
const controller = new TipoHospedagemController();

tipoHospedagemRoutes.get("/", controller.getAll.bind(controller));

export { tipoHospedagemRoutes };
