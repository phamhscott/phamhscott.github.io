// @ts-check
import { defineConfig } from "astro/config";

// This is Astro's config file. For a simple static site there's very little to
// set here. Full reference:
// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  // `site` is your final public URL. It's used to build absolute links for
  // things like RSS feeds and sitemaps.
  // This is a GitHub *user* page (served at the root), so no `base` is needed.
  site: "https://phamhscott.github.io",
});
