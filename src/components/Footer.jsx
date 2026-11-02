import { Link } from 'react-router-dom';
import Logo from './Logo';
import RegisterButton from './RegisterButton';
import { event, sponsors, asset } from '../lib/content';
import { color, font, container, small, body } from '../styles/tokens';

export default function Footer() {
  const linkStyle = { ...body, color: color.cream, textDecoration: 'none', fontSize: '15px', minHeight: '44px', display: 'inline-flex', alignItems: 'center' };
  return (
    <footer id="site-footer" style={{ background: color.bgDeep, borderTop: `1px solid ${color.line}`, padding: '64px 0 40px' }}>
      <div style={container}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '40px' }}>
          <div style={{ maxWidth: '360px' }}>
            <Logo height={80} />
            <p style={{ fontFamily: font.display, fontWeight: 700, fontSize: '22px', textTransform: 'uppercase', letterSpacing: '0.04em', color: color.cream, margin: '20px 0 4px' }}>
              {event.dateLabel}
            </p>
            <p style={{ ...body, margin: '0 0 20px' }}>{event.venue.name} · {event.venue.neighborhood}</p>
            <RegisterButton compact />
          </div>

          <nav aria-label="Footer" style={{ display: 'flex', flexDirection: 'column' }}>
            <Link to="/" style={linkStyle}>Experience</Link>
            <Link to="/guide" style={linkStyle}>Digital Experience Guide</Link>
            <Link to="/partners" style={linkStyle}>Partnerships</Link>
            <a href={`mailto:${event.contactEmail}`} style={linkStyle}>{event.contactEmail}</a>
            <a href={event.instagram} target="_blank" rel="noopener noreferrer" style={linkStyle}>Instagram · @globallynk</a>
          </nav>

          <div>
            <p style={{ ...small, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '16px' }}>Presented by</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '28px', flexWrap: 'wrap' }}>
              {sponsors.presenters.map((p) => (
                <img key={p.name} src={asset(p.logo)} alt={p.name} loading="lazy" style={{ height: p.name === 'AmpSpot' ? '24px' : '44px', width: 'auto' }} />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: `1px solid ${color.line}`, display: 'flex', flexWrap: 'wrap', gap: '8px 24px', justifyContent: 'space-between' }}>
          <p style={small}>{event.disclaimer}</p>
          <p style={small}>
            © 2026 GlobalLYNK ·{' '}
            <a href={event.privacyUrl} style={{ color: color.creamSoft }}>Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
