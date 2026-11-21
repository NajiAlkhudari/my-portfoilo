import type { ReactNode } from "react";
import SiteLayout from "../../components/SiteLayout";
import { portfolioMetadata } from "../../data/languages";

export const metadata = portfolioMetadata("ar");

export default function ArabicLayout({ children }: { children: ReactNode }) {
  return <SiteLayout locale="ar">{children}</SiteLayout>;
}
