import { DraftTag } from './DraftBanner';
import { partners, asset } from '../lib/content';
import { color, font, body, small, card, radius, eyebrow, h3 } from '../styles/tokens';

// Community Partner directory: approved listings only, Featured first in each
// category, empty categories hidden.
export default function PartnerDirectory() {
  const groups = partners.categories
    .map((c) => {
      const items = partners.listings.filter((l) => l.category === c.key);
      const ordered = [...items.filter((l) => l.placement === 'featured'), ...items.filter((l) => l.placement !== 'featured')];
      return { ...c, items: ordered };
    })
    .filter((g) => g.items.length);

  if (!groups.length) {
    return (
      <div style={{ ...card, padding: 'clamp(24px, 5vw, 40px)' }}>
        <p style={{ ...h3, fontSize: '26px' }}>Community Partners coming soon.</p>
        <p style={{ ...body, marginTop: '8px' }}>Approved local businesses and resources will be listed here before the event.</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'grid', gap: '36px' }}>
      {groups.map((g) => (
        <section key={g.key} aria-labelledby={`cat-${g.key}`}>
          <h3 id={`cat-${g.key}`} style={{ ...eyebrow, marginBottom: '14px' }}>{g.label}</h3>
          <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))' }}>
            {g.items.map((l) => <Listing key={l.name} l={l} />)}
          </div>
        </section>
      ))}
    </div>
  );
}

function Listing({ l }) {
  const featured = l.placement === 'featured';
  return (
    <article style={{ ...card, padding: featured ? '22px' : '16px', gridColumn: featured ? '1 / -1' : 'auto', borderColor: featured ? color.lineCoral : color.line }}>
      <DraftTag item={l} />
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        {l.logo && (
          <img src={asset(l.logo)} alt={`${l.name} logo`} loading="lazy"
            style={{ width: featured ? '88px' : '56px', height: featured ? '88px' : '56px', objectFit: 'contain', background: '#fff', borderRadius: radius.sm, padding: '6px', flexShrink: 0 }} />
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          {featured && <p style={{ ...small, color: color.coral, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Featured partner</p>}
          <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: featured ? '28px' : '22px', textTransform: 'uppercase', color: color.cream, lineHeight: 1, margin: 0 }}>{l.name}</p>
          <p style={{ ...body, fontSize: '15px', marginTop: '6px' }}>{l.description}</p>
          {l.offer && (
            <p style={{ ...body, fontSize: '14px', marginTop: '10px', color: color.cream, borderLeft: `3px solid ${color.coral}`, paddingLeft: '10px' }}>
              <strong>Guest offer:</strong> {l.offer}
            </p>
          )}
          {l.link && (
            <a href={l.link} target="_blank" rel="noopener noreferrer" className="ml-link" style={{ ...body, fontSize: '14px', color: color.cream, display: 'inline-flex', minHeight: '44px', alignItems: 'center' }}>
              Visit ↗
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
