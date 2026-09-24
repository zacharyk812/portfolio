const WORDS_PER_MINUTE = 225;

// Rough reading time from raw Markdown: code blocks count at half weight
// since people skim them.
export function readingTime(markdown = "") {
  const code = [...markdown.matchAll(/```[\s\S]*?```/g)].map((m) => m[0]).join(" ");
  const prose = markdown.replace(/```[\s\S]*?```/g, " ").replace(/[#>*_`[\]()!-]/g, " ");
  const words = count(prose) + count(code) / 2;
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}

function count(text: string) {
  return text.split(/\s+/).filter(Boolean).length;
}
