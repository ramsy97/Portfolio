import { type SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export function ReactIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <circle cx="12" cy="12" r="2.05" fill="currentColor" />
      <g fill="none" stroke="currentColor" strokeWidth="1.2">
        <ellipse rx="11" ry="4.2" cx="12" cy="12" />
        <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(60 12 12)" />
        <ellipse rx="11" ry="4.2" cx="12" cy="12" transform="rotate(120 12 12)" />
      </g>
    </svg>
  );
}

export function NextjsIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <path d="M9.5 15.5V8.5l7 7" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="16.5" cy="8.5" r="1.2" fill="white" />
    </svg>
  );
}

export function VuejsIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M2 3h3.5L12 14.5 18.5 3H22L12 21 2 3z" fill="#42b883" />
      <path d="M7 3h2.5L12 8.5 14.5 3H17L12 14 7 3z" fill="#35495e" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="2" fill="#3178c6" />
      <path d="M14.5 16.5h-2V10l-3 3.5h-2V9h2v3.5l3-3.5h2v7.5z" fill="white" />
      <path d="M17 10h2v6.5h1.5V10H22v-1.5h-5V10z" fill="white" />
    </svg>
  );
}

export function TailwindcssIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35.98 1 2.13 2.15 4.6 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C15.62 7.15 14.47 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.9 1.35C8.38 16.85 9.53 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.9-1.35C10.62 13.15 9.47 12 7 12z" fill="#06b6d4" />
    </svg>
  );
}

export function FramerIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M4 0h16v8h-8l8 8H4v-8h8L4 0z" fill="currentColor" />
    </svg>
  );
}

export function Html5Icon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4z" fill="#e34f26" />
      <path d="M12 4v14.5l4.5-1.5L17.5 6H12z" fill="#ff6d3c" />
      <path d="M7 7h5v2H9l-.5 5 3.5 1 3.5-1-.3-3h-2l.1 1.5L12 14l-1.8-.6-.1-1.4H7z" fill="#fff" />
    </svg>
  );
}

export function Css3Icon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4z" fill="#1572b6" />
      <path d="M12 4v14.5l4.5-1.5L17.5 6H12z" fill="#33a9dc" />
      <path d="M7 7h5v2h-3l-.1 2h3v2h-3l-.5 5 3.5 1 3.5-1-.5-5h-2l.2 3 1.8.5 1.8-.5.3-4H7z" fill="#fff" />
    </svg>
  );
}

export function JavascriptIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="2" fill="#f7df1e" />
      <path d="M7 15.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-3c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v3c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5h-2v4.5h-1v-3h-1v3h-1v-4h-2v5z" fill="#323330" />
    </svg>
  );
}

export function PythonIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M12 2C9.24 2 8 3.24 8 5v2h4v1H7c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4h1v-3.5c0-1.38 1.12-2.5 2.5-2.5h4c1.38 0 2.5 1.12 2.5 2.5V18h1c2.21 0 4-1.79 4-4v-3c0-2.21-1.79-4-4-4h-4V5c0-1.76-1.24-3-3-3zm-1.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" fill="#3776ab" />
      <path d="M12 22c2.76 0 4-1.24 4-3v-2h-4v-1h5c2.21 0 4-1.79 4-4v-3c0-2.21-1.79-4-4-4h-1v3.5c0 1.38-1.12 2.5-2.5 2.5h-4c-1.38 0-2.5-1.12-2.5-2.5V6H6c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4h4v3.5c0 1.76 1.24 3 3 3zm1.5-2a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="#ffd43b" />
    </svg>
  );
}

export function FastAPIIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#009688" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold" fontFamily="sans-serif">F</text>
    </svg>
  );
}

export function NodejsIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" fill="#339933" />
      <text x="12" y="15.5" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">N</text>
    </svg>
  );
}

export function ExpressIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#333" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" fontFamily="sans-serif">Ex</text>
    </svg>
  );
}

export function PhpIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="7" fill="#777bb4" />
      <text x="12" y="14.5" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PHP</text>
    </svg>
  );
}

export function MySQLIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#00758f" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">My</text>
    </svg>
  );
}

export function PostgreSQLIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#336791" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Pg</text>
    </svg>
  );
}

export function SQLiteIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#003b57" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Sq</text>
    </svg>
  );
}

export function PrismaIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#2d3748" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Pr</text>
    </svg>
  );
}

export function GitHubIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z" fill="currentColor" />
    </svg>
  );
}

export function VercelIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <path d="M12 2L2 20h20L12 2z" fill="currentColor" />
    </svg>
  );
}

export function VSCodeIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#007acc" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">VS</text>
    </svg>
  );
}

export function PyCharmIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#fc801d" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PC</text>
    </svg>
  );
}

export function PostmanIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#ff6c37" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">PM</text>
    </svg>
  );
}

export function PowerBIIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#f2c811" />
      <text x="12" y="16" textAnchor="middle" fill="#333" fontSize="7" fontWeight="bold" fontFamily="sans-serif">BI</text>
    </svg>
  );
}

export function GoogleSheetsIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#0f9d58" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">GS</text>
    </svg>
  );
}

export function ExcelIcon({ size = 24, className, ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" className={className} {...props}>
      <rect width="20" height="20" x="2" y="2" rx="3" fill="#217346" />
      <text x="12" y="16" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">Xl</text>
    </svg>
  );
}

export const techIconMap: Record<string, React.FC<IconProps>> = {
  React: ReactIcon,
  Nextjs: NextjsIcon,
  Vuejs: VuejsIcon,
  TypeScript: TypeScriptIcon,
  Tailwindcss: TailwindcssIcon,
  Framer: FramerIcon,
  Html5: Html5Icon,
  Css3: Css3Icon,
  Javascript: JavascriptIcon,
  Python: PythonIcon,
  FastAPI: FastAPIIcon,
  Nodejs: NodejsIcon,
  Express: ExpressIcon,
  Php: PhpIcon,
  MySQL: MySQLIcon,
  PostgreSQL: PostgreSQLIcon,
  SQLite: SQLiteIcon,
  Prisma: PrismaIcon,
  GitHub: GitHubIcon,
  Vercel: VercelIcon,
  VSCode: VSCodeIcon,
  PyCharm: PyCharmIcon,
  Postman: PostmanIcon,
  PowerBI: PowerBIIcon,
  GoogleSheets: GoogleSheetsIcon,
  Excel: ExcelIcon,
};
