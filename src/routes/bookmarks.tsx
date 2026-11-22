import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookmarkX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TopicIcon } from "@/components/topic-icon";
import { allTopics } from "@/data/citizen-categories";
import { useTopicBookmarks } from "@/hooks/use-topic-bookmarks";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/bookmarks")({
  head: () => ({
    meta: [
      { title: "Bookmarks | NyayaDisha" },
      { name: "description", content: "Return to the legal-awareness guides saved on NyayaDisha." },
      { property: "og:title", content: "Bookmarks | NyayaDisha" },
      { property: "og:description", content: "Return to the legal-awareness guides saved on NyayaDisha." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookmarksPage,
});

function BookmarksPage() {
  const { t, bi } = useLanguage();
  const { bookmarks, toggle, ready } = useTopicBookmarks();
  const savedTopics = allTopics.filter((topic) => bookmarks.includes(topic.id));

  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">{t("bookmarks.title")}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            {t("bookmarks.intro")}
          </p>
        </div>
      </section>
      <section className="mx-auto min-h-56 max-w-6xl px-4 py-12 sm:px-6">
        {!ready ? null : savedTopics.length === 0 ? (
          <div className="py-10 text-center">
            <BookmarkX className="mx-auto h-9 w-9 text-muted-foreground" aria-hidden="true" />
            <p className="mt-4 text-lg text-muted-foreground">{t("bookmarks.empty")}</p>
            <Button asChild className="mt-5">
              <Link to="/my-categories">
                {t("bookmarks.explore")} <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {savedTopics.map((topic) => (
              <article key={topic.id} className="rounded-lg border border-border bg-card p-5">
                <Link to="/my-categories/$topicId" params={{ topicId: topic.id }} className="group block">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <TopicIcon icon={topic.icon} className="h-5 w-5" />
                  </span>
                  <h2 className="mt-4 font-bold leading-snug group-hover:text-primary">
                    {bi(topic.title)}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {bi(topic.summary)}
                  </p>
                </Link>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="mt-3"
                  onClick={() => toggle(topic.id)}
                >
                  <BookmarkX aria-hidden="true" /> {t("bookmarks.remove")}
                </Button>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}