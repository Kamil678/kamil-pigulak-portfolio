import { useI18n } from "vue-i18n";

// Content in src/data/ stores translatable fields as { en, pl }.
// `l(field)` picks the current locale and passes plain values through unchanged.
export function useLocalized() {
  const { locale } = useI18n();

  const l = (value) => {
    if (value && typeof value === "object" && !Array.isArray(value) && "en" in value) {
      return value[locale.value] ?? value.en;
    }
    return value;
  };

  return { l, locale };
}
