import { Router } from "express";
import { CreateUsuarioController } from "../modules/usuario/useCases/createUsuario/CreateUsuarioController";
import { GetAllUsuariosController } from "../modules/usuario/useCases/getAllUsuarios/GetAllUsuariosController";
import { GetUsuarioLoginController } from "../modules/usuario/useCases/getUsuarioLogin/GetUsuarioLoginController";

const createUsuarioController = new CreateUsuarioController();
const getAllUsuariosController = new GetAllUsuariosController();
const getUsuarioLoginController = new GetUsuarioLoginController();

const usuarioRoutes = Router();

usuarioRoutes.post("/", createUsuarioController.handle);
usuarioRoutes.get("/", getAllUsuariosController.handle);
usuarioRoutes.get("/login", getUsuarioLoginController.handle);

export { usuarioRoutes };