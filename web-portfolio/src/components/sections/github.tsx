"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language-context";

export function GithubSection() {
  const { t } = useLanguage();

  return (
    <section id="github" className="border-t border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-14 md:px-10 md:py-16">
        <Reveal>
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-12 md:items-baseline">
            <p className="eyebrow text-muted-ink md:col-span-3">{t.github.label}</p>
            <div className="md:col-span-9">
              <p className="text-[15px] leading-relaxed">{t.github.intro}</p>
              <p className="mt-2 max-w-[52ch] text-sm leading-relaxed text-muted-ink">
                {t.github.note}
              </p>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.14em] text-accent linky"
              >
                {t.github.cta}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}