"use client";

import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-gray-900/90 px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,var(--color-gray-800),var(--color-gray-700),var(--color-gray-800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-xs">
          {/* Site branding */}
          <div>
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              <li>
                <Link
                  href="/services"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center px-2 py-1 text-gray-200 transition hover:text-indigo-500 lg:px-3"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Desktop CTA button */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <Link
                href="/contact"
                className="btn-sm bg-linear-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] py-[5px] text-white shadow-[inset_0px_1px_0px_0px_--theme(--color-white/.16)] hover:bg-[length:100%_150%]"
              >
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
