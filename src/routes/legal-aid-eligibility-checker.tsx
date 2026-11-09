import { createFileRoute } from "@tanstack/react-router";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const Route = createFileRoute("/legal-aid-eligibility-checker")({
  head: () => ({
    meta: [
      { title: "Legal Aid Eligibility Checker | NyayaDisha" },
      { name: "description", content: "General information about legal aid eligibility on NyayaDisha." },
      { property: "og:title", content: "Legal Aid Eligibility Checker | NyayaDisha" },
      { property: "og:description", content: "General information about legal aid eligibility on NyayaDisha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LegalAidEligibilityPage,
});

function LegalAidEligibilityPage() {
  return <SectionPlaceholder titleKey="eligibility.title" introKey="eligibility.intro" />;
}