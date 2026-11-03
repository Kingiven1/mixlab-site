// ──────────────────────────────────────────────────────────────────────────
// FAQ — homepage "Essential information" and /guide.
// Only 'published' answers appear. Admission, age, accessibility and cost
// answers stay 'draft' until verified with the venue and partners.
// ──────────────────────────────────────────────────────────────────────────

export default [
  {
    status: 'published',
    q: 'Do I need any DJ experience?',
    a: 'No. The intro workshops are built for complete beginners. Curiosity is enough.',
  },
  {
    status: 'published',
    q: 'Who is The Mix Lab for?',
    a: 'Creators, DJs, entrepreneurs, music lovers and everyday people curious about DJing and art — from first-timers to working artists.',
  },
  {
    status: 'published',
    q: 'How do I attend?',
    a: 'Request an invitation through our Luma page and choose the Daytime or Night session. Every request is reviewed, and submitting one does not confirm attendance. You’ll get an email once your request is approved. No DJ experience needed.',
  },
  {
    status: 'draft', // the updates form is hidden now that Luma is live
    q: 'Does “Get updates” request an invitation?',
    a: 'No. Getting updates only sends you news and announcements. It does not request an invitation, register you or reserve a place.',
  },
  {
    status: 'published',
    q: 'Is this an official Art Basel event?',
    a: 'No. The Mix Lab is an independent event taking place during Miami Art Week, with no official Art Basel affiliation.',
  },
  {
    status: 'published',
    q: 'Is there a cost to attend?',
    a: 'No. Admission is complimentary. RSVP is required: attendance is by invitation request, and every request is reviewed.',
  },
  { status: 'draft', q: 'Is there an age requirement?', a: 'TBC — confirm with the venue.' },
  { status: 'draft', q: 'Is the venue accessible?', a: 'TBC — confirm step-free access, restrooms and seating with the venue.' },
];
