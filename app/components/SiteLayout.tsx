import type { ReactNode } from "react";
import { copy, Locale } from "../data/languages";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Providers from "./Providers";
import "../globals.css";

export default function SiteLayout({ children, locale }: { children: ReactNode; locale: Locale }) {
  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} suppressHydrationWarning>
      <body className="font-body antialiased">
        <a className="skip-link" href="#main-content">{copy[locale].skip}</a>
        <Providers>
          <Navbar locale={locale} />
          {children}
          <Footer locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
