export const siteConfig = {
  name: "Ramy Syafitri",
  title: "Ramy Syafitri — Software Engineer",
  description: "Full-Stack Developer specializing in modern web applications, ERP systems, and digital solutions. Building fast, efficient, and user-friendly applications.",
  url: "https://ramy-syafitri.vercel.app",
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
  "Full-Stack Developer",
  "Frontend Engineer",
  "Backend Engineer",
  "Web Developer",
  "IT Support",
  "DevOps Engineer",
  "Data Administration",
  "Data Processing",
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
    id: "erp-inventory",
    title: "ERP Inventory System",
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
    image: "/images/projects/erp-inventory.svg",
    liveUrl: undefined,
    githubUrl: "https://github.com/ramsy97/Warung-POS",
    tags: ["React", "Python", "FastAPI", "SQLite"],
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
    image: "/images/projects/warehouse.svg",
    liveUrl: "https://warehouse-management-system-ochre.vercel.app",
    githubUrl: "https://github.com/ramsy97/Warehouse-Management-System",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS"],
  },
  {
    id: "service-desk",
    title: "IT Service Desk & Helpdesk",
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
    image: "/images/projects/service-desk.svg",
    liveUrl: "https://service-desk-helpdesk.vercel.app",
    githubUrl: "https://github.com/ramsy97/Service-Desk-Helpdesk",
    tags: ["TypeScript", "React", "TailwindCSS"],
  },
  {
    id: "system-finance",
    title: "Financial Management System",
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
    image: "/images/projects/finance.svg",
    liveUrl: "https://system-finance-woad.vercel.app",
    githubUrl: "https://github.com/ramsy97/System-Finance",
    tags: ["TypeScript", "React", "Charts"],
  },
  {
    id: "food-ordering",
    title: "Real-time Food Ordering System",
    category: "Full-Stack",
    description: "Real-time food ordering platform with live order tracking, restaurant management, and Socket.io integration.",
    longDescription: "A full-stack real-time food ordering application featuring live order status updates via WebSocket, restaurant menu management, and a seamless ordering experience for customers.",
    problem: "Food ordering platforms need real-time communication between customers, restaurants, and delivery personnel to ensure order accuracy and timely delivery.",
    solution: "Implemented a real-time ordering system using Socket.io for instant updates, with separate dashboards for customers and restaurant staff.",
    role: "Full-Stack Developer — Built Vue 3 frontend, implemented Express.js backend with Socket.io, configured PostgreSQL database.",
    techStack: ["Vue 3", "TypeScript", "Express.js", "Prisma ORM", "PostgreSQL", "Socket.io", "JWT"],
    features: [
      "Real-time order tracking",
      "Restaurant menu management",
      "Cart and checkout system",
      "Order status notifications via WebSocket",
      "User authentication (JWT)",
      "Order history",
      "Restaurant admin dashboard",
      "Responsive design",
    ],
    architecture: "Vue 3 + TypeScript SPA → Express.js API → Prisma ORM → PostgreSQL. Socket.io for real-time bidirectional communication.",
    image: "/images/projects/food-ordering.svg",
    githubUrl: "https://github.com/ramsy97/Real-time-Food-Ordering-System",
    tags: ["Vue.js", "TypeScript", "Socket.io", "PostgreSQL"],
  },
  {
    id: "online-shopping",
    title: "E-Commerce Platform",
    category: "Full-Stack",
    description: "Full-stack e-commerce application with product management, cart system, user auth, and order processing.",
    longDescription: "A complete e-commerce solution featuring product catalog management, shopping cart functionality, secure checkout, and order management with both customer and admin interfaces.",
    problem: "Building a complete e-commerce platform requires handling product management, user authentication, cart logic, payment flow, and order tracking — all interconnected.",
    solution: "Developed a full-stack e-commerce app with Redux state management, Prisma ORM for database operations, and comprehensive CRUD operations for products and orders.",
    role: "Full-Stack Developer — Built React frontend with Redux Toolkit, Node.js/Express backend, Prisma ORM database layer.",
    techStack: ["Node.js", "Express", "Prisma ORM", "React", "Redux Toolkit", "TailwindCSS", "JWT", "Bcrypt", "Multer"],
    features: [
      "Product catalog with search & filter",
      "Shopping cart management",
      "User registration & authentication",
      "Order processing workflow",
      "Admin product management",
      "Image upload for products",
      "Responsive storefront",
      "Secure password hashing (Bcrypt)",
    ],
    architecture: "React + Redux Toolkit SPA → Node.js/Express REST API → Prisma ORM → PostgreSQL. JWT auth with Bcrypt password hashing and Multer for file uploads.",
    image: "/images/projects/ecommerce.svg",
    githubUrl: "https://github.com/ramsy97/Online-Shopping",
    tags: ["Node.js", "React", "Redux", "Prisma"],
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Ordering App",
    category: "Web App",
    description: "Modern restaurant ordering application with digital menu, table management, and kitchen display system.",
    longDescription: "A digital ordering solution for restaurants featuring interactive menu browsing, table-based ordering, and real-time kitchen display integration.",
    problem: "Restaurants need digital ordering solutions to reduce wait times, minimize order errors, and improve customer experience.",
    solution: "Created an intuitive ordering interface with categorized menu items, real-time order submission, and a kitchen display view.",
    role: "Frontend Developer — Designed the menu UI, implemented ordering workflow, and built responsive layouts.",
    techStack: ["React", "JavaScript", "HTML5", "CSS3"],
    features: [
      "Digital menu browsing",
      "Category-based menu organization",
      "Cart management",
      "Table selection",
      "Order summary and confirmation",
      "Responsive design for tablets/phones",
    ],
    architecture: "React SPA with component-based architecture. Menu data management with state lifting.",
    image: "/images/projects/restaurant.svg",
    githubUrl: "https://github.com/ramsy97/Sistem-Penjualan-berbasis-Web-menggunakan-PHP-dan-MySql",
    tags: ["React", "JavaScript", "HTML5", "CSS3"],
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Frontend",
    description: "Modern, responsive portfolio website built with Next.js, TypeScript, TailwindCSS, and Framer Motion.",
    longDescription: "This very portfolio website — a premium, modern personal website showcasing projects, skills, and experience with smooth animations, dark mode, and optimal performance.",
    problem: "A software engineer needs a professional online presence that showcases technical skills, projects, and experience in a compelling way to potential employers.",
    solution: "Built a high-performance portfolio with Next.js App Router, TypeScript for type safety, TailwindCSS for styling, and Framer Motion for animations.",
    role: "Full-Stack Developer — End-to-end development from design to deployment on Vercel.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion", "Vercel"],
    features: [
      "Responsive design (mobile-first)",
      "Dark/Light mode toggle",
      "Smooth scroll animations",
      "Project showcase with modals",
      "GitHub integration",
      "SEO optimized",
      "Performance optimized (Lighthouse 95+)",
      "Command palette (Ctrl+K)",
    ],
    architecture: "Next.js App Router with TypeScript. Atomic component architecture. TailwindCSS for styling. Framer Motion for animations. Deployed on Vercel.",
    image: "/images/projects/portfolio.svg",
    liveUrl: "https://ramy-syafitri.vercel.app",
    githubUrl: "https://github.com/ramsy97/Web-Portfolio",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
  },
];

