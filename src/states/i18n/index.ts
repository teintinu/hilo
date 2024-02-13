import { ref } from 'vue'
import { English } from "./en";
import { Portugues } from "./pt";
import { Espanol } from './es';
import { Francais } from './fr';
import { Deutsch } from './de';
import { 日本語 } from './jp';
import { 中文 } from './cn';
import { Pусский } from './ru';
import { I18N } from './i18nHelpers';

export const t = ref<I18N>(English)

export const languages: Record<string, I18N> = { English, Portugues, Espanol, Francais, Deutsch, 日本語, 中文, Pусский }

export function setLanguage(language: keyof typeof languages) {
    t.value = languages[language]
}
