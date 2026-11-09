import { createFileRoute } from "@tanstack/react-router";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const Route = createFileRoute("/upcoming-events")({
  head: () => ({
    meta: [
      { title: "Upcoming Events | NyayaDisha" },
      { name: "description", content: "Find verified upcoming legal aid and rights awareness events." },
      { property: "og:title", content: "Upcoming Events | NyayaDisha" },
      { property: "og:description", content: "Find verified upcoming legal aid and rights awareness events." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: UpcomingEventsPage,
});

function UpcomingEventsPage() {
  return <SectionPlaceholder titleKey="events.title" introKey="events.intro" />;
}