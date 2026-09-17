"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import {
  projects as baseProjects,
  featuredProjectIds,
  moreProjectIds,
} from "@/data/portfolio";
import { useLanguage } from "@/contexts/language-context";
import type { Project } from "@/data/portfolio";

function buildProject(id: string, localized: Record<string, unknown>[]) {
  const base = baseProjects.find((p) => p.id === id);
  const loc = localized.find((p) => p.id === id);
  if (!base) return null;

  const data = (loc ?? base) as Project & {
    description: string;
    role: string;
    features: string[];
  };

  return {
    ...base,
    description: data.description,
    role: data.role.split(" — ")[0].split(" – ")[0],
    features: data.features.slice(0, 5),
  };
}

function BrowserFrame({
  src,
  alt,
  title,
}: {
  src: string;
  alt: string;
  title: string;
}) {
  return (
    <div className="frame">
      <div className="frame-bar">
        <span className="frame-dot" />
        <span className="frame-dot" />
        <span className="frame-dot" />
        <span className="ml-2 truncate font-mono text-[10px] uppercase tracking-[0.12em] text-muted-ink">
          {title}
        </span>
      </div>
      <div className="relative aspect-[16/10] overflow-hidden bg-surface">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function SelectedWork() {
  const { t } = useLanguage();

  const localized = t.projects.data as unknown as Record<string, unknown>[];

  const featured = featuredProjectIds
    .map((id) => buildProject(id, localized))
    .filter((p): p is NonNullable<typeof p> => p !== null);

  const more = moreProjectIds
    .map((id) => {
      const base = baseProjects.find((p) => p.id === id);
      return base ? { base, loc: localized.find((p) => p.id === id) } : null;
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  return (
    <section id="work" className="pt-20 md:pt-28">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <Reveal>
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-12 md:items-baseline">
            <p className="eyebrow text-accent md:col-span-3">{t.work.label}</p>
            <div className="md:col-span-9">
              <p className="max-w-[52ch] text-[15px] leading-[1.75] text-muted-ink">
                {t.work.intro}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 border-t border-line">
          {featured.map((project, i) => {
            const even = i % 2 === 0;
            return (
              <article
                key={project.id}
                className="grid gap-8 border-b border-line py-14 lg:grid-cols-12 lg:gap-12 lg:py-20"
              >
                <div
                  className={
                    even
                      ? "lg:col-span-5"
                      : "lg:order-2 lg:col-span-5"
                  }
                >
                  <h3 className="text-2xl font-semibold leading-snug tracking-[-0.02em] md:text-[1.75rem]">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-sm leading-[1.75] text-muted-ink">
                    {project.description}
                  </p>

                  <dl className="mt-6">
                    <div className="border-t border-line py-3">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                        {t.work.role}
                      </dt>
                      <dd className="mt-1 text-sm">{project.role}</dd>
                    </div>
                    <div className="border-t border-line py-3">
                      <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                        {t.work.stack}
                      </dt>
                      <dd className="mt-1 text-sm leading-relaxed text-muted-ink">
                        {project.techStack.join(" · ")}
                      </dd>
                    </div>
                  </dl>

                  <div className="mt-5">
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                      {t.work.features}
                    </p>
                    <ul className="mt-2.5 space-y-1.5">
                      {project.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-baseline gap-2.5 text-sm text-muted-ink"
                        >
                          <span
                            aria-hidden="true"
                            className="inline-block h-[4px] w-[4px] shrink-0 translate-y-[-2px] bg-accent"
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-7 flex flex-wrap items-center gap-6 text-sm">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-medium linky text-accent"
                      >
                        {t.work.viewProject}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium linky"
                    >
                      {t.work.source}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                <div className={even ? "lg:col-span-7" : "lg:order-1 lg:col-span-7"}>
                  <BrowserFrame
                    src={project.image}
                    alt={`${project.title} — application screenshot`}
                    title={project.title}
                  />
                </div>
              </article>
            );
          })}
        </div>

        <Reveal>
          <div className="py-12 md:py-16">
            <p className="eyebrow text-muted-ink">{t.work.moreLabel}</p>
            <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-muted-ink">
              {t.work.moreNote}
            </p>

            <div className="mt-6 border-t border-line">
              {more.map(({ base, loc }) => {
                const title = (loc && typeof loc === "object" && "title" in loc && typeof loc.title === "string")
                  ? loc.title
                  : base.title;
                return (
                  <a
                    key={base.id}
                    href={base.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid items-baseline gap-x-6 gap-y-1 border-b border-line py-4 md:grid-cols-12"
                  >
                    <span className="text-[15px] font-medium transition-colors group-hover:text-accent md:col-span-6">
                      {title}
                    </span>
                    <span className="hidden truncate font-mono text-[12px] text-muted-ink md:col-span-4 md:block">
                      {base.techStack.slice(0, 4).join(" · ")}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink transition-colors group-hover:text-accent md:col-span-2 md:justify-end">
                      GitHub <ArrowUpRight className="h-3 w-3" />
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}