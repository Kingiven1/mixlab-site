import { useRef } from 'react';
import { event, asset } from '../lib/content';
import { color, font, buttonGhost, body, small, radius, eyebrow } from '../styles/tokens';

// Shows the complete flyer (never cropped) with tap-to-enlarge.
// Until event.flyer is set, the event details card stands in.
export default function Flyer() {
  const dlg = useRef(null);
  const facts = [
    ['Date', event.dateLabel],
    ['Hours', event.hoursLabel],
    ['Where', `${event.venue.name}, ${event.venue.neighborhood}`],
    ['Presented by', event.presentedBy.join(', ').replace(/, ([^,]*)$/, ' & $1')],
    ['Workshops', 'Complimentary intro DJ workshops — no experience required'],
  ].filter(([, v]) => v);

  const details = (
    <dl style={{ margin: 0, display: 'grid', gap: '18px' }}>
      {facts.map(([k, v]) => (
        <div key={k}>
          <dt style={{ ...eyebrow, fontSize: '12px' }}>{k}</dt>
          <dd style={{ margin: '4px 0 0', fontFamily: font.display, fontWeight: 700, textTransform: 'uppercase', fontSize: 'clamp(22px, 2.6vw, 30px)', lineHeight: 1.05, color: color.cream }}>{v}</dd>
        </div>
      ))}
    </dl>
  );

  if (!event.flyer) {
    return (
      <div className="ml-split">
        <div style={{ border: `1px solid ${color.lineCoral}`, borderRadius: radius.md, padding: 'clamp(28px, 5vw, 56px)', background: color.bgDeep }}>
          <p style={{ ...eyebrow, marginBottom: '24px' }}>{event.context}</p>
          {details}
        </div>
        <div>
          <p style={{ ...body, fontSize: '18px', color: color.cream }}>
            Save the date. The official flyer drops here soon — everything you need to know is already on this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="ml-split">
      <div>
        <button
          type="button"
          onClick={() => dlg.current?.showModal()}
          aria-label="Enlarge the event flyer"
          style={{ all: 'unset', cursor: 'zoom-in', display: 'block', width: '100%' }}
        >
          <img src={asset(event.flyer)} alt={event.flyerAlt} style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: radius.md, boxShadow: '0 30px 80px rgba(0,0,0,0.45)' }} />
        </button>
        <button type="button" onClick={() => dlg.current?.showModal()} className="ml-btn ml-ghost" style={{ ...buttonGhost, marginTop: '16px' }}>
          View full size
        </button>
      </div>
      <div>{details}</div>

      <dialog
        ref={dlg}
        onClick={(e) => { if (e.target === dlg.current) dlg.current.close(); }}
        style={{ padding: 0, border: 'none', background: 'transparent', maxWidth: '96vw', maxHeight: '96vh' }}
      >
        <style>{'dialog::backdrop{background:rgba(26,3,8,.92)}'}</style>
        <img src={asset(event.flyer)} alt={event.flyerAlt} style={{ maxWidth: '96vw', maxHeight: '88vh', width: 'auto', height: 'auto', objectFit: 'contain' }} />
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '10px' }}>
          <a href={asset(event.flyer)} download style={{ ...small, color: color.cream }}>Download</a>
          <button type="button" onClick={() => dlg.current.close()} style={{ ...buttonGhost, minHeight: '44px' }}>Close</button>
        </div>
      </dialog>
    </div>
  );
}
