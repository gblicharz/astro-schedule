// @ts-check
import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },

    imageService: "cloudflare"
  }),
  vite: {
    server: {
      https: {
        key: "./localhost-key.pem",
        cert: "./localhost.pem",
      },
    },
  },
  /*
  image: {
    domains: ["image.pbs.org"],
    service: imageService({
      fallbackService: "sharp",
      placeholder: "lqip",
      // This is the default
      layout: "constrained",      
    }),
  },
  */
});
