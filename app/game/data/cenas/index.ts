import { ato1 } from './ato1';
import { ato2 } from './ato2';
import { ato3 } from './ato3';

export const cenas = {
  ...ato1,
  ...ato2,
  ...ato3,
} as const;

export type CenaKey = keyof typeof cenas;

export type CorBala = 'Rosas' | 'Verdes' | 'Roxas';
