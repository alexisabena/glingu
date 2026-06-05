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
      {/* Decorative shapes: blobby with geometric hints */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="blob-1 absolute -left-24 -top-24 h-72 w-72 bg-orange" />
        <div className="blob-2 absolute -right-20 top-10 h-64 w-64 bg-coral" />
        <div className="absolute right-[16%] top-28 h-20 w-20 rounded-full bg-teal" />
        <div className="absolute bottom-[16%] left-[8%] h-28 w-28 rotate-6 rounded-3xl bg-sky" />
        <div className="blob-3 absolute -bottom-24 -right-16 h-80 w-80 bg-purple" />
        <div className="absolute bottom-[30%] right-[18%] h-14 w-14 rounded-full bg-yellow" />
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
          <span className="inline-block rounded-full bg-orange px-5 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-paper shadow-pop">
            {t("badge")}
          </span>

          <h1 className="mt-8 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-7xl">
            {t("title")}{" "}
            <span className="box-decoration-clone rounded-2xl bg-yellow px-3 leading-relaxed">
              {t("titleAccent")}
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg text-ink/75 sm:text-xl">
            {t("subtitle")}
          </p>

          <div className="mt-10">
            <NotifyForm />
            <p className="mt-3 text-sm text-ink/55">{t("note")}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
