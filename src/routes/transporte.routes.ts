import { Router } from "express";
import { CreateTransporteController } from "../modules/transporte/useCases/createTransporte/CreateTransporteController";
import { GetAllTransportesController } from "../modules/transporte/useCases/getAllTransporte/GetAllTransportesController";
import { DeleteTransporteController } from "../modules/transporte/useCases/deleteTransporte/DeleteTransporteController";
import { UpdateTransporteController } from "../modules/transporte/useCases/updateTransporte/UpdateTransporteController";
import { GetTransporteController } from "../modules/transporte/useCases/getTransporte/GetTransporteController";
import { GetAllTransportesPorUsuarioController } from "../modules/transporte/useCases/getAllTransportesPorUsuario/GetAllTransportesPorUsuarioController";
import { GetAllTransportesPorViagemController } from "../modules/transporte/useCases/getAllTransportesPorViagem/GetAllTransportesPorViagemController";

const createTransporteController = new CreateTransporteController();
const getTransporteController = new GetTransporteController();
const getAllTransportesController = new GetAllTransportesController();
const deleteTransporteController = new DeleteTransporteController();
const updateTransporteController = new UpdateTransporteController();
const getAllTransportesPorUsuarioController = new GetAllTransportesPorUsuarioController();
const getAllTransportesPorViagemController = new GetAllTransportesPorViagemController();

const transporteRoutes = Router();

transporteRoutes.post("/", createTransporteController.handle); // Criação de transporte
transporteRoutes.get("/", getAllTransportesController.handle); // Listagem de transportes
transporteRoutes.get("/usuario/:id", getAllTransportesPorUsuarioController.handle); 
transporteRoutes.get("/viagem/:id", getAllTransportesPorViagemController.handle); 
transporteRoutes.get("/:id", getTransporteController.handle); // Busca de transporte
transporteRoutes.delete("/:id/delete", deleteTransporteController.handle); // Exclusão de transporte
transporteRoutes.put("/:id/update", updateTransporteController.handle); // Atualização de transporte

/**
 * @swagger
 * tags:
 *   name: Transporte
 *   description: Gerenciamento de transportes associados a viagens
 */

/**
 * @swagger
 * /transporte:
 *   post:
 *     summary: Cria um novo transporte
 *     tags: [Transporte]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - tipo_id
 *               - data
 *               - viagem_id
 *               - transporte_destino_id
 *               - valor
 *             properties:
 *               nome:
 *                 type: string
 *                 example: "Uber aeroporto"
 *               tipo_id:
 *                 type: integer
 *                 example: 1
 *               data:
 *                 type: string
 *                 format: date
 *                 example: "2025-11-01"
 *               viagem_id:
 *                 type: integer
 *                 example: 10
 *               transporte_destino_id:
 *                 type: integer
 *                 example: 205
 *               documento_anexo:
 *                 type: string
 *                 example: "comprovante.pdf"
 *               valor:
 *                 type: number
 *                 format: float
 *                 example: 95.50
 *     responses:
 *       201:
 *         description: Transporte criado com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Entidade relacionada não encontrada
 *       500:
 *         description: Erro interno
 */

/**
 * @swagger
 * /transporte:
 *   get:
 *     summary: Lista todos os transportes
 *     tags: [Transporte]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */

/**
 * @swagger
 * /transporte/{id}:
 *   get:
 *     summary: Busca um transporte por ID
 *     tags: [Transporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Transporte encontrado
 *       404:
 *         description: Transporte não encontrado
 */

/**
 * @swagger
 * /transporte/viagem/{id}:
 *   get:
 *     summary: Lista transportes por viagem
 *     tags: [Transporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 10
 *     responses:
 *       200:
 *         description: Transportes listados com sucesso
 */

/**
 * @swagger
 * /transporte/usuario/{id}:
 *   get:
 *     summary: Lista transportes por usuário
 *     tags: [Transporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         example: 1
 *     responses:
 *       200:
 *         description: Transportes listados com sucesso
 */

/**
 * @swagger
 * /transporte/{id}/update:
 *   put:
 *     summary: Atualiza um transporte existente
 *     tags: [Transporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               tipo_id:
 *                 type: integer
 *               data:
 *                 type: string
 *                 format: date
 *               viagem_id:
 *                 type: integer
 *               transporte_destino_id:
 *                 type: integer
 *               documento_anexo:
 *                 type: string
 *               valor:
 *                 type: number
 *                 format: float
 *               despesa_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Transporte atualizado com sucesso
 *       400:
 *         description: Erro de validação
 *       404:
 *         description: Transporte não encontrado
 */

/**
 * @swagger
 * /transporte/{id}/delete:
 *   delete:
 *     summary: Exclui um transporte
 *     tags: [Transporte]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Transporte deletado com sucesso
 *       404:
 *         description: Transporte não encontrado
 */



export { transporteRoutes };
