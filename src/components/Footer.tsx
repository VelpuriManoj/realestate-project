import { Phone, Mail } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF, CONTACT_PHONE, CONTACT_PHONE_HREF } from "../config/contact";
import { CURRENT_YEAR, NAV_LINKS, SITE_NAME } from "../config/site";

export function Footer() {
  const footerLinks = NAV_LINKS.filter((link) => link.label !== "Why Us");

  return (
    <footer className="bg-ink py-16 text-base/80">
      <div className="container-x grid gap-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-xl text-base">{SITE_NAME}</p>
          <p className="mt-4 max-w-xs text-sm">
            A real-estate development company building thoughtfully planned homes and communities across Hyderabad.
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="text-sm text-base/50">Navigate</p>
          <ul className="mt-4 space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-sm transition-colors hover:text-base">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="text-sm text-base/50">Contact</p>
          <ul className="mt-4 space-y-3">
            <li>
              <a href={CONTACT_PHONE_HREF} className="flex items-center gap-2 text-sm text-base transition-colors hover:text-accent-light">
                <Phone size={15} aria-hidden="true" />
                {CONTACT_PHONE}
              </a>
            </li>
            <li>
              <a href={CONTACT_EMAIL_HREF} className="flex items-center gap-2 text-sm text-base transition-colors hover:text-accent-light">
                <Mail size={15} aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-x mt-14 border-t border-base/10 pt-6">
        <p className="text-xs text-base/50">© {CURRENT_YEAR} {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
