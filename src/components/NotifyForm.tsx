"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

// Visual lead-capture stub. Wiring to a real backend happens in Roadmap A, Phase 1.
export function NotifyForm() {
  const t = useTranslations("ComingSoon");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto inline-block rounded-full border-2 border-ink bg-teal px-6 py-3 font-display font-bold text-paper shadow-pop">
        {t("success")}
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="mx-auto flex w-full max-w-md flex-col gap-3 sm:flex-row"
    >
      <input
        type="email"
        required
        placeholder={t("emailPlaceholder")}
        aria-label={t("emailPlaceholder")}
        className="flex-1 rounded-full border-2 border-ink bg-paper px-5 py-3 text-base outline-none placeholder:text-ink/40 focus:shadow-pop"
      />
      <button
        type="submit"
        className="rounded-full border-2 border-ink bg-orange px-7 py-3 font-display font-bold uppercase text-paper shadow-pop transition-transform hover:-translate-y-0.5 active:translate-y-0"
      >
        {t("cta")}
      </button>
    </form>
  );
}
