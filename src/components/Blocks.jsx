import { Link } from 'react-router-dom';
import { DraftTag } from './DraftBanner';
import { talent, talentByName, schedule, scheduleIsProvisional, faq, asset } from '../lib/content';
import { color, font, eyebrow, h2, h3, body, small, card, radius } from '../styles/tokens';

// ── Section heading: eyebrow + big two-tone headline ─────────────────────────
export function SectionHead({ kicker, line1, line2, intro, center }) {
  return (
    <div style={{ maxWidth: '900px', margin: center ? '0 auto' : 0, textAlign: center ? 'center' : 'left', marginBottom: 'clamp(28px, 4vw, 48px)' }}>
      {kicker && <p style={{ ...eyebrow, marginBottom: '16px' }}>{kicker}</p>}
      <h2 style={h2}>
        {line1}
        {line2 && <><br /><span style={{ color: color.coral }}>{line2}</span></>}
      </h2>
      {intro && <p style={{ ...body, fontSize: '18px', marginTop: '20px', maxWidth: '640px', marginLeft: center ? 'auto' : 0, marginRight: center ? 'auto' : 0 }}>{intro}</p>}
    </div>
  );
}

export function ProvisionalNote({ style }) {
  if (!scheduleIsProvisional) return null;
  return (
    <p style={{ ...small, display: 'inline-flex', alignItems: 'center', gap: '8px', border: `1px solid ${color.lineCoral}`, color: color.cream, borderRadius: radius.pill, padding: '6px 14px', ...style }}>
      <span aria-hidden="true" style={{ width: 8, height: 8, borderRadius: 8, background: color.coral, display: 'inline-block' }} />
      Provisional schedule — {schedule.note}
    </p>
  );
}

// ── Talent ───────────────────────────────────────────────────────────────────
export function TalentGrid({ expandable = false }) {
  if (!talent.length) {
    return (
      <div style={{ ...card, padding: 'clamp(32px, 6vw, 64px)', textAlign: 'center' }}>
        <p style={{ ...eyebrow, marginBottom: '12px' }}>Lineup</p>
        <p style={{ ...h3, fontSize: 'clamp(30px, 4vw, 44px)' }}>Lineup announcements coming soon.</p>
        <p style={{ ...body, marginTop: '12px' }}>Join the updates list to hear first.</p>
      </div>
    );
  }
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 180px), 1fr))', gap: 'clamp(16px, 2vw, 24px)' }}>
      {talent.map((t) => (
        <li key={t.name}>
          {expandable ? <TalentDetails t={t} /> : <TalentCard t={t} />}
        </li>
      ))}
    </ul>
  );
}

function TalentPhoto({ t, ratio = '4 / 5' }) {
  if (!t.photo) return <div style={{ aspectRatio: ratio, background: color.surface, borderRadius: radius.md }} />;
  return (
    <img
      src={asset(t.photo)}
      alt={`${t.name}${t.role ? `, ${t.role}` : ''}`}
      loading="lazy"
      style={{ width: '100%', aspectRatio: ratio, objectFit: 'cover', objectPosition: t.photoPosition || 'center', borderRadius: radius.md, background: color.surface }}
    />
  );
}

