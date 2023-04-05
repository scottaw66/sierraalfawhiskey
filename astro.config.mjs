import { defineConfig } from "astro/config";
import pagefind from "astro-pagefind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
  },
  image: {
    service: "astro/assets/services/sharp",
  },
  site: "https://sierraalfawhiskey.com/",
  trailingSlash: "ignore",
  outDir: "dist",
  integrations: [pagefind(), sitemap()],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
