"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/language-context";

const typeIcons: Record<string, React.ReactNode> = {
  work: <Briefcase className="w-4 h-4" />,
  learning: <GraduationCap className="w-4 h-4" />,
};

const typeColors: Record<string, string> = {
  work: "bg-green-500",
  learning: "bg-purple-500",
};

type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "learning";
  description: string[];
  summary?: string;
  responsibilities?: string[];
  learned?: string;
};

function InlineBold({ text }: { text: string }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold text-foreground">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { t, lang } = useLanguage();

  const typeLabels: Record<string, { label: string; className: string }> = {
    work: { label: t.experience.work, className: "bg-green-500/20 text-green-600 dark:text-green-400" },
    learning: { label: t.experience.learning, className: "bg-purple-500/20 text-purple-600 dark:text-purple-400" },
  };

  return (
    <section id="experience" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">
            {t.experience.sectionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {lang === "id" ? (
              <>
                {t.experience.title}{" "}
                <span className="gradient-text">{t.experience.titleHighlight}</span>
              </>
            ) : (
              <>
                My <span className="gradient-text">{t.experience.titleHighlight}</span>
              </>
            )}
          </h2>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-6 md:space-y-8">
            {(t.experience.data as unknown as ExperienceItem[]).map((exp, i) => {
              const info = typeLabels[exp.type] || typeLabels.work;
              const isRich = typeof exp.summary === "string";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="relative pl-10 md:pl-14"
                >
                  <span
                    className={cn(
                      "absolute left-0 md:left-[2px] top-7 w-[15px] h-[15px] md:w-[19px] md:h-[19px] rounded-full border-[3px] border-background",
                      typeColors[exp.type]
                    )}
                  />

                  <div className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold",
                        info.className
                      )}
                    >
                      {typeIcons[exp.type]}
                      {info.label}
                    </span>

                    <h3 className="text-base sm:text-lg font-bold mt-3">{exp.company}</h3>
                    <p className="text-sm font-semibold text-primary mt-0.5">{exp.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {exp.period} · {exp.location}
                    </p>

                    {isRich ? (
                      <>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-3">
                          <InlineBold text={exp.summary!} />
                        </p>
                        <h4 className="text-sm font-bold mt-4 mb-2">
                          {t.experience.responsibilitiesLabel}
                        </h4>
                        <ul className="space-y-1.5">
                          {(exp.responsibilities ?? []).map((desc, j) => (
                            <li
                              key={j}
                              className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-2" />
                              <span><InlineBold text={desc} /></span>
                            </li>
                          ))}
                        </ul>
                        <h4 className="text-sm font-bold mt-4 mb-2">
                          {t.experience.learnedLabel}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          <InlineBold text={exp.learned!} />
                        </p>
                      </>
                    ) : (
                      <ul className="mt-3 space-y-1.5">
                        {exp.description.map((desc, j) => (
                          <li
                            key={j}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-2" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
