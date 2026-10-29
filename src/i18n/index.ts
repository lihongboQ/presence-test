import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import es from './locales/es.json'
import zh from './locales/zh.json'

const STORAGE_KEY = 'cove-locale'
export const LOCALES = ['en', 'es', 'zh'] as const
export type Locale = (typeof LOCALES)[number]

const saved =
  typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null

const initialLng: Locale =
  saved === 'es' || saved === 'en' || saved === 'zh' ? saved : 'en'

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    zh: { translation: zh },
  },
  lng: initialLng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

i18n.on('languageChanged', (lng) => {
  localStorage.setItem(STORAGE_KEY, lng)
  document.documentElement.lang = lng === 'zh' ? 'zh-CN' : lng
})

document.documentElement.lang =
  i18n.language === 'zh' ? 'zh-CN' : i18n.language

export default i18n
