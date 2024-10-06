import { Router } from "express";
import { CreateUsuarioController } from "../modules/usuario/useCases/createUsuario/CreateUsuarioController";

const createUsuarioController = new CreateUsuarioController();

const usuarioRoutes = Router();

usuarioRoutes.post("/", createUsuarioController.handle);

export { usuarioRoutes };