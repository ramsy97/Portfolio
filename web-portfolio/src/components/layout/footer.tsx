import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { siteConfig } from "@/data/portfolio";

export function Footer() {
  const links = [
    { label: "GitHub", href: siteConfig.github, icon: GithubIcon },
    { label: "LinkedIn", href: siteConfig.linkedin, icon: LinkedinIcon },
    { label: "Email", href: `mailto:${siteConfig.email}` },
  ];

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="text-[15px] font-semibold tracking-tight">
            Ramy Syafitri
            <span className="mx-2.5 text-muted-ink">—</span>
            <span className="font-normal text-muted-ink">Software Engineer</span>
          </p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-ink">
            {siteConfig.location}
          </p>
        </div>

        <div className="flex items-center gap-5 text-[13px] text-muted-ink">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
            >
              {"icon" in link && link.icon && <link.icon size={14} />}
              {link.label}
            </a>
          ))}
        </div>

        <p className="font-mono text-[11px] text-muted-ink">© 2026 Ramy Syafitri</p>
      </div>
    </footer>
  );
}