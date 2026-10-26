import { describe, expect, it } from "vitest";
import { PROFILE, yearsOfExperience } from "./profile";

describe("yearsOfExperience", () => {
  const start = new Date(PROFILE.careerStart);
  const after = (years) => new Date(start.getTime() + years * 365.25 * 24 * 60 * 60 * 1000);

  it("counts whole years since the career start", () => {
    expect(yearsOfExperience(after(3))).toBe(3);
  });

  it("rounds to the nearest half year", () => {
    expect(yearsOfExperience(after(4.4))).toBe(4.5);
    expect(yearsOfExperience(after(4.2))).toBe(4);
    expect(yearsOfExperience(after(4.8))).toBe(5);
  });
});
