export const siteConfig = {
  name: "Ramy Syafitri",
  title: "Ramy Syafitri — Software Engineer",
  description: "Full-Stack Developer specializing in modern web applications, ERP systems, and digital solutions. Building fast, efficient, and user-friendly applications.",
  url: "https://ramysyafitri.vercel.app",
  email: "ramysyafitri8@gmail.com",
  phone: "+6285156414903",
  location: "Bekasi, Indonesia",
  github: "https://github.com/ramsy97",
  linkedin: "https://linkedin.com/in/ramy-syafitri-051a131b5",
  instagram: "https://instagram.com/ramysyafitri",
  whatsapp: "https://wa.me/6285156414903",
  avatar: "/images/avatar.jpg",
};

export const jobInterests = [
  "Web Developer",
  "Full-Stack Developer",
  "Software Engineer",
];

export type NavItem = {
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export type SkillCategory = {
  title: string;
  icon: string;
  skills: { name: string; icon: string }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: [
      { name: "React", icon: "React" },
      { name: "Next.js", icon: "Nextjs" },
      { name: "Vue.js", icon: "Vuejs" },
      { name: "TypeScript", icon: "TypeScript" },
      { name: "TailwindCSS", icon: "Tailwindcss" },
      { name: "Framer Motion", icon: "Framer" },
      { name: "HTML5", icon: "Html5" },
      { name: "CSS3", icon: "Css3" },
      { name: "JavaScript (ES6+)", icon: "Javascript" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Python", icon: "Python" },
      { name: "FastAPI", icon: "FastAPI" },
      { name: "Node.js", icon: "Nodejs" },
      { name: "Express.js", icon: "Express" },
      { name: "PHP", icon: "Php" },
      { name: "REST APIs", icon: "Globe" },
    ],
  },
  {
    title: "Database",
    icon: "Database",
    skills: [
      { name: "MySQL", icon: "MySQL" },
      { name: "PostgreSQL", icon: "PostgreSQL" },
      { name: "SQLite", icon: "SQLite" },
      { name: "Prisma ORM", icon: "Prisma" },
      { name: "SQLAlchemy", icon: "Layers" },
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "Wrench",
    skills: [
      { name: "Git & GitHub", icon: "GitHub" },
      { name: "Vercel", icon: "Vercel" },
      { name: "VS Code", icon: "VSCode" },
      { name: "PyCharm", icon: "PyCharm" },
      { name: "Postman", icon: "Postman" },
    ],
  },
  {
    title: "IT Support",
    icon: "Monitor",
    skills: [
      { name: "Hardware Troubleshooting", icon: "Wrench" },
      { name: "OS Installation", icon: "Monitor" },
      { name: "TCP/IP & Networking", icon: "Wifi" },
      { name: "LAN/WAN Setup", icon: "Network" },
      { name: "Basic Network Security", icon: "Shield" },
    ],
  },
  {
    title: "Data & Productivity",
    icon: "BarChart3",
    skills: [
      { name: "Advanced Excel", icon: "Excel" },
      { name: "Google Sheets", icon: "GoogleSheets" },
      { name: "Power BI", icon: "PowerBI" },
      { name: "Data Verification", icon: "CheckCircle" },
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  role: string;
  techStack: string[];
  features: string[];
  architecture: string;
  image: string;
  liveUrl?: string;
  githubUrl: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "andon-monitoring",
    title: "Real-Time Manufacturing Andon System",
    category: "Full-Stack",
    description: "Real-time andon monitoring system for production lines with live machine status boards, instant abnormality alerts, escalation workflows, and downtime analytics.",
    longDescription: "A real-time andon system inspired by lean manufacturing practice. It streams live machine and line status to floor dashboards and TV boards via WebSockets, triggers color-coded andon alerts (green/yellow/red) with audible notifications, routes abnormality calls through Operator → Supervisor → Maintenance escalation tiers, and records downtime with reason codes for response time and MTTR analytics.",
    problem: "Production lines rely on manual reporting when machines stop or defects occur, so supervisors often learn about abnormalities minutes later — inflating downtime and hiding root causes.",
    solution: "Built a WebSocket-driven andon platform that broadcasts machine state changes instantly, auto-escalates unanswered alerts, logs downtime with reason codes, and visualizes output vs target KPIs on live line boards and shift reports.",
    role: "Full-Stack Developer — Designed the real-time event architecture, built the Next.js dashboard, implemented the Socket.IO server, escalation timers, and the Prisma/PostgreSQL data layer.",
    techStack: ["Next.js", "TypeScript", "Socket.IO", "Node.js", "Prisma ORM", "PostgreSQL", "TailwindCSS", "Recharts"],
    features: [
      "Live andon board with green/yellow/red machine status",
      "Instant abnormality alerts with sound & browser notifications",
      "Escalation workflow (Operator → Supervisor → Maintenance)",
      "Downtime logging with reason codes",
      "Response time & MTTR analytics dashboard",
      "Live output vs hourly target counters",
      "Shift-based historical reports & export",
      "Multi-line support with role-based access",
    ],
    architecture: "Next.js App Router frontend → Express REST API + Socket.IO WebSocket gateway → Prisma ORM → PostgreSQL. Machine events broadcast per-line channels; background escalation timers auto-promote unacknowledged alerts; Recharts for MTTR & downtime analytics.",
    image: "/images/projects/andon-monitoring.webp",
    githubUrl: "https://github.com/ramsy97/Real-Time-Manufacturing-Andon-System",
    tags: ["Next.js", "Socket.IO", "WebSocket", "PostgreSQL"],
  },
  {
    id: "ai-manufacturing",
    title: "AI Manufacturing Analytics Platform",
    category: "Full-Stack",
    description: "Enterprise analytics platform for manufacturing with real-time production monitoring, OEE calculation, machine performance analytics, defect analysis, ML forecasting, and an AI assistant.",
    longDescription: "A comprehensive analytics platform for manufacturing operations combining real-time production monitoring, OEE (Availability × Performance × Quality) calculation, machine performance analytics, Pareto-based defect analysis, machine learning production forecasting (RandomForestRegressor), and an AI assistant that answers questions about company operational data.",
    problem: "Manufacturers lack a unified view of production, quality, and machine performance, making it hard to detect inefficiencies, predict downtime, and make data-driven decisions.",
    solution: "Built an end-to-end analytics platform with role-based access, Excel/CSV data import with validation, real-time KPI dashboards, OEE computation, ML-based forecasting, automated insight generation, and report exports.",
    role: "Full-Stack Developer — Designed architecture, built Next.js frontend with React Query, implemented FastAPI backend with SQLAlchemy, Pandas, Scikit-learn ML pipeline, and PostgreSQL.",
    techStack: ["Next.js", "TypeScript", "FastAPI", "Python", "SQLAlchemy", "Pandas", "Scikit-learn", "PostgreSQL", "TailwindCSS", "React Query"],
    features: [
      "Real-time production & OEE monitoring dashboard",
      "Machine performance analytics with OEE ranking",
      "Defect analysis with Pareto charts & auto insights",
      "ML production forecasting (RandomForestRegressor)",
      "AI Manufacturing Assistant (data Q&A)",
      "Excel/CSV data import with validation & cleaning",
      "Role-based access (Admin, Supervisor, Operator)",
      "Excel & PDF report export",
    ],
    architecture: "Next.js frontend → FastAPI REST API → SQLAlchemy ORM → PostgreSQL. JWT auth with role-based middleware. ML pipeline with Scikit-learn for production forecasting and inventory prediction.",
    image: "/images/projects/ai-manufacturing.webp",
    githubUrl: "https://github.com/ramsy97/AI-Powered-Manufacturing-Analytics-Production-Intelligence-Platform",
    tags: ["Next.js", "FastAPI", "Python", "Machine Learning"],
  },
  {
    id: "cafepos",
    title: "CafePOS",
    category: "Full-Stack",
    description: "Modern Point-of-Sale (POS) system for cafes with order management, real-time billing, receipt generation, and sales analytics.",
    longDescription: "A full-featured Point-of-Sale system built specifically for cafe environments. Features include table management, menu categorization, real-time order processing, digital receipt generation, and comprehensive sales analytics with interactive charts.",
    problem: "Cafes need a fast, intuitive POS system that handles table management, order processing, invoice generation, and sales tracking without the complexity and cost of enterprise solutions.",
    solution: "Built a modern POS with a clean interface for quick order entry, table flow management, auto-calculated billing with tax, PDF receipt export, and a real-time sales dashboard with Recharts visualizations.",
    role: "Full-Stack Developer — Built the complete application with Next.js 16, React 19, Prisma ORM, Zustand state management, and deployed on Vercel.",
    techStack: ["Next.js", "React 19", "TypeScript", "Prisma ORM", "TailwindCSS", "Zustand", "Framer Motion", "Recharts", "Zod"],
    features: [
      "Table management with status tracking",
      "Menu categorization & item management",
      "Quick order entry interface",
      "Auto-calculated billing with tax",
      "PDF receipt generation (jsPDF)",
      "Sales analytics with charts",
      "Real-time order processing",
      "Responsive design for tablets",
    ],
    architecture: "Next.js 16 App Router + React 19 → Prisma ORM → SQLite. Zustand for client state management. Recharts for sales dashboards. jsPDF + html2canvas for receipt generation.",
    image: "/images/projects/cafepos.webp",
    liveUrl: "https://cafe-pos-sooty.vercel.app",
    githubUrl: "https://github.com/ramsy97/CafePOS",
    tags: ["Next.js", "React", "TypeScript", "Prisma", "TailwindCSS"],
  },
  {
    id: "erp-inventory",
    title: "Warung POS",
    category: "Full-Stack",
    description: "Full-stack Point-of-Sale & inventory management system built for SMEs with real-time stock tracking and transaction management.",
    longDescription: "A comprehensive ERP solution designed specifically for small and medium enterprises. The system handles complete inventory lifecycle management, from procurement to sales, with real-time stock updates and automated alerts.",
    problem: "Small businesses struggle with manual inventory tracking, leading to stock discrepancies, lost revenue, and inefficient operations. Existing solutions are either too expensive or too complex for SMEs.",
    solution: "Built a lightweight yet powerful ERP system with an intuitive interface, real-time inventory tracking, automated reorder alerts, and comprehensive reporting dashboards.",
    role: "Full-Stack Developer — Designed architecture, built frontend with React 19, implemented FastAPI backend, and configured SQLite database.",
    techStack: ["React 19", "FastAPI", "Python", "SQLite", "JWT Auth", "TailwindCSS"],
    features: [
      "Real-time inventory tracking",
      "POS transaction management",
      "Role-based access control (RBAC)",
      "JWT authentication",
      "Sales analytics dashboard",
      "Automated stock alerts",
      "Receipt generation",
      "Multi-user support",
    ],
    architecture: "React 19 SPA → FastAPI REST API → SQLAlchemy ORM → SQLite. JWT-based authentication with role-based middleware.",
    image: "/images/projects/erp-inventory.webp",
    liveUrl: "https://warung-pos-liard.vercel.app",
    githubUrl: "https://github.com/ramsy97/Warung-POS",
    tags: ["React", "Python", "FastAPI", "SQLite"],
  },
  {
    id: "absen-digital",
    title: "Digital Attendance System",
    category: "Full-Stack",
    description: "Full-stack attendance management system with geo-fenced check-in/out, selfie capture, leave management, and role-based dashboards.",
    longDescription: "WorkSync Pro is a comprehensive attendance management solution featuring GPS-verified check-in/out with camera selfie capture, leave management with approval workflow, real-time admin and employee dashboards, and report exports in PDF and XLS formats.",
    problem: "Companies struggle with manual attendance tracking, proxy attendance, and inefficient leave management processes that lead to payroll errors and reduced productivity.",
    solution: "Built a digital attendance system with geo-fencing (100m radius), selfie verification, automated leave workflows, and role-based dashboards for complete attendance lifecycle management.",
    role: "Full-Stack Developer — Designed architecture, built Next.js 14 frontend with TypeScript, implemented Express.js backend with Prisma ORM, and configured PostgreSQL database.",
    techStack: ["Next.js 14", "TypeScript", "Express.js", "Prisma ORM", "PostgreSQL", "JWT", "Zustand", "TailwindCSS"],
    features: [
      "Geo-fenced check-in/out with selfie capture",
      "GPS location verification (100m radius)",
      "Leave management with approval workflow",
      "Admin dashboard with real-time analytics",
      "Employee dashboard with live clock",
      "Role-based access control (Admin/Employee)",
      "Attendance reports with PDF & XLS export",
      "Mobile-first responsive design",
    ],
    architecture: "Next.js 14 App Router → Express.js REST API → Prisma ORM → PostgreSQL. JWT authentication with role-based middleware. Haversine formula for geo-fencing validation.",
    image: "/images/projects/absen-digital.webp",
    liveUrl: "https://sistem-absensi-digital-smoky.vercel.app",
    githubUrl: "https://github.com/ramsy97/Sistem-Absensi-Digital",
    tags: ["Next.js", "TypeScript", "Express.js", "PostgreSQL"],
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management System",
    category: "Full-Stack",
    description: "Modern warehouse management dashboard with real-time inventory tracking, shipment management, and analytics.",
    longDescription: "A sophisticated warehouse management solution featuring real-time stock visualization, automated shipment tracking, and comprehensive analytics for warehouse operations optimization.",
    problem: "Warehouse operations need digital transformation to reduce manual errors, improve picking efficiency, and maintain accurate inventory records across multiple zones.",
    solution: "Developed a modern WMS with zone-based inventory management, real-time stock level visualization, and automated reorder point calculations.",
    role: "Full-Stack Developer — Built React 18 + TypeScript frontend, designed UI/UX, implemented data visualization components.",
    techStack: ["React 18", "TypeScript", "Vite", "TailwindCSS", "Framer Motion"],
    features: [
      "Zone-based inventory management",
      "Real-time stock level tracking",
      "Shipment tracking system",
      "Analytics dashboard",
      "Barcode scanning support",
      "Low stock alerts",
      "Export functionality",
      "Responsive design",
    ],
    architecture: "React 18 + TypeScript SPA with Vite bundler. Component-based architecture with Framer Motion animations.",
    image: "/images/projects/warehouse-management.webp",
    liveUrl: "https://warehouse-management-system-ochre.vercel.app",
    githubUrl: "https://github.com/ramsy97/Warehouse-Management-System",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS"],
  },
  {
    id: "service-desk",
    title: "Service Desk Helpdesk",
    category: "Web App",
    description: "IT helpdesk ticketing system with ticket management, priority routing, and status tracking for IT support teams.",
    longDescription: "A professional IT service desk application that streamlines support ticket management, automates priority assignment, and provides real-time status tracking for both IT staff and end users.",
    problem: "IT departments need an efficient way to manage support requests, track resolution times, and maintain a knowledge base for common issues.",
    solution: "Created a comprehensive helpdesk system with automated ticket routing, priority management, SLA tracking, and a searchable knowledge base.",
    role: "Full-Stack Developer — Designed the ticketing workflow, built the UI components, and implemented the notification system.",
    techStack: ["TypeScript", "React", "TailwindCSS", "Framer Motion"],
    features: [
      "Ticket creation and management",
      "Priority-based routing",
      "Status tracking (Open → In Progress → Resolved)",
      "Category-based organization",
      "Search and filter tickets",
      "Dashboard analytics",
      "Responsive interface",
      "Dark mode support",
    ],
    architecture: "TypeScript-first React application with modular component architecture and state management.",
    image: "/images/projects/service-desk.webp",
    githubUrl: "https://github.com/ramsy97/Service-Desk-Helpdesk",
    tags: ["TypeScript", "React", "TailwindCSS"],
  },
  {
    id: "system-finance",
    title: "System Finance",
    category: "Web App",
    description: "Personal and business finance tracking application with budget management, expense categories, and financial reporting.",
    longDescription: "A comprehensive financial management platform that helps users track income, manage budgets, categorize expenses, and generate financial reports for better decision-making.",
    problem: "Individuals and small businesses lack accessible tools for tracking finances, creating budgets, and understanding spending patterns.",
    solution: "Built a clean, intuitive finance dashboard with automated categorization, budget alerts, and visual financial reports.",
    role: "Full-Stack Developer — Designed data models, built interactive dashboards, and implemented chart visualizations.",
    techStack: ["TypeScript", "React", "TailwindCSS", "Chart.js"],
    features: [
      "Income and expense tracking",
      "Budget management with alerts",
      "Category-based expense organization",
      "Financial reporting with charts",
      "Transaction history",
      "Monthly/weekly views",
      "Data export capability",
    ],
    architecture: "TypeScript React application with chart-based visualizations and modular state management.",
    image: "/images/projects/system-finance.webp",
    liveUrl: "https://sistem-keuangan-chi.vercel.app",
    githubUrl: "https://github.com/ramsy97/System-Finance",
    tags: ["TypeScript", "React", "Charts"],
  },
  {
    id: "nexus-crm",
    title: "Nexus - CRM System",
    category: "Full-Stack",
    description: "Enterprise-style CRM system with role-based dashboards, lead-to-quote pipeline, SLA ticketing, marketing campaigns, reports, and audit logging.",
    longDescription: "A production-ready enterprise CRM built from a formal PRD, covering customers & contacts with timelines, lead scoring and conversion, an opportunities kanban pipeline with weighted forecasting, server-priced quotations with a manager approval workflow, SLA-driven support tickets, marketing campaigns with ROI tracking, role-specific reports, and admin tooling with a permission matrix and immutable audit logs.",
    problem: "Sales, marketing, and support teams need one connected system where customer data, deals, quotations, and after-sales tickets stay in sync — with strict access control and accountability for every change.",
    solution: "Built a modular NestJS + Next.js platform with RBAC enforced at route level, JWT refresh-token rotation, server-side quotation pricing from catalog prices, an SLA state machine for tickets, and role-specific KPI dashboards.",
    role: "Full-Stack Developer — Designed the PRD-driven architecture, built the NestJS API and Next.js 15 frontend, implemented RBAC guards, approval workflows, and audit logging.",
    techStack: ["Next.js 15", "React 19", "NestJS 11", "TypeScript", "Prisma ORM", "PostgreSQL", "TanStack Query", "Zustand", "TailwindCSS"],
    features: [
      "Role-specific dashboards (management / sales / marketing / support)",
      "Customers & contacts with detail timeline and related deals",
      "Lead scoring with convert-to-customer + opportunity flow",
      "Opportunities kanban pipeline with weighted forecast",
      "Quotation approval workflow with server-side pricing",
      "SLA-driven tickets (CRITICAL 4h → LOW 72h) with breach alerts",
      "Marketing campaigns with budget & ROI tracking",
      "Permission matrix, audit logs & in-app notifications",
    ],
    architecture: "Next.js 15 App Router (React 19, TanStack Query, Zustand) → NestJS 11 REST API with Swagger → Prisma ORM → PostgreSQL. JWT access tokens (15m) + rotating hashed refresh tokens (7d); RBAC via module:action permission guards; immutable audit log on all significant mutations.",
    image: "/images/projects/nexus-crm.png",
    githubUrl: "https://github.com/ramsy97/Enterprise-Style-CRM-System",
    tags: ["Next.js", "NestJS", "PostgreSQL", "RBAC"],
  },
];

export type Stat = { label: string; value?: number; suffix?: string; text?: string };

export const stats: Stat[] = [
  { label: "Projects Built", value: 20, suffix: "+" },
  { label: "GitHub Repositories", value: 20, suffix: "+" },
  { label: "Business Domains", value: 4 },
  { label: "Web Development", text: "Full-Stack" },
];

