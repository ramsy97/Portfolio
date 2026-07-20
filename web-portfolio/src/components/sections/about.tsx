"use client";

import { motion } from "framer-motion";
import { CheckCircle, GraduationCap, Briefcase, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/language-context";

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

        <div ref={cardRef} className="space-y-6 max-w-4xl mx-auto">
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
                  <h3 className="text-xl font-bold mb-3">{t.about.professionalSummary}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.about.bio}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-5 md:p-8 lg:p-10 border-border">
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-primary/15 text-primary shrink-0">
                  <Target className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">{t.about.vision}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t.about.visionText}</p>
                </div>
              </div>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-5">{t.about.keyCompetencies}</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {t.about.highlights.map((competency, i) => (
                <motion.div
                  key={competency}
                  initial={{ opacity: 0, y: 8 }}
                  animate={cardVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.35 + i * 0.05 }}
                >
                  <Card hover className="flex items-center gap-3 py-4 px-5 border-border">
                    <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm font-medium leading-snug">{competency}</span>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={cardVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="p-5 md:p-8 lg:p-10 border-border">
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-primary/15 text-primary shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{t.about.education}</h3>
                  <p className="font-semibold">{t.about.diploma}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {t.about.university} — 2018 – 2021
                  </p>
                  <p className="text-muted-foreground text-sm">{t.about.gpa}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {t.about.diplomaCoursework}
                  </p>
                </div>
              </div>
            </Card>

            <Card className="mt-6 p-5 md:p-8 lg:p-10 border-border">
              <div className="flex items-start gap-3 sm:gap-5">
                <div className="p-2.5 sm:p-3 rounded-2xl bg-primary/15 text-primary shrink-0">
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <p className="font-semibold">{t.about.smk}</p>
                  <p className="text-muted-foreground text-sm mt-0.5">
                    {t.about.smkSchool} — Jul 2012 – May 2015
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t.about.smkScore}
                  </p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                    {t.about.smkCoursework}
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
