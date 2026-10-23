import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const read = (path) => readFileSync(new URL(path, import.meta.url), "utf8");

describe("Content Security Policy", () => {
  it("allows every inline script in index.html by its hash", () => {
    const csp = read("../public/_headers").match(/Content-Security-Policy: (.*)/)[1];
    const inlineScripts = [...read("../index.html").matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);

    expect(inlineScripts.length).toBeGreaterThan(0);
    for (const script of inlineScripts) {
      const hash = createHash("sha256").update(script).digest("base64");
      expect(csp).toContain(`'sha256-${hash}'`);
    }
  });
});
