import content from 'virtual:content';

// Everything comes from /content — already filtered to published entries.
export const { event, talent, schedule, partners, sponsors, faq, showingDrafts } = content;

// Public paths like '/img/x.webp' → respects the build base (needed for previews).
export const asset = (p) => (p && p.startsWith('/') ? `${import.meta.env.BASE_URL}${p.slice(1)}` : p);

export const hasRegistration = Boolean(event.registrationUrl);

export const money = (n) => `$${Number(n).toLocaleString('en-US')}`;

export const isDraft = (item) => item && item.status && item.status !== 'published';

// Talent lookup for schedule sessions.
export const talentByName = Object.fromEntries(talent.map((t) => [t.name, t]));

export const scheduleIsProvisional = schedule.mode !== 'confirmed';
