import 'server-only'
import type { Dictionary } from '@/lib/types/dictionary'

const dictionaries: Record<'en' | 'es', () => Promise<Dictionary>> = {
  en: () => import('./en.json').then((module) => module.default as Dictionary),
  es: () => import('./es.json').then((module) => module.default as Dictionary),
}

export const getDictionary = async (locale: 'en' | 'es'): Promise<Dictionary> =>
  dictionaries[locale]?.() ?? dictionaries.es()