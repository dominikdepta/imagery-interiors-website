export const hasItems = <T extends unknown[]>(
  features: T | undefined,
): features is T => !!features && features.length > 0;
