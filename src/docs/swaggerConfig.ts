import swaggerJsDoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJsDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Traveler API",
      version: "1.0.0",
      description: "Documentação da API do Traveler",
    },
    components: {
        schemas: {
            Viagem: {
            type: "object",
            properties: {
                id: { type: "integer", example: 1 },
                nome: { type: "string", example: "Viagem a Salvador" },
                data_inicio: { type: "string", format: "date", example: "2025-12-01" },
                data_fim: { type: "string", format: "date", example: "2025-12-15" },
                usuario_id: { type: "integer", example: 1 },
                viagem_destino_id: { type: "integer", example: 200 },
                status_viagem_id: { type: "integer", example: 1 },
                created_at: { type: "string", format: "date-time", example: "2025-12-01T10:00:00Z" },
                updated_at: { type: "string", format: "date-time", example: "2025-12-01T10:00:00Z" }
                }
            }
        }
    },    
    servers: [
      {
        url: "http://localhost:3333",
      },
    ],
  },
  apis: ["./src/modules/**/*.ts", "./src/routes/**/*.ts"], // onde estão suas anotações
};

export const swaggerSpec = swaggerJsDoc(swaggerOptions);
