import type { Metadata } from "next";

export type Locale = "en" | "ar";

export const copy = {
  en: {
    firstName: "Naji",
    lastName: "Alkhudari",
    role: "Full-stack & mobile engineer",
    intro: "My recent work includes apps for school transport, food ordering, and service booking.",
    location: "Homs, Syria",
    explore: "Explore my work",
    getInTouch: "Get in touch",
    skip: "Skip to content",
    navigation: "Main navigation",
    nav: { work: "Work", about: "About", skills: "Skills", contact: "Contact" },
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    about: {
      title: "About me",
      intro: "I’m a software engineer based in Homs, Syria. I work across frontend development, backend APIs, and mobile apps. I focus on building interfaces people can use easily and code teams can maintain.",
      location: "Based in",
      education: "Education",
      degree: "B.S. in Information Technology Engineering, 2023",
      availability: "Open to",
      opportunities: "Full-time and freelance opportunities",
    },
    skills: {
      title: "Technical skills",
      categories: { monitor: "Frontend", smartphone: "Mobile", database: "Backend", wrench: "DevOps & Tools" },
    },
    work: {
      title: "Selected work",
      filter: "Filter projects",
      filters: { all: "All projects", fullstack: "Full stack", mobile: "Mobile", web: "Web" },
      labels: { fullstack: "Full stack", mobile: "Mobile app", web: "Web project" },
      website: "Website",
      viewScreenshot: "View screenshot",
      appStore: "App Store",
      onAppStore: (name: string) => `${name} on the App Store`,
      shown: (count: number) => `${count} projects shown`,
      screenshots: (label: string) => label ? `${label} screenshots` : "Screenshots",
      previous: (label: string) => label ? `Previous screenshot for ${label}` : "Previous screenshot",
      next: (label: string) => label ? `Next screenshot for ${label}` : "Next screenshot",
      screen: (name: string, index: number) => `${name} screen ${index}`,
      parents: "Parents App",
      supervisor: "Supervisor App",
      dashboard: "Dashboard",
    },
    footer: {
      title: "Let’s work together.",
      intro: "Open to full-time roles and freelance projects.",
      top: "Back to top",
    },
    meta: {
      title: "Naji Alkhudari | Software Engineer",
      description: "Portfolio of Naji Alkhudari, a full-stack and mobile software engineer building web and mobile applications.",
    },
  },
  ar: {
    firstName: "ناجي",
    lastName: "الخضري",
    role: "مهندس برمجيات للويب وتطبيقات الجوال",
    intro: "من أعمالي الأخيرة تطبيقات للنقل المدرسي وطلب الطعام وحجز الخدمات.",
    location: "حمص، سوريا",
    explore: "استعرض مشاريعي",
    getInTouch: "تواصل معي",
    skip: "انتقل إلى المحتوى",
    navigation: "التنقّل الرئيسي",
    nav: { work: "المشاريع", about: "نبذة عني", skills: "المهارات", contact: "التواصل" },
    themeLight: "التبديل إلى الوضع الفاتح",
    themeDark: "التبديل إلى الوضع الداكن",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    about: {
      title: "نبذة عني",
      intro: "أنا مهندس برمجيات من حمص، سوريا. أعمل على تطوير واجهات الويب وواجهات البرمجة وتطبيقات الجوال. أركّز على بناء واجهات سهلة الاستخدام وكتابة شيفرة يسهل على الفريق صيانتها.",
      location: "الموقع",
      education: "التعليم",
      degree: "بكالوريوس في هندسة تقانة المعلومات، ٢٠٢٣",
      availability: "متاح لـ",
      opportunities: "العمل بدوام كامل والمشاريع المستقلة",
    },
    skills: {
      title: "المهارات التقنية",
      categories: { monitor: "تطوير الواجهات", smartphone: "تطبيقات الجوال", database: "الأنظمة الخلفية", wrench: "التشغيل والأدوات" },
    },
    work: {
      title: "مشاريع مختارة",
      filter: "تصفية المشاريع",
      filters: { all: "كل المشاريع", fullstack: "أنظمة متكاملة", mobile: "جوال", web: "ويب" },
      labels: { fullstack: "نظام متكامل", mobile: "تطبيق جوال", web: "مشروع ويب" },
      website: "الموقع",
      viewScreenshot: "عرض لقطة الشاشة",
      appStore: "متجر التطبيقات",
      onAppStore: (name: string) => `${name} على متجر التطبيقات`,
      shown: (count: number) => count === 2 ? "يُعرض مشروعان" : `عدد المشاريع المعروضة: ${count.toLocaleString("ar")}`,
      screenshots: (label: string) => label ? `لقطات شاشة: ${label}` : "لقطات الشاشة",
      previous: (label: string) => label ? `اللقطة السابقة: ${label}` : "اللقطة السابقة",
      next: (label: string) => label ? `اللقطة التالية: ${label}` : "اللقطة التالية",
      screen: (name: string, index: number) => `لقطة شاشة من ${name} (${index.toLocaleString("ar")})`,
      parents: "تطبيق الأهالي",
      supervisor: "تطبيق المشرفين",
      dashboard: "لوحة التحكم",
    },
    footer: {
      title: "لنعمل معًا",
      intro: "متاح للعمل بدوام كامل وللمشاريع المستقلة.",
      top: "العودة للأعلى",
    },
    meta: {
      title: "ناجي الخضري | مهندس برمجيات",
      description: "معرض أعمال ناجي الخضري، مهندس برمجيات يطوّر تطبيقات الويب والجوال.",
    },
  },
} as const;

export function portfolioMetadata(locale: Locale): Metadata {
  return {
    ...copy[locale].meta,
    alternates: {
      canonical: locale === "ar" ? "/ar" : "/",
      languages: { en: "/", ar: "/ar", "x-default": "/" },
    },
  };
}

const technologiesAr: Record<string, string> = {
  "Component Reusable": "مكوّنات قابلة لإعادة الاستخدام",
  "Push Notifications": "إشعارات فورية",
  "Real-time": "تحديث لحظي",
  "Domain-Driven Design": "تصميم موجّه بالمجال",
  Multitenancy: "تعدّد المستأجرين",
  "REST API Integration": "تكامل مع واجهات REST",
  "Android (Native)": "Android (أصلي)",
  "iOS (Native)": "iOS (أصلي)",
  "Layered Architecture": "بنية متعددة الطبقات",
  "Email Integration": "تكامل البريد الإلكتروني",
  "Role-based Auth (Admin / Vendor / Customer)": "صلاحيات حسب الدور (مدير، مزوّد، عميل)",
  "Responsive Design": "تصميم متجاوب",
  "UI States": "حالات الواجهة",
};

export function displayTechnology(technology: string, locale: Locale) {
  return locale === "ar" ? technologiesAr[technology] ?? technology : technology;
}
