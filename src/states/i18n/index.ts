import { ref } from 'vue'
import { en } from "./en";
import { pt } from "./pt";
import { I18N } from './i18nHelpers';

export const t = ref<I18N>(en)

export const languages: Record<string, I18N> = { en, pt }

export function setLanguage(language: keyof typeof languages) {
    t.value = languages[language]
}
