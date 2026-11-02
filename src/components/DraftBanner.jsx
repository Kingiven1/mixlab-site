import { showingDrafts } from '../lib/content';

// Only appears when running `npm run dev:drafts` locally.
export default function DraftBanner() {
  if (!showingDrafts) return null;
  return (
    <div style={{ background: '#FFF2DB', color: '#1A0308', textAlign: 'center', padding: '8px 16px', fontSize: '13px', fontWeight: 600 }}>
      DRAFT PREVIEW — includes unpublished entries. Never deploy this build.
    </div>
  );
}

export function DraftTag({ item }) {
  if (!item || !item.status || item.status === 'published') return null;
  return (
    <span style={{ display: 'inline-block', background: '#FFF2DB', color: '#1A0308', fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', marginBottom: '8px' }}>
      DRAFT
    </span>
  );
}
