// Everything personal lives here. Entries marked `placeholder: true`
// render dimmed with a TODO tag so they're easy to spot and replace.

export const site = {
  name: "Zachary",
  handle: "zacharyk812",
  role: "Full-stack developer",
  url: "https://zacharyk.dev",
  description:
    "Zachary is a full-stack developer building websites, Discord bots and Minecraft servers.",
  bio: [
    "I'm a full-stack developer passionate about building websites, Discord bots and Minecraft servers.",
    "I work with modern frameworks like React, Next.js, Svelte and Astro to create fast, accessible web apps, and on the backend with Go, Java and Docker. I run servers on Linux with NGINX and Pterodactyl.",
  ],
  location: "United States",
};

export type Link = {
  label: string;
  href: string;
  icon: "github" | "mail" | "discord";
  placeholder?: boolean;
};

export const links: Link[] = [
  { label: "GitHub", href: "https://github.com/zacharyk812", icon: "github" },
  { label: "Discord", href: "https://discord.com/users/293074588970254337", icon: "discord" },
  { label: "Email", href: "mailto:zacharyk812@gmail.com", icon: "mail" },
];

export type Project = {
  repo: string; // "owner/name" on GitHub
  name: string;
  summary: string;
  details: string[];
  tags: string[];
  href?: string; // live site / download page, if any
};

// Featured projects, in display order. Stars, language and last-updated
// are pulled from the GitHub API at build time.
export const projects: Project[] = [
  {
    repo: "zacharyk812/zChat",
    name: "zChat",
    summary: "A Spigot plugin to format and manage chat on a Minecraft server.",
    details: [
      "Simple, config-driven chat formatting for server owners",
      "Built on the Spigot API",
    ],
    tags: ["Java", "Spigot", "Minecraft"],
  },
  {
    repo: "zacharyk812/NoCommandPrefixes",
    name: "NoCommandPrefixes",
    summary:
      "Completely removes command fallback prefixes. Removed commands can't be run or even tab-completed.",
    details: [
      "Hides plugin:command style prefixes from players",
      "Blocks both execution and tab-completion",
    ],
    tags: ["Java", "Spigot", "Minecraft"],
  },
];

export type Job = {
  role: string;
  org: string;
  period: string;
  summary: string;
  placeholder?: boolean;
};

// Newest first.
export const experience: Job[] = [
  {
    role: "Manager",
    org: "Siegelands",
    period: "Apr – Jul 2024",
    summary:
      "Oversaw server infrastructure and led the development team, ensuring smooth operations and successful implementation of new features.",
  },
  {
    role: "Manager",
    org: "ArmorUp",
    period: "Jun – Aug 2023",
    summary:
      "Supervised server infrastructure and coordinated development efforts, focusing on stability, scalability, and efficient project execution.",
  },
  {
    role: "Owner",
    org: "Flicked",
    period: "Jun – Aug 2022",
    summary:
      "Managed all aspects of server infrastructure and development, including team leadership, project planning, and ensuring optimal server performance.",
  },
  {
    role: "Lead Developer",
    org: "Weaken",
    period: "Apr – Jun 2022",
    summary:
      "Led the development and technical direction of the Weaken Minecraft server, overseeing feature implementation, code quality, and team collaboration.",
  },
];

export type SkillGroup = { label: string; items: string[]; placeholder?: boolean };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Java", "Go", "Rust", "TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Frontend", items: ["HTML", "CSS", "React", "Next.js", "TanStack", "Svelte", "Astro"] },
  { label: "Backend", items: ["Node.js", "Go", "Java"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { label: "Infra", items: ["Linux", "Docker", "NGINX", "Pterodactyl"] },
  { label: "Platforms", items: ["Spigot / Paper", "Discord bots"] },
];
