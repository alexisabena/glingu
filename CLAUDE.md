@AGENTS.md

---

## ⏭️ Session handoff (updated 2026-06-07)

**Project state:** Fase 0 + Fase 1 landing done & pushed to `main`. Full
bilingual (ES default / EN) sectioned landing: Header, Hero (video slot),
Offerings, How-it-works, About, FAQ, Lead form (Netlify Forms), Footer.
Bold brand palette + rounded/blobby aesthetic. Hosting decided: **Netlify**
(free) with Cloudflare migration triggers in `docs/HOSTING.md`. Central project
doc lives in the vault: `studio-vault/projects/glingu/spec.md`.

**Pending — needs Alexis / his brother:**
1. **Point the repo to Netlify** (deploy) + enable Netlify usage/billing alerts.
2. **Domain DNS → Netlify** — domain is the brother's (bought via Squarespace);
   only DNS-pointing needed to launch, no transfer required. **Talk to brother.**
3. **Real content** to replace drafts: hero video (YouTube unlisted), teacher
   bio + photo, testimonials/certifications, offering details/prices.
   Search the repo for `TODO` placeholders.
4. Open decision: add `.gitattributes` (`* text=auto eol=lf`) for CRLF warnings.

**Likely next build:** Phase 2 (products catalog + Stripe Payment Links) per
`docs/ROADMAP.md`, or polish/real-content pass on the landing.
