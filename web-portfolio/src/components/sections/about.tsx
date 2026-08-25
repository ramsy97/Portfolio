"use client";

import { motion } from "framer-motion";
import { Briefcase, Layers, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/language-context";

const focusIcons = {
  briefcase: Briefcase,
  layers: Layers,
  workflow: Workflow,
} as const;

export function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.1);
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-32 section-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">
            {t.about.sectionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.about.title}{" "}
            <span className="gradient-text">{t.about.titleHighlight}</span>
          </h2>
        </motion.div>

        <div ref={cardRef} className="space-y-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="p-5 md:p-8 lg:p-10 border-border">
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-primary/15 text-primary shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t.about.aboutTitle}</h3>
                  <div className="space-y-4">
                    {t.about.bio.split("\n\n").map((paragraph) => (
                      <p key={paragraph} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-5">{t.about.focusTitle}</h3>
            <div className="grid gap-4 sm:grid-cols-3">
              {t.about.focusItems.map((item, i) => {
                const Icon = focusIcons[item.icon];
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    animate={cardVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: 0.25 + i * 0.08 }}
                    className="h-full"
                  >
                    <Card hover className="p-5 border-border h-full">
                      <div className="p-2.5 rounded-xl bg-primary/15 text-primary w-fit mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="font-bold mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
