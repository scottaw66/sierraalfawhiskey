import { defineConfig } from "astro/config";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import remarkGfm from "remark-gfm";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://sierraalfawhiskey.com/",
  trailingSlash: "ignore",
  outDir: "dist",
  integrations: [
    sitemap(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [remarkGfm],
    extendDefaultPlugins: true,
  },
  vite: {
    ssr: {
      external: ["svgo"],
    },
  },
});