function TalentCard({ t }) {
  return (
    <article>
      <TalentPhoto t={t} />
      <div style={{ paddingTop: '14px' }}>
        <DraftTag item={t} />
        <p style={{ ...small, color: color.coral, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
          {t.role}{t.city ? ` · ${t.city}` : ''}
        </p>
        <h3 style={{ ...h3, marginTop: '6px' }}>{t.name}</h3>
        <p style={{ ...body, fontSize: '15px', marginTop: '8px' }}>{t.bio}</p>
        {t.link && (
          <a href={t.link} target="_blank" rel="noopener noreferrer" className="ml-link" style={{ ...body, fontSize: '14px', color: color.cream, display: 'inline-flex', minHeight: '44px', alignItems: 'center' }}>
            Profile ↗
          </a>
        )}
      </div>
    </article>
  );
}

function TalentDetails({ t }) {
  return (
    <details style={{ ...card, overflow: 'hidden' }}>
      <summary style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px', minHeight: '76px' }}>
        <div style={{ width: '56px', flexShrink: 0 }}><TalentPhoto t={t} ratio="1 / 1" /></div>
        <div style={{ flex: 1 }}>
          <DraftTag item={t} />
          <div style={{ fontFamily: font.display, fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', color: color.cream, lineHeight: 1 }}>{t.name}</div>
          <div style={{ ...small, color: color.coral, marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{t.role}{t.city ? ` · ${t.city}` : ''}</div>
        </div>
        <Plus />
      </summary>
      <div style={{ padding: '0 16px 16px' }}>
        <p style={{ ...body, fontSize: '15px' }}>{t.bio}</p>
        {t.link && <a href={t.link} target="_blank" rel="noopener noreferrer" className="ml-link" style={{ ...body, fontSize: '14px', color: color.cream, display: 'inline-flex', minHeight: '44px', alignItems: 'center' }}>Profile ↗</a>}
      </div>
    </details>
  );
}

export function Plus() {
  return <span aria-hidden="true" className="ml-chev" style={{ color: color.coral, fontSize: '28px', lineHeight: 1, width: '28px', textAlign: 'center', flexShrink: 0 }}>+</span>;
}

// ── Schedule (same data on the homepage and the guide) ────────────────────────
export function ScheduleList({ detailed = false }) {
  const blocks = schedule.blocks;
  if (!blocks.length) {
    return <p style={{ ...body, fontSize: '18px' }}>The schedule will be posted here as sessions are confirmed.</p>;
  }
  return (
    <ol style={{ listStyle: 'none', padding: 0, margin: 0, borderTop: `1px solid ${color.lineCoral}` }}>
      {blocks.map((b) => (
        <li key={b.title} className="ml-row" style={{ borderBottom: `1px solid ${color.lineCoral}`, padding: detailed ? '24px 0' : 'clamp(22px, 3vw, 32px) 0' }}>
          <div style={{ fontFamily: font.display, fontWeight: 800, fontSize: 'clamp(28px, 4.2vw, 56px)', lineHeight: 0.95, color: color.coral, textTransform: 'uppercase' }}>
            <time>{b.time}</time>
            <span style={{ ...small, fontFamily: font.body, fontWeight: 500, fontSize: '12px', letterSpacing: '0.08em', marginLeft: '8px' }}>ET</span>
          </div>
          <div>
            <DraftTag item={b} />
            <h3 style={{ ...h3, fontSize: 'clamp(24px, 3vw, 36px)' }}>{b.title}</h3>
            {b.area && <p style={{ ...small, color: color.coral, marginTop: '6px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{b.area}</p>}
            <p style={{ ...body, marginTop: '8px' }}>{b.summary}</p>
            {detailed && b.sessions.length > 0 && (
              <div style={{ marginTop: '16px', display: 'grid', gap: '8px' }}>
                {b.sessions.map((s) => <SessionDetails key={s.title} s={s} />)}
              </div>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

function SessionDetails({ s }) {
  const people = (s.talent || []).map((n) => talentByName[n]).filter(Boolean);
  return (
    <details style={{ ...card, background: 'rgba(255,242,219,0.04)' }}>
      <summary style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 14px', minHeight: '52px' }}>
        <div style={{ flex: 1 }}>
          <DraftTag item={s} />
          <div style={{ fontFamily: font.body, fontWeight: 600, fontSize: '16px', color: color.cream }}>{s.title}</div>
          {(s.time || s.area) && <div style={{ ...small, marginTop: '2px' }}>{[s.time, s.area].filter(Boolean).join(' · ')}</div>}
        </div>
        <Plus />
      </summary>
      <div style={{ padding: '0 14px 14px' }}>
        <p style={{ ...body, fontSize: '15px' }}>{s.detail}</p>
        {people.length > 0 && (
          <p style={{ ...small, marginTop: '8px', color: color.cream }}>
            With {people.map((p) => p.name).join(', ')}
          </p>
        )}
      </div>
    </details>
  );
}

// ── FAQ ──────────────────────────────────────────────────────────────────────
export function FAQList() {
  if (!faq.length) return null;
  return (
    <div style={{ display: 'grid', gap: '10px' }}>
      {faq.map((f) => (
        <details key={f.q} style={{ ...card }}>
          <summary style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px 18px', minHeight: '56px' }}>
            <span style={{ flex: 1, fontWeight: 600, fontSize: '16px', color: color.cream }}>
              <DraftTag item={f} /> {f.q}
            </span>
            <Plus />
          </summary>
          <p style={{ ...body, padding: '0 18px 18px', fontSize: '15px' }}>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function TextLink({ to, children }) {
  return (
    <Link to={to} className="ml-link" style={{ ...body, color: color.cream, fontWeight: 600, display: 'inline-flex', alignItems: 'center', minHeight: '44px' }}>
      {children}
    </Link>
  );
}
