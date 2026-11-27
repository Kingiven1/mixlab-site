import { Link } from 'react-router-dom';
import Logo from '../components/Logo';
import RegisterButton from '../components/RegisterButton';
import UpdatesForm from '../components/UpdatesForm';
import Flyer from '../components/Flyer';
import PartnerList from '../components/PartnerList';
import { PerformerGrid } from '../components/Lineup';
import { SectionHead, ScheduleList, ProvisionalNote, FAQList, TextLink } from '../components/Blocks';
import { event, sponsors, hasRegistration, asset } from '../lib/content';
import { color, font, container, section, eyebrow, h1, h3, body, bodyLg, small, buttonGhost, buttonPrimary, radius, card } from '../styles/tokens';

// Planned activities — short and inviting. Treated as planned until confirmed.
const EXPECT = [
  { label: 'Learn', title: 'Hands-on DJ workshops', copy: 'Beginner-friendly and complimentary. Get on the decks with working DJs — no experience needed.' },
  { label: 'Discover', title: 'Panels & conversations', copy: 'Real talk on creative business, AI and creative technology, and building a career around your craft.' },
  { label: 'Reflect', title: 'A mental health conversation', copy: 'An honest conversation about creative wellbeing and sustaining the work you love.' },
  { label: 'Celebrate', title: 'DJ performances', copy: 'Live DJ sets through the afternoon and into Social Hour + The Night Session. Dancing encouraged.' },
  { label: 'Connect', title: 'Social Hour + The Night Session', copy: 'Meet the community over drinks, with a social equity conversation hosted by NFNTE Capital.' },
];

export default function Experience() {
  return (
    <>
      <Hero />

      {/* 2 ── FLYER — only shown once the approved flyer is added in content/event.js */}
      {event.flyer && <section id="flyer" style={{ ...section, background: color.bg }} aria-labelledby="flyer-h">
        <div style={container}>
          <h2 id="flyer-h" style={{ ...eyebrow, marginBottom: '28px' }}>The event</h2>
          <Flyer />
        </div>
      </section>}

      {/* 3 ── ABOUT */}
      <section id="about" style={{ ...section, background: color.surface }}>
        <div style={container} className="ml-split rev">
          <div>
            <SectionHead kicker="About the experience" line1="You hear the music." line2="See the art." />
            <p style={bodyLg}>
              The Mix Lab brings music, art, technology and culture together through hands-on learning,
              conversations and community — an afternoon-into-evening celebration of DJing as an art form during Miami Art Week.
            </p>
            <p style={{ ...body, marginTop: '18px', fontSize: '17px' }}>
              It's for creators, DJs, entrepreneurs, music lovers and everyday people curious about DJing and art —
              anyone who has ever watched a DJ and wondered how they do it. Meet the artists behind the decks, learn how they create, and try the craft yourself.
            </p>
          </div>
          <img src={asset('/img/community.webp')} alt="A crowd holding up phones at a previous GlobalLYNK event, lit in warm red and orange" loading="lazy"
            style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: radius.md }} />
        </div>
      </section>

      {/* 4 ── WHAT TO EXPECT */}
      <section id="expect" style={section}>
        <div style={container}>
          <SectionHead kicker="What to expect" line1="Noon to night." line2="Hands on." />
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
          <p style={{ ...small, marginTop: '16px' }}>Complimentary admission. RSVP required.</p>
        </div>
      </section>

      {/* 5 ── LINEUP */}
      <section id="lineup" style={{ ...section, background: color.surface }}>
        <div style={container}>
          <SectionHead kicker="The lineup" line1="Performances" line2="& DJ sets." />
          <PerformerGrid />
          <div style={{ marginTop: '36px' }}>
            <Link to="/lineup" className="ml-btn ml-ghost" style={buttonGhost}>See the full lineup →</Link>
          </div>
          <p style={{ ...body, marginTop: '12px', fontSize: '15px' }}>Panels, conversations and workshop DJs are on the lineup page.</p>
        </div>
      </section>

      {/* 6 ── SCHEDULE PREVIEW */}
      <section id="schedule" style={section}>
        <div style={container}>
          <SectionHead kicker="Schedule" line1="How the day" line2="unfolds." />
          <ProvisionalNote style={{ marginBottom: '24px' }} />
          <ScheduleList />
          <div style={{ marginTop: '24px' }}>
            <TextLink to="/guide#schedule">Session details in the Event Guide →</TextLink>
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

