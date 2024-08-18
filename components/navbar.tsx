"use client";

import { useEffect, useState } from 'react';
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
import clsx from "clsx";
import "@/styles/globals.css";
import LogoIcon, { SearchIcon } from "@/components/icons";
import { siteConfig } from "@/config/site";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null); // Menentukan tipe state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (index: number, href?: string) => {
    const item = siteConfig.navItems[index];
    
    if (item.subItems) {
      // Jika item memiliki sub-items, toggle sub-items
      setActiveMenu(activeMenu === index ? null : index);
    } else if (href) {
      // Jika tidak ada sub-items, navigasikan ke href
      window.location.href = href;
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
      className={scrolled ? 'navbar-scrolled' : 'navbar-transparent'}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-4" href="/">
            <LogoIcon />
            <p className="font-semibold text-inherit text-[24px]">Phyanalytica</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-3/5 sm:basis-3/5" justify="center">
        <ul className="hidden lg:flex gap-6 justify-center ml-2 relative">
          {siteConfig.navItems.map((item, index) => (
            <NavbarItem key={index} className="relative" >
              <button
                type="button"
                className={clsx(
                  "nav-item cursor-pointer",
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                  "hover:text-purple-500"
                )}
                onClick={() => handleMenuClick(index, item.href)}
              >
                {item.label}
              </button>
              {activeMenu === index && item.subItems && (
                <ul className="absolute bg-white text-black shadow-lg rounded-md mt-2 w-56 p-8">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="p-2 hover:bg-gray-100">
                      <NextLink href={subItem.href}>
                        {subItem.label}
                      </NextLink>
                    </li>
                  ))}
                </ul>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
        </NavbarItem>
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
