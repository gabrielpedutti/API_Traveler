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
              },
              Hospedagem: {
              type: "object",
              properties: {
                id: { type: "integer", example: 1 },
                nome: { type: "string", example: "Hotel Central" },
                tipo_id: { type: "integer", example: 2 },
                data_checkin: { type: "string", format: "date-time", example: "2025-07-01T14:00:00Z" },
                data_checkout: { type: "string", format: "date-time", example: "2025-07-05T12:00:00Z" },
                despesa_id: { type: "integer", example: 10 },
                viagem_id: { type: "integer", example: 5 },
                endereco: { type: "string", nullable: true, example: "Av. das Nações, 123 - Centro" },
                documento_anexo: { type: "string", nullable: true, example: "comprovante_hotel.pdf" },
                created_at: { type: "string", format: "date-time", example: "2025-06-10T10:00:00Z" },
                updated_at: { type: "string", format: "date-time", example: "2025-06-10T10:00:00Z" },
                usuario_id: { type: "integer", example: 1 },
                tipo_hospedagem: {
                  type: "object",
                  properties: {
                    descricao: { type: "string", example: "Hotel" },
                  },
                },
                despesa: {
                  type: "object",
                  properties: {
                    valor: { type: "number", example: 450.0 },
                  },
                },
              },
              required: ["nome", "tipo_id", "data_checkin", "data_checkout", "viagem_id", "usuario_id"],
            },
            Transporte: {
            type: "object",
            properties: {
              id: { type: "integer", example: 1 },
              nome: { type: "string", example: "Voo para Brasília" },
              tipo_id: { type: "integer", example: 2 },
              data: { type: "string", format: "date-time", example: "2025-12-02T14:00:00Z" },
              despesa_id: { type: "integer", example: 12 },
              viagem_id: { type: "integer", example: 5 },
              transporte_destino_id: { type: "integer", example: 250 },
              documento_anexo: { type: "string", nullable: true, example: "passagem_voo.pdf" },
              created_at: { type: "string", format: "date-time", example: "2025-11-01T10:00:00Z" },
              updated_at: { type: "string", format: "date-time", example: "2025-11-01T10:00:00Z" },
              usuario_id: { type: "integer", example: 1 },
              tipo_transporte: {
                type: "object",
                properties: {
                  descricao: { type: "string", example: "Aéreo" },
                },
              },
              despesa: {
                type: "object",
                properties: {
                  valor: { type: "number", example: 850.0 },
                },
              },
            },
            },
            Passeio: {
            type: "object",
            properties: {
              id: { type: "integer", example: 1 },
              nome: { type: "string", example: "Cristo Redentor" },
              tipo_id: { type: "integer", example: 3 },
              data: { type: "string", format: "date-time", example: "2025-12-03T10:00:00Z" },
              despesa_id: { type: "integer", example: 10 },
              viagem_id: { type: "integer", example: 5 },
              documento_anexo: { type: "string", nullable: true, example: "ticket_cristo.pdf" },
              created_at: { type: "string", format: "date-time", example: "2025-11-01T10:00:00Z" },
              updated_at: { type: "string", format: "date-time", example: "2025-11-02T10:00:00Z" },
              usuario_id: { type: "integer", example: 1 },
              tipo_passeio: {
                type: "object",
                properties: {
                  descricao: { type: "string", example: "Cultural" },
                },
              },
              despesa: {
                type: "object",
                properties: {
                  valor: { type: "number", example: 120.00 },
                },
              },
            },
          },
          Despesa: {
          type: "object",
          properties: {
            id: { type: "integer", example: 1 },
            descricao: { type: "string", example: "Passagem aérea para evento" },
            valor: { type: "number", format: "float", example: 1200.50 },
            data: { type: "string", format: "date", example: "2025-12-01" },
            viagem_id: { type: "integer", example: 5 },
            tipo_despesa_id: { type: "integer", example: 2 },
            usuario_id: { type: "integer", example: 1 },
            created_at: { type: "string", format: "date-time", example: "2025-11-01T10:00:00Z" },
            updated_at: { type: "string", format: "date-time", example: "2025-11-02T10:00:00Z" },
            tipo_despesa: {
              type: "object",
              properties: {
                descricao: { type: "string", example: "Transporte" },
              },
            },
          },
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
