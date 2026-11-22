import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopicIcon } from "@/components/topic-icon";
import { allTopics, citizenCategories } from "@/data/citizen-categories";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/my-categories")({
  head: () => ({
    meta: [
      { title: "My Categories | NyayaDisha" },
      { name: "description", content: "Explore bilingual legal guides organized by citizen category on NyayaDisha." },
      { property: "og:title", content: "My Categories | NyayaDisha" },
      { property: "og:description", content: "Explore bilingual legal guides organized by citizen category on NyayaDisha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MyCategoriesPage,
});

function MyCategoriesPage() {
  const { t, bi } = useLanguage();
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = citizenCategories.find((category) => category.id === selectedId);
  const selectedTopics = selected
    ? selected.topicIds.flatMap((id) => {
        const topic = allTopics.find((item) => item.id === id);
        return topic ? [topic] : [];
      })
    : [];

  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">{t("categories.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            {t("categories.intro")}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="mb-6">
          <h2 className="font-display text-2xl font-bold">{t("categories.choose")}</h2>
          <p className="mt-1 text-muted-foreground">{t("categories.chooseIntro")}</p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {citizenCategories.map((category) => (
            <Button
              key={category.id}
              type="button"
              variant="outline"
              aria-pressed={selectedId === category.id}
              onClick={() => setSelectedId(category.id)}
              className={`h-full min-h-52 w-full flex-col items-start justify-between whitespace-normal rounded-lg p-5 text-left shadow-none transition-colors hover:border-primary/50 hover:bg-secondary/60 ${
                selectedId === category.id ? "border-primary bg-secondary" : "bg-card"
              }`}
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TopicIcon icon={category.icon} className="h-5 w-5" />
              </span>
              <span className="mt-4 block w-full">
                <span className="block text-base font-bold leading-snug text-foreground">
                  {bi(category.title)}
                </span>
                <span className="mt-2 block text-sm font-normal leading-relaxed text-muted-foreground">
                  {bi(category.description)}
                </span>
              </span>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                {t("categories.explore")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Button>
          ))}
        </div>
      </section>

      {selected && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-bold">
                  {t("categories.topicsFor")} {bi(selected.title)}
                </h2>
                <p className="mt-1 text-muted-foreground">
                  {selectedTopics.length} {t("categories.count")}
                </p>
              </div>
              <Button type="button" variant="outline" onClick={() => setSelectedId(null)}>
                {t("categories.back")}
              </Button>
            </div>
            {selectedTopics.length === 0 ? (
              <p className="py-8 text-center text-muted-foreground">{t("categories.empty")}</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {selectedTopics.map((topic) => (
                  <Link
                    key={topic.id}
                    to="/my-categories/$topicId"
                    params={{ topicId: topic.id }}
                    className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <TopicIcon icon={topic.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 font-bold leading-snug group-hover:text-primary">
                      {bi(topic.title)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {bi(topic.summary)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      {t("rights.read")} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </>
  );
}