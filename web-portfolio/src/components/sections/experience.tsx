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

export function Experience() {
  const { ref, isVisible } = useScrollAnimation(0.1);
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
            {lang === "id" ? "" : "My "}
            <span className="gradient-text">{t.experience.titleHighlight}</span>
            {lang === "id" ? " Saya" : ""}
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {t.experience.data.map((exp, i) => {
            const isEven = i % 2 === 0;
            const info = typeLabels[exp.type] || typeLabels.work;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative mb-8 sm:mb-10 last:mb-0 md:grid md:grid-cols-2 md:gap-10"
              >
                <div
                  className={cn(
                    "absolute left-[15px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-[3px] border-background z-10 top-6",
                    typeColors[exp.type]
                  )}
                />

                <div
                  className={cn(
                    "ml-10 md:ml-0",
                    isEven ? "md:col-start-1 md:text-right" : "md:col-start-2"
                  )}
                >
                  <div className="rounded-2xl border border-border bg-card p-4 sm:p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className={cn("flex items-center gap-2 mb-3", isEven && "md:justify-end")}>
                      <span className={cn(
                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold",
                        info.className
                      )}>
                        {typeIcons[exp.type]}
                        {info.label}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold">{exp.title}</h3>
                    <p className="text-sm font-semibold text-primary mt-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {exp.location} · {exp.period}
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {exp.description.map((desc, j) => (
                        <li
                          key={j}
                          className={cn(
                            "text-sm text-muted-foreground leading-relaxed flex items-start gap-2",
                            isEven ? "md:text-right md:flex-row-reverse" : ""
                          )}
                        >
                          <span>{desc}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0 mt-2" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {isEven && <div className="hidden md:block md:col-start-2" />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
