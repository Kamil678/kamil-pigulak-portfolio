import { createI18n } from "vue-i18n";
import en from "./messages/en";
import pl from "./messages/pl";

export const LOCALES = ["en", "pl"];
const STORAGE_KEY = "locale";

function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LOCALES.includes(saved)) return saved;
  } catch {}
  return navigator.language?.toLowerCase().startsWith("pl") ? "pl" : "en";
}

export const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: "en",
  messages: { en, pl },
  pluralRules: {
    pl: (n) => {
      if (n === 1) return 0;
      if (!Number.isInteger(n)) return 3;
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
  } catch {}
}

document.documentElement.lang = i18n.global.locale.value;
