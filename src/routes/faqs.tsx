import { createFileRoute, Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/content";
import { useLanguage } from "@/lib/i18n";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs | NyayaDisha" },
      {
        name: "description",
        content:
          "Short, clear answers to the questions citizens ask most — legal aid, online fraud, emergencies and official resources.",
      },
      { property: "og:title", content: "FAQs | NyayaDisha" },
      {
        property: "og:description",
        content:
          "Short, clear answers to the questions citizens ask most — legal aid, online fraud, emergencies and official resources.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  const { t, bi } = useLanguage();

  return (
    <>
      {/* Page header */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">{t("faq.title")}</h1>
          <p className="mx-auto mt-3 max-w-xl text-lg text-muted-foreground">
            {t("faq.sub")}
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="rounded-lg border border-border bg-card px-5"
            >
              <AccordionTrigger className="py-5 text-left text-lg font-semibold leading-snug hover:no-underline">
                {bi(faq.q)}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-muted-foreground">
                {bi(faq.a)}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 flex gap-3 rounded-lg border border-gold/50 bg-accent p-5">
          <Info
            className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground"
            aria-hidden="true"
          />
          <p className="text-[15px] leading-relaxed text-accent-foreground">
            {t("common.disclaimer")}
          </p>
        </div>

        <div className="mt-8 rounded-lg border border-border bg-card p-6 text-center">
          <p className="text-muted-foreground">{t("help.contactText")}</p>
          <Link
            to="/helplines"
            className="mt-4 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {t("nav.helplines")}
          </Link>
        </div>
      </section>
    </>
  );
}
