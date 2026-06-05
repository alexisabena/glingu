import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // Add new languages here as we expand (e.g. "fr", "pt").
  locales: ["es", "en"],
  defaultLocale: "es",
});
