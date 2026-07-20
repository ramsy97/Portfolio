"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye, Search } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/ui/modal";
import { projects as baseProjects } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/language-context";
import type { Project } from "@/data/portfolio";

const ALL_KEY = "__all__";

export function Projects() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState(ALL_KEY);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    setActiveCategory(ALL_KEY);
  }, [t.projects.all]);

  const projects: Project[] = t.projects.data.map((tp) => {
    const base = baseProjects.find((bp) => bp.id === tp.id);
    return {
      ...tp,
      features: [...tp.features],
      image: base?.image ?? "",
      liveUrl: base?.liveUrl,
      githubUrl: base?.githubUrl ?? "",
      techStack: base?.techStack ?? [],
      tags: base?.tags ?? [],
    };
  });

  const categories = [
    { key: ALL_KEY, label: t.projects.all },
    ...new Set(projects.map((p) => p.category)),
  ].map((c) => (typeof c === "string" ? { key: c, label: c } : c));

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === ALL_KEY || p.category === activeCategory;
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 md:py-32 section-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">
            {t.projects.sectionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.projects.title}{" "}
            <span className="gradient-text">{t.projects.titleHighlight}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 mb-10"
        >
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={t.projects.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/60"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                  activeCategory === cat.key
                    ? "bg-primary text-white shadow-lg shadow-primary/20"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Card hover className="h-full flex flex-col group border-border">
                  <div className="h-36 sm:h-44 rounded-xl overflow-hidden mb-5 border border-border relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.06] transition-colors duration-300" />
                  </div>

                  <div className="flex-1 space-y-3 px-1">
                    <Badge variant="primary">{project.category}</Badge>
                    <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-lg bg-muted font-medium text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-2.5 py-1 text-xs rounded-lg bg-muted font-medium text-muted-foreground">
                          +{project.techStack.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border px-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye className="w-4 h-4" />
                      {t.projects.details}
                    </Button>
                    <div className="flex items-center gap-1">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/20 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        className="max-w-3xl"
      >
        {selectedProject && (
          <div className="space-y-6">
            <div>
              <Badge variant="primary" className="mb-3">
                {selectedProject.category}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold">
                {selectedProject.title}
              </h2>
            </div>

            <div className="h-40 sm:h-52 rounded-xl overflow-hidden border border-border">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-5">
              <div>
                <h3 className="font-bold text-lg mb-2">{t.projects.description}</h3>
                <p className="text-muted-foreground leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-xl bg-muted border border-border">
                  <h4 className="font-bold mb-2">{t.projects.problem}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                </div>
                <div className="p-5 rounded-xl bg-muted border border-border">
                  <h4 className="font-bold mb-2">{t.projects.solution}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-muted border border-border">
                <h4 className="font-bold mb-2">{t.projects.role}</h4>
                <p className="text-sm text-muted-foreground">{selectedProject.role}</p>
              </div>

              <div className="p-5 rounded-xl bg-muted border border-border">
                <h4 className="font-bold mb-2">{t.projects.architecture}</h4>
                <p className="text-sm text-muted-foreground">{selectedProject.architecture}</p>
              </div>

              <div>
                <h3 className="font-bold mb-3">{t.projects.features}</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedProject.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-bold mb-3">{t.projects.techStack}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <Badge key={tech} variant="default">{tech}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                {selectedProject.liveUrl && (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.liveDemo}
                    </Button>
                  </a>
                )}
                <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    <GithubIcon className="w-4 h-4" />
                    {t.projects.sourceCode}
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
