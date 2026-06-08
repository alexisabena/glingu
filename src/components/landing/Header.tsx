import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export function Header() {
  const t = useTranslations("Nav");

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <Link href="/" className="font-display text-2xl font-extrabold tracking-tight">
          glingu<span className="text-orange">.</span>
        </Link>

        <nav className="hidden items-center gap-7 font-display text-sm font-bold md:flex">
          <a href="#offerings" className="hover:text-orange">{t("offerings")}</a>
          <a href="#how" className="hover:text-orange">{t("how")}</a>
          <a href="#about" className="hover:text-orange">{t("about")}</a>
          <a href="#faq" className="hover:text-orange">{t("faq")}</a>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#lead"
            className="hidden rounded-full border-2 border-ink bg-orange px-4 py-1.5 font-display text-sm font-bold uppercase text-paper shadow-pop sm:inline-block"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </header>
  );
}
