# The Mix Lab — Event Site

Three pages, same stack as `globallynk-site`: React + Vite, React Router v6,
inline styles from one tokens file, Supabase (shared project), Vercel.

| Page | Route | What it's for |
|---|---|---|
| Experience | `/` | Splash page: hero, flyer, about, what to expect, lineup, schedule preview, essential info, register + recognition |
| Partners | `/partners` | Community Partner listings ($500 / $1,000), sponsorships, the guide, application + inquiry links |
| Digital Experience Guide | `/guide` | Permanent QR destination: schedule, talent, partner directory, venue, guest links. No account. |

## Run locally
```
npm install
cp .env.example .env.local   # add the GlobalLYNK Supabase URL + anon key
npm run dev                  # public view (published content only)
npm run dev:drafts           # also shows drafts with a DRAFT badge — never deploy this
```

## Deploy
Push to a new GitHub repo (e.g. `Kingiven1/mixlab-site`), import it in Vercel,
add `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`, connect the final domain.
No new paid services.

## Editing — everything lives in `/content`
| File | Update it when… |
|---|---|
| `content/event.js` | date/hours, venue address + arrival, **registration link**, flyer, final domain |
| `content/talent.js` | someone confirms (change `status: 'draft'` → `'published'`) |
| `content/schedule.js` | times are set (switch `mode` to `'confirmed'` to drop the "Provisional" label) |
| `content/partners.js` | a Community Partner reaches **Published** in `globallynk.club/admin/partners` |
| `content/sponsors.js` | a sponsor is approved; set `tiers.publishDetails: true` to show sponsor pricing |
| `content/faq.js` | cost / admission / age / accessibility answers are verified |

Images go in `public/img/`. Drafts are stripped at build time — they never reach
the browser, so it's safe to keep pending names and partners in these files.

The homepage schedule preview and `/guide` read the same `schedule.js`, so they can't drift apart.

## What's reused from GlobalLYNK (not duplicated)
- **Community Partner applications**: link to `globallynk.club/mix-lab/partner-application`.
  Records, emails (Resend), capacity/waitlist and the admin review screen stay exactly where they are.
- **Updates list**: writes to the existing `mix_lab_interest` table. Clearly labelled as *not* registration.
- **Privacy policy**: links to `globallynk.club/privacy`.

## QR code (pending until the final domain is confirmed)
1. Set `siteUrl` in `content/event.js`.
2. `npm run qr` → `qr-export/mix-lab-guide-qr.svg`, `.png` (2000px) and the readable URL.
3. Scan it on a phone before printing. The `/guide` URL never changes, so the printed code
   keeps working as you update the schedule and partners.

## Logo
`public/img/mix-lab-logo-white.png` was lifted from the deck cover (no font recreation).
Swap in the original white logo file under the same name for sharper print/retina output.
