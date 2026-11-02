// ──────────────────────────────────────────────────────────────────────────
// PUBLIC SCHEDULE — feeds the homepage preview AND the /guide page.
// This is the guest-facing schedule, not the production run of show.
//
// mode: 'provisional' shows a clear "Provisional — subject to final
//        scheduling" label on every page. Switch to 'confirmed' once final.
// Blocks or sessions with status 'draft' stay private.
// `talent` uses names exactly as written in talent.js.
// `partnerCategory` puts that category's Community Partner logos on the session
// in the guide (Featured big, Standard smaller). Leave it off for no logos.
// ──────────────────────────────────────────────────────────────────────────

export default {
  mode: 'provisional',
  note: 'Proposed flow. Individual sessions and set times are still being finalized.',
  blocks: [
    {
      status: 'published',
      time: '12–5 PM',
      title: 'Workshops, Art & Talks',
      area: null, // e.g. 'Main room' once the floor plan is set
      summary: 'Complimentary beginner DJ workshops, gear demos, art, fireside chats, DJ sets and light bites.',
      sessions: [
        { status: 'published', title: 'Intro to DJ workshops', detail: 'Hands-on and beginner-friendly. No previous DJ experience required.', area: null, time: null, talent: [] },
        { status: 'published', title: 'Art activation', detail: 'A live art activation from A Fly Guy.', area: null, time: null, talent: ['A Fly Guy'] },
        { status: 'published', title: 'Fireside chat: Mental Health & Creative Wellbeing', detail: 'An honest conversation about sustaining a creative life.', area: null, time: null, talent: [], partnerCategory: 'health_wellness' },
        { status: 'published', title: 'Fireside chat: AI & Creative Technology', detail: 'New tools and where creativity goes next.', area: null, time: null, talent: [], partnerCategory: 'ai_tech_creative' },
        { status: 'published', title: 'Fireside chat: Finance & Business Growth', detail: 'Building a business around your craft.', area: null, time: null, talent: [], partnerCategory: 'business_financial' },
      ],
    },
    {
      status: 'published',
      time: '5–8 PM',
      title: 'Social Hour with NFNTE Capital',
      area: null,
      summary: 'A social equity conversation, networking, light bites, drinks and a DJ set.',
      sessions: [
        { status: 'published', title: 'Social equity conversation', detail: 'Hosted by NFNTE Capital.', area: null, time: null, talent: [], partnerCategory: 'community_social' },
      ],
    },
    {
      status: 'published',
      time: '8–11 PM',
      title: 'The Night Session',
      area: null,
      summary: 'Three featured DJ sets, dancing and cocktails.',
      sessions: [],
    },
  ],
};
