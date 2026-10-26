import { useI18n } from "vue-i18n";

export function useLocalized() {
  const { locale } = useI18n();

  const l = (value) => {
    if (value && typeof value === "object" && !Array.isArray(value) && "en" in value) {
      return value[locale.value] ?? value.en;
    }
    return value;
  };

  const num = (value) => value.toLocaleString(locale.value);

  return { l, num, locale };
}
