import { Router } from "express";
import { GetPaisesController } from "../modules/local/useCases/getPaises/GetPaisesController";
import { GetEstadosController } from "../modules/local/useCases/getEstados/GetEstadosController";
import { GetMunicipiosController } from "../modules/local/useCases/getCidades/GetMunicipiosController";

const getPaisesController = new GetPaisesController();
const getEstadosController = new GetEstadosController();
const getMunicipiosController = new GetMunicipiosController();

const locationsRoutes = Router();

locationsRoutes.get("/paises", getPaisesController.handle);
locationsRoutes.get("/estados", getEstadosController.handle);
locationsRoutes.get("/municipios", getMunicipiosController.handle);

export { locationsRoutes };