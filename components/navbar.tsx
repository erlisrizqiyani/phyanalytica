"use client";

import { useEffect, useState, useRef } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuItem,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Input } from "@nextui-org/input";
import NextLink from "next/link";
import { Link as NextUILink } from "@nextui-org/link";
import "@/styles/globals.css";
import LogoIcon, { SearchIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";
import LanguageSwitcher from "@/components/langswitch"; // Import LanguageSwitcher


export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const submenuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMenuClick = (index: number, href?: string) => {
    const item = siteConfig.navItems[index];

    if (item.subItems) {
      setActiveMenu(activeMenu === index ? null : index);
    } else if (href) {
      window.location.href = href;
    }
  };

  const handleMouseLeave = (
    event: React.MouseEvent<HTMLUListElement, MouseEvent>
  ) => {
    if (submenuRef.current) {
      const rect = submenuRef.current.getBoundingClientRect();

      if (timeoutId) clearTimeout(timeoutId);

      const newTimeoutId = setTimeout(() => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        const distanceX = Math.min(
          Math.abs(mouseX - rect.left),
          Math.abs(mouseX - rect.right)
        );
        const distanceY = Math.min(
          Math.abs(mouseY - rect.top),
          Math.abs(mouseY - rect.bottom)
        );

        if (distanceX > 50 || distanceY > 50) {
          setActiveMenu(null);
        }
      }, 100);

      setTimeoutId(newTimeoutId);
    }
  };

  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      className={scrolled ? "navbar-scrolled" : "navbar-transparent"}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-4" href="/">
            <LogoIcon />
            <p className="font-semibold text-inherit text-[24px]">
              Phyanalytica
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-3/5 sm:basis-3/5" justify="center">
        <ul className="hidden lg:flex gap-6 justify-center ml-2 relative">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={index} className="relative">
              <button
                type="button"
                className="nav-item cursor-pointer hover:text-purple-500"
                onClick={() => handleMenuClick(index, item.href)}
              >
                {item.label}
              </button>
              {activeMenu === index && item.subItems && (
                <ul
                  ref={submenuRef}
                  onMouseLeave={(event) => handleMouseLeave(event)}
                  className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-56 p-8"
                >
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="p-2 hover:bg-gray-100">
                      <NextLink href={subItem.href}>{subItem.label}</NextLink>
                    </li>
                  ))}
                </ul>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="basis-1/5 sm:basis-full flex items-center justify-between">
        <NavbarItem>
          <LanguageSwitcher /> {/* Always visible LanguageSwitcher */}
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> {/* Search input hidden on small screens */}
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.href}-${index}`}>
              <NextLink href={item.href} passHref>
                <NextUILink
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  size="lg"
                >
                  {item.label}
                </NextUILink>
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
