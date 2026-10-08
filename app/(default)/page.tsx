import Link from "next/link";

import Cta from "@/components/cta";
import Faqs from "@/components/faqs";
import FeatureList from "@/components/features-home";
import Hero from "@/components/hero-home";
import Section from "@/components/section";
import { homeMeta } from "@/lib/site";

export const metadata = homeMeta;

// The order a new hospital actually goes through (see the app's onboarding).
const steps = [
  {
    title: "Set up your organization",
    text: "Write to us and we create your hospital's workspace and email you an invitation. On your first sign-in, add your hospital's name, address and clinic hours.",
  },
  {
    title: "Add your doctors and users",
    text: "Invite your staff by email and add your doctors with their time slots. You can skip any setup step and finish it later.",
  },
  {
    title: "Start managing patients and appointments",
    text: "Register patients, book appointments into a doctor's free slots and open OP visits.",
  },
  {
    title: "Run your daily workflow from one place",
    text: "The dashboard shows today's appointments and the totals for the period you pick.",
  },
];

const practices = [
  {
    title: "Sign-in on every page",
    text: "Nothing in AppZad opens without a signed-in account, and every request to our servers is checked for one.",
  },
  {
    title: "Access by invitation",
    text: "Only people invited to your hospital's workspace can open it. An administrator can remove someone's access at any time.",
  },
  {
    title: "Each hospital's records kept apart",
    text: "Every request is checked against the hospital the signed-in person belongs to, so staff of one hospital cannot open another's records.",
  },
  {
    title: "Encrypted connections",
    text: "The app and its servers are reached over HTTPS.",
  },
  {
    title: "Prescription PDFs are not stored",
    text: "A PDF is created at the moment you download it and is not kept on our servers afterwards.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <Section title="What AppZad is">
        <div className="max-w-2xl space-y-4 text-lg text-gray-700">
          <p>
            AppZad is hospital management software for clinics and hospitals. The front desk books appointments,
            registers patients and opens OP visits. The doctor writes the prescription on screen, and it prints on your
            own letterhead.
          </p>
          <p>
            It runs in a web browser, so there is nothing to install. Each hospital has its own address, such as
            yourhospital.appzad.com, and only the staff you invite can sign in.
          </p>
        </div>
      </Section>

      <Section title="What you can do with it" lead="The work of an out-patient day, and the setup behind it.">
        <FeatureList />
        <p className="mt-6">
          <Link className="font-medium text-blue-600 underline hover:text-blue-700" href="/features">
            See every feature in detail
          </Link>
        </p>
      </Section>

      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="border-t border-gray-200 py-12 md:py-20">
            <h2 className="text-2xl font-bold md:text-3xl">How it works</h2>
            <ol className="mt-8 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => (
                <li key={step.title} className="border-t-2 border-gray-900 pt-4">
                  <div className="text-2xl font-bold text-gray-500 tabular-nums" aria-hidden="true">
                    {index + 1}
                  </div>
                  <h3 className="mt-2 font-semibold text-balance">{step.title}</h3>
                  <p className="mt-2 text-[15px] text-gray-700">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Section
        title="Careful handling of patient records"
        lead="Health records are sensitive. This is what AppZad does today."
      >
        <ul className="divide-y divide-gray-200 border-y border-gray-200">
          {practices.map((practice) => (
            <li key={practice.title} className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-3">
              <h3 className="font-semibold">{practice.title}</h3>
              <p className="text-gray-700 sm:col-span-2">{practice.text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-gray-700">
          If your hospital has specific security or compliance requirements,{" "}
          <Link className="font-medium text-blue-600 underline hover:text-blue-700" href="/contact">
            write to us
          </Link>{" "}
          before you start. Our{" "}
          <Link className="font-medium text-blue-600 underline hover:text-blue-700" href="/privacy">
            Privacy Policy
          </Link>{" "}
          explains what we store and who can see it.
        </p>
      </Section>

      <Faqs />

      <Cta />
    </>
  );
}
