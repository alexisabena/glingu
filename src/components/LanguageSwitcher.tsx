"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const active = useLocale();
  const pathname = usePathname();

  return (
    <nav
      aria-label="Language"
      className="flex items-center border-2 border-ink bg-cream shadow-brutal"
    >
      {routing.locales.map((locale, i) => {
        const isActive = locale === active;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            aria-current={isActive ? "true" : undefined}
            className={[
              "px-3 py-1.5 font-display text-sm font-bold uppercase transition-colors",
              i > 0 ? "border-l-2 border-ink" : "",
              isActive
                ? "bg-orange text-cream"
                : "bg-cream text-ink hover:bg-yellow",
            ].join(" ")}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
