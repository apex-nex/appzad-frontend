import LegalPage from "@/components/legal-page";
import { pageMeta } from "@/lib/site";

export const metadata = pageMeta(
  "Privacy Policy",
  "What information AppZad handles, why, where it is stored, who can see it and how to reach us about it.",
  "/privacy",
);

export default function Privacy() {
  return <LegalPage slug="privacy" />;
}
