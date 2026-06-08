"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function Faq() {
  const t = useTranslations("Faq");
  const [open, setOpen] = useState<number | null>(0);

  const items = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
  ];

  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h2 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
        {t("title")}
      </h2>

      <div className="mt-8 flex flex-col gap-3">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <div
              key={i}
              className="overflow-hidden rounded-2xl border-2 border-ink bg-paper shadow-pop"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-display text-lg font-bold"
              >
                {item.q}
                <span
                  className={`text-2xl transition-transform ${isOpen ? "rotate-45" : ""}`}
                  aria-hidden
                >
                  +
                </span>
              </button>
              {isOpen && (
                <p className="border-t-2 border-ink px-5 py-4 text-ink/80">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
