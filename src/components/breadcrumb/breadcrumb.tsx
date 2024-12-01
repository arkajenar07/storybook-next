import Link from "next/link";
import { BreadcrumbProps } from "./breadcrumb.type";
import { FC } from "react";

export const Breadcrumb: FC<BreadcrumbProps> = ({
  variant = "medium",
  datas,
  spacer = "/",
}) => {
  const variantClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[variant];

  return (
    <nav aria-label="breadcrumb">
      <ol className={`flex flex-wrap items-center space-x-2 ${variantClasses}`}>
        {datas.map((item, index) => (
          <li key={index} className="flex items-center">
            {item.href ? (
              <Link className="text-blue-500 hover:underline" href={item.href}>
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-500">{item.label}</span>
            )}
            {index < datas.length - 1 && (
              <span className="mx-2 font-inter">{spacer}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
