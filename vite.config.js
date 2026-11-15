import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

// ──────────────────────────────────────────────────────────────────────────
// CONTENT PLUGIN
// Everything you edit lives in /content. Pages import it as `virtual:content`.
// Only entries marked `status: 'published'` make it into the public site —
// drafts never reach the browser, not even hidden. To see drafts locally, run
// `npm run dev:drafts` (they show with a DRAFT badge; never deploy that way).
// ──────────────────────────────────────────────────────────────────────────
const CONTENT_FILES = ['event', 'talent', 'schedule', 'partners', 'sponsors', 'faq', 'evolution'];
const VIRTUAL = 'virtual:content';
const RESOLVED = '\0' + VIRTUAL;

function contentPlugin() {
  const showDrafts = process.env.SHOW_DRAFTS === '1';
  const dir = path.resolve('content');
  return {
    name: 'mixlab-content',
    resolveId(id) { if (id === VIRTUAL) return RESOLVED; },
    async load(id) {
      if (id !== RESOLVED) return;
      const out = {};
      for (const name of CONTENT_FILES) {
        const file = path.join(dir, `${name}.js`);
        this.addWatchFile(file);
        const mod = await import(`${pathToFileURL(file).href}?t=${Date.now()}`);
        out[name] = filterDrafts(mod.default, showDrafts);
        // Photos still waiting on permission never reach the public site.
        // The evolution-review branch (private review link) shows them, tagged.
        const reviewBuild = process.env.VITE_SHOW_PENDING_IMAGES === '1' || process.env.VERCEL_GIT_COMMIT_REF === 'evolution-review';
        if (name === 'evolution' && !reviewBuild) {
          out[name].eras.forEach((e) => { if (e.image) delete e.image.reviewSrc; });
        }
      }
      out.showingDrafts = showDrafts;
      return `export default ${JSON.stringify(out)};`;
    },
  };
}

// Removes any object with status other than 'published' (recursively in arrays).
function filterDrafts(value, showDrafts) {
  if (Array.isArray(value)) {
    return value
      .filter((v) => !(v && typeof v === 'object' && 'status' in v) || v.status === 'published' || showDrafts)
      .map((v) => filterDrafts(v, showDrafts));
  }
  if (value && typeof value === 'object') {
    const o = {};
    for (const [k, v] of Object.entries(value)) o[k] = filterDrafts(v, showDrafts);
    return o;
  }
  return value;
}

export default defineConfig({
  plugins: [react(), contentPlugin()],
  base: process.env.VITE_BASE || '/',
});
