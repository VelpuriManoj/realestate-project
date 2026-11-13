import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "../config/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-smooth ${
        scrolled || open ? "bg-base/95 shadow-[0_1px_0_0_rgba(30,27,24,0.08)] backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-20 items-center justify-between" aria-label="Primary">
        <a
          href="#home"
          className={`font-display text-xl tracking-tight transition-colors ${
            scrolled || open ? "text-ink" : "text-base"
          }`}
        >
          {SITE_NAME}
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm transition-colors duration-200 hover:opacity-70 ${
                  scrolled ? "text-ink" : "text-base"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className={`hidden lg:inline-flex ${
            scrolled ? "btn-primary" : "btn-light-outline"
          }`}
        >
          Contact Us
        </a>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-10 w-10 items-center justify-center lg:hidden ${
            scrolled || open ? "text-ink" : "text-base"
          }`}
        >
          {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-base lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 pb-8 pt-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-4 text-base text-ink"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-5">
                <a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Contact Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
