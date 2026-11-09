import { createFileRoute } from "@tanstack/react-router";
import { SectionPlaceholder } from "@/components/section-placeholder";

export const Route = createFileRoute("/my-categories")({
  head: () => ({
    meta: [
      { title: "My Categories | NyayaDisha" },
      { name: "description", content: "Choose legal topics relevant to your interests on NyayaDisha." },
      { property: "og:title", content: "My Categories | NyayaDisha" },
      { property: "og:description", content: "Choose legal topics relevant to your interests on NyayaDisha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyCategoriesPage,
});

function MyCategoriesPage() {
  return <SectionPlaceholder titleKey="categories.title" introKey="categories.intro" />;
}