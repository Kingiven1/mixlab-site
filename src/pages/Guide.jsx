import { useEffect } from 'react';
import Logo from '../components/Logo';
import RegisterButton from '../components/RegisterButton';
import PartnerDirectory from '../components/PartnerDirectory';
import { TalentGrid, ScheduleList, ProvisionalNote, FAQList } from '../components/Blocks';
import { event } from '../lib/content';
import { color, font, container, eyebrow, h2, body, small, buttonGhost, card } from '../styles/tokens';

// The guest-facing guide behind the permanent QR code. Lightweight, no account,
// built for one-handed phone use. Not the private run of show.

const TABS = [
  { id: 'schedule', label: 'Schedule' },
  { id: 'talent', label: 'Talent' },
  { id: 'partners', label: 'Partners' },
  { id: 'venue', label: 'Venue' },
  { id: 'links', label: 'Links' },
];

export default function Guide() {
  useEffect(() => { document.title = 'Event Guide — The Mix Lab'; return () => { document.title = 'The Mix Lab — Miami Art Week · Dec 3, 2026'; }; }, []);

  const H = ({ id, children }) => <h2 id={`${id}-h`} style={{ ...h2, fontSize: 'clamp(36px, 6vw, 60px)', marginBottom: '20px' }}>{children}</h2>;
  const block = { padding: '48px 0', borderTop: `1px solid ${color.line}` };

  return (
    <>
      <header style={{ background: color.bgDeep, padding: '32px 0 24px' }}>
        <div style={container}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Logo height={64} />
            <div>
              <p style={{ ...eyebrow, fontSize: '12px' }}>Digital Experience Guide</p>
              <p style={{ fontFamily: font.display, fontWeight: 700, textTransform: 'uppercase', fontSize: '22px', color: color.cream, margin: '4px 0 0', lineHeight: 1.05 }}>
                {event.dateLabel}
              </p>
              <p style={{ ...small, marginTop: '2px' }}>{event.venue.name} · {event.venue.neighborhood} · Times in ET</p>
            </div>
          </div>
        </div>
      </header>

      {/* Jump chips — sticky under the main nav */}
      <nav aria-label="Guide sections" style={{ position: 'sticky', top: '72px', zIndex: 30, background: 'rgba(33,7,12,0.96)', borderBottom: `1px solid ${color.line}` }}>
        <div style={{ ...container }} className="ml-scroll-x">
          {TABS.map((t) => (
            <a key={t.id} href={`#${t.id}`} onClick={(e) => { e.preventDefault(); document.getElementById(t.id)?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ flexShrink: 0, minHeight: '44px', display: 'inline-flex', alignItems: 'center', padding: '0 16px', margin: '8px 0', borderRadius: '999px', border: `1px solid ${color.line}`, color: color.cream, textDecoration: 'none', fontWeight: 600, fontSize: '14px' }}>
              {t.label}
            </a>
          ))}
        </div>
      </nav>

      <div style={container}>
        <section id="schedule" aria-labelledby="schedule-h" style={{ ...block, borderTop: 'none' }}>
          <H id="schedule">Schedule</H>
          <ProvisionalNote style={{ marginBottom: '20px' }} />
          <ScheduleList detailed />
        </section>

        <section id="talent" aria-labelledby="talent-h" style={block}>
          <H id="talent">Talent</H>
          <TalentGrid expandable />
        </section>

        <section id="partners" aria-labelledby="partners-h" style={block}>
          <H id="partners">Community Partners</H>
          <PartnerDirectory />
        </section>

        <section id="venue" aria-labelledby="venue-h" style={block}>
          <H id="venue">Venue</H>
          <div style={{ ...card, padding: '20px' }}>
            <p style={{ fontFamily: font.display, fontWeight: 700, textTransform: 'uppercase', fontSize: '26px', color: color.cream, margin: 0 }}>{event.venue.name}</p>
            <p style={{ ...body, marginTop: '4px' }}>{event.venue.address || event.venue.neighborhood}</p>
            {event.venue.arrival && <p style={{ ...body, marginTop: '10px', color: color.cream }}>{event.venue.arrival}</p>}
            <a href={event.venue.mapUrl} target="_blank" rel="noopener noreferrer" className="ml-btn ml-ghost" style={{ ...buttonGhost, marginTop: '16px' }}>Directions ↗</a>
          </div>
          <div style={{ marginTop: '20px' }}><FAQList /></div>
        </section>

        <section id="links" aria-labelledby="links-h" style={{ ...block, paddingBottom: '72px' }}>
          <H id="links">Guest links</H>
          <div style={{ display: 'grid', gap: '10px' }}>
            <GuideLink href={`mailto:${event.contactEmail}`} label="Contact the team" sub={event.contactEmail} />
            <GuideLink href={event.instagram} label="Instagram" sub="@globallynk" external />
            <GuideLink href="https://www.globallynk.club" label="GlobalLYNK DJ workshops & cohorts" sub="Keep learning after The Mix Lab" external />
          </div>
          <div style={{ marginTop: '24px' }}><RegisterButton /></div>
          <p style={{ ...small, marginTop: '24px' }}>{event.disclaimer}</p>
        </section>
      </div>
    </>
  );
}

function GuideLink({ href, label, sub, external }) {
  return (
    <a href={href} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={{ ...card, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '14px 18px', minHeight: '60px', textDecoration: 'none', color: color.cream }}>
      <span>
        <span style={{ display: 'block', fontWeight: 600 }}>{label}</span>
        <span style={{ ...small, fontSize: '13px' }}>{sub}</span>
      </span>
      <span aria-hidden="true" style={{ color: color.coral, fontSize: '20px' }}>{external ? '↗' : '→'}</span>
    </a>
  );
}
