import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  site: "https://sierraalfawhiskey.com/",
  outDir: "dist",
  integrations: [pagefind(), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
