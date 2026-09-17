"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language-context";

const emptySubscribe = () => () => {};

const NAV_LINKS = [
  { href: "#about", id: "about" },
  { href: "#work", id: "work" },
  { href: "#experience", id: "experience" },
  { href: "#skills", id: "skills" },
  { href: "#contact", id: "contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const navItems = NAV_LINKS.map((link) => ({
    ...link,
    label: t.nav[link.id as keyof typeof t.nav],
  }));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);

      const ids = NAV_LINKS.map((item) => item.id);
      let current = "home";
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) {
          current = id;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled || mobileOpen
            ? "border-b border-line bg-canvas/90 backdrop-blur-md"
            : "border-b border-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-6 md:px-10">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-[15px] font-semibold tracking-tight"
            aria-label={siteConfig.name}
          >
            {siteConfig.name}
          </button>

          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "relative text-[13px] transition-colors",
                  activeSection === item.id
                    ? "text-ink"
                    : "text-muted-ink hover:text-ink",
                  activeSection === item.id && "after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-px after:bg-accent"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href="/cv.pdf"
              download
              className="hidden items-center gap-1.5 rounded-md border border-line px-3.5 py-2 text-[13px] font-medium transition-colors hover:border-accent hover:text-accent sm:flex"
            >
              <Download className="h-3.5 w-3.5" />
              {t.nav.cv}
            </a>

            {mounted && (
              <>
                <button
                  onClick={() => setLang(lang === "en" ? "id" : "en")}
                  className="rounded-md px-2.5 py-2 font-mono text-[11px] tracking-wide text-muted-ink transition-colors hover:text-accent"
                  aria-label="Switch language"
                >
                  {lang === "en" ? "EN" : "ID"}
                </button>

                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-md p-2 text-muted-ink transition-colors hover:text-accent"
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun className="h-[17px] w-[17px]" /> : <Moon className="h-[17px] w-[17px]" />}
                </button>
              </>
            )}

            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="rounded-md p-2 text-muted-ink transition-colors hover:text-accent md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-[18px] w-[18px]" /> : <Menu className="h-[18px] w-[18px]" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="border-t border-line bg-canvas md:hidden">
            <div className="mx-auto flex max-w-[1120px] flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "flex items-center justify-between py-2.5 text-left text-[15px] transition-colors",
                    activeSection === item.id ? "text-accent" : "text-ink hover:text-accent"
                  )}
                >
                  {item.label}
                </button>
              ))}
              <a
                href="/cv.pdf"
                download
                className="mt-3 inline-flex items-center gap-2 rounded-md bg-accent px-4 py-2.5 text-[13px] font-medium text-canvas"
              >
                <Download className="h-3.5 w-3.5" />
                {t.nav.cv}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}