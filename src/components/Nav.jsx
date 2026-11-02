import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import RegisterButton from './RegisterButton';
import { color, font, container } from '../styles/tokens';

const LINKS = [
  { to: '/', label: 'Experience', end: true },
  { to: '/guide', label: 'Guide' },
  { to: '/partners', label: 'Partners' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const linkStyle = {
    fontFamily: font.display,
    fontWeight: 700,
    fontSize: 'clamp(16px, 4.2vw, 18px)',
    letterSpacing: '0.06em',
    textTransform: 'uppercase',
    textDecoration: 'none',
    color: color.cream,
    padding: '12px 2px',
    minHeight: '44px',
    display: 'inline-flex',
    alignItems: 'center',
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: solid || pathname !== '/' ? 'rgba(26,3,8,0.94)' : 'rgba(26,3,8,0)',
        backdropFilter: solid ? 'blur(10px)' : 'none',
        borderBottom: `1px solid ${solid ? color.line : 'transparent'}`,
        transition: 'background .25s ease, border-color .25s ease',
      }}
    >
      <div style={{ ...container, height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
        <Link to="/" aria-label="The Mix Lab — home" style={{ display: 'flex', alignItems: 'center', minHeight: '44px', flexShrink: 0 }}>
          <Logo height={44} style={{ height: 'clamp(34px, 9vw, 44px)' }} />
        </Link>

        <nav aria-label="Main" className="ml-nav" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(8px, 2.6vw, 30px)', minWidth: 0 }}>
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.end} style={linkStyle}>
              {l.label}
            </NavLink>
          ))}
          <span className="ml-desktop-only" style={{ marginLeft: '8px' }}>
            <RegisterButton compact />
          </span>
        </nav>
      </div>
    </header>
  );
}
