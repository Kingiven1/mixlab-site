// ──────────────────────────────────────────────────────────────────────────
// THE EVOLUTION OF DJING — public exhibit page at /evolution-of-djing
//
// One entry per framed photo on the wall, in wall order. Everything for an era
// lives in its entry: title, dates, copy, image + credit, anchor, listening.
//
// RULES THAT KEEP THE PRINTED QR CODES WORKING
// • `anchor` is printed into a QR code. Never rename it once codes are printed.
//   The QR for era 01 points to  <siteUrl>/evolution-of-djing#kingston-sound-systems
// • `title` and `dates` match the wall labels exactly.
//
// IMAGES
// • Only images with status: 'published' reach the browser (drafts are stripped
//   at build time). Keep anything pending permission as status: 'pending' —
//   the section then shows its text-led "on the wall" panel instead.
// • Put the cleared web file in /public/img/evolution/. Never put raw reference
//   files or rights notes in /public.
//
// SPOTIFY / LISTENING
// • `playlistUrl`: paste the Spotify playlist link when it exists. While null the
//   playlist button stays hidden. The page URL and QR codes never change.
// • `listening[].url`: an official recording link. While null, that pick shows
//   as text only (no button).
// ──────────────────────────────────────────────────────────────────────────

export default {
  path: '/evolution-of-djing',
  title: 'The Evolution of DJing',
  kicker: 'The Mix Lab · Photo wall exhibit',
  intro: [
    'Nine photographs, seven decades. From Kingston sound systems to amapiano on festival main stages, this is how the person behind the decks went from playing records to shaping culture.',
    'Pick an era below to explore the history, photos, and music.',
  ],
  sourcesNote: 'Dates and credits were checked against the linked sources. Where the record is unsettled, we say so.',

  eras: [
    {
      n: '01',
      anchor: 'kingston-sound-systems',
      dates: '1950s–1960s',
      title: 'Kingston Builds the Sound',
      blurb:
        'Jamaican sound-system crews turned neighborhood dances into events built around powerful speakers, rare records, and voices on the mic. Duke Reid and Coxsone Dodd helped shape the tradition that later gave artists like U-Roy a platform.',
      story: [
        'In 1950s Kingston, a sound system was a party you could move: hand-built speaker boxes, a turntable, an amplifier and crates of imported American R&B, set up in yards and dance halls for crowds who couldn’t pay for a live band. Operators competed for those crowds. Clement “Coxsone” Dodd set up his Downbeat sound system in 1954, and Arthur “Duke” Reid ran Duke Reid the Trojan. Their rivalry was fought with exclusive records, volume and the reaction of the dance. A selector chose the records; a deejay on the mic talked to the crowd and kept the energy up.',
        'When the supply of American R&B dried up, the operators started recording Jamaican artists for their own systems. Reid moved into production in 1962, and Dodd opened Studio One in 1963. Their records helped carry ska, rocksteady and reggae. In 1970 Reid’s Treasure Isle released U-Roy’s “Wake the Town,” and the voice on the mic became the record. The same sound-system culture shaped a Kingston kid named Clive Campbell, who later moved to the Bronx and became DJ Kool Herc.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — CC BY-SA 2.0, Christina Xu via Wikimedia Commons (credit + license shown)', exhibition: 'pending — © Wayne Tippetts, Smithsonian says permission required (NMAAHC 2015.132.420.1-.2, dated 1986)' },
        status: 'published',
        src: '/img/evolution/01-coxsone-dodd-corner-kingston-2007-800.webp',
        width: 800,
        height: 532,
        alt: 'A Kingston street corner in 2007: a weathered yellow wooden building with a hand-painted “Speaker Repairs” sign, a tree and a quiet road beside it.',
        credit: 'Kingston street corner identified by the photographer as where Coxsone Dodd started his sound-system career. Photo by Christina Xu, 2007. CC BY-SA 2.0.',
        laterNote: 'Photographed in 2007, decades after this era.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Corner_Coxsone_Dodd_Kingston_Jamaica.jpg',
        // The framed print on the wall is a different photo.
        wall: {
          credit: 'Tenor Saw with engineer Tulluice at the Youthman Promotion sound system, Kingston, 1986. Photo by Wayne Tippetts.',
          note: 'The wall shows a different photo: Wayne Tippetts’s 1986 diptych of singer and deejay Tenor Saw on the mic, a later example of the sound-system tradition. The Smithsonian holds a print. It is not shown here because web permission has not been granted.',
          sourceUrl: 'https://www.si.edu/object/photographic-print-tenor-saw:nmaahc_2015.132.420.1-.2',
        },
      },
      listening: [
        { artist: 'U-Roy', title: 'Wake the Town', year: '1970', kind: 'track', url: 'https://open.spotify.com/track/3pJGjcPPSq8iJWCmsh32EU', why: 'Recorded just after this era (1970): a Duke Reid production that put sound-system toasting on record.' },
        { artist: 'Sister Nancy', title: 'Bam Bam', year: '1982', tag: 'Later example', kind: 'track', url: 'https://open.spotify.com/track/1XYU656BgbRoRrVWVn7bBF', why: 'A 1982 dancehall classic, produced by Winston Riley, that carries the deejay-on-the-mic tradition the early sound systems started.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'National Library of Jamaica: Duke Reid', url: 'https://nlj.gov.jm/REGGAE%20EXHIBITION/Duke%20Reid.htm' },
        { label: 'Coxsone Dodd: Downbeat (1954) and Studio One (1963)', url: 'https://en.wikipedia.org/wiki/Coxsone_Dodd' },
        { label: 'GRAMMY.com: DJ Kool Herc and Cindy Campbell on their Jamaican roots', url: 'https://www.grammy.com/news/dj-kool-herc-cindy-campbell-50th-anniversary-of-hip-hop-interview-jamaican-roots' },
      ],
    },

    {
      n: '02',
      anchor: 'bronx-breakbeats',
      dates: '1973',
      title: 'The Bronx Extends the Break',
      blurb:
        'At Cindy Campbell’s August 1973 back-to-school party, DJ Kool Herc extended the drum breaks that dancers waited for. The party took place in the rec room at 1520 Sedgwick Avenue in the Bronx.',
      story: [
        'Cindy Campbell needed money for back-to-school clothes. She rented the recreation room of her family’s building at 1520 Sedgwick Avenue for $25, hand-wrote the invitations, set the admission and asked her brother Clive, DJ Kool Herc, to play. Herc had noticed that dancers saved their best moves for the break, the short stretch where the band drops out and the drums carry the song. With two copies of the same record on two turntables, he switched between them to keep the break going. He called it the “merry-go-round.”',
        'That party is now marked as August 11, 1973, and the date anchors Hip Hop Celebration Day. Be clear on what the record holds: no recordings, film or surviving flyers document the night, the date was popularized in the 1990s, and other Bronx DJs were working at the same time. Historians still argue over whether one party can be called the birth of hip-hop. What is not in dispute is that Herc’s break-focused parties set the template for what came next.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — public domain (Wikimedia Commons, Bigtimepeace 2009)', exhibition: 'cleared — public domain' },
        status: 'published',
        src: '/img/evolution/02-1520-sedgwick-avenue-640.webp',
        srcLarge: '/img/evolution/02-1520-sedgwick-avenue-960.webp',
        width: 640,
        height: 853,
        alt: 'A tall tan-brick apartment building at 1520 Sedgwick Avenue in the Bronx, with rows of balconies and a leafy tree in front, photographed on a sunny day. A Puerto Rican flag hangs from one balcony.',
        credit: '1520 Sedgwick Avenue, photographed in 2009 by Bigtimepeace. Public domain.',
        laterNote: 'Photographed in 2009, 36 years after the party.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:1520_Sedwick_Ave.,_Bronx,_New_York1.JPG',
      },
      listening: [
        { artist: 'Incredible Bongo Band', title: 'Apache', year: '1973', kind: 'track', url: 'https://open.spotify.com/track/3Ftk94LnFgS7px3bZpu81p', why: 'Its long percussion break became an early Bronx party staple, and Grandmaster Flash later cut it into “Wheels of Steel.”' },
        { artist: 'The Sugarhill Gang', title: 'Rapper’s Delight', year: '1979', tag: 'Later crossover', kind: 'track', url: 'https://open.spotify.com/track/7sZDbHZiuHEzS00vzCuhqS', why: 'Six years after Sedgwick Avenue, the first rap record to become a commercial hit took the party sound to radio.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'GRAMMY.com: Kool Herc and Cindy Campbell on the 1973 party', url: 'https://www.grammy.com/news/dj-kool-herc-cindy-campbell-50th-anniversary-of-hip-hop-interview-jamaican-roots' },
        { label: 'Rolling Stone: the history (and mystery) of hip-hop’s first day', url: 'https://www.rollingstone.com/music/music-features/kool-herc-hip-hop-50-august-11-1973-1234802035/' },
      ],
    },

    {
      n: '03',
      anchor: 'turntablism',
      dates: '1970s–early 1980s',
      title: 'The Turntable Becomes an Instrument',
      blurb:
        'Grandmaster Flash developed Quick Mix Theory, cutting between copies of a record to extend the break. Grand Wizzard Theodore is widely credited with inventing the scratch, using the movement of the record itself to make rhythm.',
      story: [
        'Grandmaster Flash, born Joseph Saddler, studied electronics by day and took apart DJ gear at night. In the 1970s he worked out what he called the Quick Mix Theory: cutting precisely between two copies of a record so a break could repeat on the beat, without the rough switches of earlier parties. In 1981 he recorded “The Adventures of Grandmaster Flash on the Wheels of Steel” for Sugar Hill, cut live on three turntables from records including Chic, Blondie, Queen and “Apache.”',
        'Grand Wizzard Theodore, a teenager in Flash’s circle, is widely credited with inventing the scratch. In his telling, he was practicing at home when his mother came to the door; he held the record and moved it back and forth, and liked the sound. Accounts date that moment to 1975 or 1977. He is also credited with the needle drop. The turntables of his in the Smithsonian’s collection are later Vestax models, not the decks he used in the 1970s.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — Smithsonian CC0, clean object photo (nmaahc_2015.142a-g)', exhibition: 'cleared — CC0; revised photo PDF page 3 uses the clean 3600px Smithsonian file' },
        status: 'published',
        src: '/img/evolution/03-theodore-turntables-smithsonian-640.webp',
        width: 640,
        height: 469,
        alt: 'A pair of silver Vestax turntables with black slipmats, photographed under a spotlight on a wooden surface.',
        credit: 'Turntables used by Grand Wizzard Theodore (Vestax PDX-2000), later-career decks from the 2000s. Smithsonian National Museum of African American History and Culture. CC0.',
        laterNote: 'Later-career decks from the 2000s, not the turntables he used in the 1970s.',
        sourceUrl: 'https://www.si.edu/object/turntable-used-grand-wizzard-theodore:nmaahc_2015.142a-g',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/03-theodore-turntables.webp',
      },
      listening: [
        { artist: 'Herbie Hancock', title: 'Rockit', year: '1983', tag: 'Start here', kind: 'track', url: 'https://open.spotify.com/track/1S53FE6U2VtmHlvH5ceq4d', why: 'The scratching on this hit is GrandMixer D.ST on the turntables; for many listeners it was the first scratch they ever heard, and it won a GRAMMY in 1984.' },
        { artist: 'Grandmaster Flash & The Furious Five', title: 'The Adventures of Grandmaster Flash on the Wheels of Steel', year: '1981', kind: 'track', url: 'https://open.spotify.com/track/337kiE05lPhwEsia5JiLsq', why: 'Quick Mix Theory on record: a DJ performance cut live on three turntables.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'NPR Fresh Air: Grandmaster Flash and the Quick Mix Theory', url: 'https://www.npr.org/2002/12/26/889654/dj-and-hip-hop-forefather-grandmaster-flash' },
        { label: 'Smithsonian Year of Music: Grand Wizzard Theodore’s turntables', url: 'https://music.si.edu/node/1314' },
        { label: '“Wheels of Steel” (1981): how it was made', url: 'https://en.wikipedia.org/wiki/The_Adventures_of_Grandmaster_Flash_on_the_Wheels_of_Steel' },
      ],
    },

    {
      n: '04',
      anchor: 'chicago-house-detroit-techno',
      dates: '1980s',
      title: 'Chicago House / Detroit Techno',
      blurb:
        'Frankie Knuckles and Ron Hardy helped shape Chicago house on club dance floors. Juan Atkins, Derrick May, and Kevin Saunderson helped define Detroit techno, drawing on synthesizers, drum machines, and a different local scene.',
      story: [
        'Chicago’s Warehouse opened in 1977, and by 1980 Frankie Knuckles was its resident, building long nights out of disco, soul and electronic records. “House” took its name from the club. When Knuckles left in late 1982 to open the Power Plant, the Warehouse became the Music Box, with Ron Hardy as resident. Jamie Principle’s “Your Love” shows how the scene worked: Knuckles reworked it and played it from tape at the Power Plant for more than a year before it came out, on Persona in 1986 under Principle’s name and on Trax in 1987 credited to Knuckles.',
        'Detroit took a different route. Juan Atkins, Derrick May and Kevin Saunderson, high-school friends known as the Belleville Three, made tracks in their basements out of Kraftwerk, Parliament and Prince. Atkins’s group Cybotron released “Alleys of Your Mind” in 1981, and his Metroplex label followed in 1985. May’s “Strings of Life,” released on Transmat in 1987 as Rhythim Is Rhythim, was built from a piano sequence by Michael James. A 1988 UK compilation, Techno! The New Dance Sound of Detroit, gave the sound its name.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — CC BY 2.0, deepstereo via Wikimedia Commons', exhibition: 'pending — Detroit Historical Society' },
        status: 'published',
        src: '/img/evolution/04-frankie-knuckles-2012-800.webp',
        width: 800,
        height: 533,
        alt: 'Frankie Knuckles behind a bank of DJ mixers and CDJs, wearing a black T-shirt, with people gathered around the booth in a dim club.',
        credit: 'Frankie Knuckles DJing at the Sugar Factory, Amsterdam Dance Event, October 2012. Photo by deepstereo. CC BY 2.0.',
        laterNote: 'A later photo, from 2012.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Frankie_Knuckles_@_ADE_2012.jpg',
        // The framed print on the wall is a different photo.
        wall: {
          credit: 'Detroit techno pioneers in conversation. Archival still courtesy Detroit Historical Society.',
          note: 'The wall shows a different image: interview stills of the Detroit techno pioneers from a Detroit Historical Society look back at the 2002 Detroit Electronic Music Festival. Web permission has not been granted, so the site shows Frankie Knuckles instead.',
          sourceUrl: 'https://www.detroithistorical.org/learn/online-research/blog/flashback-2002-detroit-electronic-music-festival',
        },
      },
      listening: [
        { artist: 'Mr. Fingers', title: 'Can You Feel It', year: '1986', tag: 'Start here', kind: 'track', url: 'https://open.spotify.com/track/5479eh8cRkMdukYI3gtO36', why: 'Larry Heard’s Chicago house landmark: deep, warm and built on a drum machine and synth.' },
        { artist: 'Frankie Knuckles feat. Jamie Principle', title: 'Your Love', year: '1986–87', kind: 'track', url: 'https://open.spotify.com/track/6tvtFyEdNpeurBkT2zNMEL', why: 'Written by Jamie Principle and broken on Knuckles’s dance floor before it was ever pressed.' },
        { artist: 'Rhythim Is Rhythim', title: 'Strings of Life', year: '1987', kind: 'track', url: 'https://open.spotify.com/track/7sMA8Psr0iDjicbrGXgDuR', why: 'Detroit techno’s best-known early record, released on Transmat.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'GRAMMY.com: house music timeline', url: 'https://grammy.com/news/house-music-timeline-important-artists-songs-moments' },
        { label: '“Your Love”: Persona (1986) and Trax (1987) releases', url: 'https://en.wikipedia.org/wiki/Your_Love_(Jamie_Principle_song)' },
        { label: 'Detroit techno and the Belleville Three', url: 'https://en.wikipedia.org/wiki/Detroit_techno' },
      ],
    },

    {
      n: '05',
      anchor: 'dj-in-the-spotlight',
      dates: 'Late 1980s–early 1990s',
      title: 'The DJ Steps Into the Spotlight',
      blurb:
        'Kool DJ Red Alert championed new rap on New York radio. DJ Jazzy Jeff took battle technique to a broader audience, and DJ Spinderella brought the DJ into the spotlight with Salt-N-Pepa.',
      story: [
        'Kool DJ Red Alert joined New York’s WRKS 98.7 Kiss FM in October 1983 and stayed more than 11 years. His mix shows broke records such as Boogie Down Productions’ “South Bronx” and helped launch Queen Latifah and Black Sheep. On the radio, the DJ became the city’s tastemaker.',
        'In Philadelphia, DJ Jazzy Jeff won the 1986 New Music Seminar battle, and his robotic “transformer” scratch reached a pop audience through his records with The Fresh Prince, from He’s the DJ, I’m the Rapper to “Summertime” in 1991. Deidra “Dee Dee” Roper became Salt-N-Pepa’s DJ Spinderella in 1987, taking over from Latoya Hanson, and put a woman DJ on stage and on screen with one of rap’s biggest groups. “Push It,” from their 1986 debut, became their breakthrough.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — CC BY 2.0, Neil Rickards via Wikimedia Commons', exhibition: 'pending — © Al Pereira (Smithsonian: permission required). Same image as NMAAHC 2015.132.310, confirmed by visual match' },
        status: 'published',
        src: '/img/evolution/05-dj-jazzy-jeff-2005-800.webp',
        width: 800,
        height: 518,
        alt: 'DJ Jazzy Jeff at the turntables with a laptop, in front of a graffiti backdrop reading “Hip Hop, R&B,” with speakers on stands.',
        credit: 'DJ Jazzy Jeff in Cambridge, England, May 25, 2005. Photo by Neil Rickards. CC BY 2.0.',
        laterNote: 'A later photo, from 2005.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:DJ_Jazzy_Jeff.jpg',
        // The framed print on the wall is a different photo.
        wall: {
          credit: 'Salt-N-Pepa with DJ Spinderella at Bayside Studios. Photo by Al Pereira.',
          note: 'The wall shows a different photo: Al Pereira’s February 6, 1989 picture of Salt-N-Pepa and DJ Spinderella recording at Bayside Studios in Queens, held by the Smithsonian. It is not shown here because web permission has not been granted.',
          sourceUrl: 'https://www.si.edu/object/nmaahc_2015.132.310',
        },
      },
      listening: [
        { artist: 'Salt-N-Pepa', title: 'Shoop', year: '1993', tag: 'Start here', kind: 'track', url: 'https://open.spotify.com/track/1ede8VC8M6Po6njXkybEq5', why: 'The group’s 1993 hit with DJ Spinderella on the lineup; the playable Salt-N-Pepa pick while “Push It” is unavailable on Spotify in the U.S.' },
        { artist: 'DJ Jazzy Jeff & The Fresh Prince', title: 'Summertime', year: '1991', kind: 'track', url: 'https://open.spotify.com/track/0Ah7XjkHDO5aOzfxNqd31S', why: 'The DJ-and-rapper duo at full pop reach.' },
        { artist: 'Salt-N-Pepa', title: 'Push It', year: '1986', kind: 'track', url: null, heldUrl: 'https://open.spotify.com/track/6qhQuDuiv6U3bEe4i9fwS1', heldReason: 'Spotify shows every version of Push It as unavailable in the U.S. (checked Nov 15, 2026).', why: 'The group’s breakthrough, from the album era when Spinderella joined.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'Kool DJ Red Alert at Kiss FM', url: 'https://en.wikipedia.org/wiki/Kool_DJ_Red_Alert' },
        { label: 'GRAMMY.com: DJ Jazzy Jeff & The Fresh Prince', url: 'https://www.grammy.com/news/dj-jazzy-jeff-the-fresh-prince-legacy-grammy-salute-50-years-hip-hop-reunion' },
        { label: 'Britannica: Salt-N-Pepa', url: 'https://www.britannica.com/topic/Salt-N-Pepa' },
      ],
    },

    {
      n: '06',
      anchor: 'global-club-culture',
      dates: '1990s',
      title: 'The Club Goes Global',
      blurb:
        'Carl Cox came up through British rave culture. DJ Paulette held a residency at Manchester’s queer Flesh night, while DJ Minx founded Women on Wax in Detroit to build community among women DJs.',
      story: [
        'Carl Cox went from playing to around 200 people at London’s Shoom to headlining raves of about 20,000 by 1990. Promoters billed him as “The People’s Choice,” and mixing across a third turntable earned him the name “Three-Deck Wizard.” His 1995 mix album F.A.C.T. carried that UK rave energy into the global club circuit.',
        'In Manchester, Flesh became the Haçienda’s first gay night: a monthly party for the city’s queer community, founded by Paul Cons and Lucy Scher, that ran through the 1990s. DJ Paulette was a resident downstairs for about four and a half years. In Detroit, DJ Minx founded Women on Wax in 1996 as a platform for women DJs in the city, and added a record label in 2001.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — CC BY 2.0, Sergey Kozak via Wikimedia Commons', exhibition: 'pending — confirm exhibition rights with MDMA / Paul Jones' },
        status: 'published',
        src: '/img/evolution/06-carl-cox-2012-800.webp',
        width: 800,
        height: 533,
        alt: 'Carl Cox smiling in sunglasses and a dark jacket, outdoors in a crowd during Amsterdam Dance Event.',
        credit: 'Carl Cox at Amsterdam Dance Event, October 2012. Photo by Sergey Kozak. CC BY 2.0.',
        laterNote: 'A later photo, from 2012.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Carl_Cox_@_ADE_2012.jpg',
        // The framed print on the wall is a different photo.
        wall: {
          credit: 'Flesh at the Haçienda, September 1992. Photo by Paul Jones, via Manchester Digital Music Archive.',
          note: 'The wall shows a different image: a September 1992 press spread from Flesh at the Haçienda, with DJ Paulette in frame 10. Web permission has not been granted, so the site shows Carl Cox instead.',
          sourceUrl: 'https://www.mdmarchive.co.uk/artefact/16471/Kath-McDermott-Tim-Lennox-DJ-Paulette-Coco--Angel-The-Hacienda-Press-1992',
        },
      },
      listening: [
        { artist: 'Robin S', title: 'Show Me Love', year: '1993', tag: 'Start here', kind: 'track', url: 'https://open.spotify.com/track/0WDEYfIBmPRVvKH3xrEK19', why: 'First released in 1990, the StoneBridge remix became a worldwide club hit in 1993 and is still a dance-floor staple.' },
        { artist: 'Carl Cox', title: 'F.A.C.T.', year: '1995', kind: 'album', url: null, heldUrl: 'https://open.spotify.com/album/5xRLo321YU8tAN9QaMdWEU', heldReason: 'The Spotify compilation page loads, but none of its 27 tracks play in the U.S. (checked Nov 15, 2026).', why: 'A mid-’90s Carl Cox mix from the rave-to-global-club years.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'DJ Mag: how Carl Cox became the “Three-Deck Wizard”', url: 'https://djmag.com/longreads/how-carl-cox-became-known-three-deck-wizard' },
        { label: 'Mixcloud: DJ Paulette on Flesh', url: 'https://www.mixcloud.com/blog/2024/02/15/dj-paulette-on-flesh' },
        { label: 'DJ Minx and Women on Wax', url: 'https://en.wikipedia.org/wiki/DJ_Minx' },
      ],
    },

    {
      n: '07',
      anchor: 'radio-and-mixtapes',
      dates: 'Mid-1990s–2000s',
      title: 'Radio & Mixtapes',
      blurb:
        'Funkmaster Flex and DJ Clue used radio and mixtapes to break records. DJ Drama brought Southern rap to wider audiences through Gangsta Grillz, and DJ Khaled became known for bringing artists together on collaborative singles.',
      story: [
        'Funkmaster Flex has been on New York’s Hot 97 since the station launched in 1992, and the station leaned into hip-hop as he and others broke records on air. DJ Clue built his name on mixtapes packed with exclusives, and his Hot 97 connection put unreleased verses in his hands. His 1998 album The Professional, on Roc-A-Fella, took the mixtape format to a major label.',
        'In Atlanta, DJ Drama made Gangsta Grillz a rite of passage, helping T.I., Young Jeezy and others reach far beyond the South; Lil Wayne’s Dedication 2 (2006) became one of the era’s most celebrated tapes. In January 2007 police raided Drama’s studio and seized about 81,000 mixtapes, a reminder that the format lived in a legal gray zone. That same year, DJ Khaled’s “We Takin’ Over” put Akon, T.I., Rick Ross, Fat Joe, Birdman and Lil Wayne on one record, with the DJ as the one who brought them together.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — CC BY 2.0, Dom Brady via Wikimedia Commons (taken during the era)', exhibition: 'pending — Patrick Neree' },
        status: 'published',
        src: '/img/evolution/07-dj-drama-2008-800.webp',
        width: 800,
        height: 600,
        alt: 'Close-up portrait of DJ Drama in a black and red baseball cap, looking into the camera.',
        credit: 'DJ Drama, April 25, 2008. Photo by Dom Brady. CC BY 2.0.',
        laterNote: null,
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:DJ_Drama.jpg',
        // The framed print on the wall is a different photo.
        wall: {
          credit: 'DJ Clue and Funkmaster Flex at the 2014 Flavor Battle. Photo by Patrick Neree.',
          note: 'The wall shows a different photo: DJ Clue and Funkmaster Flex at the 2014 Flavor Battle, a later image of two DJs who helped define this era. Web permission has not been granted, so the site shows DJ Drama in 2008.',
          sourceUrl: 'https://www.vice.com/en/article/funkmaster-flex-dj-clue-hot97-power105-dj-battle-rivalry/',
        },
      },
      listening: [
        { artist: 'DJ Clue', title: 'The Professional', year: '1998', kind: 'album', url: 'https://open.spotify.com/album/7CcAkgGMwqQ0x9F9D4RwwL', why: 'The street mixtape, released as a major-label album.' },
        { artist: 'Lil Wayne & DJ Drama', title: 'Dedication 2', year: '2006', kind: 'album', url: null, heldReason: 'No authorized full release confirmed; the Spotify listings found play only 1 of 25 tracks.', why: 'A Gangsta Grillz tape that became one of the most celebrated of its era.' },
        { artist: 'DJ Khaled', title: 'We Takin’ Over', year: '2007', kind: 'track', url: 'https://open.spotify.com/track/6BJodnFEjmRr0jzneHcWXO', why: 'The DJ as convener: a single built around a lineup of guest rappers and singers.' },
        { artist: 'DJ Khaled', title: 'All I Do Is Win', year: '2010', tag: '2010 follow-on', kind: 'track', url: 'https://open.spotify.com/track/12PNcnMsjsZ3eHm62t8hiy', why: 'Khaled’s collaborative-single format at full scale, with T-Pain, Ludacris, Snoop Dogg and Rick Ross.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'XXL: DJ Clue’s The Professional (1998)', url: 'https://www.xxlmag.com/dj-clue-drops-the-professional-album-today-in-hip-hop/' },
        { label: 'Red Bull Music Academy: how DJ Drama became the king of mixtapes', url: 'https://daily.redbullmusicacademy.com/2016/08/dj-drama-mixtape-feature' },
        { label: 'DJ Khaled’s We the Best and “We Takin’ Over” (2007)', url: 'https://en.wikipedia.org/wiki/We_the_Best' },
      ],
    },

    {
      n: '08',
      anchor: 'open-format-internet-radio',
      dates: '2000s–2010s',
      title: 'Open Format & Internet Radio',
      blurb:
        'DJ AM made genre jumps part of the show, moving between hip-hop, rock, pop, and dance music. Joe Kay co-founded Soulection in 2011, growing a radio show into a label and a community built around discovery.',
      story: [
        'Adam Goldstein, DJ AM, made switching genres the point. In Los Angeles and Las Vegas his sets could run from Run-DMC to Guns N’ Roses to Nirvana, stitched together with mashups. “Playing one format of music for four hours gets old!” he told LA Weekly in 2006. Open-format DJing, now the standard for many party DJs, owes a lot to that approach. He died in 2009.',
        'Joe Kay started a podcast in 2007 and in 2011 co-founded Soulection with Andre Power and Guillaume “96” Bonte. Soulection Radio first aired on January 24, 2011, on KBeach, the student station at Cal State Long Beach, and moved to Apple’s Beats 1 in 2015. The show grew into a label, tours and a global community built around finding new music before everyone else.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — CC BY 3.0, Skyler Greene via Wikimedia Commons (taken during the era)', exhibition: 'pending — Daniel Ramos' },
        status: 'published',
        src: '/img/evolution/08-dj-am-2009-800.webp',
        width: 800,
        height: 1092,
        alt: 'DJ AM standing backstage in front of metal staging, wearing a dark jacket over a graphic T-shirt.',
        credit: 'DJ AM (Adam Goldstein), June 6, 2009. Photo by Skyler Greene. CC BY 3.0.',
        laterNote: null,
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:AdamGoldsteinJun09.jpg',
        // The framed print on the wall is a different photo.
        wall: {
          credit: 'Joe Kay. Photo by Daniel Ramos (@spiribolt).',
          note: 'The wall shows a different photo: a later portrait of Soulection’s Joe Kay by Daniel Ramos. Web permission has not been granted, so the site shows DJ AM in 2009.',
          sourceUrl: 'https://www.miaminewtimes.com/music/joe-kay-celebrates-15-years-of-soulection-at-miamis-club-space-40517731/',
        },
      },
      listening: [
        { artist: 'DJ AM', title: 'An archival DJ AM set', year: '2000s', kind: 'set', url: null, heldReason: 'No authorized archival recording confirmed yet.', why: 'Hear the genre-switching for yourself once an authorized recording is confirmed.' },
        { artist: 'Soulection', title: 'Soulection Radio', year: '2011–', kind: 'radio', linkLabel: 'Explore Soulection Radio', url: 'https://radio.soulection.com/', why: 'The show that grew from a college radio slot into a label and community.' },
        { artist: 'Joe Kay, Cruza & Isaiah Falls', title: 'Slow It Down', year: '2025', tag: 'Later example', kind: 'track', url: 'https://open.spotify.com/track/3vhAZ2Qzdt2NPQ45ALdRC9', why: 'A recent release that shows the Soulection sound Joe Kay built on air.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'LA Weekly (2006): DJ AM', url: 'https://www.laweekly.com/rawk-your-body/' },
        { label: 'Soulection: founding and radio history', url: 'https://en.wikipedia.org/wiki/Soulection' },
        { label: 'Soulection official site', url: 'https://www.soulection.com/' },
      ],
    },

    {
      n: '09',
      anchor: 'south-african-sounds',
      dates: '2020s',
      title: 'South African Sounds Go Global',
      blurb:
        'Black Coffee brought his take on South African house to audiences worldwide. Uncle Waffles, from Eswatini, helped carry South African amapiano to new audiences through her sets and releases.',
      story: [
        'Black Coffee, born Nkosinathi Maphumulo, took his South African house sound to residencies at Hï Ibiza and the Wynn in Las Vegas. His album Subconsciously, released in February 2021, won Best Dance/Electronic Album at the 64th GRAMMY Awards in 2022.',
        'Uncle Waffles was born and raised in Eswatini and is based in South Africa. In October 2021 she filled in for another DJ at Zone 6 in Soweto, and a clip of her set spread around the world. Her debut single “Tanzania,” with Tony Duardo, Sino Msolo and BoiBizza, followed in March 2022. In April 2023 she became the first amapiano artist to perform at Coachella.',
      ],
      image: {
        // Internal rights tracking — stripped from every build.
        rights: { web: 'cleared — CC0, DeepBluuue via Wikimedia Commons', exhibition: 'pending — divisuals' },
        status: 'published',
        src: '/img/evolution/09-black-coffee-2018-720.webp',
        width: 720,
        height: 946,
        alt: 'Black Coffee in a white T-shirt with one arm raised behind the decks at Hï Ibiza, under blue and white club lights.',
        credit: 'Black Coffee at Hï Ibiza, June 2018. Photo by DeepBluuue. CC0 (public domain).',
        laterNote: 'Taken in 2018, just before this era.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Black_Coffee_perfoming_at_H%C3%AF_Ibiza_in_June_2018.jpg',
        // The framed print on the wall is a different photo.
        wall: {
          credit: 'Uncle Waffles at Do LaB, Coachella 2023. Photo by divisuals.',
          note: 'The wall shows a different photo: Uncle Waffles at Do LaB during Coachella 2023. Web permission has not been granted, so the site shows Black Coffee instead.',
          sourceUrl: 'https://floodmagazine.com/131434/live-in-photos-do-lab-at-coachella-2023-ft-odesza-james-blake-and-more/',
        },
      },
      listening: [
        { artist: 'Uncle Waffles, Tony Duardo & Justin99', title: 'Yahyuppiyah', year: '2023', tag: 'Start here', kind: 'track', url: 'https://open.spotify.com/track/2qp7rTcFVz67fz88JSnbkU', why: 'An amapiano anthem from 2023, the year she brought the sound to Coachella.' },
        { artist: 'Black Coffee', title: 'Subconsciously', year: '2021', kind: 'album', url: 'https://open.spotify.com/album/50jhbcGdbYE0u2LVph6j3x', why: 'The GRAMMY-winning album.' },
        { artist: 'Uncle Waffles & Tony Duardo feat. Sino Msolo & BoiBizza', title: 'Tanzania', year: '2022', kind: 'track', url: 'https://open.spotify.com/track/4qm0rzVQA3kqQ0yA7LkuFK', why: 'The debut single that followed her viral Soweto set.' },
      ],
      playlistUrl: null,
      sources: [
        { label: 'Subconsciously and the 64th GRAMMY Awards', url: 'https://en.wikipedia.org/wiki/Subconsciously' },
        { label: 'Resident Advisor: Black Coffee biography', url: 'https://ra.co/dj/blackcoffee/biography' },
        { label: 'Uncle Waffles: Soweto, “Tanzania” and Coachella', url: 'https://en.wikipedia.org/wiki/Uncle_Waffles' },
      ],
    },
  ],
};
