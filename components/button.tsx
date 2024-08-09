import React from "react";
import clsx from "clsx";
import { tv } from "tailwind-variants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

interface ButtonProps {
  variant: "text" | "outlined" | "contained";
  color: "violet" | "white";
  children: React.ReactNode;
  onClick?: () => void; // Add an optional onClick prop
}

const button = tv({
  base: "inline-flex items-center justify-center font-semibold focus:outline-none transition duration-200",
  variants: {
    variant: {
      text: "bg-transparent",
      outlined: "px-2 py-1 m-1 bg-transparent border-1 rounded-2xl",
      contained: "text-white",
    },
    color: {
      violet: "text-purple-600 border-violet bg-white", // Using violet instead of purple
      white: "text-white border-white",
    },
  },
  compoundVariants: [
    {
      variant: "text",
      color: "violet",
      class: "hover:text-purple-300",
    },
    {
      variant: "text",
      color: "white",
      class: "hover:text-gray-500",
    },
    {
      variant: "outlined",
      color: "violet",
      class: "hover:bg-purple-50",
    },
    {
      variant: "outlined",
      color: "white",
      class: "hover:text-purple-400 hover:border-purple-400",
    },
    {
      variant: "contained",
      color: "violet",
      class: "hover:bg-purple-700",
    },
    {
      variant: "contained",
      color: "white",
      class: "hover:bg-gray-300",
    },
  ],
  defaultVariants: {
    variant: "text",
    color: "violet",
  },
});

const Button: React.FC<ButtonProps> = ({ variant, color, children, onClick }) => {
  return (
    <button onClick={onClick} className={clsx(button({ variant, color }))}>
      {children}
      {variant === "text" && <ArrowRightIcon className="ml-2 h-5 w-9 mt-1" />}
    </button>
  );
};

export default Button;
