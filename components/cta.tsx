import Link from "next/link";

import { site } from "@/lib/site";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 pb-12 sm:px-6 md:pb-20">
        <div className="rounded-2xl bg-gray-900 px-6 py-12 md:px-12 md:py-16">
          <h2 className="max-w-xl text-3xl font-bold text-balance text-gray-100 md:text-4xl">
            Ready to simplify your hospital workflow?
          </h2>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link className="btn bg-white text-gray-800 hover:bg-gray-100" href={site.startUrl}>
              Get Started
            </Link>
            <a className="btn bg-gray-800 text-gray-200 ring-1 ring-gray-700 hover:bg-gray-700" href={site.loginUrl}>
              Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
