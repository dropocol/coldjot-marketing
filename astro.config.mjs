// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://www.coldjot.com",
  // site: "https://dropocol.github.io",
  trailingSlash: "never",
  integrations: [react(), tailwind()],
  build: {
    assets: "assets",
  },
});
