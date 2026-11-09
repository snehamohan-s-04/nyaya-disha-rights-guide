import { createFileRoute } from "@tanstack/react-router";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const Route = createFileRoute("/bookmarks")({
  head: () => ({
    meta: [
      { title: "Bookmarks | NyayaDisha" },
      { name: "description", content: "Return to legal topics saved on NyayaDisha." },
      { property: "og:title", content: "Bookmarks | NyayaDisha" },
      { property: "og:description", content: "Return to legal topics saved on NyayaDisha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookmarksPage,
});

function BookmarksPage() {
  return <SectionPlaceholder titleKey="bookmarks.title" introKey="bookmarks.intro" />;
}