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
      <Portfolio />
      <Cta />
    </>
  );
}
