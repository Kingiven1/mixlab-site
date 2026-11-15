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
    'Scanned a code at the wall? You landed on that photo’s era. Scroll on for the full timeline, or jump straight to any era below. No account needed, and you can share the whole thing.',
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/01-tenor-saw.webp',
        width: 800,
        height: 597,
        alt: 'Two black-and-white frames from a sound-system dance: young men crowd around a turntable while a selector handles a record and another man speaks into a microphone.',
        wallCredit: 'Tenor Saw. Photo by Wayne Tippetts.',
        wallNote: 'The photo on the wall shows singer and deejay Tenor Saw on the mic at the Youthman Promotion sound system in Kingston in 1986, decades after this era. It shows the culture the early systems built.',
        sourceUrl: 'https://waynetippetts.com/content/the-late-singer-and-deejay-tenor-saw-died-in1988-on-the-mic-youthman-promotion-sound-system-kingston-jamaica-1987/lightbox/',
      },
      listening: [
        { artist: 'U-Roy', title: 'Wake the Town', year: '1970', url: 'https://music.apple.com/us/song/wake-the-town/196064169', why: 'A 1970 follow-on to this era: a Duke Reid production that put sound-system toasting on record.' },
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
        { artist: 'Incredible Bongo Band', title: 'Apache', year: '1973', url: 'https://music.apple.com/us/song/apache/1304461375', why: 'Its long percussion break became an early Bronx party staple, and Grandmaster Flash later cut it into “Wheels of Steel.”' },
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/03-theodore-turntables.webp',
        width: 800,
        height: 450,
        alt: 'Two silver turntables on a wooden surface in a Smithsonian Anthology of Hip-Hop and Rap image labeled “Turntable used by Grand Wizzard Theodore.”',
        wallCredit: 'Later-career turntables used by Grand Wizzard Theodore. Smithsonian National Museum of African American History and Culture, Gift of Grand Wizzard Theodore.',
        wallNote: 'The photo on the wall shows Theodore’s later-career turntables.',
        sourceUrl: 'https://music.si.edu/node/1314',
      },
      listening: [
        { artist: 'Grandmaster Flash', title: 'The Adventures of Grandmaster Flash on the Wheels of Steel', year: '1981', url: 'https://music.apple.com/us/song/the-adventures-of-grandmaster-flash-on-the-wheels-of-steel/59389715', why: 'Quick Mix Theory on record: a DJ performance cut live on three turntables.' },
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/04-detroit-techno.webp',
        width: 800,
        height: 671,
        alt: 'Four video stills of men talking during an interview, from the Detroit Historical Society archive.',
        wallCredit: 'Detroit techno pioneers in conversation. Archival still courtesy Detroit Historical Society.',
        wallNote: 'The still on the wall comes from a Detroit Historical Society look back at the 2002 Detroit Electronic Music Festival, a later image of the pioneers.',
        sourceUrl: 'https://www.detroithistorical.org/learn/online-research/blog/flashback-2002-detroit-electronic-music-festival',
      },
      listening: [
        { artist: 'Frankie Knuckles feat. Jamie Principle', title: 'Your Love', year: '1986–87', url: null, why: 'Written by Jamie Principle and broken on Knuckles’s dance floor before it was ever pressed.' },
        { artist: 'Rhythim Is Rhythim', title: 'Strings of Life', year: '1987', url: 'https://music.apple.com/us/song/strings-of-life/1831059987', why: 'Detroit techno’s best-known early record, released on Transmat.' },
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/05-salt-n-pepa.webp',
        width: 800,
        height: 597,
        alt: 'Black-and-white photo of three women laughing and singing together in a recording studio, with a microphone hanging above them.',
        wallCredit: 'Salt-N-Pepa with Spinderella outside Bayside Studios. Photo by Al Pereira.',
        wallNote: 'The photo on the wall was taken on February 6, 1989, and is held by the Smithsonian’s National Museum of African American History and Culture. Photo © Al Pereira.',
        sourceUrl: 'https://nmaahc.si.edu/object/nmaahc_2015.132.311',
      },
      listening: [
        { artist: 'DJ Jazzy Jeff & The Fresh Prince', title: 'Summertime', year: '1991', url: 'https://music.apple.com/us/song/summertime/298554177', why: 'The DJ-and-rapper duo at full pop reach.' },
        { artist: 'Salt-N-Pepa', title: 'Push It', year: '1986', url: 'https://music.apple.com/us/song/push-it/1422950119', why: 'The group’s breakthrough, from the album era when Spinderella joined.' },
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/06-flesh-hacienda.webp',
        width: 800,
        height: 1102,
        alt: 'A 1992 magazine spread of numbered snapshots from Flesh at the Haçienda: dressed-up clubgoers posing alone, in pairs and in groups.',
        wallCredit: 'Flesh at the Haçienda, September 1992. Photo by Paul Jones, via Manchester Digital Music Archive.',
        wallNote: 'The wall shows a 1992 press spread from Flesh; DJ Paulette is in frame 10.',
        sourceUrl: 'https://www.mdmarchive.co.uk/artefact/16471/Kath-McDermott-Tim-Lennox-DJ-Paulette-Coco--Angel-The-Hacienda-Press-1992',
      },
      listening: [
        { artist: 'Carl Cox', title: 'F.A.C.T. (mix album)', year: '1995', url: null, why: 'A mid-’90s Carl Cox mix from the rave-to-global-club years.' },
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/07-clue-flex.webp',
        width: 800,
        height: 552,
        alt: 'Side-by-side photos: DJ Clue in a New York Yankees cap, and Funkmaster Flex in headphones at the turntables.',
        wallCredit: 'DJ Clue and Funkmaster Flex at the 2014 Flavor Battle. Photo by Patrick Neree.',
        wallNote: 'The photo on the wall is from 2014, a later image of two DJs who helped define this era.',
        sourceUrl: 'https://www.vice.com/en/article/funkmaster-flex-dj-clue-hot97-power105-dj-battle-rivalry/',
      },
      listening: [
        { artist: 'DJ Clue', title: 'The Professional', year: '1998', url: 'https://music.apple.com/us/album/the-professional/1445883003', why: 'The street mixtape, released as a major-label album.' },
        { artist: 'Lil Wayne & DJ Drama', title: 'Dedication 2', year: '2006', url: null, why: 'A Gangsta Grillz tape that became one of the most celebrated of its era.' },
        { artist: 'DJ Khaled', title: 'We Takin’ Over', year: '2007', url: 'https://music.apple.com/us/album/we-takin-over-feat-akon-t-i/220266442', why: 'The DJ as convener: six artists on one single.' },
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/08-joe-kay.webp',
        width: 800,
        height: 534,
        alt: 'Joe Kay in a dark jacket, standing in front of a glowing orange circle on a dark background.',
        wallCredit: 'Joe Kay. Photo by Daniel Ramos (@spiribolt).',
        wallNote: 'The portrait on the wall is a later photo of Joe Kay.',
        sourceUrl: 'https://www.miaminewtimes.com/music/joe-kay-celebrates-15-years-of-soulection-at-miamis-club-space-40517731/',
      },
      listening: [
        { artist: 'DJ AM', title: 'An archival DJ AM set', year: '2000s', url: null, why: 'Hear the genre-switching for yourself once an authorized recording is confirmed.' },
        { artist: 'Soulection', title: 'Soulection Radio', year: '2011–', url: 'https://music.apple.com/us/curator/soulection/993271379', why: 'The show that grew from a college radio slot into a label and community.' },
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
        status: 'pending',
        // Review build only (VITE_SHOW_PENDING_IMAGES=1). Stripped from the public site.
        reviewSrc: '/img/evolution-review/09-uncle-waffles.webp',
        width: 800,
        height: 533,
        alt: 'Uncle Waffles dancing behind the DJ decks under bright, colorful stage lights, with people around her at Do LaB.',
        wallCredit: 'Uncle Waffles at Do LaB, Coachella 2023. Photo by divisuals.',
        wallNote: 'The photo on the wall is from her 2023 Coachella set.',
        sourceUrl: 'https://floodmagazine.com/131434/live-in-photos-do-lab-at-coachella-2023-ft-odesza-james-blake-and-more/',
      },
      listening: [
        { artist: 'Black Coffee', title: 'Subconsciously', year: '2021', url: 'https://music.apple.com/za/album/subconsciously/1540737975', why: 'The GRAMMY-winning album.' },
        { artist: 'Uncle Waffles & Tony Duardo feat. Sino Msolo & BoiBizza', title: 'Tanzania', year: '2022', url: 'https://music.apple.com/us/song/1614640119', why: 'The debut single that followed her viral Soweto set.' },
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
