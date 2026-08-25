"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Folder } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/language-context";
import {
  fetchGitHubProfile,
  fetchGitHubRepos,
  getLanguageStats,
  type GitHubProfile,
  type GitHubRepo,
} from "@/lib/github";

const langColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Vue: "#41b883",
  PHP: "#4F5D95",
  HTML: "#e34c26",
  CSS: "#563d7c",
};

export function GithubSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    async function fetchData() {
      try {
        const [p, r] = await Promise.all([fetchGitHubProfile(), fetchGitHubRepos()]);
        if (!cancelled) {
          setProfile(p);
          setRepos(r);
          setLoading(false);
        }
      } catch {
        if (!cancelled) setLoading(false);
      }
    }
    fetchData();
    return () => { cancelled = true; };
  }, []);

  const langStats = getLanguageStats(repos);
  const totalLangRepos = Object.values(langStats).reduce((a, b) => a + b, 0);
  const recentRepos = repos
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
    .slice(0, 5);

  return (
    <section id="github" className="py-24 md:py-32 section-alt">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">
            {t.github.sectionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.github.title}{" "}
            <span className="gradient-text">{t.github.titleHighlight}</span>
          </h2>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="animate-pulse border-border">
                <div className="h-16 sm:h-20 bg-muted rounded-xl" />
                <div className="h-3 sm:h-4 bg-muted rounded-lg mt-3 sm:mt-4 w-1/2" />
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card hover className="h-full border-border">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <GithubIcon className="w-5 h-5" />
                  <h3 className="font-bold text-sm sm:text-base">{t.github.profileOverview}</h3>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Folder className="w-4 h-4" /> {t.github.repositories}
                    </span>
                    <span className="font-bold">{profile?.public_repos || 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Folder className="w-4 h-4" /> {t.github.publicProjects}
                    </span>
                    <span className="font-bold">{profile?.public_repos || 0}</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card hover className="h-full border-border">
                <h3 className="font-bold text-sm sm:text-base mb-4 sm:mb-6">{t.github.mostUsedLanguages}</h3>
                <div className="space-y-2.5 sm:space-y-3">
                  {Object.entries(langStats)
                    .slice(0, 5)
                    .map(([lang, count]) => (
                      <div key={lang}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium">{lang}</span>
                          <span className="text-xs text-muted-foreground">
                            {Math.round((count / totalLangRepos) * 100)}%
                          </span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${(count / totalLangRepos) * 100}%` } : {}}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full rounded-full"
                            style={{ backgroundColor: langColors[lang] || "#64748b" }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card hover className="h-full border-border">
                <h3 className="font-bold text-sm sm:text-base mb-4 sm:mb-6">{t.github.recentRepos}</h3>
                <div className="space-y-1.5 sm:space-y-2">
                  {recentRepos.map((repo) => (
                    <a
                      key={repo.name}
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-2 p-2.5 sm:p-3 rounded-xl hover:bg-muted transition-colors group"
                    >
                      <span className="text-xs sm:text-sm font-semibold group-hover:text-primary transition-colors truncate min-w-0">
                        {repo.name}
                      </span>
                      {repo.language && (
                        <Badge variant="default" className="shrink-0 text-[10px] sm:text-xs">
                          <span
                            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1 sm:mr-1.5 inline-block"
                            style={{ backgroundColor: langColors[repo.language] || "#64748b" }}
                          />
                          {repo.language}
                        </Badge>
                      )}
                    </a>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}
