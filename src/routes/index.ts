import { Router } from "express";
import { usuarioRoutes } from "./usuario.routes";
import { locationsRoutes } from "./locations.routes";

const routes = Router();

routes.use("/usuarios", usuarioRoutes);
routes.use("/locations", locationsRoutes);

export { routes };