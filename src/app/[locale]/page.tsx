import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Offerings } from "@/components/landing/Offerings";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { About } from "@/components/landing/About";
import { Faq } from "@/components/landing/Faq";
import { LeadForm } from "@/components/landing/LeadForm";
import { Footer } from "@/components/landing/Footer";

export default function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Offerings />
        <HowItWorks />
        <About />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
