// Everything personal that isn't a work entry or a post lives here.
// Entries marked `placeholder: true` render dimmed with a TODO tag so
// they're easy to spot and replace.

export const site = {
  name: "Zachary",
  handle: "zacharyk812",
  role: "Full-stack developer",
  title: "Founder, Xena Studios",
  tagline: "I build game servers and the software that runs them.",
  url: "https://zacharyk.dev",
  description:
    "Zachary is a full-stack developer and the founder of Xena Studios, building game servers and the tools to run them.",
  bio: [
    "I run Xena Studios, where I build the software that runs game servers, the plugins that run on them, and Minecraft servers of its own.",
    "Most of my work is in Go and Java on Linux, with TypeScript for the web. I write here about how the things I build work and why I built them that way.",
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

// Groups that work entries are listed under, in display order. A work
// entry picks one with its `org` field.
export type Org = {
  name: string;
  description: string;
  href?: string;
  linkLabel?: string;
};

export const orgs: Record<"xena" | "independent", Org> = {
  xena: {
    name: "Xena Studios",
    description:
      "The studio I founded in 2025. It has two sides: tools for the people who run game servers, and servers for the people who play on them.",
    href: "https://xenastudios.co",
    linkLabel: "xenastudios.co",
  },
  independent: {
    name: "Independent",
    description: "Projects outside the studio.",
    href: "https://github.com/zacharyk812?tab=repositories",
    linkLabel: "All repositories",
  },
};

export type Job = {
  role: string;
  org: string;
  period: string;
  summary: string;
  href?: string;
  placeholder?: boolean;
};

// Newest first.
export const experience: Job[] = [
  {
    role: "Founder",
    org: "Xena Studios",
    period: "Jun 2025 – Present",
    summary:
      "Building Raptor, NeoSkript, a family of Paper and Folia plugins, and two Minecraft servers of the studio's own, Airfields and MostWanted.",
    href: "/work",
  },
  {
    role: "Manager",
    org: "Siegelands",
    period: "Apr – Jul 2024",
    summary: "Ran the server infrastructure and led the development team through new feature releases.",
  },
  {
    role: "Manager",
    org: "ArmorUp",
    period: "Jun – Aug 2023",
    summary: "Ran the server infrastructure and coordinated development, with a focus on stability and scaling.",
  },
  {
    role: "Owner",
    org: "Flicked",
    period: "Jun – Aug 2022",
    summary: "Owned the server end to end: infrastructure, development, planning and the team.",
  },
  {
    role: "Lead Developer",
    org: "Weaken",
    period: "Apr – Jun 2022",
    summary: "Led development and technical direction for the Weaken Minecraft server.",
  },
];

export type SkillGroup = { label: string; items: string[]; placeholder?: boolean };

export const skills: SkillGroup[] = [
  { label: "Languages", items: ["Java", "Go", "Rust", "TypeScript", "JavaScript", "Python", "SQL"] },
  { label: "Frontend", items: ["HTML", "CSS", "React", "Next.js", "TanStack", "Svelte", "Astro"] },
  { label: "Backend", items: ["Node.js", "Go", "Java"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB", "Redis"] },
  { label: "Infra", items: ["Linux", "Docker", "NGINX", "Pterodactyl"] },
  { label: "Platforms", items: ["Paper / Folia", "Spigot", "Discord bots"] },
];
