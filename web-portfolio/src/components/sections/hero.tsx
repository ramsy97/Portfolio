"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, jobInterests } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/language-context";

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % t.hero.roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [t.hero.roles.length]);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.08] to-transparent pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-24 w-full relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-20 items-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6 sm:space-y-8"
          >
            <motion.div variants={item} className="space-y-4 sm:space-y-5">
              <p className="text-primary font-semibold tracking-wide text-sm sm:text-base uppercase">
                {t.hero.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.05]">
                {siteConfig.name.split(" ")[0]}{" "}
                <span className="gradient-text block sm:inline">
                  {" "}{siteConfig.name.split(" ").slice(1).join(" ")}
                </span>
              </h1>
              <div className="h-10 sm:h-12 md:h-14 flex items-center">
                <motion.p
                  key={roleIndex}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-muted-foreground"
                >
                  {t.hero.roles[roleIndex]}
                  <span className="inline-block w-[3px] h-[1.1em] bg-primary ml-1 animate-pulse align-middle" />
                </motion.p>
              </div>
            </motion.div>

            <motion.p
              variants={item}
              className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-xl"
            >
              {t.hero.bio}
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-3 sm:gap-4">
              <a href="/cv.pdf" download>
                <Button size="lg" className="shadow-lg shadow-primary/20">
                  <Download className="w-4 h-4" />
                  {t.hero.downloadCv}
                </Button>
              </a>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <ArrowDown className="w-4 h-4" />
                {t.hero.viewProjects}
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative max-w-full">
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="flex justify-center sm:absolute sm:-top-4 sm:-right-4 sm:justify-start bg-card rounded-2xl px-3 sm:px-4 py-2 sm:py-2.5 shadow-lg border border-border items-center gap-2 sm:gap-2.5 mb-3 sm:mb-0"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs sm:text-sm font-semibold">{t.hero.openToWork}</span>
              </motion.div>

              <div className="w-full sm:w-fit rounded-3xl bg-card p-3 shadow-2xl border border-border">
                <div className="rounded-2xl bg-muted p-4 sm:p-6 flex flex-col gap-4 sm:gap-5">
                  <div>
                    <p className="text-sm font-semibold text-primary mb-3">{t.hero.interestedIn}</p>
                    <div className="flex flex-wrap gap-2">
                      {jobInterests.map((interest) => (
                        <Badge key={interest} variant="primary" className="text-[10px] sm:text-[11px]">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1.5">
                        <GithubIcon size={14} />
                        GitHub
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </Button>
                    </a>
                    <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="gap-1.5">
                        <LinkedinIcon size={14} />
                        LinkedIn
                        <ExternalLink className="w-3 h-3 opacity-50" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              <motion.div
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="hidden sm:block absolute -bottom-4 -left-4 bg-card rounded-2xl px-4 py-2.5 shadow-lg border border-border"
              >
                <span className="text-sm font-semibold">{t.hero.available}</span>
              </motion.div>

              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                className="hidden sm:flex absolute top-1/2 -right-14 lg:-right-20 bg-card rounded-2xl px-3 py-2 shadow-lg border border-border items-center gap-2"
              >
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium whitespace-nowrap">{t.hero.bekasi}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