// One prominent workshop button directly below the hero. DJs and sessions live
// on the Luma page — no per-DJ cards or session buttons on the site.
function WorkshopCTA() {
  if (!event.workshopUrl) return null;
  return (
    <section id="workshops" aria-label="Workshop booking" style={{ background: color.surface, borderTop: `1px solid ${color.lineCoral}`, borderBottom: `1px solid ${color.lineCoral}` }}>
      <div style={{ ...container, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 'clamp(28px, 5vw, 44px) clamp(16px, 4vw, 40px)' }}>
        {event.workshopDescription && (
          <>
            <p style={{ ...eyebrow, marginBottom: '10px' }}>Behind the Decks · DJ workshops</p>
            <p style={{ ...body, color: color.cream, fontSize: 'clamp(16px, 4vw, 19px)', maxWidth: '560px', marginBottom: '22px' }}>
              {event.workshopDescription}
            </p>
          </>
        )}
        <a href={event.workshopUrl} target="_blank" rel="noopener noreferrer" className="ml-btn"
          style={{ ...buttonPrimary, width: '100%', maxWidth: '460px', minHeight: '64px', fontSize: 'clamp(21px, 5.6vw, 26px)', padding: '0 28px', whiteSpace: 'normal', textAlign: 'center', lineHeight: 1.05 }}>
          {event.workshopLabel}<span aria-hidden="true">↗</span>
        </a>
        <p style={{ ...body, color: color.cream, fontSize: 'clamp(15px, 3.8vw, 17px)', maxWidth: '460px', marginTop: '14px' }}>
          {event.workshopNote}
        </p>
        <div style={{ maxWidth: '460px', width: '100%' }}>
        <ol style={{ ...body, color: color.cream, fontSize: '15px', textAlign: 'left', margin: '14px 0 0', paddingLeft: '22px', display: 'grid', gap: '4px' }}>
            <li><strong>RSVP for the event</strong> (Daytime or Night).</li>
            <li><strong>Book your workshop DJ.</strong> A separate request with its own approval.</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  // Deck-cover treatment: the logo on solid burgundy, nothing behind it.
  // Photos sit in their own strip underneath so neither gets cropped or crowded.
  return (
    <>
      <section style={{ background: color.bgDeep, marginTop: '-72px', paddingTop: '72px' }}>
        <div style={{ ...container, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 'clamp(40px, 7vw, 88px)', paddingBottom: 'clamp(48px, 7vw, 80px)' }}>
          <p className="ml-rise" style={{ ...eyebrow, marginBottom: 'clamp(20px, 3vw, 32px)' }}>{event.context}</p>
          <Logo height={300} style={{ height: 'clamp(160px, 30vw, 300px)', maxWidth: '100%' }} />
          <h1 className="ml-rise ml-rise-2" style={{ ...h1, fontSize: 'clamp(40px, 6.4vw, 84px)', marginTop: 'clamp(24px, 4vw, 40px)' }}>
            Step inside <span style={{ color: color.coral }}>the art of DJing.</span>
          </h1>
          <p className="ml-rise ml-rise-2" style={{ fontFamily: font.display, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: color.creamSoft, fontSize: 'clamp(17px, 2vw, 22px)', margin: '14px 0 0' }}>
            {event.tagline}
          </p>
          <p className="ml-rise ml-rise-3" style={{ fontFamily: font.display, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 2.6vw, 30px)', letterSpacing: '0.03em', color: color.cream, margin: '28px 0 0', lineHeight: 1.15 }}>
            {event.dateLabel}<br />
            {event.hoursLabel && <>{event.hoursLabel}<br /></>}
            <span style={{ color: color.coral }}>{event.venue.name} · {event.venue.neighborhood}</span>
          </p>
          <div className="ml-rise ml-rise-3" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginTop: '32px' }}>
            <RegisterButton />
            <Link to="/#expect" className="ml-btn ml-ghost" style={buttonGhost}>What to expect</Link>
          </div>
          <p style={{ ...body, color: color.creamSoft, fontSize: '15px', marginTop: '14px', maxWidth: '520px' }}>
            Two sessions: <strong style={{ color: color.cream }}>Daytime</strong> Noon–5 PM · <strong style={{ color: color.cream }}>Night</strong> 5–8 PM. Pick yours when you RSVP.
          </p>
          <p style={{ ...small, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 'clamp(40px, 6vw, 56px) 0 14px', color: color.creamSoft }}>Presented by</p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 'clamp(24px, 5vw, 44px)', flexWrap: 'wrap' }}>
            {sponsors.presenters.map((p) => (
              <img key={p.name} src={asset(p.logo)} alt={p.name} style={{ height: p.name === 'AmpSpot' ? '26px' : '48px', width: 'auto' }} />
            ))}
          </div>
        </div>
      </section>

      <WorkshopCTA />

    </>
  );
}

