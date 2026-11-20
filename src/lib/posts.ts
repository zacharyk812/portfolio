import { getCollection } from "astro:content";

// Drafts show up in `pnpm dev` and are left out of production builds.
const visible = ({ data }: { data: { draft: boolean } }) => import.meta.env.DEV || !data.draft;

export async function getPosts() {
  const posts = await getCollection("writing", visible);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Posts filed under a work entry, newest first.
export async function getPostsFor(workId: string) {
  return (await getPosts()).filter((post) => post.data.project?.id === workId);
}

export async function getTags() {
  const counts = new Map<string, number>();
  for (const post of await getPosts()) {
    for (const tag of post.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

export async function getWork() {
  const entries = await getCollection("work", visible);
  return entries.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)
  );
}
