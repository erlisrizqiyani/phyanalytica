import { Fira_Code as FontMono, Inter as FontSans } from "next/font/google";
import { Poppins as FontPoppins } from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontPoppins = FontPoppins ({
  subsets: ["latin"],
  weight: ["300", "500", "700", "800"],
  style: "normal",
  variable: "--font-poppins",
});
