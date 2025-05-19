import { Router } from "express";
import { CreateViagemController } from "../modules/viagem/useCases/createViagem/CreateViagemController";
import { GetAllViagemsController } from "../modules/viagem/useCases/getAllViagems/GetAllViagemsController";
import { GetViagemController } from "../modules/viagem/useCases/getViagem/GetViagemController";
import { DeleteViagemController } from "../modules/viagem/useCases/deleteViagem/DeleteViagemController";
import { UpdateViagemController } from "../modules/viagem/useCases/updateViagem/UpdateViagemController";
import { GetAllViagemsPorUsuarioController } from "../modules/viagem/useCases/getAllViagemsPorUsuario/GetAllViagemsPorUsuarioController";

const createViagemController = new CreateViagemController();
const getAllViagemsController = new GetAllViagemsController();
const getViagemController = new GetViagemController();
const deleteViagemController = new DeleteViagemController();
const updateViagemController = new UpdateViagemController();
const getAllViagemsPorUsuarioController = new GetAllViagemsPorUsuarioController();

const viagemRoutes = Router();

viagemRoutes.post("/", createViagemController.handle);
viagemRoutes.get("/", getAllViagemsController.handle);
viagemRoutes.get("/:id", getViagemController.handle);
viagemRoutes.delete('/:id/delete', deleteViagemController.handle);
viagemRoutes.put('/:id/update', updateViagemController.handle);
viagemRoutes.get("/usuario/:id", getAllViagemsPorUsuarioController.handle);

//Swagger
/**
 * @swagger
  * /viagem:
 *   post:
 *     summary: Cria uma nova viagem
 *     tags: [Viagem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - data_inicio
 *               - data_fim
 *               - usuario_id
 *               - viagem_destino_id
 *             properties:
 *               nome:
 *                 type: string
 *                 example: Viagem a Salvador
 *               data_inicio:
 *                 type: string
 *                 format: date
 *                 example: "2025-12-01"
 *               data_fim:
 *                 type: string
 *                 format: date
 *                 example: "2025-12-15"
 *               usuario_id:
 *                 type: integer
 *                 example: 1
 *               viagem_destino_id:
 *                 type: integer
 *                 example: 200
 *     responses:
 *       201:
 *         description: Viagem criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Viagem'
 *       400:
 *         description: Erro de validação (campos obrigatórios)
 *       409:
 *         description: Viagem já existente na mesma data para o usuário
 *       500:
 *         description: Erro interno do servidor
 */

export { viagemRoutes };