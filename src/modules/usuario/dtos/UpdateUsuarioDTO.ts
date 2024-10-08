export interface UpdateUsuarioDTO {
  id: number;
  nome?: string;
  email?: string;
  senha?: string;
  cidade?: number | null;
}