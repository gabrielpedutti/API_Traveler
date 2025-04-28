export interface UpdateTransporteDTO {
    id: number;
    nome?: string;
    tipo_id?: number;
    data?: Date;
    despesa_id?: number | null;
    viagem_id?: number | null;
    transporte_origem_id?: number | null;
    transporte_destino_id?: number | null;
  }
  