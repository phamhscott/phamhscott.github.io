// content.config.ts — defines your blog "collection".
//
// A collection is a folder of content (here: Markdown files in
// src/content/blog) PLUS a "schema" describing the frontmatter each file must
// have. If a post is missing a required field or uses the wrong type, the
// build fails with a clear message — a handy safety net.

import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  // The loader tells Astro where the files for this collection live.
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),

  // The schema validates each post's frontmatter (the part between --- fences).
  // `z` is Zod, a tiny library for describing and checking data shapes.
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // z.coerce.date() turns the "2026-07-03" text in a file into a real Date.
    pubDate: z.coerce.date(),
    // Optional: set `draft: true` in a post to hide it from the live site.
    draft: z.boolean().default(false),
  }),
});

// Every collection you define must be listed in this exported object.
export const collections = { blog };
