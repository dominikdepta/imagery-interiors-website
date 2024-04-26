import type { APIContext } from "astro";
import { getBaseUrl } from "./getBaseUrl";

export const removeTrailingSlash = (path: string) => path.replace(/\/$/, "");

export const removeBaseUrl = (path: string) => {
  const baseUrl = getBaseUrl();

  return baseUrl === "/" ? path : path.replace(baseUrl, "");
};

export const isActivePath = (context: APIContext, path: string, depth = 0) => {
  const currentPath = removeTrailingSlash(removeBaseUrl(context.url.pathname));
  const paramPath = removeTrailingSlash(removeBaseUrl(path));

  if (depth > 0) {
    return (
      currentPath
        .split("/")
        .slice(1, depth + 1)
        .join("/") ===
      paramPath
        .split("/")
        .slice(1, depth + 1)
        .join("/")
    );
  }

  return currentPath === paramPath;
};
