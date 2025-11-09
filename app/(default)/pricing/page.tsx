export const metadata = {
  title: "Pricing - AppZad | Transparent & Affordable Plans",
  description: "Choose the perfect web development package for your business. Transparent pricing with no hidden fees.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-pricing";
import Faqs from "@/components/faqs";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Pricing() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Faqs />
      <Testimonials />
      <Cta />
    </>
  );
}
