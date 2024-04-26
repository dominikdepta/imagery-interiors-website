import type { APIContext } from "astro";

export const isActivePath = (context: APIContext, path: string) =>
  context.url.pathname === path;
