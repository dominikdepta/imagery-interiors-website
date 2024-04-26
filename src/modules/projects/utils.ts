import type { CollectionEntry } from "astro:content";

export const filterRecentProjects = (
  projects: CollectionEntry<"projects">[],
  limit = 16,
): CollectionEntry<"projects">[] =>
  [...projects]
    .sort(
      (a, b) =>
        b.data.dateCompletion.getTime() - a.data.dateCompletion.getTime(),
    )
    .slice(0, limit);
