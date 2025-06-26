import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";
import purgecss from "astro-purgecss";

import sentry from "@sentry/astro";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-stest.web',
  integrations: [
    tailwind(),
    critters(),
    purgecss('./purgecss.config.js'),
    sentry({
      dsn: "https://0dc12dce03c41a8f790b61ee42817019@o4509564935471104.ingest.de.sentry.io/4509565335175248",
      tracesSampleRate: 0,
      replaysSessionSampleRate: 0,
      replaysOnErrorSampleRate: 0,
      sendDefaultPii: true,
      sourceMapsUploadOptions: {
        project: "javascript-astro",
        authToken: process.env.SENTRY_AUTH_TOKEN,
      },
    })
  ],
  server: {
    port: 3000,
    host: true
  }
});