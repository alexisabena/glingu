"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

// Submits to Netlify Forms. The form is registered via public/__forms.html.
export function LeadForm() {
  const t = useTranslations("Lead");
  const locale = useLocale();
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");
    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "lead",
          name: String(data.get("name") ?? ""),
          email: String(data.get("email") ?? ""),
          locale,
          "bot-field": String(data.get("bot-field") ?? ""),
        }),
      });
      setStatus("done");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="lead" className="border-t-2 border-ink bg-orange">
      <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
        <h2 className="font-display text-4xl font-extrabold tracking-tight text-paper sm:text-5xl">
          {t("title")}
        </h2>
        <p className="mt-3 text-lg text-paper/90">{t("subtitle")}</p>

        {status === "done" ? (
          <div className="mx-auto mt-8 inline-block rounded-full border-2 border-ink bg-teal px-6 py-3 font-display font-bold text-paper shadow-pop">
            {t("success")}
          </div>
        ) : (
          <form
            name="lead"
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3"
          >
            <p className="hidden">
              <label>
                Don&apos;t fill this out: <input name="bot-field" />
              </label>
            </p>
            <input
              type="text"
              name="name"
              placeholder={t("namePlaceholder")}
              aria-label={t("namePlaceholder")}
              className="rounded-full border-2 border-ink bg-paper px-5 py-3 text-base outline-none focus:shadow-pop"
            />
            <input
              type="email"
              name="email"
              required
              placeholder={t("emailPlaceholder")}
              aria-label={t("emailPlaceholder")}
              className="rounded-full border-2 border-ink bg-paper px-5 py-3 text-base outline-none focus:shadow-pop"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full border-2 border-ink bg-ink px-7 py-3 font-display font-bold uppercase text-paper shadow-pop transition-transform hover:-translate-y-0.5 disabled:opacity-60"
            >
              {t("cta")}
            </button>
            {status === "error" && (
              <p className="text-sm text-paper">⚠︎ {t("note")}</p>
            )}
            <p className="text-sm text-paper/80">{t("note")}</p>
          </form>
        )}
      </div>
    </section>
  );
}
