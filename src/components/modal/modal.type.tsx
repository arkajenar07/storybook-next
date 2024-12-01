import { ReactNode, HTMLAttributes } from "react";

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  type?: "simple" | "rounded";
  size?: "small" | "medium" | "large";
  title?: string;
  description?: string;
  positiveLabel?: string;
  negativeLabel?: string;
  onSubmit?: () => void;
  onCancel?: () => void;
  children?: ReactNode;
}
