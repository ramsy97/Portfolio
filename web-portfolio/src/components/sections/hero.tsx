"use client";

import { ArrowDownRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language-context";

const scrollTo = (href: string) => {
  const el = document.querySelector(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export function Hero() {
  const { t } = useLanguage();

  const facts = [
    { label: "Status", value: t.hero.status },
    { label: "Location", value: siteConfig.location },
    {
      label: "Email",
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
  ];

  return (
    <section id="home" className="pt-32 md:pt-44 pb-14 md:pb-20">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-accent">{t.hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-7 text-[clamp(2.9rem,7vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.035em]">
                Ramy Syafitri
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-[54ch] text-[15px] leading-[1.75] text-muted-ink md:text-[16px]">
                {t.hero.intro}
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollTo("#work")}
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-accent-strong"
                >
                  {t.hero.ctaWork}
                  <ArrowDownRight className="h-4 w-4" />
                </button>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
                >
                  {t.hero.ctaCv}
                </a>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <p className="mt-9 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-ink">
                {t.hero.location} · {t.hero.status}
              </p>
            </Reveal>
          </div>

          <Reveal delay={200} className="lg:col-span-5">
            <aside className="border border-line">
              {facts.map((fact, i) => (
                <div
                  key={fact.label}
                  className={
                    i === 0 ? "border-b border-line px-6 py-5" : "border-b border-line px-6 py-5 last:border-b-0"
                  }
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                    {fact.label}
                  </p>
                  {"href" in fact && fact.href ? (
                    <a
                      href={fact.href}
                      className="mt-1 inline-block text-sm font-medium break-all linky"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm font-medium">
                      {fact.label === "Status" && (
                        <span aria-hidden="true" className="mr-2 inline-block h-[7px] w-[7px] bg-accent align-[1px]" />
                      )}
                      {fact.value}
                    </p>
                  )}
                </div>
              ))}

              <div className="flex items-center gap-6 px-6 py-5">
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink transition-colors hover:text-accent"
                >
                  GitHub ↗
                </a>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink transition-colors hover:text-accent"
                >
                  LinkedIn ↗
                </a>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}