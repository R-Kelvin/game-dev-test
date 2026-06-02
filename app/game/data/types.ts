import type { SpriteKey } from './sprites';

export type CorBala = 'Roxas' | 'Verdes' | 'Rosas';

export type EscolhaNarrativa = {
  texto: string;
  proxima: string;
};

export type SFXKey =
  | 'cadeiras_arrastando'
  | 'onibus_freio'
  | 'lanterna_click'
  | 'lanterna_falha'
  | 'passos_beco'
  | 'sino_loja'
  | 'porta_casa'
  | 'vela'
  | 'cochicho'
  | 'luz_falhando'
  | 'impacto_terror'
  | 'corrida'
  | 'respiracao'
  | 'baleiro'
  | 'professora_mesa'
  | 'refeitorio'
  | 'passos_afastando'
  | 'chuva_inicio'
  | 'chuva'
  | 'passos_molhado'
  | 'salto_chuva'
  | 'distorcao'
  | 'grito'
  | 'puxao'
  | 'porta_tranca'
  | 'macaneta'
  | 'apito'
  | 'onibus_queda'
  | 'hospital'
  | 'lampadas_piscando'
  | 'vela_apagando';

export type Dialogo = {
  texto: string;
  nome: string;
  sprite?: SpriteKey;
  manterSprites?: readonly SpriteKey[];
  falaCorEscolhida?: boolean;
  escolhaBalinhas?: boolean;
  escolhas?: EscolhaNarrativa[];
  background?: any;

  ambience?: 'escola' | 'vento' | 'chuva' | 'vazio' | null;
  bgm?: 'alegria' | 'alegriadois' | 'tristeza' | 'tensao' | 'menu' | 'ato1' | 'ato2' | 'ato3' | null;
  sfx?: SFXKey;
};