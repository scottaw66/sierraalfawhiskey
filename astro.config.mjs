import { defineConfig } from "astro/config";
import embeds from "astro-embed/integration";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sierraalfawhiskey.com/",
  trailingSlash: "ignore",
  outDir: "dist",
  integrations: [
    embeds(),
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
