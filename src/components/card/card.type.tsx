import {HTMLAttributes} from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "light" | "dark";
    image: string;
    title: string;
    label: string;
}