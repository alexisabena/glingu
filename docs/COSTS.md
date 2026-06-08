# Glingu — Cost Ledger

**Purpose:** one place to track every paid (or potentially-paid) service, so
subscription creep stays visible. Update this whenever a service is added,
changed, or crosses a tier.

**Last updated:** 2026-06-04
**Review cadence:** glance monthly; hard review whenever a "next-tier trigger" gets close.

> 💱 Prices are approximate and in **USD** unless noted (verify current pricing at
> signup — providers change tiers). Audience/business is likely EU (Spain), so
> watch for EUR pricing + VAT on invoices.

---

## Current monthly cost: **$0**

Nothing is paid yet. The table below is the plan + triggers, not active charges.

---

## Services

| Service | Purpose | Current tier | Monthly | Triggers next tier | Next tier | Notes |
|---|---|---|---|---|---|---|
| **Domain** | Web address | Registered (Squarespace) | ~$1–2/mo equiv | Annual renewal | ~$10–20 / **year** | Owned by brother. May transfer to Namecheap later (not required to launch). |
| **Hosting** | Serve the site | **Netlify Starter (free)** | $0 | See migration triggers in `HOSTING.md` | Netlify Pro ~$19 · **migrate → Cloudflare ($0, flat $5 if exceeded)** | Chosen for familiarity + commercial-OK free tier. Move to Cloudflare when usage (not a needed feature) would force Netlify Pro. |
| **Supabase** | Auth + database + storage | Not yet (free at launch) | $0 | >50k MAU, >500MB DB, or pausing | Pro ~$25 | Only needed in Roadmap B (LMS). Free tier pauses after inactivity. |
| **Stripe** | Payments | Pay-per-use | $0 base | Per transaction | **~1.5% + €0.25** (EU cards) | No monthly fee. **Stripe Tax** adds ~0.5%/txn if enabled (VAT). Higher % for non-EU/Amex cards. |
| **Google Workspace** | Business email + Calendar/Meet/Drive owner | Not yet | $0 | On signup | **~$6–7 / user / mo** (Business Starter) | Dedicated business account (not personal Gmail). 1 user to start. |
| **Resend** | Transactional email (receipts, invites) | Not yet (free) | $0 | >3,000 emails/mo or >100/day | ~$20 (50k emails) | Free tier fine for launch volume. |
| **Analytics (GA4)** | Site analytics | Planned Phase 4 | $0 | Free product | $0 | Free, but requires a cookie-consent banner. |

---

## Per-transaction costs (not subscriptions, but real)

These scale with revenue, not time — easy to forget:

- **Stripe:** ~1.5% + €0.25 per EU card charge (more for international/Amex).
- **Stripe Tax** (optional, for VAT compliance): ~+0.5% per transaction.
- **Payouts / currency conversion:** small Stripe fees if selling across currencies.

---

## Anti-creep rules (for this project)

1. **Default to free tiers and few vendors.** Add a paid service only when a free
   tier is genuinely exhausted — not preemptively.
2. **Prefer flat/predictable pricing** over usage-metered when the choice exists
   (e.g. Cloudflare's flat $5 vs. metered overages).
3. **Every new service gets a row here, same day.** If it's not in this file, it
   shouldn't be on a credit card.
4. **One business card/account** for all subscriptions so they're auditable in one
   statement.
5. **Re-check before launch and quarterly** that each service is still on the
   lowest tier that works.

---

## Realistic "launch" monthly estimate

When the site goes live and starts taking payments (minimal version):

| Item | Est. monthly |
|---|---|
| Domain (amortized) | ~$1.50 |
| Hosting | $0 (free tier) |
| Google Workspace (1 user) | ~$6–7 |
| Resend | $0 (free tier) |
| Stripe | $0 base + per-sale % |
| **Fixed total** | **≈ $8–9 / month** + Stripe's cut per sale |

Everything else (Supabase, paid hosting) only appears if/when the LMS phases or
real traffic justify them.
