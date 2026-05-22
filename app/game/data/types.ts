import type { SpriteKey } from './sprites';

export type CorBala = 'Roxas' | 'Verdes' | 'Rosas';

export type EscolhaNarrativa = {
  texto: string;
  proxima: string;
};

export type Dialogo = {
  texto: string;
  nome: string;
  sprite?: SpriteKey;
  manterSprites?: readonly SpriteKey[];
  falaCorEscolhida?: boolean;
  escolhaBalinhas?: boolean;
  escolhas?: EscolhaNarrativa[];
  background?: any;
};