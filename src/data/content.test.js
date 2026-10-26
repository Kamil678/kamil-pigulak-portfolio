import { describe, expect, it } from "vitest";
import { PROJECTS, findProject } from "./projects";
import { EXPERIENCES } from "./experiences";
import { SKILL_CATEGORIES, SKILL_TIERS } from "./skills";

// Every { en, pl } object in the content must have both translations filled in.
function findMissingTranslations(value, path = "") {
  if (Array.isArray(value)) return value.flatMap((item, index) => findMissingTranslations(item, `${path}[${index}]`));
  if (!value || typeof value !== "object") return [];
  if ("en" in value || "pl" in value) {
    return ["en", "pl"].filter((locale) => typeof value[locale] !== "string" || !value[locale].trim()).map((locale) => `${path}.${locale}`);
  }
  return Object.entries(value).flatMap(([key, item]) => findMissingTranslations(item, path ? `${path}.${key}` : key));
}

describe("content", () => {
  it("has every translatable field in both languages", () => {
    expect(findMissingTranslations({ PROJECTS, EXPERIENCES })).toEqual([]);
  });

  it("uses unique project slugs", () => {
    const slugs = PROJECTS.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("finds projects by slug", () => {
    expect(findProject(PROJECTS[0].slug)).toBe(PROJECTS[0]);
    expect(findProject("missing")).toBeUndefined();
  });

  it("assigns every skill to a known tier", () => {
    const skills = SKILL_CATEGORIES.flatMap((category) => category.skills);
    expect(skills.filter((skill) => !SKILL_TIERS.includes(skill.tier))).toEqual([]);
  });
});
