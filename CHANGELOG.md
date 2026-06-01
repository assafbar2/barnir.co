# Changelog

All notable changes to barnir.co are documented here.

## [0.0.3.0] - 2026-05-31

### Added
- **The Support Machine** — featured as the flagship 4th book across the site: hero card on /library, Book section on /scale-business, updated homepage "What's shipping" signal
- **Featured book card** — full-width hero treatment with terminal-style placeholder, thesis pull-quote, 6 template pills (vendor scorecard, shadow run, launch runbook, first 30 days review, operating model, AI rollout plan), and 4 CTAs (Read online, Use the skill, Download PDF, GitHub)
- `isFeatured`, `ctaLinks`, `thesis`, `templates` fields added to the `Book` data type

### Changed
- Library page hero copy updated to address CS leaders explicitly: "CS leaders whose support orgs haven't migrated yet…"
- Section labels on /library updated to "New release" and "Also by Barnir"
- Homepage "Latest book" signal now surfaces The Support Machine

### Fixed
- Terminal placeholder (`aria-hidden="true"`) — screen readers no longer narrate decorative terminal content
- Reduced-motion guard on cursor blink animation

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
