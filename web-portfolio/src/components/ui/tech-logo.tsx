import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandDef = {
  src: string;
  darkInvert?: boolean;
};

const brands: Record<string, BrandDef> = {
  React: { src: "/images/logos/React.svg" },
  Nextjs: { src: "/images/logos/Nextjs.svg", darkInvert: true },
  Vuejs: { src: "/images/logos/Vuejs.svg" },
  TypeScript: { src: "/images/logos/TypeScript.svg" },
  Tailwindcss: { src: "/images/logos/Tailwindcss.svg" },
  Framer: { src: "/images/logos/Framer.svg" },
  Html5: { src: "/images/logos/Html5.svg" },
  Css3: { src: "/images/logos/Css3.svg" },
  Javascript: { src: "/images/logos/Javascript.svg" },
  Python: { src: "/images/logos/Python.svg" },
  FastAPI: { src: "/images/logos/FastAPI.svg" },
  Nodejs: { src: "/images/logos/Nodejs.svg" },
  Express: { src: "/images/logos/Express.svg", darkInvert: true },
  Php: { src: "/images/logos/Php.svg" },
  MySQL: { src: "/images/logos/MySQL.svg" },
  PostgreSQL: { src: "/images/logos/PostgreSQL.svg" },
  SQLite: { src: "/images/logos/SQLite.svg" },
  Prisma: { src: "/images/logos/Prisma.svg", darkInvert: true },
  GitHub: { src: "/images/logos/GitHub.svg", darkInvert: true },
  Vercel: { src: "/images/logos/Vercel.svg", darkInvert: true },
  VSCode: { src: "/images/logos/visualstudiocode.svg" },
  PyCharm: { src: "/images/logos/PyCharm.svg", darkInvert: true },
  Postman: { src: "/images/logos/Postman.svg" },
  PowerBI: { src: "/images/logos/powerbi.svg" },
  GoogleSheets: { src: "/images/logos/GoogleSheets.svg" },
  Excel: { src: "/images/logos/microsoftexcel.svg" },
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

  return (
    <Image
      src={brand.src}
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