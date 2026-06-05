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
      className="flex items-center overflow-hidden rounded-full border-2 border-ink bg-paper shadow-pop"
    >
      {routing.locales.map((locale) => {
        const isActive = locale === active;
        return (
          <Link
            key={locale}
            href={pathname}
            locale={locale}
            aria-current={isActive ? "true" : undefined}
            className={[
              "px-4 py-1.5 font-display text-sm font-bold uppercase transition-colors",
              isActive
                ? "bg-orange text-paper"
                : "bg-paper text-ink hover:bg-yellow",
            ].join(" ")}
          >
            {locale}
          </Link>
        );
      })}
    </nav>
  );
}
