import type { APIContext } from "astro";

export const remoteTrailingSlash = (path: string) => path.replace(/\/$/, "");

export const isActivePath = (context: APIContext, path: string, depth = 0) => {
  const currentPath = remoteTrailingSlash(context.url.pathname);
  const paramPath = remoteTrailingSlash(path);

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
