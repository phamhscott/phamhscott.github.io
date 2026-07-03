# Scott's Website

My personal portfolio + blog, built with [Astro](https://astro.build). This
README is a **guided tour**: what each part does and where to change things.

## Running it locally

```bash
npm install     # one time, to download Astro
npm run dev      # start the dev server at http://localhost:4321
```

The dev server auto-reloads as you save files. Stop it with `Ctrl + C`.

Other commands:

```bash
npm run build    # build the production site into dist/
npm run preview  # preview that production build locally
```

## How it all fits together

Astro builds pages by composing small pieces. From the outside in:

```
A page (e.g. index.astro)
  └─ uses a LAYOUT (BaseLayout.astro = the <head>, header, footer)
       └─ which pulls in COMPONENTS (Header, Footer, ThemeToggle, ProjectCard)
       └─ all styled by design tokens in styles/global.css
```

You write a page, wrap it in a layout so it gets the shared shell, and the
layout reuses components. Change something in a layout or component once, and
every page that uses it updates.

## Where to edit things

| I want to…                       | Edit this file                              |
| -------------------------------- | ------------------------------------------- |
| Change colors / fonts / spacing  | `src/styles/global.css` (the `:root` block) |
| Edit the intro / About text      | `src/pages/index.astro` (the hero section)  |
| Add or change a project          | `src/data/projects.ts`                      |
| Change how project cards look    | `src/components/ProjectCard.astro`          |
| Edit contact links               | `src/pages/index.astro` (the `links` object)|
| Change the nav bar               | `src/components/Header.astro`               |
| Change the footer                | `src/components/Footer.astro`               |
| **Write a new blog post**        | add a file in `src/content/blog/` (see below)|

## Writing a blog post

1. Copy `src/content/blog/hello-world.md` to a new file, e.g.
   `my-first-real-post.md`. **The filename becomes the URL**
   (`/blog/my-first-real-post/`).
2. Edit the frontmatter at the top (between the `---` lines):

   ```yaml
   ---
   title: "Your title here"
   description: "One-line summary shown in the blog list."
   pubDate: 2026-07-10
   # draft: true   # ← uncomment to hide the post from the live site
   ---
   ```

3. Write your post below the frontmatter in Markdown.
4. Save — it appears on `/blog` automatically, newest first.

## Project structure

```
src/
  pages/            Each file = a page/route
    index.astro       the home page  ("/")
    blog/index.astro  the blog list  ("/blog")
    blog/[...id].astro one template that renders every post
  layouts/          Page "shells" that pages wrap themselves in
    BaseLayout.astro     head + header + footer (used by every page)
    BlogPostLayout.astro post title/date frame (wraps BaseLayout)
  components/        Reusable UI pieces
  data/projects.ts   your project list (data, separate from markup)
  content/blog/      your blog posts (Markdown)
  content.config.ts  rules for what a blog post's frontmatter must contain
  styles/global.css  design tokens + base styles
public/              files served as-is (favicon, images, etc.)
```

## Deploying (when you're ready)

The site builds to static files, so free hosts work with zero config.

**Vercel or Netlify (recommended):**

1. Push this folder to a GitHub repository.
2. In [Vercel](https://vercel.com) or [Netlify](https://netlify.com), click
   "New project" and pick your repo. It auto-detects Astro — just accept the
   defaults (build command `npm run build`, output directory `dist`).
3. Every time you push to GitHub, it redeploys automatically.

**Custom domain:** once deployed, add your domain in the host's dashboard under
Domains, and follow their DNS instructions. Then update `site` in
`astro.config.mjs` to your real URL.
```
