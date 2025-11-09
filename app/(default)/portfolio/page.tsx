export const metadata = {
  title: "Portfolio - AppZad | Our Work",
  description: "Explore our successful web development projects for Travel, Healthcare, and Hotel industries.",
};

import PageIllustration from "@/components/page-illustration";
import Portfolio from "@/components/portfolio";
import Cta from "@/components/cta";

export default function PortfolioPage() {
  return (
    <>
      <PageIllustration />
      <section>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Page header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
                data-aos="fade-up"
              >
                Our Portfolio
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="text-xl text-indigo-200/65"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Discover how we've helped businesses transform their digital presence with innovative web solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Portfolio />
      <Cta />
    </>
  );
}
