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
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *               usuario_id:
 *                 type: integer
 *               viagem_destino_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Viagem criada com sucesso
 *       400:
 *         description: Erro de validação
 *       409:
 *         description: Viagem já existente
 *       500:
 *         description: Erro interno do servidor
 */
viagemRoutes.post("/", createViagemController.handle);

/**
 * @swagger
 * /viagem:
 *   get:
 *     summary: Lista todas as viagens
 *     tags: [Viagem]
 *     responses:
 *       200:
 *         description: Lista de viagens retornada com sucesso
 */
viagemRoutes.get("/", getAllViagemsController.handle);

/**
 * @swagger
 * /viagem/{id}:
 *   get:
 *     summary: Busca uma viagem pelo ID
 *     tags: [Viagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da viagem
 *     responses:
 *       200:
 *         description: Viagem encontrada com sucesso
 *       404:
 *         description: Viagem não encontrada
 */
viagemRoutes.get("/:id", getViagemController.handle);

/**
 * @swagger
 * /viagem/{id}/delete:
 *   delete:
 *     summary: Deleta uma viagem pelo ID
 *     tags: [Viagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da viagem
 *     responses:
 *       200:
 *         description: Viagem deletada com sucesso
 *       404:
 *         description: Viagem não encontrada
 */
viagemRoutes.delete('/:id/delete', deleteViagemController.handle);

/**
 * @swagger
 * /viagem/{id}/update:
 *   put:
 *     summary: Atualiza uma viagem existente
 *     tags: [Viagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID da viagem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               data_inicio:
 *                 type: string
 *                 format: date
 *               data_fim:
 *                 type: string
 *                 format: date
 *               usuario_id:
 *                 type: integer
 *               viagem_destino_id:
 *                 type: integer
 *               status_viagem_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Viagem atualizada com sucesso
 *       404:
 *         description: Viagem não encontrada
 *       400:
 *         description: Dados inválidos
 */
viagemRoutes.put('/:id/update', updateViagemController.handle);

/**
 * @swagger
 * /viagem/usuario/{id}:
 *   get:
 *     summary: Lista todas as viagens de um usuário
 *     tags: [Viagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de viagens retornada com sucesso
 */
viagemRoutes.get("/usuario/:id", getAllViagemsPorUsuarioController.handle);

export { viagemRoutes };
