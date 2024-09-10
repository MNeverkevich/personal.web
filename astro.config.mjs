import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";
import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-stest.web',
  integrations: [
    tailwind(),
    critters(),
    purgecss('./purgecss.config.js')
  ],
  server: {
    port: 3000,
    host: true
  }
});