function VenueBlock() {
  const v = event.venue;
  return (
    <div>
      {v.photos?.length >= 3 && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '10px' }}>
            <img src={asset(v.photos[0])} alt={`${v.name} event room`} loading="lazy" style={{ width: '100%', height: '100%', aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: radius.md, gridRow: 'span 2' }} />
            <img src={asset(v.photos[1])} alt={`${v.name} lounge`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius.md }} />
            <img src={asset(v.photos[2])} alt={`${v.name} workspace`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius.md }} />
          </div>
          {v.photoNote && <p style={{ ...small, marginTop: '8px' }}>{v.photoNote}</p>}
        </>
      )}
      <h3 style={{ ...h3, marginTop: v.photos?.length ? '24px' : 0 }}>{v.name}</h3>
      <p style={{ ...body, marginTop: '6px' }}>{v.address || v.neighborhood}</p>
      {!v.address && v.addressNote && <p style={{ ...body, marginTop: '6px', color: color.cream }}>{v.addressNote}</p>}
      {v.address && v.mapUrl && (
        <a href={v.mapUrl} target="_blank" rel="noopener noreferrer" className="ml-btn ml-ghost" style={{ ...buttonGhost, marginTop: '16px' }}>
          Directions ↗
        </a>
      )}
      <dl style={{ margin: '24px 0 0', display: 'grid', gap: '14px' }}>
        <InfoRow k="Date" v={event.dateLabel} />
        <InfoRow k="Hours" v={event.hoursLabel || 'Final hours announced soon (Eastern Time)'} />
        <InfoRow k="Admission" v="Complimentary. RSVP required, and every RSVP is reviewed." />
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
          kicker="Attend"
          line1={hasRegistration ? 'RSVP' : 'Invitation requests'}
          line2={hasRegistration ? 'to attend.' : 'open soon.'}
          intro={hasRegistration
            ? 'Approval required. Submitting an RSVP does not confirm attendance.'
            : 'Attendance is by invitation request, and every request is reviewed. Get updates and we’ll email you when requests open.'}
        />
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          {hasRegistration ? (
            <div style={{ textAlign: 'center' }}>
              <RegisterButton />
              <p style={{ ...body, marginTop: '18px', fontSize: '15px' }}>
                Choose your session when you RSVP: Daytime (Noon–5 PM) for workshops, art and talks, or Night (5–8 PM) for Social Hour + The Night Session. Admission is complimentary. Want a workshop seat? Book it separately on the same page.
              </p>
            </div>
          ) : (
            <div style={{ ...card, padding: 'clamp(20px, 4vw, 32px)' }}>
              <p style={{ ...eyebrow, marginBottom: '6px' }}>Get updates</p>
              <p style={{ ...body, marginBottom: '18px' }}>
                News and announcements only. This does <strong style={{ color: color.cream }}>not</strong> request an invitation, register you or reserve a place.
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
          <div style={{ marginTop: '40px' }}>
            <PartnerList compact />
          </div>
          <p style={{ textAlign: 'center', marginTop: '28px' }}>
            <TextLink to="/partners">Meet our partners →</TextLink>
          </p>
        </div>
      </div>
    </section>
  );
}
