"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

// Visual lead-capture stub. Wiring to a real backend happens in Roadmap A, Phase 1.
export function NotifyForm() {
  const t = useTranslations("ComingSoon");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="mx-auto inline-block -rotate-1 border-2 border-ink bg-green px-5 py-3 font-display font-bold shadow-brutal">
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
        className="flex-1 border-2 border-ink bg-cream px-4 py-3 text-base outline-none placeholder:text-ink/40 focus:shadow-brutal"
      />
      <button
        type="submit"
        className="border-2 border-ink bg-orange px-6 py-3 font-display font-bold uppercase text-cream shadow-brutal transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0"
      >
        {t("cta")}
      </button>
    </form>
  );
}
