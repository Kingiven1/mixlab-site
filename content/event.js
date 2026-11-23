// ──────────────────────────────────────────────────────────────────────────
// EVENT DETAILS — the single source for every page.
// Leave a value as null until it's confirmed; the site hides or softens
// anything that's null instead of guessing.
// ──────────────────────────────────────────────────────────────────────────

export default {
  name: 'The Mix Lab',
  headline: 'Step inside the art of DJing.',
  tagline: 'Music × Art × Technology × Culture',
  context: 'Miami Art Week 2026',

  // Shown in America/New_York. Keep the ISO date for the calendar file.
  dateISO: '2026-12-03',
  dateLabel: 'Thursday, December 3, 2026',
  dateShort: 'Dec 3, 2026',
  timezone: 'America/New_York',
  // Overall hours. null = not published. The deck shows 12 PM–11 PM as a
  // proposed flow; set this only once those hours are final.
  hoursLabel: 'Noon–8 PM ET',

  presentedBy: ['GlobalLYNK', 'AmpSpot', 'NFNTE Capital'],

  venue: {
    name: 'The LAB Miami',
    neighborhood: 'Wynwood, Miami',
    // Street address: fill in once reconfirmed with the venue. While null,
    // the site shows the venue name + neighborhood only.
    // PRIVATE: the street address goes only to confirmed guests (via Luma).
    // Keep null on the public site.
    address: null,
    addressNote: 'The exact address is shared with confirmed guests.',
    // Directions link. While address is null this searches the venue name.
    mapUrl: null, // no public directions link while the address is private
    arrival: null, // e.g. 'Check in at the front entrance on NW 26th St.' — only once confirmed
    parking: null,
    transit: null,
    photos: [], // venue photos removed from the public site
    photoNote: 'The venue before event styling.',
  },

  // ATTENDANCE. Paste the tested Luma event link here (approval required on
  // every ticket type). Then every attendance button says "Request an
  // invitation" and goes to Luma. While null, buttons say "Get updates" and the
  // updates form is clearly labelled as NOT an invitation request.
  registrationUrl: 'https://luma.com/2sd53ba8',
  registrationLabel: 'RSVP Here',

  // WORKSHOP BOOKING — one button directly below the homepage hero.
  // DJs and sessions are managed on the Luma page itself; the site never lists
  // individual DJ booking cards or session buttons. Set workshopUrl to null to hide.
  workshopUrl: 'https://luma.com/2sd53ba8',
  workshopLabel: 'Book a workshop spot',
  workshopNote: 'Choose your DJ on the next page. Only 8 spots per workshop. Approval required.',

  // Flyer. Put the approved file in /public/img/ and set the path, e.g.
  // '/img/mix-lab-flyer.jpg'. While null the flyer section is hidden entirely
  // (date, location and attendance info stay as text elsewhere on the page).
  flyer: null,
  flyerAlt: 'The Mix Lab event flyer',

  // Final public domain, e.g. 'https://themixlab.club'. Needed for the QR code
  // (npm run qr) and the social-sharing preview. Leave null until confirmed.
  siteUrl: 'https://www.themixlabglobal.com',

  contactEmail: 'connect@indabooth.com',
  instagram: 'https://www.instagram.com/globallynk/',
  privacyUrl: 'https://www.globallynk.club/privacy',

  // Existing GlobalLYNK Community Partner application (keeps all records in
  // the same Supabase table and admin view — do not duplicate it).
  partnerApplyUrl: 'https://www.globallynk.club/mix-lab/partner-application',

  disclaimer: 'An independent event during Miami Art Week. Not affiliated with Art Basel.',
};
