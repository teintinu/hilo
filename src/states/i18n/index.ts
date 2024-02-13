import { ref } from 'vue'
import { English } from "./en";
import { Portugues } from "./pt";
import { Espanol } from './es';
import { I18N } from './i18nHelpers';

export const t = ref<I18N>(English)

export const languages: Record<string, I18N> = { English, Portugues, Espanol }

export function setLanguage(language: keyof typeof languages) {
    t.value = languages[language]
}
