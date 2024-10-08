import React from "react";
import clsx from "clsx";
import { tv } from "tailwind-variants";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link"; // Import Next.js Link

interface ButtonProps {
  variant: "text" | "outlined" | "contained";
  color: "violet" | "white";
  children: React.ReactNode;
  onClick?: () => void; // Optional onClick handler
  href?: string; // Optional href for navigation
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
      violet: "text-purple-600 border-violet bg-white",
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

const Button: React.FC<ButtonProps> = ({ variant, color, children, onClick, href }) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <button className={clsx(button({ variant, color }))} onClick={onClick}>
          {children}
          {variant === "text" && <ArrowRightIcon className="ml-2 h-5 w-9 mt-1" />}
        </button>
      </Link>
    );
  }

  return (
    <button className={clsx(button({ variant, color }))} onClick={onClick}>
      {children}
      {variant === "text" && <ArrowRightIcon className="ml-2 h-5 w-9 mt-1" />}
    </button>
  );
};

export default Button;
