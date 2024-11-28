export interface CreateTransporteDTO {
    nome: string;
    tipo_id: number;
    data: Date;
    despesa_id: number;
    viagem_id: number;
    transporte_origem_id: number;
    transporte_destino_id: number;
  }
  