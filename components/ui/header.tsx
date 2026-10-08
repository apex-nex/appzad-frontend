import Link from "next/link";

import { navLinks, site } from "@/lib/site";

import Logo from "./logo";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl border border-gray-200 bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow" aria-label="Main">
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              {navLinks.map((link) => (
                <li key={link.href} className="px-3 py-1">
                  <Link href={link.href} className="flex items-center text-gray-700 transition hover:text-gray-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sign in links. Login moves into the menu on a phone, where the bar has no room for it. */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li className="max-sm:hidden">
              <a href={site.loginUrl} className="btn-sm bg-white text-gray-800 shadow-sm hover:bg-gray-50">
                Login
              </a>
            </li>
            <li>
              <Link href={site.startUrl} className="btn-sm bg-gray-800 text-gray-200 shadow-sm hover:bg-gray-900">
                Get Started
              </Link>
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
