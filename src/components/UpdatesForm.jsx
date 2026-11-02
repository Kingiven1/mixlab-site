import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { event } from '../lib/content';
import { color, font, radius, buttonGhost, small } from '../styles/tokens';

// Updates list — NOT registration. Writes to the existing mix_lab_interest
// table (same as the current globallynk.club/mix-lab form), so the list stays in one place.

const input = {
  width: '100%',
  minHeight: '48px',
  fontFamily: font.body,
  fontSize: '16px', // 16px stops iOS zooming in
  color: color.cream,
  background: color.bgDeep,
  border: `1px solid rgba(255,242,219,0.3)`,
  borderRadius: radius.sm,
  padding: '12px 14px',
};
const label = { display: 'block', fontSize: '14px', fontWeight: 600, color: color.cream, marginBottom: '6px' };

export default function UpdatesForm() {
  const [f, setF] = useState({ full_name: '', city: '', email: '', trap: '' });
  const [status, setStatus] = useState('idle');
  const [msg, setMsg] = useState('');
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    if (f.trap) { setStatus('success'); return; }
    if (!f.full_name.trim() || !f.city.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) {
      setStatus('error');
      setMsg('Please add your name, city and a valid email.');
      return;
    }
    if (!supabase) {
      setStatus('error');
      setMsg(`The updates list isn't connected in this preview yet. Email ${event.contactEmail} to be added.`);
      return;
    }
    setStatus('loading');
    setMsg('');
    const { error } = await supabase.from('mix_lab_interest').insert({
      full_name: f.full_name.trim(),
      dj_name: null,
      city: f.city.trim(),
      email: f.email.trim().toLowerCase(),
    });
    if (error) {
      setStatus('error');
      setMsg(error.code === '23505' ? "You're already on the list." : `Something went wrong. Please try again or email ${event.contactEmail}.`);
      return;
    }
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div role="status" style={{ padding: '20px', borderRadius: radius.md, border: `1px solid ${color.lineCoral}` }}>
        <p style={{ fontWeight: 600, color: color.cream, margin: 0 }}>You're on the updates list.</p>
        <p style={{ ...small, marginTop: '6px', fontSize: '14px' }}>
          This is not a registration. We'll email you when registration opens.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} noValidate>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '14px' }}>
        <div>
          <label htmlFor="u-name" style={label}>Full name</label>
          <input id="u-name" autoComplete="name" required value={f.full_name} onChange={set('full_name')} style={input} />
        </div>
        <div>
          <label htmlFor="u-city" style={label}>City</label>
          <input id="u-city" autoComplete="address-level2" required value={f.city} onChange={set('city')} style={input} />
        </div>
        <div>
          <label htmlFor="u-email" style={label}>Email</label>
          <input id="u-email" type="email" autoComplete="email" required value={f.email} onChange={set('email')} style={input} />
        </div>
      </div>
      <input tabIndex={-1} autoComplete="off" aria-hidden="true" value={f.trap} onChange={set('trap')} style={{ position: 'absolute', left: '-9999px' }} />
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '14px', marginTop: '16px' }}>
        <button type="submit" disabled={status === 'loading'} className="ml-btn ml-ghost" style={{ ...buttonGhost, opacity: status === 'loading' ? 0.6 : 1 }}>
          {status === 'loading' ? 'Joining…' : 'Join the updates list'}
        </button>
        <p style={{ ...small, fontSize: '13px', maxWidth: '360px' }}>
          Updates only — not a registration or RSVP. <a href={event.privacyUrl} style={{ color: color.creamSoft }}>Privacy</a>
        </p>
      </div>
      {status === 'error' && (
        <p role="alert" style={{ marginTop: '12px', color: color.coral, fontWeight: 600, fontSize: '15px' }}>{msg}</p>
      )}
    </form>
  );
}
