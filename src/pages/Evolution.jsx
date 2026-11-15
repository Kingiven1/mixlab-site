import { useEffect, useState } from 'react';
import { evolution, asset, event } from '../lib/content';
import { color, font, container, eyebrow, h1, h2, body, bodyLg, small, card, radius, buttonPrimary, buttonGhost } from '../styles/tokens';

// THE EVOLUTION OF DJING — public exhibit page behind the photo-wall QR codes.
// All copy, credits, anchors and listening links live in content/evolution.js.
// Each QR points at <siteUrl>/evolution-of-djing#<anchor>.

const NAV_H = 72;      // main sticky header (Nav.jsx)
const CHIPS_H = 61;    // era jump bar below it
const SCROLL_OFFSET = NAV_H + CHIPS_H + 12;

const eras = evolution.eras;
const eraIds = new Set(eras.map((e) => e.anchor));

function pageUrl(anchor) {
  const base = `${window.location.origin}${window.location.pathname}`;
  return anchor ? `${base}#${anchor}` : base;
}

function scrollToEra(id, behavior = 'instant') {
  const el = document.getElementById(id);
  if (!el) return false;
  const top = el.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

// Fresh visit to /evolution-of-djing#<era>: land on that era's heading, and keep
// it there while fonts and images settle (sizes are reserved, so this is a
// safety net). Stops correcting as soon as the visitor scrolls themselves.
function useInitialEraScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!eraIds.has(id)) return;
    let userMoved = false;
    const stop = () => { userMoved = true; };
    window.addEventListener('wheel', stop, { passive: true });
    window.addEventListener('touchstart', stop, { passive: true });
    window.addEventListener('keydown', stop);
    const go = () => { if (!userMoved) scrollToEra(id); };
    go();
    requestAnimationFrame(go);
    document.fonts?.ready?.then(go);
    if (document.readyState === 'complete') setTimeout(go, 50);
    else window.addEventListener('load', go, { once: true });
    const t = setTimeout(go, 600);
    // Move keyboard / screen-reader focus to the era heading too.
    document.getElementById(`${id}-h`)?.focus({ preventScroll: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener('wheel', stop);
      window.removeEventListener('touchstart', stop);
      window.removeEventListener('keydown', stop);
      window.removeEventListener('load', go);
    };
  }, []);
}

