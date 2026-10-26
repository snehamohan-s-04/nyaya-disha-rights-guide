import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, Info, PhoneCall } from "lucide-react";
import { helplines, officialResources } from "@/data/content";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/helplines")({
  head: () => ({
    meta: [
      { title: "Helpline Numbers | NyayaDisha" },
      {
        name: "description",
        content:
          "Verified Indian helpline numbers — emergency 112, cyber fraud 1930, women 181, childline 1098, free legal aid 15100, consumer 1915 — with official resources.",
      },
      { property: "og:title", content: "Helpline Numbers | NyayaDisha" },
      {
        property: "og:description",
        content:
          "Verified Indian helpline numbers — emergency 112, cyber fraud 1930, women 181, childline 1098, free legal aid 15100, consumer 1915 — with official resources.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Helplines,
});

function Helplines() {
  const { t, bi } = useLanguage();

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">{t("helpline.title")}</h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            {t("helpline.sub")}
          </p>
          <div className="mx-auto mt-8 flex max-w-2xl gap-3 rounded-lg border border-gold/50 bg-accent p-4 text-left">
            <Info
              className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground"
              aria-hidden="true"
            />
            <p className="text-[15px] leading-relaxed text-accent-foreground">
              {t("helpline.verify")}
            </p>
          </div>
        </div>
      </section>

      {/* Helpline directory */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2">
          {helplines.map((line) => (
            <article
              key={line.number}
              className={`rounded-lg border bg-card p-6 transition-shadow hover:shadow-md ${
                line.emergency ? "border-success/50" : "border-border"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs font-bold uppercase tracking-widest ${
                      line.emergency ? "text-success" : "text-muted-foreground"
                    }`}
                  >
                    {bi(line.service)}
                  </p>
                  <p
                    className={`mt-1 font-display text-4xl font-bold ${
                      line.emergency ? "text-success" : "text-primary"
                    }`}
                  >
                    {line.number}
                  </p>
                </div>
                <a
                  href={`tel:${line.number}`}
                  className={`inline-flex items-center gap-2 rounded-md px-5 py-3 text-base font-bold transition-colors ${
                    line.emergency
                      ? "bg-success text-success-foreground hover:bg-success/90"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                  }`}
                >
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                  {t("helpline.call")}
                </a>
              </div>
              <p className="mt-4 leading-relaxed">{bi(line.what)}</p>
              <div className="mt-4 rounded-lg bg-secondary p-4">
                <h2 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  {t("helpline.when")}
                </h2>
                <p className="mt-1.5 text-[15px] leading-relaxed">
                  {bi(line.when)}
                </p>
              </div>
              {line.website && (
                <a
                  href={line.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {t("helpline.website")}
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Official resources */}
      <section className="border-t border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">{t("helpline.resourcesTitle")}</h2>
            <p className="mt-3 text-muted-foreground">
              {t("helpline.resourcesSub")}
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {officialResources.map((resource) => (
              <a
                key={resource.url}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
              >
                <ExternalLink
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
                <h3 className="mt-3 font-bold leading-snug">{bi(resource.name)}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {bi(resource.desc)}
                </p>
                <span className="mt-3 text-sm font-semibold text-primary underline-offset-4 group-hover:underline">
                  {t("helpline.visit")}
                </span>
              </a>
            ))}
          </div>
          <div className="mt-12 rounded-lg border border-border bg-card p-6 text-center">
            <p className="text-muted-foreground">{t("help.contactText")}</p>
            <Link
              to="/know-your-rights"
              search={{ topic: undefined }}
              className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("nav.rights")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
