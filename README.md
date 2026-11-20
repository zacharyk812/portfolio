# zacharyk.dev

My personal site and portfolio at **[zacharyk.dev](https://zacharyk.dev)**: what I've built, how it works, and what I'm writing about it. It's static [Astro](https://astro.build), served by Cloudflare.

## Develop

Needs Node 24 and pnpm.

```sh
pnpm install
pnpm dev        # http://localhost:4321, drafts included
pnpm build      # type-check, then build to dist/
pnpm preview    # serve dist/
```

```
src/pages/           index (home), work, writing, about, 404, rss.xml
src/layouts/         Base: <head>, header, footer
src/components/      Hero, WorkGroups, PostList, Article (the frame for long pages), Experience, Contact
src/components/mdx/  Callout, Decision, Figure: the components posts can use
src/content/work/    one file per project
src/content/writing/ one file per post
src/data/site.ts     profile, links, experience, skills
src/styles/          global.css (tokens and type), prose.css (long-form text)
public/              served as-is: _headers, _redirects, robots.txt, og.png, icons
```

## Editing content

- **Profile, links, experience, skills:** `src/data/site.ts`. Entries marked `placeholder: true` show up dimmed with a TODO tag until they're replaced.
- **Work:** one Markdown file per project in `src/content/work/`. Each becomes a page at `/work/<file-name>`. A project doesn't need a repo. If it has a public one, set `repo` and its latest release and last commit are read from the GitHub API at build time. Set `featured: true` to list it on the home page.
- **Writing:** dated posts in `src/content/writing/`, published at `/writing/<file-name>`. Set `project` to a work file name to list the post in that project's build log.
- **Drafts:** anything with `draft: true` only appears in `pnpm dev`. Two drafts are starting points to copy: `work/case-study-template.mdx` and `writing/writing-guide.mdx`.

Use `.mdx` instead of `.md` to get the components in `src/components/mdx/`. A fenced `mermaid` code block is drawn as a diagram in either format.

## Deploy

Pushing to `main` builds and deploys to the `portfolio` Cloudflare Worker ([`deploy.yml`](.github/workflows/deploy.yml)). Pull requests only build. To redeploy without a commit, use **Run workflow** in the Actions tab.

- `CLOUDFLARE_API_TOKEN` is a secret in the `production` environment, which only `main` can use. `CLOUDFLARE_ACCOUNT_ID` is a repository variable.
- The build reads public repo stats with the workflow's own `GITHUB_TOKEN`. Locally it works without one, and falls back to no stats if GitHub's anonymous rate limit is hit.
- To deploy from your machine: `pnpm exec wrangler login`, then `pnpm run deploy`.
- `public/_headers` sets the security headers and caches `/assets/` for a year.

## Maintenance

- `main` only takes pull requests, and `build` has to pass. CodeQL runs too, but isn't required.
- Renovate opens dependency PRs on Monday mornings, using the settings shared with the [Xena Studios](https://github.com/xena-studios/.github) repos.
