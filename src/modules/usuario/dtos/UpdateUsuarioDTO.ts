export interface UpdateUsuarioDTO {
  id: number;
  nome?: string;
  email?: string;
  senha?: string;
  municipio_id?: number | null;
}