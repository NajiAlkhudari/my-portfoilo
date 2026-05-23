"use client";

import { LazyMotion, domAnimation } from "framer-motion";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

type ProvidersProps = {
  children: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </LazyMotion>
  );
}
