import { Link } from 'react-router-dom';
import { color, container, h2, body, buttonPrimary } from '../styles/tokens';

export default function NotFound() {
  return (
    <section style={{ padding: '120px 0', background: color.bg }}>
      <div style={{ ...container, textAlign: 'center' }}>
        <h1 style={h2}>Wrong track.</h1>
        <p style={{ ...body, margin: '16px 0 28px' }}>That page doesn't exist.</p>
        <Link to="/" className="ml-btn" style={buttonPrimary}>Back to The Mix Lab</Link>
      </div>
    </section>
  );
}
