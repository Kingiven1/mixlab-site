import { useEffect } from 'react';
import Lineup from '../components/Lineup';
import { event } from '../lib/content';
import { color, container, section, eyebrow, h1, bodyLg } from '../styles/tokens';

// Everyone in one place, grouped by role. Data: content/participants.js + content/talent.js.
export default function LineupPage() {
  useEffect(() => { document.title = 'Lineup — The Mix Lab'; return () => { document.title = 'The Mix Lab — Miami Art Week · Dec 3, 2026'; }; }, []);
  return (
    <>
      <section style={{ background: color.bgDeep, padding: 'clamp(56px, 9vw, 112px) 0 clamp(40px, 6vw, 72px)' }}>
        <div style={container}>
          <p style={{ ...eyebrow, marginBottom: '20px' }}>Lineup · {event.context}</p>
          <h1 style={{ ...h1, fontSize: 'clamp(48px, 8.5vw, 112px)' }}>
            Who you'll<br /><span style={{ color: color.coral }}>meet.</span>
          </h1>
          <p style={{ ...bodyLg, maxWidth: '640px', marginTop: '24px' }}>
            The DJs, panelists and workshop leads bringing The Mix Lab to life.
          </p>
        </div>
      </section>
      <section style={{ ...section, paddingTop: 'clamp(40px, 6vw, 64px)' }}>
        <div style={container}>
          <Lineup />
        </div>
      </section>
    </>
  );
}
