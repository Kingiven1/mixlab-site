import { Link } from 'react-router-dom';
import { event, hasRegistration } from '../lib/content';
import { buttonPrimary } from '../styles/tokens';

// Every attendance button on the site. With the Luma link it says "Request an invitation"
// and goes there; without one it says "Get updates" and goes to the homepage updates form.
export default function RegisterButton({ style, children, compact }) {
  const s = { ...buttonPrimary, ...(compact ? { minHeight: '44px', padding: '0 18px', fontSize: '17px' } : {}), ...style };
  const label = children || (hasRegistration ? event.registrationLabel : 'Get updates');
  if (hasRegistration) {
    return (
      <a href={event.registrationUrl} target="_blank" rel="noopener noreferrer" className="ml-btn" style={s}>
        {label}<span aria-hidden="true">↗</span>
      </a>
    );
  }
  return (
    <Link to="/#register" className="ml-btn" style={s}>
      {label}
    </Link>
  );
}
