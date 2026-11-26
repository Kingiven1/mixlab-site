import { useEffect } from 'react';
import { SectionHead, TextLink } from '../components/Blocks';
import PartnerList from '../components/PartnerList';
import { event, sponsors, asset } from '../lib/content';
import { color, container, section, eyebrow, h1, body, bodyLg, card } from '../styles/tokens';

// Our partners. No application or sponsorship pitch on this page.
export default function Partners() {
  useEffect(() => { document.title = 'Partners — The Mix Lab'; return () => { document.title = 'The Mix Lab — Miami Art Week · Dec 3, 2026'; }; }, []);
  return (
    <>
      <section style={{ background: color.bgDeep, padding: 'clamp(56px, 9vw, 112px) 0 clamp(48px, 7vw, 88px)' }}>
        <div style={container}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>Partners · {event.context}</p>
          <h1 style={{ ...h1, fontSize: 'clamp(48px, 8.5vw, 112px)' }}>
            The partners<br /><span style={{ color: color.coral }}>behind the mix.</span>
          </h1>
          <p style={{ ...bodyLg, maxWidth: '640px', marginTop: '24px' }}>
            The brands and organizations helping bring The Mix Lab to life during {event.context.replace(/ \d{4}$/, '')}.
          </p>
        </div>
      </section>

      <section style={section}>
        <div style={container}>
          <SectionHead kicker="Our partners" line1="Built" line2="together." />
          <PartnerList />
        </div>
      </section>

      <section style={{ ...section, background: color.surface }}>
        <div style={container}>
          <SectionHead kicker="Presented by" line1="The people behind" line2="the experience." />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '12px' }}>
            {sponsors.presenters.map((p) => (
              <div key={p.name} style={{ ...card, padding: '24px', background: color.bgDeep }}>
                <div style={{ height: '64px', display: 'flex', alignItems: 'center' }}>
                  <img src={asset(p.logo)} alt={p.name} loading="lazy" style={{ maxHeight: p.name === 'AmpSpot' ? '30px' : '58px', width: 'auto' }} />
                </div>
                <p style={{ ...body, fontSize: '15px', marginTop: '14px' }}>{p.role}</p>
              </div>
            ))}
          </div>
          <p style={{ ...body, marginTop: '24px' }}>
            Host venue: <strong style={{ color: color.cream }}>{sponsors.hostVenue.name}</strong> · {sponsors.hostVenue.role}
          </p>
          <div style={{ marginTop: '28px' }}><TextLink to="/guide">Open the event guide →</TextLink></div>
        </div>
      </section>
    </>
  );
}
