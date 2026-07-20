"use client";

import { motion } from "framer-motion";
import {
  Layout, Server, Database, Wrench, Monitor, BarChart3,
  Globe, Wifi, Network, Shield, Layers, CheckCircle,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { skillCategories } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { techIconMap } from "@/components/ui/tech-icons";
import { useLanguage } from "@/contexts/language-context";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Layout, Server, Database, Wrench, Monitor, BarChart3,
  Globe, Wifi, Network, Shield, Layers, CheckCircle,
};

function SkillIcon({ name, className }: { name: string; className?: string }) {
  const TechIcon = techIconMap[name];
  if (TechIcon) return <TechIcon className={className} />;
  const Icon = iconMap[name];
  return Icon ? <Icon className={className} /> : null;
}

export function Skills() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">
            {t.skills.sectionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.skills.title}{" "}
            <span className="gradient-text">{t.skills.titleHighlight}</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              <Card hover className="h-full group border-border">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-primary/15 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <SkillIcon name={category.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-muted text-sm font-medium text-muted-foreground hover:bg-primary/15 hover:text-primary transition-all duration-200 cursor-default border border-transparent hover:border-primary/20"
                    >
                      <SkillIcon name={skill.icon} className="w-3.5 h-3.5" />
                      {skill.name}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
