import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { NotifyForm } from "@/components/NotifyForm";

export default function ComingSoonPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("ComingSoon");

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      {/* Decorative brutalist shapes */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-blue border-2 border-ink" />
        <div className="absolute right-[8%] top-24 h-24 w-24 rotate-12 bg-yellow border-2 border-ink" />
        <div className="absolute bottom-[12%] left-[10%] h-32 w-32 rounded-full bg-pink border-2 border-ink" />
        <div className="absolute -bottom-20 -right-16 h-72 w-72 rounded-t-full bg-orange-soft border-2 border-ink" />
        <div className="absolute bottom-[28%] right-[14%] h-16 w-16 rotate-45 bg-green border-2 border-ink" />
      </div>

      {/* Top bar */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-display text-2xl font-extrabold tracking-tight">
          glingu<span className="text-orange">.</span>
        </span>
        <LanguageSwitcher />
      </header>

      {/* Hero */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-6 py-10">
        <div className="w-full max-w-3xl text-center">
          <span className="inline-block -rotate-1 border-2 border-ink bg-orange px-4 py-1 font-display text-sm font-bold uppercase tracking-wide text-cream shadow-brutal">
            {t("badge")}
          </span>

          <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl">
            {t("title")}{" "}
            <span className="bg-yellow box-decoration-clone px-2 leading-tight">
              {t("titleAccent")}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg text-ink/80 sm:text-xl">
            {t("subtitle")}
          </p>

          <div className="mt-10">
            <NotifyForm />
            <p className="mt-3 text-sm text-ink/60">{t("note")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
