import { Link } from 'react-router-dom';
import { event, hasRegistration } from '../lib/content';
import { buttonPrimary } from '../styles/tokens';

// Every Register button on the site. With a registration link it goes there;
// without one it goes to the "RSVP opening soon" section on the homepage.
export default function RegisterButton({ style, children, compact }) {
  const s = { ...buttonPrimary, ...(compact ? { minHeight: '44px', padding: '0 18px', fontSize: '17px' } : {}), ...style };
  const label = children || event.registrationLabel || 'Register';
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
