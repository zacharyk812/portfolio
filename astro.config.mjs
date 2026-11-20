import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://zacharyk.dev",
  integrations: [mdx(), sitemap()],
  build: {
    assets: "assets",
  },
  markdown: {
    // ```mermaid blocks are left as plain text and drawn in the browser.
    syntaxHighlight: { type: "shiki", excludeLangs: ["mermaid"] },
    shikiConfig: { theme: "github-dark-dimmed" },
  },
});
