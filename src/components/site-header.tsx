import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Scale, X } from "lucide-react";
import { useLanguage, type Lang } from "@/lib/i18n";

const links = [
  { to: "/", key: "nav.home", exact: true },
  { to: "/know-your-rights", key: "nav.rights" },
  { to: "/legal-help", key: "nav.help" },
  { to: "/faqs", key: "nav.faqs" },
  { to: "/helplines", key: "nav.helplines" },
];

function LanguageSwitch({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLanguage();
  const options: { id: Lang; label: string }[] = [
    { id: "en", label: "English" },
    { id: "kn", label: "ಕನ್ನಡ" },
  ];

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-border bg-card p-1 ${className}`}
    >
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          aria-pressed={lang === option.id}
          onClick={() => setLang(option.id)}
          className={`rounded-full px-3 py-1 text-sm font-semibold transition-colors ${
            lang === option.id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = useLocation().pathname;
  const [open, setOpen] = useState(false);

  const isActive = (to: string, exact?: boolean) =>
    exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-3 rounded-md focus-visible:outline-offset-4"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Scale className="h-6 w-6" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-xl font-bold tracking-tight">
              NyayaDisha
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              {t("brand.tag")}
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-md border-b-2 px-3 py-2 text-[15px] font-semibold transition-colors ${
                isActive(link.to, link.exact)
                  ? "border-gold text-primary"
                  : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <LanguageSwitch />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitch />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t("header.menu")}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-border text-foreground"
          >
            {open ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation panel */}
      {open && (
        <nav
          id="mobile-nav"
          aria-label="Main"
          className="border-t border-border bg-background lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`rounded-md px-3 py-3 text-base font-semibold transition-colors ${
                  isActive(link.to, link.exact)
                    ? "bg-secondary text-primary"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {t(link.key)}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
