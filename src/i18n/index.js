import { createI18n } from "vue-i18n";
import en from "./messages/en";
import pl from "./messages/pl";

export const LOCALES = ["en", "pl"];
const STORAGE_KEY = "locale";

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LOCALES.includes(saved)) return saved;
  } catch {
    // storage unavailable — fall through to browser language
  }
  return navigator.language?.toLowerCase().startsWith("pl") ? "pl" : "en";
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: "en",
  messages: { en, pl },
  pluralRules: {
    // "rok | lata | lat": 1 → 0, 2–4 (not 12–14) → 1, everything else → 2
    pl: (n) => {
      if (n === 1) return 0;
      const mod10 = n % 10;
      const mod100 = n % 100;
      return mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14) ? 1 : 2;
    },
  },
});

export function setLocale(locale) {
  if (!LOCALES.includes(locale)) return;
  i18n.global.locale.value = locale;
  document.documentElement.lang = locale;
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // ignore — the choice just won't persist
  }
}

document.documentElement.lang = i18n.global.locale.value;
