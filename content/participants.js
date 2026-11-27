// ──────────────────────────────────────────────────────────────────────────
// WHO'S WHERE — groups the people in content/talent.js by role.
// Names must match talent.js exactly. People still marked 'draft' there are
// skipped automatically. No times or running order here on purpose.
// `line` overrides the small role line for that person in that section only.
// ──────────────────────────────────────────────────────────────────────────

export default {
  performances: {
    title: 'Performances',
    intro: 'DJ sets from the current lineup.',
    people: [
      { name: 'Francesca Eva Fontenot' },
      { name: 'Farrah Flosscett' },
      { name: 'DJ Fly Guy' },
      { name: 'Ryan Rose' },
    ],
  },

  conversations: {
    title: 'Panels & Conversations',
    groups: [
      {
        title: 'AI & Creative Technology',
        blurb: 'How AI and new tools are changing music, DJing and creative business, and how to use them without losing your originality.',
        people: [{ name: 'Chudy Ejiofor' }, { name: 'Justin “CoolBlaze” Elliott' }, { name: 'Rachel Johnson Rheams' }],
      },
      {
        title: 'Mental Health & Creative Wellbeing',
        blurb: 'An honest look at the person behind the performance, and the habits that keep a creative career healthy and sustainable.',
        people: [
          { name: 'Akos Antwi' },
          { name: 'DJ Fly Guy' },
          { name: 'DJ Millz' },
          { name: 'Francesca Eva Fontenot' },
          { name: 'Diagét Miller', moderator: true },
        ],
      },
      {
        title: 'Community, Culture & Business Growth',
        blurb: 'Building a business around your craft, and events that create belonging, lift up local talent and give back to the culture.',
        people: [
          { name: 'King Iven' },
          { name: 'Ryan Rose', line: 'Founder, How A Sunset Sounds' },
          { name: 'Shameka Johnson', moderator: true },
        ],
      },
      {
        title: 'Social Equity Conversation',
        blurb: 'A conversation on access, opportunity and building wealth in creative communities, hosted by NFNTE Capital.',
        people: [{ name: 'Harold Hughes' }],
      },
    ],
  },

  workshops: {
    title: 'Behind the Decks',
    subtitle: 'DJ Workshop Sessions',
    intro: 'Small, hands-on sessions with working DJs. Eight seats per workshop. Approval required.',
    people: [
      { name: 'DJ Myle' },
      { name: 'DJ KB' },
      { name: 'Domo' },
      { name: 'Sean Falyon' },
      { name: 'Blink Da Link' },
    ],
  },
};
