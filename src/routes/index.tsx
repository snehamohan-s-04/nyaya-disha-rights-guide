import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Check,
  CircleHelp,
  HandHeart,
  Landmark,
  MessageSquareWarning,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";
import { topics } from "@/data/content";
import { useLanguage } from "@/lib/i18n";
import { TopicIcon } from "@/components/topic-icon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "NyayaDisha — Know Your Rights. Know Where to Get Help.",
      },
      {
        name: "description",
        content:
          "Simple legal information, practical next steps and trusted resources for citizens of India.",
      },
      {
        property: "og:title",
        content: "NyayaDisha — Know Your Rights. Know Where to Get Help.",
      },
      {
        property: "og:description",
        content:
          "Simple legal information, practical next steps and trusted resources for citizens of India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function HeroEmblem() {
  return (
    <svg
      viewBox="0 0 300 300"
      fill="none"
      aria-hidden="true"
      className="h-56 w-56 text-primary-foreground sm:h-72 sm:w-72"
    >
      <circle cx="150" cy="150" r="146" stroke="currentColor" strokeOpacity="0.18" />
      <circle
        cx="150"
        cy="150"
        r="118"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeDasharray="3 7"
      />
      <path
        d="M150 52 L226 82 V152 C226 200 194 231 150 249 C106 231 74 200 74 152 V82 Z"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M150 92 V204"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M104 112 H196"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M104 112 L90 140 M104 112 L118 140 M88 140 Q104 152 120 140"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M196 112 L182 140 M196 112 L210 140 M180 140 Q196 152 212 140"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M134 204 H166 M142 214 H158"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <circle cx="150" cy="102" r="4" fill="var(--color-gold)" />
    </svg>
  );
}

function Index() {
  const { t, bi } = useLanguage();

  const actionCards: {
    to: string;
    icon: LucideIcon;
    titleKey: string;
    descKey: string;
  }[] = [
    {
      to: "/know-your-rights",
      icon: BookOpen,
      titleKey: "card.rights.t",
      descKey: "card.rights.d",
    },
    {
      to: "/legal-help",
      icon: HandHeart,
      titleKey: "card.help.t",
      descKey: "card.help.d",
    },
    {
      to: "/helplines",
      icon: MessageSquareWarning,
      titleKey: "card.report.t",
      descKey: "card.report.d",
    },
    {
      to: "/helplines",
      icon: PhoneCall,
      titleKey: "card.emergency.t",
      descKey: "card.emergency.d",
    },
    {
      to: "/faqs",
      icon: CircleHelp,
      titleKey: "card.faqs.t",
      descKey: "card.faqs.d",
    },
    {
      to: "/helplines",
      icon: Landmark,
      titleKey: "card.resources.t",
      descKey: "card.resources.d",
    },
  ];

  const quickActions = [
    {
      href: "tel:112",
      number: "112",
      titleKey: "quick.112.t",
      descKey: "quick.112.d",
      urgent: true,
    },
    {
      href: "tel:1930",
      number: "1930",
      titleKey: "quick.1930.t",
      descKey: "quick.1930.d",
      urgent: false,
    },
    {
      href: "tel:15100",
      number: "15100",
      titleKey: "quick.15100.t",
      descKey: "quick.15100.d",
      urgent: false,
    },
    {
      href: "/faqs",
      number: null,
      titleKey: "quick.faq.t",
      descKey: "quick.faq.d",
      urgent: false,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_auto] lg:py-20">
          <div className="rise-in">
            <p className="text-sm font-bold uppercase tracking-widest text-gold">
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
              {t("hero.headline")}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/85">
              {t("hero.sub")}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/know-your-rights"
                className="inline-flex items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-bold text-gold-foreground shadow-sm transition-colors hover:bg-gold/90"
              >
                {t("hero.cta1")}
              </Link>
              <Link
                to="/legal-help"
                className="inline-flex items-center justify-center rounded-md border border-primary-foreground/40 px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                {t("hero.cta2")}
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/75">
              {["hero.trust1", "hero.trust2", "hero.trust3"].map((key) => (
                <li key={key} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" aria-hidden="true" />
                  {t(key)}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden justify-center lg:flex">
            <HeroEmblem />
          </div>
        </div>
      </section>

      {/* How can we help */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">{t("home.helpTitle")}</h2>
          <p className="mt-3 text-muted-foreground">{t("home.helpSub")}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((card) => (
            <Link
              key={card.titleKey}
              to={card.to}
              className="group rounded-lg border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <card.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-lg font-bold">{t(card.titleKey)}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                {t(card.descKey)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore legal topics */}
      <section className="border-y border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold">{t("home.topicsTitle")}</h2>
            <p className="mt-3 text-muted-foreground">{t("home.topicsSub")}</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic) => {
              const featured = topic.id === "constitutional" || topic.id === "legalaid";
              return (
                <Link
                  key={topic.id}
                  to="/know-your-rights"
                  search={{ topic: topic.id }}
                  className={`group rounded-lg border p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                    featured
                      ? "border-primary bg-primary text-primary-foreground hover:border-primary"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      featured
                        ? "bg-primary-foreground/15 text-gold"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <TopicIcon icon={topic.icon} className="h-5 w-5" />
                  </span>
                  <h3
                    className={`mt-3 font-bold leading-snug ${
                      featured ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {bi(topic.title)}
                  </h3>
                  <p
                    className={`mt-1.5 text-sm leading-relaxed ${
                      featured
                        ? "text-primary-foreground/80"
                        : "text-muted-foreground"
                    }`}
                  >
                    {bi(topic.summary)}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="mt-8">
            <Link
              to="/know-your-rights"
              className="inline-flex items-center justify-center rounded-md border border-primary bg-primary px-5 py-2.5 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t("home.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Quick help */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold">{t("home.quickTitle")}</h2>
          <p className="mt-3 text-muted-foreground">{t("home.quickSub")}</p>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const inner = (
              <>
                <span
                  className={`font-display text-3xl font-bold ${
                    action.urgent ? "text-success" : "text-primary"
                  }`}
                >
                  {action.number ?? "→"}
                </span>
                <h3 className="mt-2 font-bold leading-snug">
                  {t(action.titleKey)}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {t(action.descKey)}
                </p>
              </>
            );
            const classes = `block rounded-lg border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-md ${
              action.urgent
                ? "border-success/40 hover:border-success"
                : "border-border hover:border-primary/40"
            }`;
            return action.href.startsWith("tel:") ? (
              <a key={action.titleKey} href={action.href} className={classes}>
                {inner}
              </a>
            ) : (
              <Link key={action.titleKey} to={action.href} className={classes}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
        <div className="rounded-2xl bg-primary px-6 py-12 text-center text-primary-foreground sm:px-12">
          <h2 className="text-3xl font-bold">{t("home.ctaTitle")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/85">
            {t("home.ctaText")}
          </p>
          <Link
            to="/know-your-rights"
            className="mt-8 inline-flex items-center justify-center rounded-md bg-gold px-8 py-3 text-base font-bold text-gold-foreground transition-colors hover:bg-gold/90"
          >
            {t("home.ctaButton")}
          </Link>
        </div>
      </section>
    </>
  );
}
