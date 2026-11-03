// ──────────────────────────────────────────────────────────────────────────
// LINEUP, SPEAKERS & TALENT
// status: 'published' → public. 'draft' → never leaves your computer.
// role: 'DJ' | 'Speaker' | 'Moderator' | 'Host' (a short combo like
// 'DJ & Photographer' is fine). Photos go in /public/img/.
// If nobody is published, the site shows "Talent announcements coming soon".
// King Iven is hosting, so he has no lineup card.
// ──────────────────────────────────────────────────────────────────────────

export default [
  {
    status: 'published',
    name: 'Francesca Eva',
    role: 'DJ',
    city: 'Chicago',
    bio: 'International DJ and founder of Red Light Special.',
    photo: '/img/talent-francesca-eva.webp',
    photoPosition: 'center 30%',
    link: null, // e.g. 'https://instagram.com/…'
  },
  {
    status: 'published',
    name: 'Farrah Flosscett',
    role: 'DJ',
    city: 'Washington, DC',
    bio: 'DJ and cofounder of Throwing Shade.',
    photo: '/img/talent-farrah-flosscett.webp',
    photoPosition: 'center 20%',
    link: null,
  },
  {
    status: 'published',
    name: 'A Fly Guy',
    role: 'DJ & Photographer',
    city: 'Miami',
    bio: 'DJ, photographer and creator of BPM: Beats, Pics and Masters.',
    photo: '/img/talent-a-fly-guy.webp',
    photoPosition: 'center 30%',
    link: null,
  },
  {
    status: 'draft', // held until Iven confirms
    name: 'DJ Aktive',
    role: 'DJ',
    city: 'Philadelphia',
    bio: "Janet Jackson's official tour DJ.",
    photo: '/img/talent-dj-aktive.webp',
    photoPosition: 'center 25%',
    link: null,
  },
  {
    status: 'draft', // held until Iven confirms
    name: 'Brian Henry',
    role: 'DJ',
    city: 'Los Angeles',
    bio: 'Coachella performer and creator of The B-Hen Block Party.',
    photo: '/img/talent-brian-henry.webp',
    photoPosition: 'center 30%',
    link: null,
  },
  // Example draft — stays private until you change status to 'published'.
  {
    status: 'draft',
    name: 'Fireside chat moderator (TBC)',
    role: 'Moderator',
    city: '',
    bio: 'Placeholder for the moderator once confirmed.',
    photo: null,
    link: null,
  },
];
