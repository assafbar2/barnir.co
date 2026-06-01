# Changelog

All notable changes to barnir.co are documented here.

## [0.0.2.0] - 2026-04-15

### Added
- **Library page redesign** — each book now gets a rich horizontal card with cover art, a personality hook line, full description, reader testimonial, and buy links (Amazon, Google Books, Audible/Google Play, Books2Read)
- **4th book preview** — UNSCARED: The Machine Shift added as a coming-soon card with a Substack notification CTA
- **Self-hosted cover images** — book covers downloaded from external sites and hosted on barnir.co (`/images/books/`)
- **Book data model** — extended `Book` type with `hook`, `testimonial`, `buyLinks`, `badge`, `note`, `comingSoon`, and `tags` fields

### Changed
- `/library` hero copy rewritten to lead with personality: "I write for the people who don't want to be left behind"
- Book cards on `/scale-yourself` now deep-link directly to the correct book anchor on `/library` (e.g. `/library#emotions-soup`) instead of linking to external Carrd sites
- FAQ structured data on homepage updated — Carrd URLs replaced with Amazon links, 4th book mentioned

### Fixed
- First book cover now loads eagerly with `fetchpriority="high"` for better LCP on `/library`
- Book cover images include explicit `width`/`height` attributes to prevent layout shift (CLS)
- Buy link buttons gain `:focus-visible` styles for keyboard accessibility
- False-affordance `↗` removed from donation/foundation note text (plain text, no implied link)
- Mobile layout: cover image centers correctly when cards stack to single column
- Border separator uses adjacent-sibling selector (`.book-card + .book-card`) instead of `:last-child` for robustness
