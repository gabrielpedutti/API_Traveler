export interface UpdatePasseioDTO {
    id: number;
    nome?: string;
    tipo_id?: number;
    data?: Date;
    despesa_id?: number | null;
    viagem_id?: number | null;
    municipio_id?: number | null;
  }
  