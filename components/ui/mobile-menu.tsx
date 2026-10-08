"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { navLinks, site } from "@/lib/site";

const linkClass = "flex rounded-lg px-3 py-2.5 text-gray-700 hover:bg-gray-100";

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  const trigger = useRef<HTMLButtonElement>(null);
  const mobileNav = useRef<HTMLDivElement>(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node))
        return;
      setMobileNavOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, [mobileNavOpen]);

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent): void => {
      if (!mobileNavOpen || key !== "Escape") return;
      setMobileNavOpen(false);
      trigger.current?.focus();
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  }, [mobileNavOpen]);

  return (
    <div className="flex md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-center text-gray-800 transition"
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="pointer-events-none fill-current"
          width={16}
          height={16}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <rect
            className="origin-center translate-x-[7px] -translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            y="7"
            width="16"
            height="2"
            rx="1"
          ></rect>
          <rect
            className="origin-center translate-y-[5px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
            y="7"
            width="9"
            height="2"
            rx="1"
          ></rect>
        </svg>
      </button>

      {/* Mobile navigation */}
      <div ref={mobileNav}>
        {mobileNavOpen && (
          <nav
            id="mobile-nav"
            aria-label="Main"
            className="absolute top-full left-0 z-20 mt-1 w-full rounded-xl border border-gray-200 bg-white shadow-lg shadow-black/[0.03]"
          >
            <ul className="p-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass} onClick={() => setMobileNavOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={site.loginUrl} className={linkClass}>
                  Login
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
}
