# Glingu — Hosting Decision & Migration Triggers

**Last updated:** 2026-06-04
**Current host:** **Netlify** (Starter / free tier)
**Fallback host:** **Cloudflare** (Pages + Workers) — migrate when triggers below are hit.

---

## Why Netlify now

- **Familiar DX** (Alexis already knows it) — fastest to debug when solo.
- **Near-zero config** for Next.js (official runtime handles SSR, the locale
  proxy, API routes).
- **Free tier allows commercial use** (unlike Vercel's non-commercial Hobby tier).
- **$0** until real traffic — creep isn't triggered yet.

## Why Cloudflare is the planned escape hatch

- **Unlimited bandwidth** on the free tier → no surprise bandwidth bills.
- If usage exceeds free, the next step is a **flat $5/mo** (Workers Paid), vs
  Netlify Pro at ~$19/mo.
- Trade-off we accept later: Next.js needs an adapter (`@opennextjs/cloudflare`)
  and an edge-first runtime — more setup + a learning curve. Worth it only once
  cost predictability outweighs convenience.

---

## 🔔 Migration triggers — move to Cloudflare when ANY of these is true

These are the **circumstances**. The decision rule sits at the bottom.

| # | Trigger | Netlify free limit (verify current) | Why it matters |
|---|---|---|---|
| 1 | **Bandwidth** nearing/over the monthly cap | ~**100 GB/mo** | #1 reason to move — Cloudflare bandwidth is unlimited. |
| 2 | **Serverless/Edge function invocations** nearing cap | ~**125k/mo** | Lead form + Stripe webhooks + auth add up as traffic grows. |
| 3 | **Build minutes** nearing cap | ~**300 min/mo** | Frequent deploys / heavy builds. |
| 4 | Netlify prompts to upgrade to **Pro (~$19/mo)** purely for **usage** (not a feature we need) | — | This is the clean "$19 vs $5" fork. |

> ⚠️ These numbers drift — confirm against Netlify's current plan page when an
> alert fires. Treat **80% of any limit** as the "start planning the move" line.

### Decision rule (the actual answer to "when do we move?")

1. **Stay on Netlify free** until a hard limit is reached.
2. When Netlify would force **Pro ($19/mo)**:
   - If it's purely **bandwidth/usage** → **migrate to Cloudflare** (unlimited
     bandwidth, $0, flat $5 if exceeded).
   - If it's a **specific Netlify feature you actually need** *and* the convenience
     is worth ~$19/mo → pay Pro, defer the migration.
3. **Hard override:** if a single month's projected Netlify overage would exceed
   **~$15**, migrate regardless — Cloudflare's flat $5 wins.

---

## 🔔 How we get notified (so we don't have to remember)

Two layers — the first is the real-time one, the second is the safety net.

### Layer 1 — Netlify's own alerts (primary, real-time, free)
Set these up in the Netlify dashboard right after connecting the repo:
- **Team → Billing / Usage:** enable **usage notification emails** so Netlify
  emails when bandwidth / build minutes / function usage approach plan limits.
- **Site → Deploys → Notifications:** enable **deploy-failed** email/Slack alerts.
- Make sure billing/usage emails go to an address that's actually checked.

This is the authoritative signal — it's tied to real metered usage.

### Layer 2 — Monthly self-audit reminder (backup)
A recurring reminder (calendar event or scheduled task) on the **1st of each
month**: "Open Netlify usage; compare against `HOSTING.md` triggers (80% line)."
- Takes ~2 minutes.
- Catches drift even if a Netlify email is missed or filtered.
- Can be automated later (Netlify API → usage check) once we have an API token,
  but a manual reminder is enough at launch.

---

## If/when we migrate (rough runbook — not needed until triggered)

1. Add the Cloudflare adapter (`@opennextjs/cloudflare`) and a `wrangler` config.
2. Create a Cloudflare Pages/Workers project, connect the repo.
3. Move env vars over; set up the same custom domain (DNS already easy to
   re-point — and may already be on Cloudflare DNS).
4. Verify SSR routes, the locale proxy, and any API endpoints (lead form, Stripe
   webhooks) work on the Workers runtime.
5. Cut the domain over; keep Netlify up until the new deploy is verified.
6. Update `COSTS.md` + this file.
