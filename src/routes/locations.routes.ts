import { Router } from "express";
import { GetPaisesController } from "../modules/local/useCases/getPaises/GetPaisesController";

const getPaisesController = new GetPaisesController();

const locationsRoutes = Router();

locationsRoutes.get("/pais", getPaisesController.handle);

export { locationsRoutes };