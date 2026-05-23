import type { ReactNode } from "react";
import { Inter, Syne } from "next/font/google";
import Providers from "./components/Providers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  fallback: ["system-ui", "Arial", "sans-serif"],
});

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${syne.variable}`}
    >
      <head />
      <body className="font-body text-[rgb(var(--text))] antialiased">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
