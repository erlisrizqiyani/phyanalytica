import { tv } from "tailwind-variants";
import "@/styles/globals.css";

export const title = tv({
  base: "tracking-wide inline",
  variants: {
    color: {
      white:"from-[#FFFFFF] to-[#FFFFFF]",
      black:"from-[#000000] to-[#000000]",
      violet: "from-[#5327B0] to-[#5327B0]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "from-[#4B4B4B] to-[#4B4B4B]"
    },
    size: {
      sm: "text-base", // Placeholder, not used in this case
      md: "text-lg", // Placeholder, not used in this case
      lg: "text-xl",   // Placeholder, not used in this case
      black48: "text-[48px] font-black", // Black - 48
      semiBold40: "text-[40px] font-semibold", // Semi bold - 40
      semiBold24: "text-[24px] font-semibold", // Semi bold - 24
      semiBold22: "text-[22px] font-semibold", // Semi bold - 22
      regular24: "text-[24px] font-normal", // Regular - 24
      regular16: "text-[16px] font-normal", // Regular - 16
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "regular16",
  },
  compoundVariants: [
    {
      color: [
        "white",
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

export const subtitle = tv({
  base: "tracking-tight-negative",
  variants: {
    color: {
      white:"#FFFFFF",
      black:"from-[#000000] to-[#000000]",
      violet: "from-[#5327B0] to-[#5327B0]",
      yellow: "from-[#FF705B] to-[#FFB457]",
      blue: "from-[#5EA2EF] to-[#0072F5]",
      cyan: "from-[#00b7fa] to-[#01cfea]",
      green: "from-[#6FEE8D] to-[#17c964]",
      pink: "from-[#FF72E1] to-[#F54C7A]",
      foreground: "from-[#4B4B4B] to-[#4B4B4B]"
    },
    size: {
      sm: "text-base", // Placeholder, not used in this case
      md: "text-lg",  // Placeholder, not used in this case
      lg: "text-xl",   // Placeholder, not used in this case
      black48: "text-[48px] font-bold", // Black - 48
      semiBold40: "text-[40px] font-semibold", // Semi bold - 40
      semiBold24: "text-[24px] font-semibold", // Semi bold - 24
      semiBold22: "text-[22px] font-semibold", // Semi bold - 22
      bold20: "text-[20px] font-bold",
      regular24: "text-[24px] font-normal", // Regular - 24
      regular16: "text-[16px] font-normal", // Regular - 16
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: [
        "white",
        "violet",
        "yellow",
        "blue",
        "cyan",
        "green",
        "pink",
        "foreground",
      ],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});
