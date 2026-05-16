export const socialLinks = {
  github: "https://github.com/NajiAlkhudari",
  linkedin: "https://www.linkedin.com/in/mouhammed/",
};

export const navItems = [
  { label: "Home", href: "#home", sectionId: "home" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
] as const;

export const projectCategories = ["web", "mobile", "fullstack", "landing"] as const;

export const skillCategories = [
  {
    title: "Frontend",
    icon: "monitor",
    skills: [
      "HTML5",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React js",
      "Next.js",
      "Tailwind CSS",
      "Redux Toolkit",
      "Zustand",
      "Component Reusable",
    ],
  },
  {
    title: "Mobile",
    icon: "smartphone",
    skills: [
      "React Native Expo",
      "Kotlin",
      "Kotlin Multiplatform (KMP)",
      "Jetpack Compose",
      "SwiftUI",
      "Push Notifications",
      "Real-time",
      "Google Maps API",
      "WhatsApp API",
    ],
  },
  {
    title: "Backend",
    icon: "database",
    skills: [
      "C#",
      "Asp.net Core Api",
      "Entity Framework",
      "SQL Server",
      "PostgreSQL",
      "Domain-Driven Design",
      "Multitenancy",
      "REST API Integration",
    ],
  },
  {
    title: "DevOps & Tools",
    icon: "wrench",
    skills: ["Docker", "Git"],
  },
] as const;

export type ProjectKind = "web" | "mobile" | "fullstack";

export type ProjectSlide = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export type Project = {
  name: string;
  kind: ProjectKind;
  description: string;
  github: string;
  demo: string;
  techStack: string[];
  slides?: ProjectSlide[];
  images?: string[];
};

export const projects: Project[] = [
  {
    name: "Reusable Components",
    kind: "web",
    description:
      "A reusable component library and playground focused on adaptable UI building blocks, fast composition, and practical developer ergonomics.",
    github: "https://github.com/NajiAlkhudari/componentReusable-and-basic-test",
    demo: "https://component-reusable.vercel.app/",
    techStack: ["React js", "Next.js", "Tailwind CSS", "TypeScript"],
    slides: [
      {
        src: "/component.png",
        alt: "Reusable Components showcase screen",
        objectPosition: "top",
      },
      {
        src: "/component.png",
        alt: "Reusable Components component gallery",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "A Class Transportation",
    kind: "web",
    description:
      "A transportation management web application for the University of Kalamoon that streamlines operational workflows and administrative control.",
    github: "https://github.com/NajiAlkhudari/React-js-App-",
    demo: "/Admin.png",
    techStack: ["React js", "Tailwind CSS", "Zustand", "Dashboard UI"],
    slides: [
      {
        src: "/Admin.png",
        alt: "A Class Transportation admin dashboard overview",
        objectPosition: "top",
      },
      {
        src: "/Admin.png",
        alt: "A Class Transportation dashboard detail",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "To Do",
    kind: "web",
    description:
      "A focused task manager with a clean workflow for organizing daily work, tracking progress, and keeping the interface lightweight.",
    github: "https://github.com/NajiAlkhudari/todo",
    demo: "https://todo-eosin-iota.vercel.app/",
    techStack: ["React js", "TypeScript", "Tailwind CSS", "UI States"],
    slides: [
      {
        src: "/list.png",
        alt: "To Do project task list screen",
        objectPosition: "top",
      },
      {
        src: "/list.png",
        alt: "To Do project task details",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "M.B.K",
    kind: "web",
    description:
      "A salesperson management system built to support pharmaceutical representatives with multi-platform workflow visibility and team coordination.",
    github: "https://github.com/NajiAlkhudari",
    demo: "/mbk.png",
    techStack: ["React js", "Asp.net Core Api", "SQL Server", "Multiplatform"],
    slides: [
      {
        src: "/mbk.png",
        alt: "M.B.K salesperson management dashboard",
        objectPosition: "top",
      },
      {
        src: "/mbk.png",
        alt: "M.B.K workflow dashboard detail",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "ChefWay",
    kind: "mobile",
    description:
      "A delivery driver mobile app built with Kotlin and Jetpack Compose. Drivers receive and manage order assignments, track order status in real-time, and view both restaurant and customer locations via Google Maps integration.",
    github: "https://github.com/NajiAlkhudari",
    demo: "/projects/chefway/Log_in-2.png",
    techStack: [
      "Kotlin",
      "Jetpack Compose",
      "Google Maps API",
      "Real-time",
      "Push Notifications",
    ],
    slides: [
      {
        src: "/projects/chefway/Log_in-2.png",
        alt: "ChefWay login screen",
        objectPosition: "center",
      },
      {
        src: "/projects/chefway/home-3.png",
        alt: "ChefWay home screen",
        objectPosition: "center",
      },
      {
        src: "/projects/chefway/Order_details-2.png",
        alt: "ChefWay order details screen",
        objectPosition: "center",
      },
      {
        src: "/projects/chefway/Notifications.png",
        alt: "ChefWay notifications screen",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "AloChef",
    kind: "mobile",
    description:
      "A food ordering platform connecting users with authentic home kitchens in Homs. Built with Kotlin Multiplatform (no shared UI) — delivering a fully native Android app and a fully native iOS app from a shared business logic layer. Features real-time order tracking, Google Maps integration, and push notifications.",
    github: "https://github.com/NajiAlkhudari",
    demo: "/projects/alochef/Log_in.png",
    techStack: [
      "Kotlin Multiplatform",
      "Android (Native)",
      "iOS (Native)",
      "Google Maps API",
      "Real-time",
      "Push Notifications",
      "WhatsApp API",
    ],
    slides: [
      {
        src: "/projects/alochef/Log_in.png",
        alt: "AloChef login screen",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/home-2.png",
        alt: "AloChef home screen",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Order_details.png",
        alt: "AloChef order details screen",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Cart.png",
        alt: "AloChef cart screen",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Create_support_requests.png",
        alt: "AloChef support requests screen",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Order_details-3.png",
        alt: "AloChef order details follow-up screen",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "Task Log",
    kind: "fullstack",
    description:
      "A full-stack internal system for managing employee visits and appointments. Includes an admin dashboard for scheduling and reporting, a backend API, and a mobile app for field employees.",
    github: "",
    demo: "",
    techStack: [
      "Next.js",
      "Zustand",
      "Tailwind CSS",
      "ASP.NET Core",
      "Layered Architecture",
      "React Native Expo",
      "Real-time",
      "Push Notifications",
    ],
    images: [
      "/projects/tasklog/1754397839864.jpeg",
      "/projects/tasklog/1754397845752.jpeg",
      "/projects/tasklog/1754397845835.jpeg",
      "/projects/tasklog/1754397853746.jpeg",
      "/projects/tasklog/1754397858330.jpeg",
      "/projects/tasklog/1754397859586.jpeg",
    ],
  },
  {
    name: "AloChef Landing Page",
    kind: "web",
    description:
      "A bilingual marketing landing page for the AloChef mobile app. Built with Next.js, connected to Google Search Console for SEO performance, and fully responsive across all devices.",
    github: "",
    demo: "https://alochef-landpage.vercel.app",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "SEO",
      "Google Search Console",
      "Responsive Design",
    ],
    images: [
      "/projects/alochef-landing/1.png",
      "/projects/alochef-landing/2.png",
      "/projects/alochef-landing/3.png",
      "/projects/alochef-landing/4.png",
      "/projects/alochef-landing/5.png",
    ],
  },
  {
    name: "Homs Avenue",
    kind: "web",
    description:
      "A bilingual real estate landing page for a modern residential compound in Homs. Built with Next.js, connected to Google Search Console for SEO, and fully responsive across all devices.",
    github: "",
    demo: "https://www.avenuehoms.com/en",
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "SEO",
      "Google Search Console",
      "Google Maps API",
      "Responsive Design",
      "i18n",
    ],
    images: [
      "/projects/homs-avenue/1.png",
      "/projects/homs-avenue/2.png",
      "/projects/homs-avenue/3.png",
    ],
  },
];
