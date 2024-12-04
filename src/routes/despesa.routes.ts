import { Router } from "express";
import { CreateDespesaController } from "../modules/despesa/useCases/createDespesa/CreateDespesaController";
import { GetAllDespesaController } from "../modules/despesa/useCases/getAllDespesa/GetAllDespesaController";
import { DeleteDespesaController } from "../modules/despesa/useCases/deleteDespesa/DeleteDespesaController";
import { UpdateDespesaController } from "../modules/despesa/useCases/updateDespesa/UpdateDespesaController";
import { GetDespesaController } from "../modules/despesa/useCases/getDespesa/GetDespesaController";
import { GetAllDespesasPorUsuarioController } from "../modules/despesa/useCases/getAllDespesasPorUsuario/GetAllDespesasPorUsuarioController";
import { GetAllDespesasPorViagemController } from "../modules/despesa/useCases/getAllDespesasPorViagem/GetAllDespesasPorViagemController";

// Instância de cada controller
const createDespesaController = new CreateDespesaController();
const getAllDespesaController = new GetAllDespesaController();
const deleteDespesaController = new DeleteDespesaController();
const updateDespesaController = new UpdateDespesaController();
const getDespesaController = new GetDespesaController();
const getAllDespesasPorUsuarioController = new GetAllDespesasPorUsuarioController();
const getAllDespesasPorViagemController = new GetAllDespesasPorViagemController();

// Criação do router para despesas
const despesaRoutes = Router();

despesaRoutes.post("/", createDespesaController.handle); // Criação de despesa
despesaRoutes.get("/", getAllDespesaController.handle); // Listagem de despesas
despesaRoutes.get("/:id", getDespesaController.handle); // Busca de uma despesa específica
despesaRoutes.get("/usuario/:id", getAllDespesasPorUsuarioController.handle);
despesaRoutes.get("/viagem/:id", getAllDespesasPorViagemController.handle);
despesaRoutes.delete("/:id/delete", deleteDespesaController.handle); // Exclusão de despesa
despesaRoutes.put("/:id/update", updateDespesaController.handle); // Atualização de despesa

export { despesaRoutes };
