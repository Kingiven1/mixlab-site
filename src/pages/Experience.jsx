import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import RegisterButton from '../components/RegisterButton';
import UpdatesForm from '../components/UpdatesForm';
import Flyer from '../components/Flyer';
import { SectionHead, TalentGrid, ScheduleList, ProvisionalNote, FAQList, TextLink } from '../components/Blocks';
import { event, sponsors, hasRegistration, asset } from '../lib/content';
import { color, font, container, section, eyebrow, h1, h3, body, bodyLg, small, buttonGhost, radius, card } from '../styles/tokens';

// Planned activities — short and inviting. Treated as planned until confirmed.
const EXPECT = [
  { label: 'Learn', title: 'Hands-on DJ workshops', copy: 'Beginner-friendly and complimentary. Get on the decks with working DJs — no experience needed.' },
  { label: 'Discover', title: 'Fireside chats & panels', copy: 'Real talk on creative business, AI and creative technology, and building a career around your craft.' },
  { label: 'Reflect', title: 'A mental health conversation', copy: 'An honest conversation about creative wellbeing and sustaining the work you love.' },
  { label: 'Celebrate', title: 'DJ performances', copy: 'Live sets through the day and three featured sets at night. Dancing encouraged.' },
  { label: 'Connect', title: 'Social hour with NFNTE Capital', copy: 'Networking, drinks and a social equity conversation hosted by NFNTE Capital.' },
];

