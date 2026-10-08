import Link from "next/link";

import { site } from "@/lib/site";

import Logo from "./logo";

const links = [
  { label: "Features", href: "/features" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Contact", href: "/contact" },
];

const linkClass = "text-gray-600 transition hover:text-gray-900";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 border-t border-gray-200 py-8 md:flex-row md:items-start md:justify-between md:py-12">
          <div className="space-y-2">
            <Logo />
            <p className="text-sm text-gray-600">Hospital management software for clinics and hospitals.</p>
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:gap-x-6">
              {links.map((link) => (
                <li key={link.href}>
                  <Link className={linkClass} href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a className={linkClass} href={site.loginUrl}>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <p className="pb-8 text-sm text-gray-600">&copy; {new Date().getFullYear()} AppZad. All rights reserved.</p>
      </div>
    </footer>
  );
}
