export interface CreateHospedagemDTO {
    nome: string;
    tipo_id: number; 
    data_checkin: Date;
    data_checkout: Date;
    // despesa_id: number;
    viagem_id: number;
    endereco: string;
    documento_anexo: string;
    valor: number;
  }  