import { Router } from "express";
import { usuarioRoutes } from "./usuario.routes";
import { locationsRoutes } from "./locations.routes";
import { transporteRoutes } from "./transporte.routes";
import { viagemRoutes } from "./viagem.routes";
import { despesaRoutes } from "./despesa.routes";
import { hospedagemRoutes } from "./hospedagem.routes";
import { passeioRoutes } from "./passeio.routes";
import { tipoHospedagemRoutes } from "./tipoHospedagem.routes";
import { tipoTransporteRoutes } from "./tipoTransporte.routes";
import { tipoPasseioRoutes } from "./tipoPasseio.routes";
import { tipoDespesaRoutes } from "./tipoDespesa.routes";


const routes = Router();

routes.use("/usuarios", usuarioRoutes);
routes.use("/locations", locationsRoutes);
routes.use("/transporte", transporteRoutes);
routes.use("/viagem", viagemRoutes);
routes.use("/despesa", despesaRoutes);
routes.use("/hospedagem", hospedagemRoutes);
routes.use("/passeio", passeioRoutes);
routes.use("/tipo-hospedagem", tipoHospedagemRoutes);
routes.use("/tipo-transporte", tipoTransporteRoutes);
routes.use("/tipo-passeio", tipoPasseioRoutes);
routes.use("/tipo-despesa", tipoDespesaRoutes);

export { routes };