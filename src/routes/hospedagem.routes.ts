import { Router } from "express";
import { CreateHospedagemController } from "../modules/hospedagem/useCases/createHospedagem/CreateHospedagemController";
import { GetAllHospedagensController } from "../modules/hospedagem/useCases/getAllHospedagem/GetAllHospedagensController";
import { DeleteHospedagemController } from "../modules/hospedagem/useCases/deleteHospedagem/DeleteHospedagemController";
import { UpdateHospedagemController } from "../modules/hospedagem/useCases/updateHospedagem/UpdateHospedagemController";
import { GetHospedagemController } from "../modules/hospedagem/useCases/getHospedagem/GetHospedagemController";

const createHospedagemController = new CreateHospedagemController();
const getHospedagemController = new GetHospedagemController();
const getAllHospedagensController = new GetAllHospedagensController();
const deleteHospedagemController = new DeleteHospedagemController();
const updateHospedagemController = new UpdateHospedagemController();

const hospedagemRoutes = Router();

hospedagemRoutes.post("/", createHospedagemController.handle); // Criação de hospedagem
hospedagemRoutes.get("/", getAllHospedagensController.handle); // Listagem de hospedagem
hospedagemRoutes.get("'/:id", getHospedagemController.handle); // Busca de hospedagem
hospedagemRoutes.delete("/:id/delete", deleteHospedagemController.handle); // Exclusão de hospedagem
hospedagemRoutes.put("/:id/update", updateHospedagemController.handle); // Atualização de hospedagem

export { hospedagemRoutes };
