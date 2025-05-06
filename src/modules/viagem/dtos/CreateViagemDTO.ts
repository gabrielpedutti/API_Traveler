export interface CreateViagemDTO{
    nome: string;
    data_inicio?: Date;
    data_fim?: Date;
    usuario_id: number;
    status_viagem_id: number;
    viagem_destino_id: number;
}