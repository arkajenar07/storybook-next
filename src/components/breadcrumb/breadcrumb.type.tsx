import { ReactNode } from "react";

export interface BreadcrumbProps {
  variant?: "small" | "medium" | "large";
  datas: Array<{ label: string; href?: string }>;
  spacer?: ReactNode; // Allows custom elements or components for spacing
}
