import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zacharyk.dev",
  integrations: [sitemap()],
  build: {
    assets: "assets",
  },
  markdown: {
    shikiConfig: { theme: "github-dark-dimmed" },
  },
});
