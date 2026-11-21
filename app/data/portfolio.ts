export const socialLinks = {
  github: "https://github.com/NajiAlkhudari",
  linkedin: "https://www.linkedin.com/in/mouhammed/",
};

export const navItems = [
  { key: "work", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "skills", href: "#skills" },
  { key: "contact", href: "#contact" },
] as const;

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
  altAr?: string;
  objectPosition?: string;
};

export type Project = {
  name: string;
  nameAr?: string;
  kind: ProjectKind;
  description: string;
  descriptionAr: string;
  github: string;
  demo: string;
  featured?: boolean;
  appStore?: string;
  techStack: string[];
  galleries?: {
    label: "parents" | "supervisor";
    slides: ProjectSlide[];
  }[];
  slides?: ProjectSlide[];
  images?: string[];
};

export const projects: Project[] = [
  {
    name: "Amanak Way",
    nameAr: "أمانك واي",
    descriptionAr: "منصّة للنقل المدرسي تضم لوحة تحكّم للمدرسة وتطبيقين منفصلين للأهالي والمشرفين. يتابع الأهالي موقع الحافلة ورحلات أبنائهم، ويتلقّون إشعارات عند الصعود والوصول والنزول. ويطّلع المشرفون على مساراتهم ويسجّلون صعود الطلاب ونزولهم حتى عند انقطاع الإنترنت.",
    featured: true,
    kind: "fullstack",
    description:
      "A school transportation platform with a school dashboard and separate apps for parents and bus supervisors. Parents can see the bus location, follow their children's trips, and receive boarding, arrival, and drop-off notifications. Supervisors can view assigned routes and record when students board and leave the bus, even when connectivity drops.",
    github: "",
    demo: "https://www.amanakway.com",
    appStore: "https://apps.apple.com/app/amanak-way/id6809785415",
    techStack: [],
    galleries: [
      {
        label: "parents",
        slides: [
          {
            src: "/projects/amanak-way/parents-live-trip.jpeg",
            alt: "Parents app with a school trip map and progress timeline",
            altAr: "خريطة رحلة مدرسية ومراحل تقدّمها في تطبيق الأهالي",
          },
          {
            src: "/projects/amanak-way/parents-trip-history.jpeg",
            alt: "Parents app with past trips and recorded boarding and arrival times",
            altAr: "سجل الرحلات السابقة وأوقات الصعود والوصول في تطبيق الأهالي",
          },
          {
            src: "/projects/amanak-way/parents-weekly-summary.jpg",
            alt: "Parents app with student trip statuses and a weekly summary",
            altAr: "حالة رحلات الطلاب والملخّص الأسبوعي في تطبيق الأهالي",
          },
        ],
      },
      {
        label: "supervisor",
        slides: [
          {
            src: "/projects/amanak-way/supervisor-routes.jpg",
            alt: "Supervisor app listing morning and return routes",
            altAr: "قائمة مسارات الذهاب والعودة في تطبيق المشرفين",
          },
          {
            src: "/projects/amanak-way/supervisor-route-map.jpg",
            alt: "Supervisor app showing an assigned route on a map",
            altAr: "خريطة لمسار رحلة في تطبيق المشرفين",
          },
          {
            src: "/projects/amanak-way/supervisor-settings.jpg",
            alt: "Supervisor app with language and appearance settings",
            altAr: "إعدادات اللغة والمظهر في تطبيق المشرفين",
          },
        ],
      },
    ],
  },
  {
    name: "ChefWay",
    descriptionAr: "تطبيق لسائقي التوصيل مبني باستخدام Kotlin وJetpack Compose. يتيح للسائقين استلام الطلبات الموكلة إليهم وإدارتها، ومتابعة حالتها لحظة بلحظة، وعرض مواقع المطاعم والعملاء على خرائط Google.",
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
        altAr: "شاشة تسجيل الدخول في ChefWay",
        objectPosition: "center",
      },
      {
        src: "/projects/chefway/home-3.png",
        alt: "ChefWay home screen",
        altAr: "الشاشة الرئيسية في ChefWay",
        objectPosition: "center",
      },
      {
        src: "/projects/chefway/Order_details-2.png",
        alt: "ChefWay order details screen",
        altAr: "تفاصيل الطلب في ChefWay",
        objectPosition: "center",
      },
      {
        src: "/projects/chefway/Notifications.png",
        alt: "ChefWay notifications screen",
        altAr: "الإشعارات في ChefWay",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "AloChef",
    descriptionAr: "منصّة لطلب الطعام من المطابخ المنزلية في حمص. يستخدم التطبيق Kotlin Multiplatform لمشاركة منطق العمل مع واجهات أصلية مستقلة على Android وiOS. يدعم تتبّع الطلبات لحظيًا، وخرائط Google، والإشعارات الفورية.",
    kind: "mobile",
    description:
      "A food ordering platform connecting users with authentic home kitchens in Homs. Built with Kotlin Multiplatform (no shared UI) — delivering a fully native Android app and a fully native iOS app from a shared business logic layer. Features real-time order tracking, Google Maps integration, and push notifications.",
    github: "https://github.com/NajiAlkhudari",
    demo: "",
    appStore: "https://apps.apple.com/app/alochef/id6785230791",
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
        src: "/projects/alochef/Log_in.webp",
        alt: "AloChef login screen",
        altAr: "شاشة تسجيل الدخول في AloChef",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/home-2.webp",
        alt: "AloChef home screen",
        altAr: "الشاشة الرئيسية في AloChef",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Order_details.webp",
        alt: "AloChef order details screen",
        altAr: "تفاصيل الطلب في AloChef",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Cart.webp",
        alt: "AloChef cart screen",
        altAr: "سلّة الطلب في AloChef",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Create_support_requests.webp",
        alt: "AloChef support requests screen",
        altAr: "طلبات الدعم في AloChef",
        objectPosition: "center",
      },
      {
        src: "/projects/alochef/Order_details-3.webp",
        alt: "AloChef order details follow-up screen",
        altAr: "متابعة الطلب في AloChef",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "Task Log",
    descriptionAr: "نظام داخلي متكامل لإدارة زيارات الموظفين ومواعيدهم. يتضمّن لوحة تحكّم للجدولة والتقارير، وواجهة برمجة خلفية، وتطبيق جوال للموظفين الميدانيين.",
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
    name: "Wiket",
    descriptionAr: "منصّة لحجز الخدمات. يسجّل مقدّمو الخدمات أعمالهم ويحدّدون الخدمات وساعات العمل، ويديرون الحجوزات ويطّلعون على التقارير. يختار العملاء موعدًا متاحًا ويحجزونه مباشرةً، ويتلقّون رسالة على واتساب عند تأكيد الحجز.",
    kind: "fullstack",
    description:
      "A service booking platform that allows vendors to register their businesses, add services with availability schedules and working hours, and manage bookings with full reporting. Customers browse available time slots and book services instantly. When a vendor confirms a booking, the customer receives a WhatsApp confirmation message.",
    github: "",
    demo: "",
    techStack: [
      "Next.js",
      "Zustand",
      "ASP.NET Core API",
      "Email Integration",
      "WhatsApp API",
      "Real-time",
      "Role-based Auth (Admin / Vendor / Customer)",
    ],
    images: [
      "/projects/wiket/1.png",
      "/projects/wiket/2.png",
      "/projects/wiket/3.png",
      "/projects/wiket/4.png",
      "/projects/wiket/5.png",
      "/projects/wiket/6.png",
    ],
  },
  {
    name: "AloChef Landing Page",
    nameAr: "الموقع التعريفي لـ AloChef",
    descriptionAr: "صفحة تسويقية ثنائية اللغة لتطبيق AloChef، مبنية باستخدام Next.js ومتجاوبة على مختلف الشاشات. ترتبط بـ Google Search Console لمتابعة أداء الموقع في نتائج البحث.",
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
      "/projects/alochef-landing/1.webp",
      "/projects/alochef-landing/2.webp",
      "/projects/alochef-landing/3.webp",
      "/projects/alochef-landing/4.webp",
      "/projects/alochef-landing/5.webp",
    ],
  },
  {
    name: "Homs Avenue",
    nameAr: "حمص أفنيو",
    descriptionAr: "موقع عقاري ثنائي اللغة للتعريف بمجمّع سكني حديث في حمص. بُني باستخدام Next.js، ويعمل على مختلف الشاشات، ويرتبط بـ Google Search Console لمتابعة ظهوره في نتائج البحث.",
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
  {
    name: "Reusable Components",
    nameAr: "مكوّنات واجهة قابلة لإعادة الاستخدام",
    descriptionAr: "مكتبة مكوّنات واجهة مع صفحة لتجربتها. تسهّل بناء الواجهات من عناصر مرنة يسهل تركيبها وتكييفها.",
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
        altAr: "واجهة استعراض المكوّنات القابلة لإعادة الاستخدام",
        objectPosition: "top",
      },
      {
        src: "/component.png",
        alt: "Reusable Components component gallery",
        altAr: "معرض المكوّنات القابلة لإعادة الاستخدام",
        objectPosition: "center",
      },
    ],
  },
  {
    name: "To Do",
    nameAr: "قائمة المهام",
    descriptionAr: "أداة لتنظيم المهام اليومية ومتابعة تقدّمها بواجهة بسيطة وخفيفة.",
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
        altAr: "شاشة قائمة المهام",
        objectPosition: "top",
      },
      {
        src: "/list.png",
        alt: "To Do project task details",
        altAr: "شاشة تفاصيل المهام",
        objectPosition: "center",
      },
    ],
  },
];
