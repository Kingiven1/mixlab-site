// ──────────────────────────────────────────────────────────────────────────
// SPONSORS & RECOGNITION
//
// presenters: shown in the hero and footer.
// recognized: approved sponsors only (status 'published'). Applications or
//             conversations in progress stay 'draft'.
// tiers: sponsorship options on /partners. The deck labels them "proposed".
//        publishDetails: false → the page names each tier and what it covers,
//        and invites an email for pricing. Set true once pricing and benefits
//        are approved for the public site.
// ──────────────────────────────────────────────────────────────────────────

export default {
  presenters: [
    { name: 'GlobalLYNK', logo: '/img/presenter-globallynk.png', role: 'Produces introductory DJ workshops, cohort classes and cultural exchange programs.', link: 'https://www.globallynk.club' },
    { name: 'AmpSpot', logo: '/img/presenter-ampspot.png', role: 'Technology connecting DJs and event organizers through discovery, booking and business tools.', link: null },
    { name: 'NFNTE Capital', logo: '/img/presenter-nfnte.png', role: 'Hosts the Social Hour Night Cap and its social equity conversation.', link: null },
  ],
  hostVenue: { name: 'The LAB Miami', role: 'A Wynwood innovation community bringing founders, engineers and entrepreneurs into the experience.' },

  recognized: [
    // { status: 'published', name: 'Brand', logo: '/img/sponsors/brand.png', tier: 'Experience Partner', link: 'https://…' },
  ],

  tiers: {
    publishDetails: false,
    note: 'Proposed packages. Final benefits, content and any exclusivity are confirmed by written agreement. Custom activation build costs are quoted separately.',
    list: [
      {
        name: 'Presenting Partner',
        price: 25000,
        scope: 'Top-line billing across the experience.',
        benefits: ['Presenting sponsor billing', 'One signature branded activation', 'Priority website, screen and event-signage placement', 'Co-branded recap and agreed content package'],
      },
      {
        name: 'Experience Partner',
        price: 10000,
        scope: 'Sponsor a major program segment.',
        benefits: ['Sponsor a major program segment', 'Branding within that experience', 'Product demo or guest interaction', 'Website recognition and experience recap'],
      },
      {
        name: 'Supporting Partner',
        price: 5000,
        scope: 'Support a workshop, talk, art activation or DJ session.',
        benefits: ['Sponsor a workshop, talk, art activation or DJ session', 'Branding at the supported activation', 'Website partner listing', 'Post-event recap'],
      },
    ],
  },

  supportAreas: [
    { title: 'Program funding', copy: 'Instructors, artists, staffing and event delivery.' },
    { title: 'Food & beverages', copy: 'Daytime bites, Social Hour Night Cap hospitality and drinks.' },
    { title: 'Art exhibition', copy: 'Display walls, installation, lighting and transport.' },
    { title: 'Branding & operations', copy: 'Photo wall, banners, signage and documentation.' },
    { title: 'Creative wellbeing', copy: 'Support the mental health and wellbeing conversation.' },
    { title: 'Creative technology', copy: 'DJ gear, software and staffed hands-on demos.' },
  ],
};
