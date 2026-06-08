import { useTranslations } from "next-intl";

export function Offerings() {
  const t = useTranslations("Offerings");

  const cards = [
    {
      title: t("groupTitle"),
      desc: t("groupDesc"),
      cta: t("groupCta"),
      bg: "bg-teal",
    },
    {
      title: t("coursesTitle"),
      desc: t("coursesDesc"),
      cta: t("coursesCta"),
      bg: "bg-sky",
    },
    {
      title: t("certTitle"),
      desc: t("certDesc"),
      cta: t("certCta"),
      bg: "bg-purple",
    },
  ];

  return (
    <section id="offerings" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {t("title")}
      </h2>
      <p className="mt-3 text-lg text-ink/70">{t("subtitle")}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {cards.map((c) => (
          <div
            key={c.title}
            className="flex flex-col rounded-3xl border-2 border-ink bg-paper p-6 shadow-pop"
          >
            <div
              className={`mb-5 h-14 w-14 rounded-2xl border-2 border-ink ${c.bg}`}
              aria-hidden
            />
            <h3 className="font-display text-2xl font-bold">{c.title}</h3>
            <p className="mt-2 flex-1 text-ink/75">{c.desc}</p>
            <a
              href="#lead"
              className="mt-5 inline-block self-start rounded-full border-2 border-ink bg-yellow px-5 py-2 font-display text-sm font-bold uppercase shadow-pop transition-transform hover:-translate-y-0.5"
            >
              {c.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
