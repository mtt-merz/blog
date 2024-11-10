import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const THEME_KEY = "theme";
export const DEFAULT_THEME = "light";

export const getThemeFromCookies = (cookies: ReadonlyRequestCookies) =>
  cookies.get(THEME_KEY)?.value || DEFAULT_THEME;
