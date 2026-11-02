// The Mix Lab design tokens — exact deck colors. Change a value here and the
// whole site follows. Same inline-style approach as globallynk-site.

export const color = {
  bg: '#21070C',        // main burgundy background
  bgDeep: '#1A0308',    // hero / footer
  surface: '#31131A',   // alternating sections, cards
  cream: '#FFF2DB',     // primary text
  creamSoft: 'rgba(255,242,219,0.78)', // supporting text (still AA on all three burgundies)
  creamDim: 'rgba(255,242,219,0.6)',   // small print
  coral: '#FF5B5D',     // accents + primary buttons
  white: '#FFFFFF',     // logo only
  line: 'rgba(255,242,219,0.16)',
  lineCoral: 'rgba(255,91,93,0.55)',
};

export const font = {
  display: "'Barlow Condensed', 'Arial Narrow', Impact, sans-serif",
  body: "'Inter', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Arial, sans-serif",
};

export const space = { xs: '8px', sm: '16px', md: '24px', lg: '40px', xl: '64px', xxl: '104px' };

export const radius = { sm: '6px', md: '12px', pill: '999px' };

export const container = {
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 clamp(16px, 4vw, 40px)',
  boxSizing: 'border-box',
};

export const section = { padding: 'clamp(64px, 10vw, 112px) 0' };

export const eyebrow = {
  fontFamily: font.body,
  fontSize: '13px',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: color.coral,
  margin: 0,
};

export const display = {
  fontFamily: font.display,
  fontWeight: 800,
  textTransform: 'uppercase',
  lineHeight: 0.92,
  letterSpacing: '0.005em',
  color: color.cream,
  margin: 0,
};

export const h1 = { ...display, fontSize: 'clamp(52px, 9.5vw, 128px)' };
export const h2 = { ...display, fontSize: 'clamp(40px, 6.4vw, 84px)' };
export const h3 = { ...display, fontWeight: 700, fontSize: 'clamp(24px, 2.6vw, 32px)', lineHeight: 1.02 };

export const body = { fontFamily: font.body, fontSize: '16px', lineHeight: 1.6, color: color.creamSoft, margin: 0 };
export const bodyLg = { ...body, fontSize: 'clamp(18px, 1.6vw, 21px)', lineHeight: 1.55, color: color.cream };
export const small = { ...body, fontSize: '13px', color: color.creamDim };

const btnBase = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  minHeight: '48px',
  padding: '0 26px',
  borderRadius: radius.pill,
  fontFamily: font.display,
  fontWeight: 700,
  fontSize: '19px',
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  textDecoration: 'none',
  cursor: 'pointer',
  border: '2px solid transparent',
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
};

// Dark burgundy text on coral for contrast.
export const buttonPrimary = { ...btnBase, background: color.coral, color: color.bgDeep, borderColor: color.coral };
export const buttonGhost = { ...btnBase, background: 'transparent', color: color.cream, borderColor: 'rgba(255,242,219,0.45)' };

export const card = { background: color.surface, borderRadius: radius.md, border: `1px solid ${color.line}` };
