import type { ReactNode } from "react";
import SiteLayout from "../components/SiteLayout";
import { portfolioMetadata } from "../data/languages";

export const metadata = portfolioMetadata("en");

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
