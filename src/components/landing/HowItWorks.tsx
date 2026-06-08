import { useTranslations } from "next-intl";

export function HowItWorks() {
  const t = useTranslations("HowItWorks");

  const steps = [
    { n: "1", title: t("step1Title"), desc: t("step1Desc"), bg: "bg-orange" },
    { n: "2", title: t("step2Title"), desc: t("step2Desc"), bg: "bg-coral" },
    { n: "3", title: t("step3Title"), desc: t("step3Desc"), bg: "bg-teal" },
  ];

  return (
    <section id="how" className="border-y-2 border-ink bg-gray">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-3xl border-2 border-ink bg-paper p-6 shadow-pop"
            >
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-ink font-display text-xl font-extrabold text-paper ${s.bg}`}
              >
                {s.n}
              </div>
              <h3 className="mt-4 font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-ink/75">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
