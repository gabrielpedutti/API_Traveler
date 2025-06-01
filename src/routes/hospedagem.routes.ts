import { Router } from "express";
import { CreateHospedagemController } from "../modules/hospedagem/useCases/createHospedagem/CreateHospedagemController";
import { GetAllHospedagensController } from "../modules/hospedagem/useCases/getAllHospedagem/GetAllHospedagensController";
import { DeleteHospedagemController } from "../modules/hospedagem/useCases/deleteHospedagem/DeleteHospedagemController";
import { UpdateHospedagemController } from "../modules/hospedagem/useCases/updateHospedagem/UpdateHospedagemController";
import { GetHospedagemController } from "../modules/hospedagem/useCases/getHospedagem/GetHospedagemController";
import { GetAllHospedagensPorUsuarioController } from "../modules/hospedagem/useCases/getAllHospedagensPorUsuario/GetAllHospedagensPorUsuarioController";
import { GetAllHospedagensPorViagemController } from "../modules/hospedagem/useCases/getAllHospedagensPorViagem/GetAllHospedagensPorViagemController";

const createHospedagemController = new CreateHospedagemController();
const getHospedagemController = new GetHospedagemController();
const getAllHospedagensController = new GetAllHospedagensController();
const deleteHospedagemController = new DeleteHospedagemController();
const updateHospedagemController = new UpdateHospedagemController();
const getAllHospedagensPorUsuarioController = new GetAllHospedagensPorUsuarioController();
const getAllHospedagensPorViagemController = new GetAllHospedagensPorViagemController();

const hospedagemRoutes = Router();

hospedagemRoutes.post("/", createHospedagemController.handle); // Criação de hospedagem
hospedagemRoutes.get("/", getAllHospedagensController.handle); // Listagem de hospedagem
hospedagemRoutes.get("/:id", getHospedagemController.handle); // Busca de hospedagem
hospedagemRoutes.get("/usuario/:id", getAllHospedagensPorUsuarioController.handle);
hospedagemRoutes.get("/viagem/:id", getAllHospedagensPorViagemController.handle);
hospedagemRoutes.delete("/:id/delete", deleteHospedagemController.handle); // Exclusão de hospedagem
hospedagemRoutes.put("/:id/update", updateHospedagemController.handle); // Atualização de hospedagem

/**
 * @swagger
 * tags:
 *   name: Hospedagem
 *   description: Gerenciamento de hospedagens
 */

/**
 * @swagger
 * /hospedagem:
 *   post:
 *     summary: Cria uma nova hospedagem
 *     tags: [Hospedagem]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nome
 *               - tipo_id
 *               - data_checkin
 *               - data_checkout
 *               - valor
 *               - viagem_id
 *               - usuario_id
 *               - endereco
 *             properties:
 *               nome:
 *                 type: string
 *               tipo_id:
 *                 type: integer
 *               data_checkin:
 *                 type: string
 *                 format: date
 *               data_checkout:
 *                 type: string
 *                 format: date
 *               valor:
 *                 type: number
 *               viagem_id:
 *                 type: integer
 *               usuario_id:
 *                 type: integer
 *               endereco:
 *                 type: string
 *               documento_anexo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Hospedagem criada com sucesso
 *       400:
 *         description: Campos obrigatórios ausentes ou inválidos
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /hospedagem:
 *   get:
 *     summary: Lista todas as hospedagens
 *     tags: [Hospedagem]
 *     responses:
 *       200:
 *         description: Lista de hospedagens retornada com sucesso
 *       500:
 *         description: Erro interno do servidor
 */

/**
 * @swagger
 * /hospedagem/{id}:
 *   get:
 *     summary: Retorna uma hospedagem pelo ID
 *     tags: [Hospedagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da hospedagem
 *     responses:
 *       200:
 *         description: Hospedagem encontrada
 *       404:
 *         description: Hospedagem não encontrada
 */

/**
 * @swagger
 * /hospedagem/{id}/delete:
 *   delete:
 *     summary: Remove uma hospedagem pelo ID
 *     tags: [Hospedagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da hospedagem
 *     responses:
 *       200:
 *         description: Hospedagem deletada com sucesso
 *       404:
 *         description: Hospedagem não encontrada
 */

/**
 * @swagger
 * /hospedagem/{id}/update:
 *   put:
 *     summary: Atualiza uma hospedagem pelo ID
 *     tags: [Hospedagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da hospedagem
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
 *               data_checkin:
 *                 type: string
 *                 format: date
 *               data_checkout:
 *                 type: string
 *                 format: date
 *               valor:
 *                 type: number
 *               viagem_id:
 *                 type: integer
 *               usuario_id:
 *                 type: integer
 *               endereco:
 *                 type: string
 *               documento_anexo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Hospedagem atualizada com sucesso
 *       400:
 *         description: Dados inválidos para atualização
 *       404:
 *         description: Hospedagem não encontrada
 */

/**
 * @swagger
 * /hospedagem/usuario/{id}:
 *   get:
 *     summary: Lista todas as hospedagens de um usuário
 *     tags: [Hospedagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       200:
 *         description: Lista de hospedagens retornada com sucesso
 *       404:
 *         description: Nenhuma hospedagem encontrada para o usuário
 */

/**
 * @swagger
 * /hospedagem/viagem/{id}:
 *   get:
 *     summary: Lista todas as hospedagens de uma viagem
 *     tags: [Hospedagem]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da viagem
 *     responses:
 *       200:
 *         description: Lista de hospedagens retornada com sucesso
 *       404:
 *         description: Nenhuma hospedagem encontrada para a viagem
 */



export { hospedagemRoutes };
