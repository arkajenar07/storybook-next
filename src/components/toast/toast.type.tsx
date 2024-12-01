import { HTMLAttributes } from "react";

export interface ToastProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "success" | "danger" | "warning";
  size?: "small" | "medium" | "large";
  type?: "notification" | "information";
  title: string;
  message: string;
}
