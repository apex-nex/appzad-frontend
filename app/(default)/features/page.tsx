import Cta from "@/components/cta";
import FeatureList from "@/components/features-home";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Features",
  "What AppZad does: appointments with token numbers, patient registration, OP visits, digital prescriptions on your letterhead, and staff access.",
  "/features",
);

export default function Features() {
  return (
    <>
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            <div className="max-w-3xl pb-10 md:pb-14">
              <h1 className="text-4xl font-bold md:text-5xl">Features</h1>
              <p className="mt-4 text-lg text-gray-700">
                Everything AppZad does today, in the order a hospital uses it: first the work of each day, then the
                setup you do once.
              </p>
            </div>
            <FeatureList detailed />
          </div>
        </div>
      </section>

      <Cta />
    </>
  );
}