export default function Experience() {
  return (
    <>
      <Hero />

      {/* 2 ── FLYER / EVENT AT A GLANCE */}
      <section id="flyer" style={{ ...section, background: color.bg }} aria-labelledby="flyer-h">
        <div style={container}>
          <h2 id="flyer-h" style={{ ...eyebrow, marginBottom: '28px' }}>The event</h2>
          <Flyer />
        </div>
      </section>

      {/* 3 ── ABOUT */}
      <section id="about" style={{ ...section, background: color.surface }}>
        <div style={container} className="ml-split rev">
          <div>
            <SectionHead kicker="About the experience" line1="You hear the music." line2="See the art." />
            <p style={bodyLg}>
              The Mix Lab brings music, art, technology and culture together through hands-on learning,
              conversations and community — a day-to-night celebration of DJing as an art form during Miami Art Week.
            </p>
            <p style={{ ...body, marginTop: '18px', fontSize: '17px' }}>
              It's for DJs, creative entrepreneurs, music lovers and anyone who has ever watched a DJ and wondered
              how they do it. Meet the artists behind the decks, learn how they create, and try the craft yourself.
            </p>
          </div>
          <img src={asset('/img/community.webp')} alt="A crowd holding up phones at a previous GlobalLYNK event, lit in warm red and orange" loading="lazy"
            style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: radius.md }} />
        </div>
      </section>

      {/* 4 ── WHAT TO EXPECT */}
      <section id="expect" style={section}>
        <div style={container}>
          <SectionHead kicker="What to expect" line1="Day to night." line2="Hands on." />
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${color.lineCoral}` }}>
            {EXPECT.map((x) => (
              <li key={x.title} className="ml-row" style={{ padding: '22px 0', borderBottom: `1px solid ${color.lineCoral}` }}>
                <span style={{ fontFamily: font.display, fontWeight: 800, textTransform: 'uppercase', color: color.coral, fontSize: 'clamp(24px, 3.4vw, 44px)', lineHeight: 1 }}>{x.label}</span>
                <div>
                  <h3 style={{ ...h3, fontSize: 'clamp(22px, 2.4vw, 30px)' }}>{x.title}</h3>
                  <p style={{ ...body, marginTop: '6px' }}>{x.copy}</p>
                </div>
              </li>
            ))}
          </ul>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '16px', marginTop: '40px' }}>
            <img src={asset('/img/party-1.webp')} alt="A DJ smiling behind the decks at a GlobalLYNK night" loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: radius.md }} />
            <img src={asset('/img/fireside.webp')} alt="A speaker addressing an audience during an NFNTE Capital talk" loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: radius.md }} />
            <img src={asset('/img/party-2.webp')} alt="A DJ mixing on a controller at a GlobalLYNK night" loading="lazy" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: radius.md }} />
          </div>
          <p style={{ ...small, marginTop: '16px' }}>Planned program. Sessions and details are confirmed as the schedule is finalized. Photos from previous programming.</p>
        </div>
      </section>

      {/* 5 ── LINEUP */}
      <section id="lineup" style={{ ...section, background: color.surface }}>
        <div style={container}>
          <SectionHead kicker="Lineup" line1="Confirmed DJs &" line2="creative voices." />
          <TalentGrid />
          <p style={{ ...small, marginTop: '24px' }}>More names to be announced. Individual roles and set times are in development.</p>
        </div>
      </section>

      {/* 6 ── SCHEDULE PREVIEW */}
      <section id="schedule" style={section}>
        <div style={container}>
          <SectionHead kicker="Schedule" line1="How the day" line2="unfolds." />
          <ProvisionalNote style={{ marginBottom: '24px' }} />
          <ScheduleList />
          <div style={{ marginTop: '24px' }}>
            <TextLink to="/guide#schedule">Full schedule in the Event Guide →</TextLink>
          </div>
        </div>
      </section>

      {/* 7 ── ESSENTIAL INFORMATION */}
      <section id="info" style={{ ...section, background: color.surface }}>
        <div style={container}>
          <SectionHead kicker="Essential information" line1="Know before" line2="you go." />
          <div className="ml-split" style={{ alignItems: 'start' }}>
            <VenueBlock />
            <div>
              <h3 style={{ ...h3, marginBottom: '16px' }}>FAQ</h3>
              <FAQList />
            </div>
          </div>
        </div>
      </section>

      {/* 8 ── REGISTER + RECOGNITION */}
      <RegisterSection />
    </>
  );
}

function Hero() {
  return (
    <section style={{ position: 'relative', background: color.bgDeep, marginTop: '-72px', paddingTop: '72px', overflow: 'hidden' }}>
      {/* photo: full-bleed on phones, right half on desktop */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0 }}>
        <img src={asset('/img/workshop.webp')} alt="" fetchpriority="high"
          style={{ position: 'absolute', right: 0, top: 0, height: '100%', width: 'min(100%, 760px)', objectFit: 'cover', objectPosition: 'center 35%' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, #1A0308 0%, #1A0308 34%, rgba(26,3,8,0.78) 58%, rgba(26,3,8,0.25) 100%), linear-gradient(0deg, #1A0308 0%, rgba(26,3,8,0) 40%)' }} />
      </div>

      <div style={{ ...container, position: 'relative', minHeight: 'min(92vh, 860px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 'clamp(40px, 8vw, 96px) clamp(16px, 4vw, 40px)' }}>
        <p className="ml-rise" style={{ ...eyebrow, marginBottom: '20px' }}>{event.context}</p>
        <Logo height={150} style={{ height: 'clamp(110px, 18vw, 190px)', marginBottom: '28px', marginLeft: '-6px' }} />
        <h1 className="ml-rise ml-rise-2" style={{ ...h1, maxWidth: '760px' }}>
          Step inside<br /><span style={{ color: color.coral }}>the art of DJing.</span>
        </h1>
        <p className="ml-rise ml-rise-3" style={{ fontFamily: font.display, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 2.6vw, 30px)', letterSpacing: '0.03em', color: color.cream, margin: '28px 0 0', lineHeight: 1.15 }}>
          {event.dateLabel}<br />
          <span style={{ color: color.creamSoft }}>{event.venue.name} · {event.venue.neighborhood}</span>
        </p>
        <div className="ml-rise ml-rise-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '32px' }}>
          <RegisterButton />
          <Link to="/#expect" className="ml-btn ml-ghost" style={buttonGhost}>What to expect</Link>
        </div>
        <div style={{ marginTop: 'clamp(40px, 6vw, 64px)' }}>
          <p style={{ ...small, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '14px', color: color.creamSoft }}>Presented by</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'clamp(20px, 4vw, 36px)', flexWrap: 'wrap' }}>
            {sponsors.presenters.map((p) => (
              <img key={p.name} src={asset(p.logo)} alt={p.name} style={{ height: p.name === 'AmpSpot' ? '26px' : '48px', width: 'auto' }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function VenueBlock() {
  const v = event.venue;
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
        <img src={asset(v.photos[0])} alt="The LAB Miami event room with rows of chairs facing a screen" loading="lazy" style={{ width: '100%', height: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: radius.md, gridRow: 'span 2' }} />
        <img src={asset(v.photos[1])} alt="The LAB Miami lounge with armchairs" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius.md }} />
        <img src={asset(v.photos[2])} alt="The LAB Miami workspace with long tables and a mural" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius.md }} />
      </div>
      <p style={{ ...small, marginTop: '8px' }}>{v.photoNote}</p>
      <h3 style={{ ...h3, marginTop: '24px' }}>{v.name}</h3>
      <p style={{ ...body, marginTop: '6px' }}>{v.address || v.neighborhood}</p>
      <a href={v.mapUrl} target="_blank" rel="noopener noreferrer" className="ml-btn ml-ghost" style={{ ...buttonGhost, marginTop: '16px' }}>
        Directions ↗
      </a>
      <dl style={{ margin: '24px 0 0', display: 'grid', gap: '14px' }}>
        <InfoRow k="Date" v={event.dateLabel} />
        <InfoRow k="Hours" v={event.hoursLabel || 'Final hours announced soon (Eastern Time)'} />
        <InfoRow k="Arrival" v={v.arrival || 'Arrival and check-in details will be posted before the event.'} />
        {v.parking && <InfoRow k="Parking" v={v.parking} />}
        {v.transit && <InfoRow k="Transit" v={v.transit} />}
      </dl>
    </div>
  );
}

function InfoRow({ k, v }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '90px 1fr', gap: '12px', borderTop: `1px solid ${color.line}`, paddingTop: '12px' }}>
      <dt style={{ ...eyebrow, fontSize: '12px', paddingTop: '2px' }}>{k}</dt>
      <dd style={{ ...body, margin: 0, color: color.cream }}>{v}</dd>
    </div>
  );
}

function RegisterSection() {
  return (
    <section id="register" style={{ ...section, background: color.bgDeep }}>
      <div style={container}>
        <SectionHead
          center
          kicker="Register"
          line1={hasRegistration ? 'Save your spot.' : 'RSVP opens soon.'}
          line2="Try the craft."
          intro={hasRegistration
            ? 'Register through our official event page.'
            : 'Registration isn’t open yet. Join the updates list and we’ll email you the moment it opens.'}
        />
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {hasRegistration ? (
            <div style={{ textAlign: 'center' }}><RegisterButton /></div>
          ) : (
            <div style={{ ...card, padding: 'clamp(20px, 4vw, 32px)' }}>
              <p style={{ ...eyebrow, marginBottom: '6px' }}>Updates list</p>
              <p style={{ ...body, marginBottom: '18px' }}>
                Announcements only. Joining does <strong style={{ color: color.cream }}>not</strong> register you or reserve a spot.
              </p>
              <UpdatesForm />
            </div>
          )}
        </div>

        {/* Recognition: presenters, host venue, approved sponsors only */}
        <div style={{ marginTop: 'clamp(64px, 9vw, 104px)', borderTop: `1px solid ${color.line}`, paddingTop: '48px' }}>
          <p style={{ ...eyebrow, textAlign: 'center', marginBottom: '32px' }}>The people behind the experience</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))', gap: '16px' }}>
            {sponsors.presenters.map((p) => (
              <div key={p.name} style={{ ...card, padding: '24px', textAlign: 'center' }}>
                <div style={{ height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src={asset(p.logo)} alt={p.name} loading="lazy" style={{ maxHeight: p.name === 'AmpSpot' ? '30px' : '58px', width: 'auto' }} />
                </div>
                <p style={{ ...body, fontSize: '14px', marginTop: '14px' }}>{p.role}</p>
              </div>
            ))}
          </div>
          <p style={{ ...body, textAlign: 'center', marginTop: '20px', fontSize: '15px' }}>
            Host venue: <strong style={{ color: color.cream }}>{sponsors.hostVenue.name}</strong>
          </p>
          {sponsors.recognized.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '32px', marginTop: '32px' }}>
              {sponsors.recognized.map((s) => <img key={s.name} src={asset(s.logo)} alt={s.name} loading="lazy" style={{ height: '44px', width: 'auto' }} />)}
            </div>
          )}
          <p style={{ textAlign: 'center', marginTop: '28px' }}>
            <TextLink to="/partners">Partner with The Mix Lab →</TextLink>
          </p>
        </div>
      </div>
    </section>
  );
}
