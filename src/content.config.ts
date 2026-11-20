import { defineCollection, reference } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

// Things I've built. A work entry is a page of its own, so a project
// doesn't need a public repo to be shown: the write-up is the artifact.
const work = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    // Which group the entry is listed under. Keys of `orgs` in src/data/site.ts.
    org: z.enum(["xena", "independent"]).default("independent"),
    kind: z.enum(["tool", "plugins", "server", "app", "infrastructure", "homelab", "security"]),
    status: z.enum(["shipped", "public beta", "in development", "ongoing", "archived"]),
    role: z.string().optional(),
    period: z.string().optional(), // e.g. "2025 – present"
    stack: z.array(z.string()).default([]),
    repo: z.string().optional(), // "owner/name" on GitHub, public repos only
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
    featured: z.boolean().default(false), // shown on the home page
    order: z.number().default(100), // lower sorts first
    draft: z.boolean().default(false),
  }),
});

// Dated posts. Set `project` to a work entry's file name to file the post
// under that project's build log.
const writing = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string().transform((t) => t.toLowerCase().trim().replace(/\s+/g, "-"))).default([]),
    project: reference("work").optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { work, writing };
