import { Router } from "express";
import { CreateUsuarioController } from "../modules/usuario/useCases/createUsuario/CreateUsuarioController";
import { GetAllUsuariosController } from "../modules/usuario/useCases/getAllUsuarios/GetAllUsuariosController";
import { GetUsuarioLoginController } from "../modules/usuario/useCases/getUsuarioLogin/GetUsuarioLoginController";
import { DeleteUsuarioController } from "../modules/usuario/useCases/deleteUsuario/DeleteUsuarioController";
import { UpdateUsuarioController } from "../modules/usuario/useCases/updateUsuario/UpdateUsuarioController";

const createUsuarioController = new CreateUsuarioController();
const getAllUsuariosController = new GetAllUsuariosController();
const getUsuarioLoginController = new GetUsuarioLoginController();
const deleteUsuarioController = new DeleteUsuarioController();
const updateUsuarioController = new UpdateUsuarioController();

const usuarioRoutes = Router();

usuarioRoutes.post("/", createUsuarioController.handle);
usuarioRoutes.get("/", getAllUsuariosController.handle);
usuarioRoutes.post("/login", getUsuarioLoginController.handle);
usuarioRoutes.delete('/:id/delete', deleteUsuarioController.handle);
usuarioRoutes.put('/:id/update', updateUsuarioController.handle);

export { usuarioRoutes };