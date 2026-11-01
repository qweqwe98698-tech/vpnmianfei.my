// UI strings, one module per language.
import { site } from '../config';
import en from './en';
import ko from './ko';
import zh from './zh';

export type Strings = typeof en;

const strings: Record<string, Strings> = { en, ko, zh };

/** The chrome for a page. Anything unknown falls back to the language the site is set in. */
export const t = (locale: string | undefined = site.locale): Strings =>
  strings[locale ?? ''] ?? strings[site.locale] ?? zh;
