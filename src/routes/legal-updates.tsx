import { createFileRoute } from "@tanstack/react-router";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const Route = createFileRoute("/legal-updates")({
  head: () => ({
    meta: [
      { title: "Legal Updates | NyayaDisha" },
      { name: "description", content: "A place for verified legal updates from trusted sources." },
      { property: "og:title", content: "Legal Updates | NyayaDisha" },
      { property: "og:description", content: "A place for verified legal updates from trusted sources." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LegalUpdatesPage,
});

function LegalUpdatesPage() {
  return <SectionPlaceholder titleKey="updates.title" introKey="updates.intro" />;
}