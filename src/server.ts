import e from 'express';
import { routes } from './routes'
import { errorHandler } from "./middlewares/errorHandler";
import "express-async-errors";
import { swaggerSpec } from "./docs/swaggerConfig";
import swaggerUi from "swagger-ui-express";

const express = require('express')
require('express-async-errors');

const app = express();
const cors = require('cors');
app.use(cors());
const corsOptions = {
  origin: '*', // Permitir todas as origens (isso pode ser ajustado para uma origem específica em produção)
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Middleware para interpretar JSON
app.use(express.json());

// Middleware para interpretar requisições URL-encoded (opcional, dependendo do formato de dados)
app.use(express.urlencoded({ extended: true }));

const port = 3333;

app.use(routes);

//Middleware de erro importado
app.use(errorHandler);

//Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => console.log(`Server is running in port ${port}`))