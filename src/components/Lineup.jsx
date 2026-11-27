import RegisterButton from './RegisterButton';
import { participants, talentByName, event, asset } from '../lib/content';
import { color, font, eyebrow, h3, body, small, card, radius, buttonPrimary } from '../styles/tokens';

// The lineup, grouped by role. Data: content/participants.js (who's where)
// + content/talent.js (photo, role line, bio). Drafts are already filtered out.

const resolve = (list) => (list || []).map((p) => ({ ...p, t: talentByName[p.name] })).filter((p) => p.t);

function Photo({ t }) {
  const box = { width: '100%', aspectRatio: '4 / 5', borderRadius: radius.md, background: color.bgDeep, display: 'block' };
  if (!t.photo) {
    const initials = t.name.split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
    return (
      <div aria-hidden="true" style={{ ...box, display: 'flex', alignItems: 'center', justifyContent: 'center', border: `1px solid ${color.line}`, fontFamily: font.display, fontWeight: 800, fontSize: '30px', color: color.coral }}>
        {initials}
      </div>
    );
  }
  return <img src={asset(t.photo)} alt={t.name} loading="lazy" style={{ ...box, objectFit: 'cover', objectPosition: t.photoPosition || 'center' }} />;
}

function Person({ p }) {
  const { t } = p;
  const line = p.line || [t.role, t.city].filter(Boolean).join(' · ');
  return (
    <li style={{ ...card, padding: '14px', display: 'grid', gridTemplateColumns: 'clamp(92px, 26vw, 124px) 1fr', gap: '16px', alignItems: 'start' }}>
      <Photo t={t} />
      <div style={{ minWidth: 0 }}>
        {p.moderator && (
          <span style={{ display: 'inline-block', ...small, fontWeight: 700, color: color.bgDeep, background: color.coral, borderRadius: radius.pill, padding: '2px 10px', marginBottom: '8px', letterSpacing: '0.06em', textTransform: 'uppercase', fontSize: '11px' }}>
            Moderator
          </span>
        )}
        <h4 style={{ ...h3, fontSize: 'clamp(22px, 5.6vw, 26px)', margin: 0 }}>{t.name}</h4>
        {t.aka && <p style={{ ...small, color: color.creamSoft, marginTop: '2px' }}>{t.aka}</p>}
        <p style={{ ...small, color: color.coral, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600, marginTop: '6px', lineHeight: 1.4 }}>{line}</p>
        <p style={{ ...body, fontSize: '15px', lineHeight: 1.55, marginTop: '8px' }}>{t.bio}</p>
      </div>
    </li>
  );
}

function People({ list }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 440px), 1fr))', gap: '12px' }}>
      {resolve(list).map((p) => <Person key={p.name} p={p} />)}
    </ul>
  );
}

function GroupHead({ id, title, sub, intro }) {
  return (
    <div style={{ marginBottom: '20px' }}>
      <h3 id={id} style={{ fontFamily: font.display, fontWeight: 800, textTransform: 'uppercase', color: color.cream, fontSize: 'clamp(32px, 7vw, 52px)', lineHeight: 0.95, margin: 0, scrollMarginTop: '96px' }}>
        {title}{sub && <span style={{ display: 'block', color: color.coral, fontSize: '0.55em', marginTop: '6px' }}>{sub}</span>}
      </h3>
      {intro && <p style={{ ...body, marginTop: '10px', maxWidth: '640px' }}>{intro}</p>}
    </div>
  );
}

export default function Lineup() {
  const { performances, conversations, workshops } = participants;
  const gap = { marginTop: 'clamp(56px, 9vw, 88px)' };
  return (
    <div>
      {/* Quick jump links — handy on a phone */}
      <nav aria-label="Lineup sections" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '36px' }}>
        {[['performances', performances.title], ['conversations', conversations.title], ['workshop-djs', workshops.title]].map(([id, label]) => (
          <a key={id} href={`#${id}`} className="ml-btn ml-ghost" style={{ ...small, color: color.cream, border: `1px solid ${color.lineCoral}`, borderRadius: radius.pill, padding: '8px 14px', textDecoration: 'none', fontWeight: 600 }}>
            {label}
          </a>
        ))}
      </nav>

      <section aria-labelledby="performances">
        <GroupHead id="performances" title={performances.title} intro={performances.intro} />
        <People list={performances.people} />
      </section>

      <section aria-labelledby="conversations" style={gap}>
        <GroupHead id="conversations" title={conversations.title} />
        <div style={{ display: 'grid', gap: '40px' }}>
          {conversations.groups.map((g) => (
            <div key={g.title}>
              <p style={{ ...eyebrow, marginBottom: '6px' }}>{g.title}</p>
              <p style={{ ...body, color: color.cream, marginBottom: '16px', maxWidth: '640px' }}>{g.blurb}</p>
              <People list={g.people} />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="workshop-djs" style={gap}>
        <GroupHead id="workshop-djs" title={workshops.title} sub={workshops.subtitle} intro={workshops.intro} />
        <People list={workshops.people} />
        <div style={{ ...card, marginTop: '20px', padding: 'clamp(20px, 4vw, 28px)', display: 'grid', gap: '14px', justifyItems: 'start' }}>
          <p style={{ ...body, color: color.cream, fontWeight: 600 }}>Workshop seats require a separate reservation from your general event RSVP.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {event.workshopUrl && (
              <a href={event.workshopUrl} target="_blank" rel="noopener noreferrer" className="ml-btn" style={buttonPrimary}>
                {event.workshopLabel}<span aria-hidden="true">↗</span>
              </a>
            )}
            <RegisterButton style={{ background: 'transparent', color: color.cream, borderColor: 'rgba(255,242,219,0.45)' }} />
          </div>
          <p style={{ ...small }}>Choose your DJ on the next page. Every request is reviewed.</p>
        </div>
      </section>
    </div>
  );
}
