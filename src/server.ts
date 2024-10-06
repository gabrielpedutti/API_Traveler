import { routes } from './routes'

const express = require('express')

const app = express();

// Middleware para interpretar JSON
app.use(express.json());

// Middleware para interpretar requisições URL-encoded (opcional, dependendo do formato de dados)
app.use(express.urlencoded({ extended: true }));

const port = 3333;

app.use(routes);

app.listen(port, () => console.log(`Server is running in port ${port}`))