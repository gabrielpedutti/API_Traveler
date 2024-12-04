import { Router } from "express";
import { CreateTransporteController } from "../modules/transporte/useCases/createTransporte/CreateTransporteController";
import { GetAllTransportesController } from "../modules/transporte/useCases/getAllTransporte/GetAllTransportesController";
import { DeleteTransporteController } from "../modules/transporte/useCases/deleteTransporte/DeleteTransporteController";
import { UpdateTransporteController } from "../modules/transporte/useCases/updateTransporte/UpdateTransporteController";
import { GetTransporteController } from "../modules/transporte/useCases/getTransporte/GetTransporteController";
import { GetAllTransportesPorUsuarioController } from "../modules/transporte/useCases/getAllTransportesPorUsuario/GetAllTransportesPorUsuarioController";
import { GetAllTransportesPorViagemController } from "../modules/transporte/useCases/getAllTransportesPorViagem/GetAllTransportesPorViagemController";

const createTransporteController = new CreateTransporteController();
const getTransporteController = new GetTransporteController();
const getAllTransportesController = new GetAllTransportesController();
const deleteTransporteController = new DeleteTransporteController();
const updateTransporteController = new UpdateTransporteController();
const getAllTransportesPorUsuarioController = new GetAllTransportesPorUsuarioController();
const getAllTransportesPorViagemController = new GetAllTransportesPorViagemController();

const transporteRoutes = Router();

transporteRoutes.post("/", createTransporteController.handle); // Criação de transporte
transporteRoutes.get("/", getAllTransportesController.handle); // Listagem de transportes
transporteRoutes.get("/usuario/:id", getAllTransportesPorUsuarioController.handle); 
transporteRoutes.get("/viagem/:id", getAllTransportesPorViagemController.handle); 
transporteRoutes.get("'/:id", getTransporteController.handle); // Busca de transporte
transporteRoutes.delete("/:id/delete", deleteTransporteController.handle); // Exclusão de transporte
transporteRoutes.put("/:id/update", updateTransporteController.handle); // Atualização de transporte

export { transporteRoutes };
