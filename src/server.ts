import e from 'express';
import { routes } from './routes'
import "express-async-errors";
import { AppError } from './errors/AppError';

const express = require('express')

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Middleware para interpretar requisições URL-encoded (opcional, dependendo do formato de dados)
app.use(express.urlencoded({ extended: true }));

const port = 3333;

app.use(routes);

app.use((err: Error, request: e.Request, response: e.Response, next: e.NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "error",
      message: err.message
    });
  }

  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`
  });
})

app.listen(port, () => console.log(`Server is running in port ${port}`))