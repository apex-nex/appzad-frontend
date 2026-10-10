import type { Metadata } from "next";

// The facts every page repeats, in one place.
// The HMS web app, where "Login" goes: the one login address (login.appzad.com); set NEXT_PUBLIC_APP_URL to change
// it. This marketing site is served on www.
const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://login.appzad.com";

export const site = {
  name: "AppZad",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.appzad.com",
  description:
    "AppZad is hospital management software for clinics and hospitals: appointments, patient records, OP visits and digital prescriptions in one place.",
  loginUrl: `${appUrl}/sign-in`,
  // Sign-up is by invitation, so "Get Started" is a request to be set up.
  startUrl: "/contact",
  contactEmail: "appzadhq@gmail.com",
};

export const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Privacy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
];

export const mailto = `mailto:${site.contactEmail}`;

// Opens the visitor's email app with the details we need to set a hospital up.
export const setupMailto = `${mailto}?subject=${encodeURIComponent("Set up AppZad for my hospital")}&body=${encodeURIComponent(
  "Hospital name:\nCity:\nYour name:\nPhone number:\nNumber of doctors:\n",
)}`;

// A page that sets its own Open Graph fields replaces the whole object, so the share image
// (app/opengraph-image.tsx) is named here instead of being picked up from the file.
const openGraph: NonNullable<Metadata["openGraph"]> = {
  siteName: site.name,
  type: "website",
  locale: "en_IN",
  images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "AppZad, hospital management software" }],
};

/** Title, description, canonical URL and Open Graph for one page. `path` starts with "/". */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...openGraph, title: `${title} | ${site.name}`, description, url: path },
  };
}

export const homeMeta: Metadata = {
  title: { absolute: "AppZad | Hospital Management System" },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { ...openGraph, title: "AppZad | Hospital Management System", description: site.description, url: "/" },
};
