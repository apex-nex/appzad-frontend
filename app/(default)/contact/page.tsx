import Link from "next/link";

import { mailto, pageMeta, setupMailto, site } from "@/lib/site";

export const metadata = pageMeta(
  "Contact",
  "Email AppZad to set up your hospital's workspace, or find out how to reach support if you already use AppZad.",
  "/contact",
);

const link = "font-medium text-blue-600 underline hover:text-blue-700";

export default function Contact() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          <div className="max-w-3xl pb-10 md:pb-14">
            <h1 className="text-4xl font-bold md:text-5xl">Contact AppZad</h1>
            <p className="mt-4 text-lg text-gray-700">
              Email us at{" "}
              <a className={link} href={mailto}>
                {site.contactEmail}
              </a>
              .
            </p>
          </div>

          <div className="grid gap-x-12 border-y border-gray-200 md:grid-cols-2 md:divide-x md:divide-gray-200">
            <div className="py-8 md:pr-12">
              <h2 className="text-xl font-bold">Start using AppZad</h2>
              <p className="mt-3 text-gray-700">
                Send us your hospital's name, city and a phone number. We set up your workspace and email you an
                invitation to sign in.
              </p>
              <p className="mt-6">
                <a className="btn bg-gray-800 text-gray-200 hover:bg-gray-900" href={setupMailto}>
                  Email us to get started
                </a>
              </p>
              <p className="mt-3 text-sm text-gray-600">
                This opens your email app with the details we need already listed.
              </p>
            </div>

            <div className="border-t border-gray-200 py-8 md:border-t-0 md:pl-12">
              <h2 className="text-xl font-bold">Already using AppZad</h2>
              <p className="mt-3 text-gray-700">
                Sign in, open Settings, then Support. Your request reaches us with your hospital's name, and you can
                attach a screenshot or a PDF.
              </p>
              <p className="mt-6">
                <a className="btn bg-white text-gray-800 hover:bg-gray-50" href={site.loginUrl}>
                  Login
                </a>
              </p>
            </div>
          </div>

          <p className="mt-8 max-w-2xl text-gray-700">
            For questions about how we handle information, read the{" "}
            <Link className={link} href="/privacy">
              Privacy Policy
            </Link>{" "}
            or write to the address above.
          </p>
        </div>
      </div>
    </section>
  );
}
