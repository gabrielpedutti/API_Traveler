export interface UpdateTransporteDTO {
  id: number;
  nome?: string;
  tipo_id?: number;
  data?: Date;
  viagem_id: number;
  despesa_id: number;
  transporte_destino_id?: number;
  documento_anexo?: string;
  valor?: number;
  }
  