import { Router } from "express";
import { CreateHospedagemController } from "../modules/hospedagem/useCases/createHospedagem/CreateHospedagemController";
import { GetAllHospedagensController } from "../modules/hospedagem/useCases/getAllHospedagem/GetAllHospedagensController";
import { DeleteHospedagemController } from "../modules/hospedagem/useCases/deleteHospedagem/DeleteHospedagemController";
import { UpdateHospedagemController } from "../modules/hospedagem/useCases/updateHospedagem/UpdateHospedagemController";
import { GetHospedagemController } from "../modules/hospedagem/useCases/getHospedagem/GetHospedagemController";
import { GetAllHospedagensPorUsuarioController } from "../modules/hospedagem/useCases/getAllHospedagensPorUsuario/GetAllHospedagensPorUsuarioController";

const createHospedagemController = new CreateHospedagemController();
const getHospedagemController = new GetHospedagemController();
const getAllHospedagensController = new GetAllHospedagensController();
const deleteHospedagemController = new DeleteHospedagemController();
const updateHospedagemController = new UpdateHospedagemController();
const getAllHospedagensPorUsuarioController = new GetAllHospedagensPorUsuarioController();

const hospedagemRoutes = Router();

hospedagemRoutes.post("/", createHospedagemController.handle); // Criação de hospedagem
hospedagemRoutes.get("/", getAllHospedagensController.handle); // Listagem de hospedagem
hospedagemRoutes.get("'/:id", getHospedagemController.handle); // Busca de hospedagem
hospedagemRoutes.get("/usuario/:id", getAllHospedagensPorUsuarioController.handle);
hospedagemRoutes.delete("/:id/delete", deleteHospedagemController.handle); // Exclusão de hospedagem
hospedagemRoutes.put("/:id/update", updateHospedagemController.handle); // Atualização de hospedagem

export { hospedagemRoutes };
