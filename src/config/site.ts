// Site-wide brand constants. Edit here to rebrand.
export const SITE_NAME = "TEST";
export const SITE_TAGLINE = "Build your dream. Invest in your future.";
export const CURRENT_YEAR = new Date().getFullYear();

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
] as const;
