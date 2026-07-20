"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Folder, Mail, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/brand-icons";
import { projects } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language-context";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const { t, lang, setLang } = useLanguage();

  const navItems = [
    { label: t.nav.home, href: "#home" },
    { label: t.nav.about, href: "#about" },
    { label: t.nav.skills, href: "#skills" },
    { label: t.nav.projects, href: "#projects" },
    { label: t.nav.experience, href: "#experience" },
    { label: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navResults = navItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const projectResults = projects.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.techStack.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const actions = [
    { label: t.commandPalette.toggleTheme, icon: ExternalLink, action: () => document.querySelector<HTMLElement>("[aria-label='Toggle theme']")?.click() },
    { label: t.commandPalette.downloadCv, icon: ExternalLink, action: () => window.open("/cv.pdf") },
    { label: "View GitHub", icon: GithubIcon, action: () => window.open("https://github.com/ramsy97") },
    { label: "Send Email", icon: Mail, action: () => window.open("mailto:ramysyafitri8@gmail.com") },
  ];

  const filteredActions = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (href: string) => {
    setOpen(false);
    setQuery("");
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => {
              setOpen(false);
              setQuery("");
            }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.15 }}
            className="relative w-full max-w-lg mx-4 rounded-2xl bg-background border border-border shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder={t.commandPalette.placeholder}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoFocus
                className="flex-1 bg-transparent text-sm focus:outline-none"
              />
              <kbd className="px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground bg-muted rounded">
                ESC
              </kbd>
            </div>

            <div className="max-h-[300px] overflow-y-auto p-2">
              {navResults.length > 0 && (
                <div className="mb-2">
                  <p className="px-3 py-1 text-xs font-medium text-muted-foreground uppercase">
                    {t.commandPalette.navigation}
                  </p>
                  {navResults.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleSelect(item.href)}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors text-left"
                    >
                      <Folder className="w-4 h-4 text-muted-foreground" />
                      {item.label}
                    </button>
                  ))}
                </div>
              )}

              {projectResults.length > 0 && (
                <div className="mb-2">
                  <p className="px-3 py-1 text-xs font-medium text-muted-foreground uppercase">
                    {t.projects.sectionLabel}
                  </p>
                  {projectResults.slice(0, 5).map((project) => (
                    <button
                      key={project.id}
                      onClick={() => handleSelect("#projects")}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors text-left"
                    >
                      <Folder className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1 min-w-0">
                        <p className="truncate">{project.title}</p>
                        <p className="text-xs text-muted-foreground truncate">
                          {project.techStack.slice(0, 3).join(", ")}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {filteredActions.length > 0 && (
                <div>
                  <p className="px-3 py-1 text-xs font-medium text-muted-foreground uppercase">
                    {t.commandPalette.actions}
                  </p>
                  {filteredActions.map((action) => (
                    <button
                      key={action.label}
                      onClick={() => {
                        action.action();
                        setOpen(false);
                        setQuery("");
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors text-left"
                    >
                      <action.icon className="w-4 h-4 text-muted-foreground" />
                      {action.label}
                    </button>
                  ))}
                </div>
              )}

              {navResults.length === 0 &&
                projectResults.length === 0 &&
                filteredActions.length === 0 && (
                  <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                    {t.commandPalette.noResults}
                  </p>
                )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
