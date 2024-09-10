await new PurgeCSS().purge({
  skippedContentGlobs: ["node_modules/**", "components/**"],
});
