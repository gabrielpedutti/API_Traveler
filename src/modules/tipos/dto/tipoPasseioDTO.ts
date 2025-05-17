export class TipoPasseioDTO {
  id: number;
  descricao: string;

  constructor(data: { id: number; descricao: string }) {
    this.id = data.id;
    this.descricao = data.descricao;
  }
}