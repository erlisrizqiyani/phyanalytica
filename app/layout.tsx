import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { Providers } from "./providers";
import localFont from 'next/font/local';
const myFont = localFont({
  src: './fonts/orkney-light-webfont.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en" className={myFont.className}>
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background antialiased",
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="">
            <Navbar />
            <main className="w-full">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
            </footer>
          </div></Providers>
      </body>
    </html>
  );
}