export type Experience = {
  title: string;
  company: string;
  location: string;
  period: string;
  type: "work" | "learning";
  description: string[];
};

export const experiences: Experience[] = [
  {
    title: "Operator Produksi",
    company: "PT Yamaha Motor Electronics Indonesia",
    location: "Cibitung, Bekasi",
    period: "Nov 2017 — Nov 2018",
    type: "work",
    description: [
      "Inputted daily production data into internal inventory system with high accuracy and strict adherence to deadlines",
      "Documented component inspection results (OK/NG) into structured daily reports using advanced Excel",
      "Executed double-check validation procedures on inventory data prior to QC submission, reducing data errors by 10%",
      "Maintained highly organized archives for daily operational logs and documentation",
    ],
  },
  {
    title: "Information Systems Student",
    company: "Universitas Bina Sarana Informatika",
    location: "Bekasi, Indonesia",
    period: "2018 — 2021",
    type: "learning",
    description: [
      "Completed Diploma III in Information Systems with GPA 3.01 / 4.00",
      "Built multiple web-based projects using PHP, MySQL, and JavaScript, applying database design and CRUD principles",
      "Gained hands-on experience with system analysis, UI/UX design, and agile collaboration in team projects",
      "Self-studied React, Vue.js, Python, and modern frameworks beyond coursework requirements",
    ],
  },
  {
    title: "Computer & Network Engineering",
    company: "SMK Ristek Jaya Jakarta",
    location: "Jakarta, Indonesia",
    period: "Jul 2012 — May 2015",
    type: "learning",
    description: [
      "Built and configured computer systems from scratch including hardware assembly, BIOS setup, and OS installation",
      "Designed and implemented LAN networks using UTP cabling, IP addressing, and switch/router configuration",
      "Troubleshot hardware and software issues independently, developing strong diagnostic and problem-solving skills",
      "Installed and configured both Windows and Linux operating systems for various use cases",
    ],
  },
];

export const stats = [
  { label: "Projects Completed", value: 20, suffix: "+" },
  { label: "Technologies", value: 15, suffix: "+" },
  { label: "GitHub Repositories", value: 20, suffix: "" },
  { label: "Years Learning", value: 4, suffix: "+" },
];

export const aboutContent = {
  bio: `Detail-oriented Information Systems Graduate with a solid foundation in full-stack web development (JavaScript, Python, PHP) and IT infrastructure support. Proven track record in building secure Point-of-Sale (POS) and real-time management systems using modern tech stacks (React 19, FastAPI, Vue 3). Highly disciplined with prior manufacturing operations experience, combining strong data verification skills with a systematic approach to technical troubleshooting.`,
  vision: `Ready to contribute as an Associate Software Engineer, Full-Stack Developer, or IT Support Specialist. I aim to build digital solutions that make businesses more efficient and people's lives easier.`,
  highlights: [
    "Full-Stack Web Development (React, Vue.js, Python, Node.js)",
    "ERP & POS System Architecture",
    "Real-time Application Development",
    "IT Infrastructure & Troubleshooting",
    "Data Analysis & Verification",
    "Clean Code & Documentation",
  ],
};
