import type { Metadata } from "next";
import Link from "next/link";

import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This page does not exist on the AppZad website.",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <>
      <Header />

      <main id="main" className="grow">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl pt-32 pb-12 md:pt-40 md:pb-20">
            <h1 className="text-4xl font-bold md:text-5xl">Page not found</h1>
            <p className="mt-4 text-lg text-gray-700">
              There is no page at this address. It may have moved, or the address may be mistyped.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link className="btn bg-gray-800 text-gray-200 hover:bg-gray-900" href="/">
                Go to the home page
              </Link>
              <Link className="btn bg-white text-gray-800 hover:bg-gray-50" href="/features">
                See the features
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
