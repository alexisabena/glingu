import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center sm:px-8">
        <div>
          <span className="font-display text-xl font-extrabold tracking-tight">
            glingu<span className="text-orange">.</span>
          </span>
          <p className="mt-1 max-w-xs text-sm text-ink/70">{t("tagline")}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-bold sm:items-end">
          <div className="flex gap-5">
            <a href="#" className="hover:text-orange">{t("privacy")}</a>
            <a href="#" className="hover:text-orange">{t("terms")}</a>
          </div>
          <p className="text-ink/60">
            © {year} glingu. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
