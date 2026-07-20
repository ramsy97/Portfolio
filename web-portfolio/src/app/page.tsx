"use client";

import { ThemeProvider } from "@/components/layout/theme-provider";
import { LanguageProvider } from "@/contexts/language-context";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LoadingScreen } from "@/components/effects/loading-screen";
import { CursorGlow } from "@/components/effects/cursor-glow";
import { CommandPalette } from "@/components/effects/command-palette";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { GithubSection } from "@/components/sections/github";
import { Stats } from "@/components/sections/stats";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <LoadingScreen />
        <CursorGlow />
        <CommandPalette />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <GithubSection />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </LanguageProvider>
    </ThemeProvider>
  );
}
