import { Router } from "express";
import { usuarioRoutes } from "./usuario.routes";
import { locationsRoutes } from "./locations.routes";
import { transporteRoutes } from "./transporte.routes";
import { viagemRoutes } from "./viagem.routes";
import { despesaRoutes } from "./despesa.routes";
import { hospedagemRoutes } from "./hospedagem.routes";

const routes = Router();

routes.use("/usuarios", usuarioRoutes);
routes.use("/locations", locationsRoutes);
routes.use("/transporte", transporteRoutes);
routes.use("/viagem", viagemRoutes);
routes.use("/despesa", despesaRoutes);
routes.use("/hospedagem", hospedagemRoutes);

export { routes };