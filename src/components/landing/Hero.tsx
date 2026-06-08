import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("Hero");

  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob-1 absolute -left-24 -top-20 h-72 w-72 bg-orange/90" />
        <div className="blob-2 absolute -right-16 top-24 h-56 w-56 bg-coral" />
        <div className="absolute bottom-10 left-[12%] h-16 w-16 rounded-full bg-teal" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-block rounded-full bg-orange px-5 py-1.5 font-display text-sm font-bold uppercase tracking-wide text-paper shadow-pop">
            {t("badge")}
          </span>
          <h1 className="mt-6 font-display text-5xl font-extrabold leading-[0.98] tracking-tight sm:text-6xl">
            {t("title")}{" "}
            <span className="box-decoration-clone rounded-2xl bg-yellow px-2 leading-relaxed">
              {t("titleAccent")}
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink/75">{t("subtitle")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#lead"
              className="rounded-full border-2 border-ink bg-orange px-7 py-3 text-center font-display font-bold uppercase text-paper shadow-pop transition-transform hover:-translate-y-0.5"
            >
              {t("ctaPrimary")}
            </a>
            <a
              href="#how"
              className="rounded-full border-2 border-ink bg-paper px-7 py-3 text-center font-display font-bold uppercase shadow-pop transition-transform hover:-translate-y-0.5"
            >
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        {/* Video embed slot — replace with the real YouTube unlisted embed */}
        <div className="relative">
          <div className="aspect-video w-full overflow-hidden rounded-3xl border-2 border-ink bg-sky shadow-pop">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-paper">
              <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-ink bg-paper">
                <span className="ml-1 inline-block border-y-[10px] border-l-[16px] border-y-transparent border-l-ink" />
              </div>
              <p className="font-display font-bold">{t("videoCaption")}</p>
              <p className="text-xs text-paper/70">[ TODO: embed video ]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
