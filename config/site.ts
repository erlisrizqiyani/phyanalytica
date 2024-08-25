export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Phyanalytica",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Solution",
      href: "/solution",
      subItems: [
        {label: 'Who We Are', href:'/solution'},
        {label: 'Our Offer', href:'/solution#sol-offer'},
        {label: 'Our Services', href:'/solution#sol-services'},
        {label: 'Technology We Use', href:'/solution#sol-tech'},
      ]
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      subItems: [
        { label: "Catalog", href: "/portfolio" },
        { label: "Time Series Analysis", href: "/portfolio#port-time" },
        { label: "OCR Tools", href: "/portfolio#port-ocr" },
        { label: "Dynamic Pricing", href: "/portfolio#port-pricing" },
      ],
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/home",
    },
    {
      label: "Solution",
      href: "/solution",
    },
    {
      label: "Portfolio",
      href: "/portfolio",
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
