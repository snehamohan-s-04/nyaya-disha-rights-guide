# NyayaDisha sidebar enhancement

## User-facing changes
- Keep the existing NyayaDisha visual system, shared header/footer, mobile menu, and English/Kannada language switch.
- Add navigation and dedicated pages for My Categories, Legal Updates, Legal Aid Eligibility Checker, Upcoming Events, and Bookmarks.
- Let visitors select multiple audience categories and use those selections to show relevant existing legal topics.
- Keep updates and events explicitly empty until verified entries and official links are supplied; include location filtering without invented listings.
- Add a short, privacy-conscious preliminary legal-aid questionnaire. Explain that it is indicative only and that the appropriate Legal Services Authority decides eligibility.
- Save selected categories and topic bookmarks in local browser storage, restoring them after refresh.

## Implementation
- Add five TanStack file routes, updating the shared desktop/mobile header and footer links while preserving current routes.
- Reuse bilingual topic data, theme tokens, page layouts, and existing Button/input patterns; add English and Kannada UI labels.
- Use a small browser-safe helper for audience matching, preliminary eligibility screening, and resilient local-storage parsing; cover concrete screening and persistence behavior with focused tests.
- Check route coverage, language switching, local interactions, desktop/mobile navigation, and current build diagnostics.

## Boundaries
- Frontend only: no backend, authentication, external legal-update/event data, or fabricated listings.
- No definitive legal eligibility determination; collect no name, contact details, case narrative, or exact income.
