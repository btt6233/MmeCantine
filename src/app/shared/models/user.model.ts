export interface User {
  id: number;
  sex?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone?: string;
  password: string;
  adresse?: string;
  codePostal?: string;
  ville?: string;
  wallet?: number;
  isLunchLady?: boolean;
}
