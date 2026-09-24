# zacharyk.dev

My personal site and portfolio, built with [Astro](https://astro.build) and hosted on Cloudflare.

## Develop

```sh
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # static output in dist/
pnpm preview    # serve the production build
```

## Editing content

- **Profile, links, projects, experience, skills:** `src/data/site.ts`. Entries marked `placeholder: true` show up dimmed with a TODO tag until you replace them.
- **Project stats:** stars, language and last push come from the GitHub API at build time. Set `GITHUB_TOKEN` in the build environment to avoid the anonymous rate limit. The build still succeeds without it.
- **Blog posts:** add Markdown files to `src/content/blog/`. Frontmatter needs `title`, `description` and `date`. Posts with `draft: true` only appear in `pnpm dev`.

## Deploy (Cloudflare)

The site is fully static and served as Workers static assets (config in `wrangler.jsonc`). Bandwidth is free and unlimited.

**Option A: Git integration (recommended)**

1. Push this repo to GitHub.
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Import a repository** and pick it.
3. Build command: `pnpm build`. Deploy command: `npx wrangler deploy`.
4. Optionally add a `GITHUB_TOKEN` build variable.
5. Under **Settings → Domains & Routes**, add `zacharyk.dev` as a custom domain.

Every push to `main` then rebuilds and deploys.

**Option B: from your machine**

```sh
pnpm wrangler login
pnpm run deploy
```
