import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import critters from "astro-critters";
import purgecss from "astro-purgecss";
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-stest.web',
  integrations: [
    tailwind(),
    compress(),
    critters(),
    purgecss('./purgecss.config.js'),
    sitemap()
  ],
  server: {
    port: 3000,
    host: true
  }
});