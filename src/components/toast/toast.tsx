import { FC } from "react";
import { ToastProps } from "./toast.type";
import '../../app/globals.css';

export const Toast: FC<ToastProps> = ({
  variant = "success",
  size = "medium",
  type = "notification",
  title,
  message,
}) => {
  const variantClasses = {
    success: "bg-green-100 border-green-400 text-green-700",
    danger: "bg-red-100 border-red-400 text-red-700",
    warning: "bg-yellow-100 border-yellow-400 text-yellow-700",
  }[variant];

  const sizeClasses = {
    small: "text-sm p-2",
    medium: "text-base p-4",
    large: "text-lg p-6",
  }[size];

//   const typeIcon = {
//     notification: "🔔",
//     information: "ℹ️",
//   }[type];

  return (
    <div
      className={`max-w-sm border-l-4 rounded-lg shadow ${variantClasses} ${sizeClasses}`}
      role="alert"
    >
      <div className="flex items-center">
      <div className="mr-2">
        {/* notification icon */}
        {type === "notification" && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
        </svg>
        )}
        {type === "information" && (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
        </svg>
        )}
      </div>
        {/* <span className="text-xl mr-3">{typeIcon}</span> */}
        <div>
          <h5 className="font-bold">{title}</h5>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
