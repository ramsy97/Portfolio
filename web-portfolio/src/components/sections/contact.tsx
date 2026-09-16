"use client";

import { useState, type FormEvent } from "react";
import { ArrowUpRight, Check, Loader2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/ui/brand-icons";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/contexts/language-context";

export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const channels = [
    { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: "LinkedIn", value: "linkedin.com/in/ramy-syafitri", href: siteConfig.linkedin },
    { label: "GitHub", value: "github.com/ramsy97", href: siteConfig.github },
    { label: "WhatsApp", value: "+62 851-5641-4903", href: siteConfig.whatsapp },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="border-t border-line py-20 md:py-28">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">
        <div className="grid gap-x-10 gap-y-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Reveal>
              <p className="eyebrow text-accent">{t.contact.label}</p>
              <h2 className="mt-5 text-[1.7rem] font-semibold leading-[1.15] tracking-[-0.025em] md:text-[2rem]">
                {t.contact.heading}
              </h2>
              <p className="mt-4 max-w-[40ch] text-[15px] leading-[1.75] text-muted-ink">
                {t.contact.intro}
              </p>

              <div className="mt-9">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
                  {t.contact.channelsLabel}
                </p>
                <div className="mt-4 border-t border-line">
                  {channels.map((channel) => (
                    <a
                      key={channel.label}
                      href={channel.href}
                      target={channel.href.startsWith("http") ? "_blank" : undefined}
                      rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group grid items-baseline gap-x-4 gap-y-0.5 border-b border-line py-4 md:grid-cols-12"
                    >
                      <span className="text-sm font-semibold md:col-span-3">
                        {channel.label}
                      </span>
                      <span className="truncate font-mono text-[12px] text-muted-ink md:col-span-8">
                        {channel.value}
                      </span>
                      <span className="hidden text-accent md:col-span-1 md:flex md:justify-end">
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                      </span>
                    </a>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-1.5 text-muted-ink">
                  <GithubIcon size={14} />
                  <LinkedinIcon size={14} />
                  <WhatsAppIcon size={14} />
                  <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.14em]">
                    {siteConfig.location}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-7">
            <Reveal delay={80}>
              <form
                onSubmit={handleSubmit}
                className="border border-line p-7 md:p-10"
              >
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink"
                    >
                      {t.contact.nameLabel}
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.namePlaceholder}
                      className="mt-2 w-full border-b border-line bg-transparent pb-2 text-[15px] transition-colors placeholder:text-muted-ink/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink"
                    >
                      {t.contact.emailLabel}
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t.contact.emailPlaceholder}
                      className="mt-2 w-full border-b border-line bg-transparent pb-2 text-[15px] transition-colors placeholder:text-muted-ink/60 focus:border-accent focus:outline-none"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink"
                  >
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="mt-2 w-full resize-none border-b border-line bg-transparent pb-2 text-[15px] transition-colors placeholder:text-muted-ink/60 focus:border-accent focus:outline-none"
                  />
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-5">
                  <button
                    type="submit"
                    disabled={sending}
                    className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 text-sm font-medium text-canvas transition-colors hover:bg-accent-strong disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                    {sending ? t.contact.sending : t.contact.sendMessage}
                  </button>

                  {status === "success" && (
                    <p className="flex items-center gap-1.5 text-sm text-accent">
                      <Check className="h-4 w-4" />
                      {t.contact.sendSuccess}
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-muted-ink">{t.contact.sendError}</p>
                  )}
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}