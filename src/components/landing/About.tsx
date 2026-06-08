import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Portrait placeholder */}
        <div className="relative">
          <div className="blob-3 mx-auto h-72 w-72 border-2 border-ink bg-coral shadow-pop" />
          <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-ink/50">
            [ TODO: foto del profesor ]
          </span>
        </div>

        <div>
          <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-lg text-ink/80">{t("body")}</p>
          <p className="mt-5 inline-block rounded-2xl border-2 border-ink bg-yellow px-4 py-2 font-display text-sm font-bold">
            {t("credentials")}
          </p>
        </div>
      </div>
    </section>
  );
}
