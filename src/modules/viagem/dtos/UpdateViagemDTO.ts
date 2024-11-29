export interface UpdateViagemDTO {
    id: number;
    nome?: string;
    descricao?: string;
    viagem_origem_id?: number | null;
    viagem_destino_id?: number | null;
    data_inicio?: Date | null;
    data_fim?: Date | null;
    usuario_id?: number | null;
    status_viagem_id?: number | null;
  }
  