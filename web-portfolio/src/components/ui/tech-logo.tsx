import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandDef = {
  slug?: string;
  color?: string;
  local?: string;
  darkInvert?: boolean;
};

const brands: Record<string, BrandDef> = {
  React: { slug: "react", color: "61DAFB" },
  Nextjs: { slug: "nextdotjs", color: "000000", darkInvert: true },
  Vuejs: { slug: "vuedotjs", color: "4FC08D" },
  TypeScript: { slug: "typescript", color: "3178C6" },
  Tailwindcss: { slug: "tailwindcss", color: "06B6D4" },
  Framer: { slug: "framer", color: "0055FF" },
  Html5: { slug: "html5", color: "E34F26" },
  Css3: { slug: "css", color: "1572B6" },
  Javascript: { slug: "javascript", color: "F7DF1E" },
  Python: { slug: "python", color: "3776AB" },
  FastAPI: { slug: "fastapi", color: "009688" },
  Nodejs: { slug: "nodedotjs", color: "5FA04E" },
  Express: { slug: "express", color: "000000", darkInvert: true },
  Php: { slug: "php", color: "777BB4" },
  MySQL: { slug: "mysql", color: "4479A1" },
  PostgreSQL: { slug: "postgresql", color: "4169E1" },
  SQLite: { slug: "sqlite", color: "003B57" },
  Prisma: { slug: "prisma", color: "2D3748", darkInvert: true },
  GitHub: { slug: "github", color: "181717", darkInvert: true },
  Vercel: { slug: "vercel", color: "000000", darkInvert: true },
  VSCode: { local: "/images/logos/visualstudiocode.svg" },
  PyCharm: { slug: "pycharm", color: "000000", darkInvert: true },
  Postman: { slug: "postman", color: "FF6C37" },
  PowerBI: { local: "/images/logos/powerbi.svg" },
  GoogleSheets: { slug: "googlesheets", color: "34A853" },
  Excel: { local: "/images/logos/microsoftexcel.svg" },
};

export function TechLogo({
  icon,
  size = 15,
  className,
}: {
  icon: string;
  size?: number;
  className?: string;
}) {
  const brand = brands[icon];
  if (!brand) return null;

  const src = brand.local
    ? brand.local
    : `https://cdn.simpleicons.org/${brand.slug}/${brand.color}`;

  return (
    <Image
      src={src}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      loading="lazy"
      className={cn(
        "shrink-0",
        brand.darkInvert && "dark:invert",
        className
      )}
    />
  );
}