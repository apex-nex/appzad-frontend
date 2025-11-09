import Logo from "./logo";
import Image from "next/image";
import Link from "next/link";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { metadata } from "@/lib/metadata";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/services"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/services"
                >
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/services"
                >
                  CMS Development
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/services"
                >
                  Responsive Design
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/services"
                >
                  SEO Optimization
                </Link>
              </li>
            </ul>
          </div>
          {/* 2nd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/blog"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/industries"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/pricing"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          {/* 3rd block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms-of-service"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/privacy-policy"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          {/* 4th block */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">
              Industries
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/industries"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/industries"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/industries"
                >
                  Hotel & Hospitality
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/industries"
                >
                  E-commerce
                </Link>
              </li>
              <li>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/industries"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>
          {/* 5th block */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200/65">
                {metadata.footer.copyright}
                <span className="text-gray-700"> · </span>
                <Link
                  className="text-indigo-200/65 transition hover:text-indigo-500"
                  href="/terms-of-service"
                >
                  Terms
                </Link>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href={metadata.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href={metadata.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href={metadata.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
