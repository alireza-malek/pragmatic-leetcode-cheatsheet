import { ref, watch } from 'vue'

export type Language =
  | 'ts'
  | 'python'
  | 'java'
  | 'go'
  | 'cpp'
  | 'rust'
  | 'ruby'
  | 'csharp'
  | 'php'

const STORAGE_KEY = 'lc-cheatsheet-lang'
const DEFAULT_LANG: Language = 'ts'
const SUPPORTED_LANGUAGES: ReadonlySet<Language> = new Set([
  'ts',
  'python',
  'java',
  'go',
  'cpp',
  'rust',
  'ruby',
  'csharp',
  'php',
])

const language = ref<Language>(DEFAULT_LANG)
let initialized = false

export function useLanguage() {
  if (!initialized && typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored && SUPPORTED_LANGUAGES.has(stored as Language)) {
        language.value = stored as Language
      }
    } catch {
      // Ignore storage read issues.
    }
    watch(language, (value) => {
      try {
        localStorage.setItem(STORAGE_KEY, value)
      } catch {
        // Ignore storage write issues.
      }
    })
    initialized = true
  }

  function setLanguage(next: Language) {
    language.value = next
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // Ignore storage write issues.
      }
    }
  }

  return { language, setLanguage }
}
