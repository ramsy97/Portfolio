"use client";

import { Reveal } from "@/components/ui/reveal";
import { useLanguage } from "@/contexts/language-context";

export function Snapshot() {
  const { t } = useLanguage();

  return (
    <section aria-label="Profile overview" className="border-y border-line">
      <div className="mx-auto max-w-[1120px] px-6 py-10 md:px-10 md:py-12">
        <Reveal>
          <div className="grid gap-x-10 gap-y-6 md:grid-cols-12 md:items-baseline">
            <p className="eyebrow text-muted-ink md:col-span-3">{t.snapshot.label}</p>
            <div className="md:col-span-9">
              <div className="divide-y divide-line border-t border-line">
                {t.snapshot.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-x-6 gap-y-1 py-4 md:grid-cols-3 md:items-baseline"
                  >
                    <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                      {row.label}
                    </p>
                    <p className="text-[15px] leading-relaxed md:col-span-2">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}