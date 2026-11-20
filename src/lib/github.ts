export type RepoStats = {
  stars: number;
  language: string | null;
  updated: string | null;
  release: string | null;
  url: string;
};

// Kept on globalThis so the dev server doesn't refetch on every reload.
const store = globalThis as typeof globalThis & { __repoStats?: Map<string, Promise<RepoStats>> };
const cache = (store.__repoStats ??= new Map());

// Runs at build time only. Set GITHUB_TOKEN to avoid the 60 req/hour
// anonymous rate limit; without it the site still builds, just with
// fallback values if the API is unavailable.
export function getRepoStats(repo: string, fallbackLanguage: string | null = null) {
  let stats = cache.get(repo);
  if (!stats) {
    stats = fetchRepoStats(repo, fallbackLanguage);
    cache.set(repo, stats);
  }
  return stats;
}

async function fetchRepoStats(repo: string, fallbackLanguage: string | null): Promise<RepoStats> {
  const url = `https://github.com/${repo}`;
  const fallback: RepoStats = { stars: 0, language: fallbackLanguage, updated: null, release: null, url };

  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  const token = import.meta.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, { headers });
    if (!res.ok) return fallback;
    const data = await res.json();
    return {
      stars: data.stargazers_count ?? 0,
      language: data.language ?? fallbackLanguage,
      updated: data.pushed_at ?? null,
      release: await latestRelease(repo, headers),
      url: data.html_url ?? url,
    };
  } catch {
    return fallback;
  }
}

// Only plain version tags ("v1.2.0") are shown. Monorepos tag each package
// separately ("zchat-v3.2.0"), which says nothing about the repo as a whole.
async function latestRelease(repo: string, headers: Record<string, string>) {
  try {
    const res = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, { headers });
    if (!res.ok) return null;
    const tag: unknown = (await res.json()).tag_name;
    return typeof tag === "string" && /^v?\d+\.\d+/.test(tag) ? tag.replace(/^v/, "") : null;
  } catch {
    return null;
  }
}

export function formatDate(date: Date | string) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}
