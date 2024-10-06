import { Router } from "express";
import { usuarioRoutes } from "./usuario.routes";

const routes = Router();

routes.use("/usuarios", usuarioRoutes);

export { routes };