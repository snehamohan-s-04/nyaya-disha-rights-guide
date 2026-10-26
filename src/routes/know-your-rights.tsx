import { useMemo, useState } from "react";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Check, Info, Search, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { categories, topics } from "@/data/content";
import { useLanguage } from "@/lib/i18n";
import { TopicIcon } from "@/components/topic-icon";

export const Route = createFileRoute("/know-your-rights")({
  validateSearch: (search: Record<string, unknown>) => ({
    topic: typeof search["topic"] === "string" ? search["topic"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Know Your Rights | NyayaDisha" },
      {
        name: "description",
        content:
          "Understand common legal rights in simple, everyday language — cybercrime, consumer rights, women's safety, workplace, property, police matters and more.",
      },
      { property: "og:title", content: "Know Your Rights | NyayaDisha" },
      {
        property: "og:description",
        content:
          "Understand common legal rights in simple, everyday language — cybercrime, consumer rights, women's safety, workplace, property, police matters and more.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: KnowYourRights,
});

function KnowYourRights() {
  const { t, bi, lang } = useLanguage();
  const navigate = useNavigate();
  const { topic: selectedId } = Route.useSearch();
  const [query, setQuery] = useState("");
  const [categoryId, setCategoryId] = useState("all");

  const selected = topics.find((topic) => topic.id === selectedId) ?? null;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return topics.filter((topic) => {
      const inCategory = categoryId === "all" || topic.categoryId === categoryId;
      if (!inCategory) return false;
      if (!q) return true;
      const haystack = [
        topic.title.en,
        topic.title.kn,
        topic.summary.en,
        topic.summary.kn,
        topic.what.en,
        topic.what.kn,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, categoryId, lang]);

  const openTopic = (id: string) =>
    navigate({ to: "/know-your-rights", search: { topic: id } });

  const closeTopic = () =>
    navigate({ to: "/know-your-rights", search: { topic: undefined }, replace: true });

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">{t("rights.title")}</h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            {t("rights.sub")}
          </p>
          <div className="relative mx-auto mt-8 max-w-xl">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t("rights.search")}
              aria-label={t("rights.search")}
              className="w-full rounded-lg border border-input bg-card py-3.5 pl-12 pr-4 text-base shadow-sm placeholder:text-muted-foreground"
            />
          </div>
          <div
            role="group"
            aria-label="Filter topics"
            className="mt-6 flex flex-wrap justify-center gap-2"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={categoryId === category.id}
                onClick={() => setCategoryId(category.id)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  categoryId === category.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {bi(category.label)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Topic grid */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-lg text-muted-foreground">
            {t("rights.noResults")}
          </p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => openTopic(topic.id)}
                className="group rounded-lg border border-border bg-card p-6 text-left transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <TopicIcon icon={topic.icon} className="h-5 w-5" />
                </span>
                <h2 className="mt-4 font-bold leading-snug">{bi(topic.title)}</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {bi(topic.summary)}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t("rights.read")}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 flex gap-3 rounded-lg border border-gold/50 bg-accent p-5">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
          <p className="text-[15px] leading-relaxed text-accent-foreground">
            {t("common.disclaimer")}
          </p>
        </div>
      </section>

      {/* Topic detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && closeTopic()}>
        {selected && (
          <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto">
            <DialogHeader>
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <TopicIcon icon={selected.icon} className="h-6 w-6" />
              </span>
              <DialogTitle className="mt-2 text-2xl font-bold leading-snug">
                {bi(selected.title)}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {bi(selected.summary)}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-7">
              <section>
                <h3 className="font-display text-xl font-bold text-primary">
                  {t("topic.what")}
                </h3>
                <p className="mt-2 leading-relaxed">{bi(selected.what)}</p>
              </section>

              <section>
                <h3 className="font-display text-xl font-bold text-primary">
                  {t("topic.rights")}
                </h3>
                <ul className="mt-3 space-y-2.5">
                  {selected.rights.map((right, index) => (
                    <li key={index} className="flex gap-2.5">
                      <Check
                        className="mt-1 h-5 w-5 shrink-0 text-success"
                        aria-hidden="true"
                      />
                      <span className="leading-relaxed">{bi(right)}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="font-display text-xl font-bold text-primary">
                  {t("topic.steps")}
                </h3>
                <ol className="mt-3 space-y-2.5">
                  {selected.steps.map((step, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                        {index + 1}
                      </span>
                      <span className="leading-relaxed">{bi(step)}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <section className="rounded-lg bg-secondary p-5">
                <h3 className="font-display text-xl font-bold text-primary">
                  {t("topic.help")}
                </h3>
                <p className="mt-2 leading-relaxed">{bi(selected.help)}</p>
              </section>

              <div className="flex gap-3 rounded-lg border border-gold/50 bg-accent p-4">
                <Info
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground"
                  aria-hidden="true"
                />
                <p className="text-sm leading-relaxed text-accent-foreground">
                  {t("common.disclaimer")}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeTopic}
              className="absolute right-4 top-4 rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label={t("dialog.close")}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
}
