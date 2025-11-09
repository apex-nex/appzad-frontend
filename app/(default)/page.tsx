export const metadata = {
  title: "Home - AppZad | Web Development Agency",
  description: "AppZad is a professional web development agency specializing in custom solutions for the Travel, Healthcare, and Hotel industries.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Industries from "@/components/industries";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Industries />
      <Services />
      <Portfolio />
      <Testimonials />
      <Cta />
    </>
  );
}
