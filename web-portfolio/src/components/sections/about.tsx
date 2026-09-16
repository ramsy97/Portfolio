"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/contexts/language-context";

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <p className="eyebrow text-accent">{t.about.label}</p>
              <h2 className="mt-5 text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.025em] md:text-[2rem]">
                {t.about.heading}
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <div className="max-w-[60ch] space-y-5">
                {t.about.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className={
                      i === 0
                        ? "text-[16px] leading-[1.8]"
                        : "text-[16px] leading-[1.8] text-muted-ink"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                  {t.about.mapLabel}
                </p>
                <div className="mt-4 border-t border-line">
                  {t.about.map.map((item) => (
                    <div
                      key={item.title}
                      className="grid gap-x-6 gap-y-1 border-b border-line py-4 md:grid-cols-3 md:items-baseline"
                    >
                      <p className="text-sm font-semibold">{item.title}</p>
                      <p className="text-sm leading-relaxed text-muted-ink md:col-span-2">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}