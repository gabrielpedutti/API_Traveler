export interface CreateDespesaDTO {
    descricao: string;
    valor: number;
    data: Date;
    usuario_id: number;
    viagem_id: number;
    tipo_despesa_id: number;
  }
  