// Same-page hash changes (back/forward, a shared link opened in this tab).
function useHashChangeScroll() {
  useEffect(() => {
    const onHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (eraIds.has(id)) scrollToEra(id);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
}

function usePageMeta() {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${evolution.title} — The Mix Lab`;
    const set = (selector, attr, value) => {
      const el = document.querySelector(selector);
      if (!el) return () => {};
      const prev = el.getAttribute(attr);
      el.setAttribute(attr, value);
      return () => el.setAttribute(attr, prev);
    };
    const canonical = `${(event.siteUrl || window.location.origin).replace(/\/$/, '')}${evolution.path}`;
    const restores = [
      set('meta[name="description"]', 'content', evolution.intro[0]),
      set('link[rel="canonical"]', 'href', canonical),
      set('meta[property="og:url"]', 'content', canonical),
      set('meta[property="og:title"]', 'content', `${evolution.title} — The Mix Lab`),
      set('meta[property="og:description"]', 'content', evolution.intro[0]),
    ];
    return () => { document.title = prevTitle; restores.forEach((r) => r()); };
  }, []);
}

function ShareButton({ anchor, label, title, ghost = true }) {
  const [copied, setCopied] = useState(false);
  const onClick = async () => {
    const url = pageUrl(anchor);
    try {
      if (navigator.share) { await navigator.share({ title, url }); return; }
    } catch (e) { if (e && e.name === 'AbortError') return; }
    try { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 2200); }
    catch { window.prompt('Copy this link', url); }
  };
  const style = ghost
    ? { ...buttonGhost, minHeight: '44px', padding: '0 18px', fontSize: '16px' }
    : { ...buttonPrimary, minHeight: '48px' };
  return (
    <button type="button" onClick={onClick} className={`ml-btn${ghost ? ' ml-ghost' : ''}`} style={style}>
      {copied ? 'Link copied' : label}
      <span role="status" aria-live="polite" style={{ position: 'absolute', left: '-9999px' }}>{copied ? 'Link copied to clipboard' : ''}</span>
    </button>
  );
}

function EraChips() {
  const onClick = (e, id) => {
    e.preventDefault();
    window.history.replaceState(null, '', `#${id}`);
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    scrollToEra(id, reduce ? 'instant' : 'smooth');
    document.getElementById(`${id}-h`)?.focus({ preventScroll: true });
  };
  return (
    <nav aria-label="Jump to an era" style={{ position: 'sticky', top: `${NAV_H}px`, zIndex: 30, background: color.bg, borderBottom: `1px solid ${color.line}` }}>
      <div style={container} className="ml-scroll-x">
        {eras.map((e) => (
          <a key={e.anchor} href={`#${e.anchor}`} onClick={(ev) => onClick(ev, e.anchor)}
            style={{ flexShrink: 0, minHeight: '44px', display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '0 14px', margin: '8px 0', borderRadius: radius.pill, border: `1px solid ${color.line}`, color: color.cream, textDecoration: 'none', fontWeight: 600, fontSize: '14px', whiteSpace: 'nowrap' }}>
            <span style={{ fontFamily: font.display, fontWeight: 800, color: color.coral, fontSize: '17px' }}>{e.n}</span>
            {e.dates}
          </a>
        ))}
      </div>
    </nav>
  );
}

function EraImage({ era, eager }) {
  const img = era.image;
  if (img && img.status === 'published' && img.src) {
    return (
      <figure style={{ margin: 0 }}>
        <img
          src={asset(img.src)}
          srcSet={img.srcLarge ? `${asset(img.src)} 640w, ${asset(img.srcLarge)} 960w` : undefined}
          sizes="(min-width: 900px) 480px, 100vw"
          width={img.width}
          height={img.height}
          alt={img.alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={{ width: '100%', height: 'auto', aspectRatio: `${img.width} / ${img.height}`, objectFit: 'cover', borderRadius: radius.md, background: color.surface }}
        />
        <figcaption style={{ ...small, marginTop: '10px', color: color.creamSoft, lineHeight: 1.5 }}>
          {img.credit}
          {img.laterNote && <><br /><strong style={{ color: color.cream, fontWeight: 600 }}>{img.laterNote}</strong></>}
          {img.sourceUrl && <>{' '}<a href={img.sourceUrl} target="_blank" rel="noopener noreferrer" className="ml-link" style={{ color: color.cream }}>Image source<span aria-hidden="true"> ↗</span></a></>}
        </figcaption>
      </figure>
    );
  }
  // Text-led panel: the photo is on the wall, not on the web (yet).
  return (
    <aside aria-label="About the photo on the wall" style={{ ...card, padding: 'clamp(20px, 4vw, 28px)', borderColor: color.lineCoral }}>
      <p style={{ ...eyebrow, marginBottom: '10px' }}>On the wall</p>
      <p style={{ ...body, color: color.cream, fontSize: '16px' }}>{img?.wallCredit}</p>
      {img?.wallNote && <p style={{ ...body, fontSize: '15px', marginTop: '8px' }}>{img.wallNote}</p>}
      {img?.sourceUrl && (
        <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer" className="ml-link" style={{ ...body, fontSize: '15px', color: color.cream, display: 'inline-flex', alignItems: 'center', minHeight: '44px', marginTop: '4px' }}>
          Photo source<span aria-hidden="true">&nbsp;↗</span>
        </a>
      )}
    </aside>
  );
}

function Listening({ era }) {
  if (!era.listening?.length && !era.playlistUrl) return null;
  return (
    <div style={{ marginTop: '28px' }}>
      <h3 style={{ ...eyebrow, marginBottom: '12px' }}>Listen</h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '10px' }}>
        {era.listening.map((l) => (
          <li key={l.title} style={{ ...card, padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 220px' }}>
              <p style={{ margin: 0, fontWeight: 600, color: color.cream, fontSize: '16px', lineHeight: 1.35 }}>
                “{l.title}” <span style={{ fontWeight: 400, color: color.creamSoft }}>· {l.artist} · {l.year}</span>
              </p>
              <p style={{ ...body, fontSize: '15px', marginTop: '4px' }}>{l.why}</p>
            </div>
            {l.url && (
              <a href={l.url} target="_blank" rel="noopener noreferrer" className="ml-btn ml-ghost" aria-label={`Listen to ${l.title} by ${l.artist} (opens in a new tab)`}
                style={{ ...buttonGhost, minHeight: '44px', padding: '0 16px', fontSize: '16px' }}>
                Listen<span aria-hidden="true">↗</span>
              </a>
            )}
          </li>
        ))}
      </ul>
      {era.playlistUrl && (
        <a href={era.playlistUrl} target="_blank" rel="noopener noreferrer" className="ml-btn" style={{ ...buttonPrimary, marginTop: '14px', minHeight: '48px' }}>
          Open the {era.dates} playlist<span aria-hidden="true">↗</span>
        </a>
      )}
    </div>
  );
}

function Era({ era, isTarget }) {
  return (
    <section id={era.anchor} aria-labelledby={`${era.anchor}-h`}
      style={{ scrollMarginTop: `${SCROLL_OFFSET}px`, padding: 'clamp(28px, 6vw, 72px) 0', borderTop: `1px solid ${color.lineCoral}` }}>
      <div style={container}>
        <p style={{ ...eyebrow, display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '10px' }}>
          <span style={{ fontFamily: font.display, fontWeight: 800, fontSize: '28px', letterSpacing: 0, lineHeight: 1 }}>{era.n}</span>
          <span style={{ fontSize: '14px' }}>{era.dates}</span>
        </p>
        <h2 id={`${era.anchor}-h`} tabIndex={-1} style={{ ...h2, fontSize: 'clamp(38px, 7vw, 76px)', outline: 'none' }}>{era.title}</h2>
        <p style={{ ...bodyLg, marginTop: '16px', maxWidth: '760px' }}>{era.blurb}</p>

        <div className="ml-split" style={{ alignItems: 'start', marginTop: 'clamp(24px, 4vw, 40px)' }}>
          <div style={{ maxWidth: '480px', width: '100%' }}>
            <EraImage era={era} eager={isTarget} />
          </div>
          <div>
            {era.story.map((p, i) => (
              <p key={i} style={{ ...body, fontSize: '17px', lineHeight: 1.65, marginTop: i ? '16px' : 0 }}>{p}</p>
            ))}
            <Listening era={era} />
            <div style={{ marginTop: '28px' }}>
              <h3 style={{ ...eyebrow, color: color.creamDim, marginBottom: '6px' }}>Sources</h3>
              <ul style={{ margin: 0, paddingLeft: '18px', display: 'grid', gap: '2px' }}>
                {era.sources.map((s) => (
                  <li key={s.url} style={{ ...small, color: color.creamSoft }}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer" className="ml-link" style={{ color: color.creamSoft, display: 'inline-block', padding: '6px 0' }}>{s.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ marginTop: '20px' }}>
              <ShareButton anchor={era.anchor} label="Share this era" title={`${era.title} (${era.dates}) — ${evolution.title}`} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Evolution() {
  usePageMeta();
  useInitialEraScroll();
  useHashChangeScroll();
  const [target] = useState(() => decodeURIComponent(window.location.hash.slice(1)));

  return (
    <>
      <header style={{ background: color.bgDeep, padding: 'clamp(36px, 8vw, 96px) 0 clamp(28px, 5vw, 56px)' }}>
        <div style={container}>
          <p style={{ ...eyebrow, marginBottom: '14px' }}>{evolution.kicker}</p>
          <h1 style={{ ...h1, fontSize: 'clamp(48px, 10vw, 120px)' }}>
            The Evolution<br /><span style={{ color: color.coral }}>of DJing</span>
          </h1>
          {evolution.intro.map((p, i) => (
            <p key={i} style={{ ...(i ? body : bodyLg), fontSize: i ? '17px' : undefined, marginTop: i ? '12px' : '20px', maxWidth: '720px' }}>{p}</p>
          ))}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
            <ShareButton label="Share the timeline" title={`${evolution.title} — The Mix Lab`} ghost={false} />
          </div>
          <ol aria-label="All eras" style={{ listStyle: 'none', padding: 0, margin: '32px 0 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '0 24px', borderTop: `1px solid ${color.line}` }}>
            {eras.map((e) => (
              <li key={e.anchor} style={{ borderBottom: `1px solid ${color.line}` }}>
                <a href={`#${e.anchor}`} onClick={(ev) => { ev.preventDefault(); window.history.replaceState(null, '', `#${e.anchor}`); scrollToEra(e.anchor, window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'); document.getElementById(`${e.anchor}-h`)?.focus({ preventScroll: true }); }}
                  style={{ display: 'flex', gap: '12px', alignItems: 'baseline', padding: '12px 0', minHeight: '44px', textDecoration: 'none', color: color.cream }}>
                  <span style={{ fontFamily: font.display, fontWeight: 800, color: color.coral, fontSize: '20px', minWidth: '28px' }}>{e.n}</span>
                  <span>
                    <span style={{ display: 'block', fontWeight: 600, fontSize: '16px' }}>{e.title}</span>
                    <span style={{ ...small, color: color.creamSoft }}>{e.dates}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </header>

      <EraChips />

      {eras.map((e) => <Era key={e.anchor} era={e} isTarget={e.anchor === target} />)}

      <section style={{ padding: '40px 0 64px', borderTop: `1px solid ${color.lineCoral}` }}>
        <div style={container}>
          <p style={{ ...small, maxWidth: '720px' }}>{evolution.sourcesNote}</p>
        </div>
      </section>
    </>
  );
}
