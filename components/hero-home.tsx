import Link from "next/link";

import PrescriptionSheet from "@/components/prescription-sheet";
import { site } from "@/lib/site";

export default function HeroHome() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-x-12 gap-y-12 pt-32 pb-12 md:pt-40 md:pb-20 lg:grid-cols-2">
          <div>
            <h1 className="text-5xl font-bold text-balance md:text-6xl">Go Digital In Just 2 Minutes</h1>
            <p className="mt-4 text-2xl font-semibold text-gray-500 md:text-3xl">With Zero Learning Curve</p>
            <p className="mt-6 max-w-lg text-lg text-gray-700">
              Manage patients, appointments, doctors and digital prescriptions from one simple hospital management
              platform.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link className="btn bg-gray-800 text-gray-200 hover:bg-gray-900" href={site.startUrl}>
                Get Started
              </Link>
              <a className="btn bg-white text-gray-800 hover:bg-gray-50" href={site.loginUrl}>
                Login
              </a>
            </div>
          </div>
          <PrescriptionSheet />
        </div>
      </div>
    </section>
  );
}
