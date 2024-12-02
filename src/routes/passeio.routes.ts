import { Router } from "express";
import { CreatePasseioController } from "../modules/passeio/useCases/createPasseio/CreatePasseioController";
import { GetAllPasseiosController } from "../modules/passeio/useCases/getAllPasseio/GetAllPasseiosController";
import { DeletePasseioController } from "../modules/passeio/useCases/deletePasseio/DeletePasseioController";
import { UpdatePasseioController } from "../modules/passeio/useCases/updatePasseio/UpdatePasseioController";
import { GetPasseioController } from "../modules/passeio/useCases/getPasseio/GetPasseioController";
import { GetAllPasseiosPorUsuarioController } from "../modules/passeio/useCases/getAllPasseiosPorUsuario/GetAllPasseiosPorUsuarioController";

const createPasseioController = new CreatePasseioController();
const getPasseioController = new GetPasseioController();
const getAllPasseiosController = new GetAllPasseiosController();
const deletePasseioController = new DeletePasseioController();
const updatePasseioController = new UpdatePasseioController();
const getAllPasseiosPorUsuarioController = new GetAllPasseiosPorUsuarioController();


const passeioRoutes = Router();

passeioRoutes.post("/", createPasseioController.handle); // Criação de passeio
passeioRoutes.get("/", getAllPasseiosController.handle); // Listagem de passeio
passeioRoutes.get("/:id", getPasseioController.handle); // Busca de passeio
passeioRoutes.get("/usuario/:id", getAllPasseiosPorUsuarioController.handle); // Busca de todos os passeios por usuário
passeioRoutes.delete("/:id/delete", deletePasseioController.handle); // Exclusão de passeio
passeioRoutes.put("/:id/update", updatePasseioController.handle); // Atualização de passeio

export { passeioRoutes };
