"use client";

import { Download } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/contexts/language-context";

export function Experience() {
  const { t } = useLanguage();
  const job = t.experience.jobs[0];

  return (
    <section id="experience" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="md:sticky md:top-24">
              <Reveal>
                <p className="eyebrow text-accent">{t.experience.label}</p>
                <p className="mt-5 max-w-[30ch] text-sm leading-[1.75] text-muted-ink">
                  {t.experience.intro}
                </p>
                <a
                  href="/cv.pdf"
                  download
                  className="mt-6 inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-[13px] font-medium transition-colors hover:border-accent hover:text-accent"
                >
                  <Download className="h-3.5 w-3.5" />
                  CV / Resume
                </a>
              </Reveal>
            </div>
          </div>

          <div className="md:col-span-8">
            <Reveal>
              <article>
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                    {job.period}
                  </p>
                </div>
                <p className="mt-1.5 text-[15px] text-muted-ink">{job.role}</p>
                <p className="mt-0.5 font-mono text-[11px] text-muted-ink">
                  {job.location}
                </p>

                <p className="mt-5 text-[15px] leading-[1.75]">{job.summary}</p>

                <ul className="mt-5 space-y-2">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-baseline gap-2.5 text-sm leading-relaxed text-muted-ink"
                    >
                      <span
                        aria-hidden="true"
                        className="inline-block h-[4px] w-[4px] shrink-0 translate-y-[-2px] bg-accent"
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <blockquote className="mt-7 border-l-2 border-accent pl-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                    {t.experience.learnedLabel}
                  </p>
                  <p className="mt-2 text-[15px] leading-[1.75] text-muted-ink">
                    {job.learned}
                  </p>
                </blockquote>
              </article>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-14">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                  {t.experience.educationLabel}
                </p>
                <div className="mt-4 border-t border-line">
                  {t.experience.education.map((item) => (
                    <div
                      key={item.school}
                      className="border-b border-line py-5"
                    >
                      <div className="grid gap-x-6 gap-y-1 md:grid-cols-12 md:items-baseline">
                        <div className="md:col-span-8">
                          <p className="text-[15px] font-semibold">{item.school}</p>
                          <p className="mt-0.5 text-sm text-muted-ink">{item.degree}</p>
                        </div>
                        <p className="text-sm text-muted-ink md:col-span-2">
                          {item.location}
                        </p>
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink md:col-span-2 md:text-right">
                          {item.period}
                        </p>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {item.details.map((detail) => (
                          <li
                            key={detail}
                            className="flex items-baseline gap-2.5 text-sm leading-relaxed text-muted-ink"
                          >
                            <span
                              aria-hidden="true"
                              className="inline-block h-[4px] w-[4px] shrink-0 translate-y-[-2px] bg-accent"
                            />
                            {detail}
                          </li>
                        ))}
                      </ul>
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