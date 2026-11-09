import { useLanguage } from "@/lib/i18n";

type SectionPlaceholderProps = {
  titleKey: string;
  introKey: string;
};

export function SectionPlaceholder({ titleKey, introKey }: SectionPlaceholderProps) {
  const { t } = useLanguage();

  return (
    <>
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h1 className="text-4xl font-bold">{t(titleKey)}</h1>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            {t(introKey)}
          </p>
        </div>
      </section>
      <section className="mx-auto min-h-56 max-w-6xl px-4 py-16 sm:px-6" aria-hidden="true" />
    </>
  );
}