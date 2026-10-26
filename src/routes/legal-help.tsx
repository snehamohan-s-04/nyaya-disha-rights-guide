import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink, PhoneCall } from "lucide-react";
import { helpSteps } from "@/data/content";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/legal-help")({
  head: () => ({
    meta: [
      { title: "Legal Help | NyayaDisha" },
      {
        name: "description",
        content:
          "A clear step-by-step path from problem to solution, plus free legal aid through the Legal Services Authorities.",
      },
      { property: "og:title", content: "Legal Help | NyayaDisha" },
      {
        property: "og:description",
        content:
          "A clear step-by-step path from problem to solution, plus free legal aid through the Legal Services Authorities.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LegalHelp,
});

function LegalHelp() {
  const { t, bi } = useLanguage();

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">{t("help.title")}</h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            {t("help.sub")}
          </p>
        </div>
      </section>

      {/* Step-by-step journey */}
      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <ol className="relative space-y-10 border-l-2 border-border pl-0 ml-6 sm:ml-8">
          {helpSteps.map((step, index) => (
            <li key={index} className="relative pl-10 sm:pl-12">
              <span
                className="absolute -left-[1.4rem] flex h-11 w-11 items-center justify-center rounded-full border-2 border-primary bg-card font-display text-lg font-bold text-primary sm:-left-[1.65rem]"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                {t("help.stepLabel")} {index + 1}
              </p>
              <h2 className="mt-1 text-xl font-bold leading-snug">
                {bi(step.title)}
              </h2>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {bi(step.text)}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Free legal aid + quick helplines */}
      <section className="border-t border-border bg-secondary/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="text-2xl font-bold">{t("help.aidTitle")}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              {t("help.aidText")}
            </p>
            <a
              href="https://nalsa.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("help.aidButton")}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="rounded-lg bg-primary p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold">{t("help.contactTitle")}</h2>
            <p className="mt-4 text-primary-foreground/85">
              {t("help.contactText")}
            </p>
            <ul className="mt-6 space-y-3">
              {[
                { number: "112", label: { en: "Emergency", kn: "ತುರ್ತು" } },
                {
                  number: "1930",
                  label: { en: "Cyber & financial fraud", kn: "ಸೈಬರ್ ಮತ್ತು ಆರ್ಥಿಕ ವಂಚನೆ" },
                },
                {
                  number: "181",
                  label: { en: "Women helpline", kn: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ" },
                },
                {
                  number: "15100",
                  label: { en: "Free legal aid (NALSA)", kn: "ಉಚಿತ ಕಾನೂನು ಸಹಾಯ (NALSA)" },
                },
              ].map((line) => (
                <li key={line.number}>
                  <a
                    href={`tel:${line.number}`}
                    className="flex items-center justify-between gap-4 rounded-lg border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-3 transition-colors hover:bg-primary-foreground/10"
                  >
                    <span className="font-semibold">{bi(line.label)}</span>
                    <span className="flex items-center gap-2 font-display text-xl font-bold text-gold">
                      <PhoneCall className="h-4 w-4" aria-hidden="true" />
                      {line.number}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <Link
              to="/helplines"
              className="mt-6 inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-5 py-2.5 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              {t("nav.helplines")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
