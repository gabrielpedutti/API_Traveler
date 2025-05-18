export interface UpdatePasseioDTO {
    id: number;
    nome?: string;
    tipo_id?: number;
    data?: Date;
    despesa_id: number;
    viagem_id: number;
    valor?: number;
    documento_anexo?: string;
  }
  