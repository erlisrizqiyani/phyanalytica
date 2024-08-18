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
        {label: 'Our Offer', href:'/solution'},
        {label: 'Our Services', href:'/solution'},
        {label: 'Technology We Use', href:'/solution'},
      ]
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      subItems: [
        { label: "Time Series Analysis", href: "/portfolio" },
        { label: "Ocr Tools", href: "/portfolio" },
        { label: "Dynamic Pricing", href: "/portfolio" },
      ],
    },
    {
      label: "Contact Us",
      href: "/contact",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
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
