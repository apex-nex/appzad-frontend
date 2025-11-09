export const metadata = {
  title: "Services - AppZad | Web Development Solutions",
  description: "Explore our comprehensive web development services including custom web development, e-commerce solutions, CMS development, and more.",
};

import PageIllustration from "@/components/page-illustration";
import Services from "@/components/services";
import Cta from "@/components/cta";

export default function ServicesPage() {
  return (
    <>
      <PageIllustration />
      <Services />
      <Cta />
    </>
  );
}
