import { describe, expect, it } from "vitest";
import en from "./messages/en";
import pl from "./messages/pl";
import { i18n, setLocale } from ".";

const keysOf = (messages, prefix = "") =>
  Object.entries(messages).flatMap(([key, value]) => {
    const path = prefix ? `${prefix}.${key}` : key;
    return value && typeof value === "object" && !Array.isArray(value) ? keysOf(value, path) : [path];
  });

describe("i18n", () => {
  it("has the same keys in English and Polish", () => {
    expect(keysOf(pl).sort()).toEqual(keysOf(en).sort());
  });

  it.each([
    [1, "rok"],
    [2, "lata"],
    [4, "lata"],
    [5, "lat"],
    [12, "lat"],
    [22, "lata"],
    [4.5, "roku"],
  ])("uses the right Polish plural form for %s", (count, expected) => {
    setLocale("pl");
    expect(i18n.global.t("about.statYears", count).split(" ")[0]).toBe(expected);
  });

  it("updates the document language when the locale changes", () => {
    setLocale("en");
    expect(document.documentElement.lang).toBe("en");
    setLocale("pl");
    expect(document.documentElement.lang).toBe("pl");
  });

  it("ignores unsupported locales", () => {
    setLocale("pl");
    setLocale("de");
    expect(i18n.global.locale.value).toBe("pl");
  });
});
