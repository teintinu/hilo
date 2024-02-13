import { ref } from 'vue'
import { English } from "./en";
import { Portugues } from "./pt";
import { Espanol } from './es';
import { Francais } from './fr';
import { Deutsch } from './de';
import { 日本語 } from './jp';
import { 中文 } from './cn';
import { Pусский } from './ru';
import { हिन्दी } from './hindi';
import { Indonesian } from './id';
import { 한국어 } from './kr';
import { Polski } from './pl';
import { Türkçe } from './tr';
import { TiếngViệt } from './vn';
import { Suomen } from './fi';
import { اَلْعَرَبِيَّةُ } from './sa';
import { I18N } from './i18nHelpers';

export const t = ref<I18N>(English)

export const languages: Record<string, I18N> = { English, Portugues, Espanol, Francais, Deutsch, 日本語, 中文, Pусский, हिन्दी, Indonesian, 한국어, Polski, Türkçe, TiếngViệt, Suomen, اَلْعَرَبِيَّةُ }

export function setLanguage(language: keyof typeof languages) {
    t.value = languages[language]
}
