import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Icons from "unplugin-icons/vite";
import VueI18n from "@intlify/unplugin-vue-i18n/vite";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { PROJECTS } from "./src/data/projects.js";

const SITE_URL = "https://kamilpigulak.com";

function sitemap() {
  return {
    name: "sitemap",
    apply: "build",
    generateBundle() {
      const lastmod = new Date().toISOString().slice(0, 10);
      const paths = ["/", ...PROJECTS.map((project) => `/work/${project.slug}`)];
      const urls = paths.map((path) => `  <url>\n    <loc>${SITE_URL}${path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`);

      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
      });
    },
  };
}

function productionHeaders() {
  const rules = readFileSync(new URL("./public/_headers", import.meta.url), "utf8").split(/\n(?=\S)/);
  const pageRule = rules.find((rule) => rule.startsWith("/*\n"));
  return Object.fromEntries(
    pageRule
      .split("\n")
      .slice(1)
      .filter(Boolean)
      .map((line) =>
        line
          .trim()
          .split(/:\s(.*)/s)
          .slice(0, 2),
      ),
  );
}

export default defineConfig({
  plugins: [
    vue(),
    VueI18n({ include: fileURLToPath(new URL("./src/i18n/messages/**", import.meta.url)) }),
    Icons({ compiler: "vue3", scale: 1 }),
    sitemap(),
  ],
  preview: {
    headers: productionHeaders(),
  },
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.js"],
  },
});
