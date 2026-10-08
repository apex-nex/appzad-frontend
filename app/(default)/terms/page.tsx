import LegalPage from "@/components/legal-page";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Terms of Service",
  "The terms for using AppZad: accounts, your organization's responsibilities, appropriate use and the limits of the service.",
  "/terms",
);

export default function Terms() {
  return <LegalPage slug="terms" />;
}
