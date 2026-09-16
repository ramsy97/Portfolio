"use client";

import { Reveal } from "@/components/ui/reveal";
import { TechLogo } from "@/components/ui/tech-logo";
import { skillCategories } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language-context";

export function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Reveal>
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-12 md:items-baseline">
            <p className="eyebrow text-accent md:col-span-3">{t.skills.label}</p>
            <p className="max-w-[52ch] text-[15px] leading-[1.75] text-muted-ink md:col-span-9">
              {t.skills.intro}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal
              key={category.title}
              className="bg-canvas p-6 md:p-8"
              delay={(i % 2) * 60}
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {category.title}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 border border-line px-3 py-1.5 text-[13px] leading-none text-ink transition-colors hover:border-accent hover:text-accent"
                  >
                    <TechLogo icon={skill.icon} size={15} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}