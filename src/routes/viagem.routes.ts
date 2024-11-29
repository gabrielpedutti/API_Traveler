import { Router } from "express";
import { CreateViagemController } from "../modules/viagem/useCases/createViagem/CreateViagemController";
import { GetAllViagemsController } from "../modules/viagem/useCases/getAllViagems/GetAllViagemsController";
import { GetViagemController } from "../modules/viagem/useCases/getViagem/GetViagemController";
import { DeleteViagemController } from "../modules/viagem/useCases/deleteViagem/DeleteViagemController";
import { UpdateViagemController } from "../modules/viagem/useCases/updateViagem/UpdateViagemController";

const createViagemController = new CreateViagemController();
const getAllViagemsController = new GetAllViagemsController();
const getViagemController = new GetViagemController();
const deleteViagemController = new DeleteViagemController();
const updateViagemController = new UpdateViagemController();

const viagemRoutes = Router();

viagemRoutes.post("/", createViagemController.handle);
viagemRoutes.get("/", getAllViagemsController.handle);
viagemRoutes.get("/:id", getViagemController.handle);
viagemRoutes.delete('/:id/delete', deleteViagemController.handle);
viagemRoutes.put('/:id/update', updateViagemController.handle);

export { viagemRoutes };