# TODOS — barnir.co

## Pre-launch (required before sending to anyone)

### [ ] Real-device QA pass
**What:** Share barnir.co from iPhone, Android, and desktop. Check the link preview card in Slack, iMessage, and LinkedIn.
**Why:** OG preview in Slack/iMessage is the first impression before the page loads. Playwright misses this. A broken OG card is a broken first impression for the board candidate who got the link forwarded.
**How:** After Vercel deploy, share the URL from three real devices. Check: preview card shows correct title/image, fonts render correctly, mobile layout is clean.
**Effort:** ~1 hour human (no CC acceleration — real devices required)
**Depends on:** OG images complete, Vercel deploy live

---

## Post-launch (before barnir.co is promoted publicly)

### [ ] Canonical/redirect strategy for external properties
**What:** Add canonical hints or backlinks on barnirhired.com, upgrAIde.co, and gifoc.com pointing to barnir.co as the primary brand presence.
**Why:** barnirhired.com and upgrAIde.co may outrank barnir.co for "Assaf Barnir" in search, splitting brand authority. The hub should be the canonical source.
**How:** Add `<link rel="canonical" href="https://barnir.co">` (or equivalent) to the home page of each external property. Add a "Part of the Unscared OS" footer link on each.
**Effort:** Human ~2 hr / CC: ~15 min per site (depends on their tech stack)
**Blocked by:** barnir.co fully live and indexed

---

## Backlog

### [ ] 2 additional book titles/covers
**What:** Add the two unconfirmed books to /library and place them in their correct vertical.
**Why:** /library is incomplete until all 5 books are represented.
**Blocked by:** Book titles and cover art confirmed

### [ ] Nuudge.app final identity
**What:** Once Nuudge.app's identity/name is resolved, update its card in /scale-yourself with the final name and description.
**Why:** Currently listed with placeholder status.
**Blocked by:** Nuudge identity decision
