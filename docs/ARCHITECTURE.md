# Glingu — Architecture

**Last updated:** 2026-06-04
**Audience:** Developer (Alexis) and any future contributor.

This document describes the technical stack, structure, and conventions. For sequencing see `ROADMAP.md`. For the non-technical overview see `STAKEHOLDER-GUIDE.md`.

---

## 1. Stack

| Concern | Choice | Notes |
|---|---|---|
| Framework | **Next.js (App Router)** | One codebase for landing + future app; SSR for SEO |
| Styling | **Tailwind CSS** | Fast, consistent, no design system overhead early |
| Hosting | **Vercel** | Zero-config deploys, preview URLs, free to start |
| i18n | **`next-intl`** | Locale-prefixed routes, message catalogs |
| Database + Auth + Storage | **Supabase** (Postgres) | Relational fit for LMS data; magic-link auth |
| Payments | **Stripe** | Payment Links first → Checkout + Billing + Customer Portal |
| Scheduling / video | **Google Calendar API** + Google Meet | Auto Meet links + `.ics` invites; no embedded calls |
| Transactional email | **Resend** | Receipts, class invites (Supabase sends auth emails) |
| Early content hosting | **YouTube (unlisted) / Google Drive** | No custom video infra |
| Marketing content | **MDX** in-repo | No CMS until Roadmap B, Phase 4 |
| Analytics | **Google Analytics (GA4)** | Requires cookie consent; load only after opt-in |

**Why Supabase over Firebase:** LMS data is relational (users ↔ enrollments ↔ courses ↔ class sessions ↔ payments). Postgres models this cleanly; Firestore does not. Google still owns content/ops (Calendar, Meet, Drive, Workspace).

---

## 2. Internationalization (i18n)

**This is a language-teaching site — copy quality is the product. No machine translation of UI copy.**

- **Library:** `next-intl`.
- **Routing:** locale-prefixed. `/es` (default), `/en`. Future languages add a prefix (`/fr`, `/pt`, …).
- **Message catalogs:** `messages/{locale}.json`. Every user-facing string lives here — no hardcoded copy in components.
- **MDX content:** localized per file or per folder (`content/products/{slug}.{locale}.mdx`).
- **Switcher:** in header + footer; preserves the current route across locales.
- **SEO:** emit `hreflang` alternates for every localized page; localized `<title>`/meta.
- **Adding a language** = add `messages/{locale}.json` + the locale to config + translated MDX. No code changes.

**Explicitly rejected:** the Chrome built-in Translator API and any CSS-based "localization." Chrome-only, machine-quality, SEO-invisible — unacceptable for this domain.

---

## 3. Repository structure (target)

```
glingu/
├─ docs/                     # ROADMAP, ARCHITECTURE, STAKEHOLDER-GUIDE
├─ messages/                 # es.json, en.json (UI strings)
├─ content/                  # MDX: products, pages
│  └─ products/
├─ public/                   # static assets, OG images
├─ src/
│  ├─ app/
│  │  └─ [locale]/           # localized routes
│  │     ├─ page.tsx         # landing
│  │     ├─ products/
│  │     ├─ placement-test/
│  │     └─ (legal)/
│  ├─ components/
│  ├─ lib/                   # supabase, stripe, calendar clients
│  └─ i18n/                  # next-intl config
├─ .env.local               # secrets (never committed)
└─ ...
```

---

## 4. Data model (forward-looking — built in Roadmap B)

Kept here so the landing-page work doesn't paint us into a corner.

- **User / Profile** — managed by Supabase Auth + a `profiles` table.
- **Product** — `{ id, type: course | cert_prep | group_subscription | placement_test, slug, prices }`.
- **Enrollment** — links User ↔ Product, with status.
- **Course → Module → Lesson** — content hierarchy (Phase 2+).
- **ClassSession** — `{ id, product_id, start, end, calendar_event_id, meet_link }`.
- **Attendance** — User ↔ ClassSession.
- **Order / Subscription** — mirrors Stripe objects via webhooks (`stripe_customer_id`, `stripe_subscription_id`).

Stripe is the **source of truth for billing**; we mirror minimal state via webhooks.

---

## 5. Scheduling & video (the Meet workflow)

We do **not** embed video calls. Instead:

1. Teacher (or system) creates a class → we call the **Google Calendar API** on a dedicated Workspace account.
2. Calendar auto-generates a **Google Meet link** and sends invites + `.ics` to enrolled students.
3. The dashboard shows a **"Join class"** button that opens the Meet link at class time.

This mirrors the teacher's existing workflow and avoids a multi-month video-infrastructure build. Real embedded video is Roadmap B, Phase 5 (LiveKit/Daily) — only if demand justifies it.

---

## 6. Accounts to create (Phase 0 checklist)

- [ ] **Domain** registrar.
- [ ] **Google Workspace** — dedicated account for the business (owns Calendar/Meet/Drive/email). *Do not use a personal Gmail as the integration owner.*
- [ ] **Stripe** account (start with Payment Links; enable **Stripe Tax** for EU VAT before first real sale).
- [ ] **Supabase** project.
- [ ] **Vercel** project (connect the repo).
- [ ] **Resend** account (verify the sending domain).
- [ ] **Analytics** (Plausible or GA4).
- [ ] **Google Cloud project** for the Calendar API (OAuth consent on the Workspace account) — needed in Roadmap B, not the landing page.

---

## 7. Secrets & environment

- All secrets in `.env.local` (gitignored) and Vercel project env vars. **Never commit keys.**
- Expected keys (grow over time): `NEXT_PUBLIC_SITE_URL`, Supabase URL + anon/service keys, Stripe secret + webhook signing secret, Resend API key, Google OAuth client/secret (Roadmap B).
- Use **test-mode** Stripe keys until launch.

---

## 8. Security & privacy (EU / GDPR)

The teacher and audience are likely EU (Spain). Treat GDPR as a launch requirement, not an afterthought.

- **Privacy Policy, Terms, Cookie Policy** required before launch (Roadmap A, Phase 4).
- **Cookie consent** banner is **mandatory** (GA4 sets cookies). GA4 must not load until the user opts in — wire consent before shipping analytics.
- **Data processors** to name: Stripe, Supabase, Google, Resend, Vercel.
- **PCI:** never handle card data — Stripe-hosted pages only.
- **Auth:** never roll our own; Supabase handles hashing, sessions, confirmation emails.
- **Calendar integration owner:** dedicated Workspace account with scoped OAuth — not a personal account.

---

## 9. Conventions

- TypeScript everywhere.
- No user-facing string outside `messages/` (i18n discipline).
- Server Components by default; client components only where interactivity requires.
- Keep `lib/` clients (supabase/stripe/calendar) thin and centralized.
- Feature flags / phased rollout via simple env config, not a flag service (lean).
