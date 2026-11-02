import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RegisterButton from './RegisterButton';
import { event } from '../lib/content';
import { color, font } from '../styles/tokens';

// Phone-only bottom bar. The body gets matching bottom padding (index.css) so
// it never covers content, and it steps aside when the Register section or
// footer is on screen.
export default function StickyRegister() {
  const [hidden, setHidden] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    document.body.classList.add('has-sticky');
    const targets = ['register', 'site-footer'].map((id) => document.getElementById(id)).filter(Boolean);
    if (!targets.length || !('IntersectionObserver' in window)) return;
    const visible = new Set();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
      setHidden(visible.size > 0);
    }, { threshold: 0.05 });
    targets.forEach((t) => io.observe(t));
    return () => { io.disconnect(); setHidden(false); };
  }, [pathname]);

  return (
    <div
      className="ml-mobile-only"
      aria-hidden={hidden}
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 40,
        padding: '12px 16px calc(12px + env(safe-area-inset-bottom))',
        background: 'rgba(26,3,8,0.96)',
        borderTop: `1px solid ${color.line}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '12px',
        transform: hidden ? 'translateY(110%)' : 'none',
        transition: 'transform .25s ease',
      }}
    >
      <div style={{ fontFamily: font.display, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', lineHeight: 1.05, color: color.cream, fontSize: '17px' }}>
        {event.dateShort}
        <div style={{ color: color.coral, fontSize: '14px' }}>{event.venue.name}</div>
      </div>
      <div tabIndex={hidden ? -1 : undefined}>
        <RegisterButton compact />
      </div>
    </div>
  );
}
