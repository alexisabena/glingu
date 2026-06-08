# Glingu — Product Roadmap

**Last updated:** 2026-06-04
**Owner:** Alexis (developer)
**Stakeholder:** [Brother] (teacher / content & craft)
**Status:** Phase 0 — not started

---

## Guiding principles

1. **Revenue before software.** We do not build anything we can rent, embed, or skip. The custom LMS is the *last* thing we build, not the first.
2. **Sell with no-code first.** The landing page can take money via Stripe Payment Links + a Google appointment page before a single line of app code exists. We only build the authenticated platform once real demand justifies it.
3. **Google for content & ops, Postgres for the app.** Google Workspace, Calendar, Meet, and Drive run the teaching workflow. Supabase (Postgres) runs the application data.
4. **Multilingual from day one.** Spanish (default) + English now, more later. Human-authored copy per language — never machine translation on a language-teaching site.
5. **Ship something live on day one.** A "coming soon" hero on the real domain beats a perfect page that isn't deployed.

---

## Scope decisions (locked)

| Decision | Choice | Date |
|---|---|---|
| First focus | Landing page only | 2026-06-04 |
| Languages at launch | Spanish (default), English | 2026-06-04 |
| i18n approach | `next-intl`, locale-prefixed routes, human copy | 2026-06-04 |
| Auth + DB | Supabase | 2026-06-04 |
| Payments | Stripe (Payment Links first, full Checkout later) | 2026-06-04 |
| Content authoring | Alexis writes copy in MDX; **no CMS** for now | 2026-06-04 |
| Email/ops infra | Google Workspace | 2026-06-04 |
| Analytics | **Google Analytics (GA4)** — requires cookie consent | 2026-06-04 |
| Domain | Existing domain reused (old Webflow site retired) | 2026-06-04 |
| Brand | **TBD — will change.** Scaffold stays brand-neutral | 2026-06-04 |
| Embedded video calls | **Out of scope.** Use Calendar API + Meet links + `.ics` | 2026-06-04 |

---

# Roadmap A — Landing page

**Goal:** A fast, multilingual, SEO-friendly marketing site that can take money via Stripe Payment Links and book classes via a Google appointment page — *no custom app required*.

**Target:** Live and able to take a payment in ~2–3 weeks part-time.

### Phase 0 — Foundations (Day 1)
**Goal:** Something real on the real domain, today.
- [ ] Create the third-party accounts (see `ARCHITECTURE.md` → "Accounts to create").
- [ ] Next.js + Tailwind project, deployed to Netlify.
- [ ] Domain connected, HTTPS working.
- [ ] Analytics installed (**GA4**) — loaded only after cookie consent.
- [ ] Cookie consent banner in place (required by GA4, do not defer).
- [ ] *(Optional)* Recover usable copy/assets from the old Webflow site via the Wayback Machine.
- [ ] `next-intl` wired with `/es` (default) and `/en` routes.
- [ ] Placeholder hero deployed ("Coming soon" in both languages).

**Done when:** the real domain shows a localized placeholder and the language switcher works.

### Phase 1 — Landing core
**Goal:** The full landing page, capturing leads.
- [ ] Hero: headline, subhead, primary CTA, video embed (YouTube unlisted).
- [ ] Trust strip: certifications prepped for, testimonials.
- [ ] Offerings: 3 cards (Courses · Group classes · Certification prep).
- [ ] Placement-test promo block (CTA points to a **Google Form** for now).
- [ ] How it works (3 steps), About the teacher, FAQ.
- [ ] Lead-capture form → stored + email notification.
- [ ] Footer with language switch + legal links.
- [ ] All copy authored in both ES and EN.

**Done when:** a visitor can understand the offer, switch language, watch the video, and leave their email.

### Phase 2 — Products catalog + detail pages
**Goal:** Sellable products with real checkout — still no custom app.
- [ ] `/products` catalog page.
- [ ] One **templatized** `/products/[slug]` detail layout, content in MDX.
- [ ] Each product CTA → a **Stripe Payment Link** (one-off) or Stripe-hosted subscription.
- [ ] Group-class CTA → Google Calendar appointment page for booking.

**Done when:** a customer can pay for a class or course end-to-end via Stripe-hosted pages. **This is the revenue MVP.**

### Phase 3 — Placement test v1
**Goal:** Replace the Google Form with an on-site quiz.
- [ ] Static multi-step quiz (`/placement-test/[language]`), no login.
- [ ] Emails the result to the user + notifies the teacher.
- [ ] Result page CTA → recommended product.

**Done when:** a visitor gets a level estimate and a clear next step without leaving the site.

### Phase 4 — Polish & compliance
- [ ] SEO: titles, meta, sitemap, `hreflang` per locale, OG images.
- [ ] Performance pass (Lighthouse ≥ 95 on landing).
- [ ] Legal pages: Privacy, Terms, Cookies (EU/GDPR — see ARCHITECTURE).
- [ ] Cookie consent banner.

**Done when:** the site is indexable, fast, and legally shippable in the EU.

> **End of Roadmap A:** the teacher can sell classes and courses, collect leads, and offer a placement test — all without an authenticated platform. We do **not** proceed to Roadmap B until this is converting.

---

# Roadmap B — LMS (revenue-first, build only when justified)

Each phase is independently shippable and ordered by **revenue impact**, not by how interesting it is to build.

### Phase 1 — Group classes (the money MVP)
**Goal:** Recurring revenue + scheduling, with the smallest possible platform.
- Supabase email/magic-link login.
- Group-class subscription via Stripe Checkout + Customer Portal (self-serve billing).
- Authenticated dashboard listing upcoming classes.
- **Google Calendar API** creates each session → Meet link + `.ics` invite to enrolled students.
- "Join class" button (opens Meet in a new tab at class time).

**Done when:** a student can subscribe, pay, see their schedule, and join class — and the teacher never manually sends a link.

### Phase 2 — Courses & certification prep
- Sell one-time courses + cert-prep packages.
- Enrollment unlocks a simple lesson list.
- Content delivered via embedded Drive/YouTube — **no custom video player.**
- Optional: lesson completion tracking.

### Phase 3 — Placement tests in-app
- Logged-in placement tests, stored results.
- Auto-recommend the matching product/level.

### Phase 4 — Content management (the big one — do it last)
- Admin area: teacher creates courses, schedules classes, manages students.
- Replaces hardcoded MDX content.
- Tooling decision (Sanity / Payload / custom) deferred to this point.

**Only build Phase 4 when the manual content workflow is demonstrably the bottleneck.**

### Phase 5 — Advanced (only if warranted by demand)
- Embedded video (LiveKit / Daily) — replaces the Meet-link approach.
- Coupons, referrals, automated certificates.
- Multi-teacher support, analytics dashboards, additional UI languages.

---

## What we are deliberately NOT doing (anti-scope)

- ❌ Embedding live video calls inside the site (Phase 5 at the earliest).
- ❌ Building our own auth / password handling (Supabase does it).
- ❌ A CMS before content authoring is a proven bottleneck.
- ❌ Machine-translating UI copy.
- ❌ A custom video pipeline (use Drive/YouTube).

## Definition of "lean" for this project
If a feature can be replaced by a Stripe-hosted page, a Google Form, a Calendar appointment page, or a Drive embed — it is, until volume proves otherwise.
