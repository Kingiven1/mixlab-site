import { sponsors, asset } from '../lib/content';
import { color, font, eyebrow, body, card } from '../styles/tokens';

// The Mix Lab's partners, grouped by role. Data: content/sponsors.js → partnerGroups.
function PartnerLogo({ p }) {
  if (p.logo) {
    return <img src={asset(p.logo)} alt={p.name} loading="lazy" style={{ maxHeight: `${p.logoHeight || 56}px`, maxWidth: '100%', width: 'auto', display: 'block' }} />;
  }
  // Logo coming soon: show the name as a clean wordmark.
  return <span style={{ fontFamily: font.display, fontWeight: 800, fontSize: '34px', letterSpacing: '0.02em', color: color.cream, lineHeight: 1 }}>{p.name}</span>;
}

export default function PartnerList({ compact = false }) {
  const groups = sponsors.partnerGroups || [];
  if (!groups.length) return null;
  return (
    <div style={{ display: 'grid', gap: compact ? '20px' : '32px' }}>
      {groups.map((g) => (
        <div key={g.label}>
          <p style={{ ...eyebrow, marginBottom: '12px' }}>{g.label}</p>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '12px' }}>
            {g.partners.map((p) => {
              const inner = (
                <>
                  <div style={{ height: compact ? '64px' : '80px', display: 'flex', alignItems: 'center' }}><PartnerLogo p={p} /></div>
                  {!compact && p.logo && <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', color: color.cream, margin: '14px 0 0', lineHeight: 1.05 }}>{p.name}</p>}
                  {p.copy && <p style={{ ...body, fontSize: '15px', marginTop: compact ? '10px' : '6px' }}>{p.copy}</p>}
                </>
              );
              return (
                <li key={p.name} style={{ ...card, padding: compact ? '18px' : '24px' }}>
                  {p.link ? <a href={p.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}>{inner}</a> : inner}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
