export interface CreateTransporteDTO {
    nome: string;
    tipo_id: number;
    data: Date;
    viagem_id: number;
    transporte_destino_id: number;
    documento_anexo: string;
    valor: number;
  }
  