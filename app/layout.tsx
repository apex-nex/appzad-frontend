import "./css/style.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { homeMeta, site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "AppZad | Hospital Management System", template: `%s | ${site.name}` },
  description: site.description,
  openGraph: homeMeta.openGraph,
  icons: {
    icon: [
      { url: "/favicon/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicon/site.webmanifest",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <body className={`${inter.variable} font-inter bg-gray-50 tracking-tight text-gray-900 antialiased`}>
        <a
          href="#main"
          className="btn-sm sr-only z-50 bg-gray-800 text-gray-200 focus:not-sr-only focus:fixed focus:top-2 focus:left-2"
        >
          Skip to content
        </a>
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
