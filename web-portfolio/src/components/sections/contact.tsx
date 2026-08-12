"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Copy, Check, Loader2 } from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "@/components/ui/brand-icons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/portfolio";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useLanguage } from "@/contexts/language-context";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const contactLinks = [
    { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: LinkedinIcon, label: "LinkedIn", value: "linkedin.com/in/ramy-syafitri", href: siteConfig.linkedin },
    { icon: GithubIcon, label: "GitHub", value: "github.com/ramsy97", href: siteConfig.github },
    { icon: InstagramIcon, label: "Instagram", value: "@ramysyafitri", href: siteConfig.instagram },
    { icon: Phone, label: "WhatsApp", value: siteConfig.phone, href: siteConfig.whatsapp },
    { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
    <section id="contact" className="py-24 md:py-32 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <p className="text-primary font-semibold mb-3 uppercase tracking-wide text-sm">
            {t.contact.sectionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            {t.contact.title}{" "}
            <span className="gradient-text">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto text-sm sm:text-base">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-6 sm:gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-2.5 sm:space-y-3"
          >
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Card key={link.label} hover className="flex items-center gap-3 sm:gap-4 border-border !p-3 sm:!p-4">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-primary/15 text-primary shrink-0">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground font-medium">{link.label}</p>
                    <p className="text-xs sm:text-sm font-semibold truncate">{link.value}</p>
                  </div>
                  {link.label === "Email" ? (
                    <button
                      onClick={handleCopyEmail}
                      className="p-2 rounded-lg hover:bg-muted transition-colors"
                      title="Copy email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4 text-muted-foreground" />
                      )}
                    </button>
                  ) : link.href ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
                    >
                      <Send className="w-4 h-4" />
                    </a>
                  ) : null}
                </Card>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-4 sm:p-6 md:p-8 border-border">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <label className="text-sm font-semibold mb-2 block">{t.contact.nameLabel}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                    placeholder={t.contact.namePlaceholder}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">{t.contact.emailLabel}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                    placeholder={t.contact.emailPlaceholder}
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold mb-2 block">{t.contact.messageLabel}</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-muted border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all resize-none placeholder:text-muted-foreground/50"
                    placeholder={t.contact.messagePlaceholder}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full shadow-lg shadow-primary/20" disabled={sending}>
                  {sending ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {sending ? t.contact.sending : t.contact.sendMessage}
                </Button>
                {status === "success" && (
                  <p className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400">
                    <Check className="w-4 h-4" />
                    {t.contact.sendSuccess}
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-sm font-medium text-red-600 dark:text-red-400">
                    <Send className="w-4 h-4" />
                    {t.contact.sendError}
                  </p>
                )}
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
