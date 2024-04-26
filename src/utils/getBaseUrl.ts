export const getBaseUrl = () =>
  import.meta.env.BASE_URL === "/" ? "" : import.meta.env.BASE_URL;
