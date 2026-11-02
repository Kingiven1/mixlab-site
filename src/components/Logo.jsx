import { asset } from '../lib/content';

// The approved white Mix Lab logo — one file, used everywhere.
// Replace /public/img/mix-lab-logo-white.png with the original artwork file
// (same name) and every page updates.
export default function Logo({ height = 48, style }) {
  return (
    <img
      src={asset('/img/mix-lab-logo-white.png')}
      alt="The Mix Lab"
      width={Math.round(height * 1.312)}
      height={height}
      style={{ height, width: 'auto', display: 'block', ...style }}
    />
  );
}
