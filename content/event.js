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
  hoursLabel: 'Noon–11 PM ET',

  presentedBy: ['GlobalLYNK', 'AmpSpot', 'NFNTE Capital'],

  venue: {
    name: 'The LAB Miami',
    neighborhood: 'Wynwood, Miami',
    // Street address: fill in once reconfirmed with the venue. While null,
    // the site shows the venue name + neighborhood only.
    address: '400 NW 26th St, Miami, FL 33127',
    // Directions link. While address is null this searches the venue name.
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=The+LAB+Miami%2C+400+NW+26th+St%2C+Miami%2C+FL+33127',
    arrival: null, // e.g. 'Check in at the front entrance on NW 26th St.' — only once confirmed
    parking: null,
    transit: null,
    photos: ['/img/venue-1.webp', '/img/venue-2.webp', '/img/venue-3.webp'],
    photoNote: 'The venue before event styling.',
  },

  // ATTENDANCE. Paste the tested Luma event link here (approval required on
  // every ticket type). Then every attendance button says "Request an
  // invitation" and goes to Luma. While null, buttons say "Get updates" and the
  // updates form is clearly labelled as NOT an invitation request.
  registrationUrl: 'https://luma.com/2sd53ba8',
  registrationLabel: 'Request an invitation',

  // Flyer. Put the approved file in /public/img/ and set the path, e.g.
  // '/img/mix-lab-flyer.jpg'. While null the flyer section is hidden entirely
  // (date, location and attendance info stay as text elsewhere on the page).
  flyer: null,
  flyerAlt: 'The Mix Lab event flyer',

  // Final public domain, e.g. 'https://themixlab.club'. Needed for the QR code
  // (npm run qr) and the social-sharing preview. Leave null until confirmed.
  siteUrl: null,

  contactEmail: 'connect@indabooth.com',
  instagram: 'https://www.instagram.com/globallynk/',
  privacyUrl: 'https://www.globallynk.club/privacy',

  // Existing GlobalLYNK Community Partner application (keeps all records in
  // the same Supabase table and admin view — do not duplicate it).
  partnerApplyUrl: 'https://www.globallynk.club/mix-lab/partner-application',

  disclaimer: 'An independent event during Miami Art Week. Not affiliated with Art Basel.',
};
