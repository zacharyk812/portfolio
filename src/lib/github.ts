import type { Project } from "../data/site";

export type RepoStats = {
  stars: number;
  language: string | null;
  updated: string | null;
  url: string;
};

// Runs at build time only. Set GITHUB_TOKEN to avoid the 60 req/hour
// anonymous rate limit; without it the site still builds, just with
// fallback values if the API is unavailable.
export async function getRepoStats(project: Project): Promise<RepoStats> {
  const url = `https://github.com/${project.repo}`;
  const fallback: RepoStats = { stars: 0, language: project.tags[0] ?? null, updated: null, url };

  try {
    const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
    const token = import.meta.env.GITHUB_TOKEN;
    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(`https://api.github.com/repos/${project.repo}`, { headers });
    if (!res.ok) return fallback;
    const data = await res.json();
    return {
      stars: data.stargazers_count ?? 0,
      language: data.language ?? fallback.language,
      updated: data.pushed_at ?? null,
      url: data.html_url ?? url,
    };
  } catch {
    return fallback;
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
