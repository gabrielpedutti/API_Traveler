export interface UpdateHospedagemDTO {
    id: number;
    nome?: string;
    tipo_id?: number;
    tipo_hospedagem_id: number;
    data_checkin?: Date;
    data_checkout?: Date;
    despesa_id?: number | null;
    viagem_id?: number | null;
    municipio_id?: number | null;
  }
