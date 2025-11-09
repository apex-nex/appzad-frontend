export const metadata = {
  title: "Industries - AppZad | Specialized Solutions",
  description: "Delivering specialized web development solutions for Travel, Healthcare, Hotel, E-commerce, Education, and Finance industries.",
};

import PageIllustration from "@/components/page-illustration";
import Industries from "@/components/industries";
import Cta from "@/components/cta";

export default function IndustriesPage() {
  return (
    <>
      <PageIllustration />
      <Industries />
      <Cta />
    </>
  );
}
