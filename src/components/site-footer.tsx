import { Link } from "@tanstack/react-router";
import { ExternalLink, Scale } from "lucide-react";
import { helplines, officialResources, topics } from "@/data/content";
import { useLanguage } from "@/lib/i18n";

const footerTopicIds = [
  "cyber",
  "consumer",
  "women",
  "students",
  "workplace",
  "constitutional",
  "legalaid",
];

export function SiteFooter() {
  const { t, bi } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary-foreground/10 bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* About */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-primary-foreground/20 bg-primary-foreground/10">
                <Scale className="h-6 w-6 text-gold" aria-hidden="true" />
              </span>
              <div className="leading-tight">
                <p className="font-display text-xl font-bold">NyayaDisha</p>
                <p className="text-xs text-primary-foreground/70">
                  {t("brand.tag")}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-primary-foreground/80">
              {t("footer.aboutText")}
            </p>
            <p className="mt-4 max-w-md border-l-2 border-gold pl-4 text-sm leading-relaxed text-primary-foreground/70">
              {t("footer.disclaimer")}
            </p>
          </div>

          {/* Quick links */}
          <nav aria-label={t("footer.quick")}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">
              {t("footer.quick")}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: "/", key: "nav.home", exact: true },
                { to: "/know-your-rights", key: "nav.rights" },
                { to: "/legal-help", key: "nav.help" },
                { to: "/faqs", key: "nav.faqs" },
                { to: "/helplines", key: "nav.helplines" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {t(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal topics */}
          <nav aria-label={t("footer.topics")}>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">
              {t("footer.topics")}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {footerTopicIds.map((id) => {
                const topic = topics.find((tp) => tp.id === id);
                if (!topic) return null;
                return (
                  <li key={id}>
                    <Link
                      to="/know-your-rights"
                      search={{ topic: undefined }}
                      className="text-primary-foreground/80 transition-colors hover:text-gold"
                    >
                      {bi(topic.title)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Helplines + official resources */}
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-gold">
              {t("footer.helplines")}
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {helplines.map((line) => (
                <li key={line.number}>
                  <a
                    href={`tel:${line.number}`}
                    className="text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {bi(line.service)} — {line.number}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-sm font-bold uppercase tracking-wider text-gold">
              {t("footer.resources")}
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              {officialResources.map((resource) => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-1.5 text-primary-foreground/80 transition-colors hover:text-gold"
                  >
                    {bi(resource.name)}
                    <ExternalLink
                      className="mt-0.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/15 pt-6 text-sm text-primary-foreground/70">
          <p>{t("footer.academic")}</p>
          <p className="mt-2">
            © {year} NyayaDisha — {t("brand.tag")}
          </p>
        </div>
      </div>
    </footer>
  );
}
