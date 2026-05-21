// shared.jsx — icon set, image primitives, brand marks, UI primitives
import React from 'react';
import { SOCIAL } from './data.js';

// ─────────────────────────────────────────────────────────────
// ICONS — minimalist stroke
// ─────────────────────────────────────────────────────────────
export const Ico = {
  home: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M3 9l8-6 8 6v10a1 1 0 01-1 1h-4v-7H8v7H4a1 1 0 01-1-1V9z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  spark: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 2v4M11 16v4M2 11h4M16 11h4M4.5 4.5l2.8 2.8M14.7 14.7l2.8 2.8M4.5 17.5l2.8-2.8M14.7 7.3l2.8-2.8" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  user: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="7.5" r="3.5" stroke={c} strokeWidth="1.5"/><path d="M4 19c1.2-3.4 4-5 7-5s5.8 1.6 7 5" stroke={c} strokeWidth="1.5" strokeLinecap="round"/></svg>,
  book: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M4 4h6a2 2 0 012 2v13a2 2 0 00-2-2H4V4zM18 4h-6a2 2 0 00-2 2v13a2 2 0 012-2h6V4z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  pin: (c) => <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true"><path d="M11 20s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z" stroke={c} strokeWidth="1.5" strokeLinejoin="round"/><circle cx="11" cy="8" r="2.5" stroke={c} strokeWidth="1.5"/></svg>,
  whatsapp: (c) => <svg width="18" height="18" viewBox="0 0 24 24" fill={c} aria-hidden="true"><path d="M17.5 14.4l-.4-.2c-.3-.1-1.6-.8-1.9-.9-.3-.1-.4-.1-.6.1l-.8 1c-.2.2-.3.3-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.7-1.4-1.6-1.6-1.9-.2-.3 0-.4.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5L8.5 6.3c-.2-.5-.5-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.5s1 2.9 1.2 3.1c.2.2 2.1 3.3 5.2 4.6 2.6 1 3.1.8 3.7.8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5l-.7-.3zM12 22a10 10 0 01-5-1.4L2 22l1.5-4.8A10 10 0 1112 22z"/></svg>,
  star: (c) => <svg width="14" height="14" viewBox="0 0 14 14" fill={c} aria-hidden="true"><path d="M7 1l1.85 3.75L13 5.4l-3 2.9.7 4.1L7 10.45 3.3 12.4 4 8.3 1 5.4l4.15-.65L7 1z"/></svg>,
  arrow: (c, r = 0) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ transform: `rotate(${r}deg)` }} aria-hidden="true"><path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  check: (c) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7.5L6 11l5.5-8" stroke={c} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  clock: (c) => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><circle cx="7" cy="7" r="5.5" stroke={c} strokeWidth="1.3"/><path d="M7 4v3l2 1.5" stroke={c} strokeWidth="1.3" strokeLinecap="round"/></svg>,
  globe: (c) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><circle cx="8" cy="8" r="6.5" stroke={c} strokeWidth="1.3"/><path d="M1.5 8h13M8 1.5c2 2 3 4 3 6.5s-1 4.5-3 6.5c-2-2-3-4-3-6.5s1-4.5 3-6.5z" stroke={c} strokeWidth="1.3"/></svg>,
  close: (c) => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M4 4l10 10M14 4L4 14" stroke={c} strokeWidth="1.8" strokeLinecap="round"/></svg>,
  phone: (c) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 2.5h2.5l1.5 4-2 1c1 2 2.5 3.5 4.5 4.5l1-2 4 1.5V14a1.5 1.5 0 01-1.5 1.5C7 15.5 .5 9 .5 2.5 .5 1.7 1.2 1 2 1L3 2.5z" transform="translate(0.5 0)" stroke={c} strokeWidth="1.3" strokeLinejoin="round" fill="none"/></svg>,
  share: (c) => <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M8 1.5v9M8 1.5L5 4.5M8 1.5L11 4.5M2.5 8.5v5a1 1 0 001 1h9a1 1 0 001-1v-5" stroke={c} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  instagram: (c, size = 18) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" stroke={c} strokeWidth="1.6"/><circle cx="12" cy="12" r="4" stroke={c} strokeWidth="1.6"/><circle cx="17.5" cy="6.5" r="1.1" fill={c}/></svg>,
  facebook: (c, size = 18) => <svg width={size} height={size} viewBox="0 0 24 24" fill={c} aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.1h-3.1V8.9c0-.9.25-1.5 1.55-1.5h1.65V4.6c-.3-.04-1.3-.13-2.45-.13-2.43 0-4.1 1.48-4.1 4.2v2.23H7.5V14h2.65v8h3.35z"/></svg>,
  tiktok: (c, size = 18) => <svg width={size} height={size} viewBox="0 0 24 24" fill={c} aria-hidden="true"><path d="M19.6 8.8c-1.85 0-3.55-.75-4.8-1.95V15.5c0 3.7-3 6.7-6.7 6.7s-6.7-3-6.7-6.7 3-6.7 6.7-6.7c.4 0 .8.04 1.2.1v3.4c-.4-.1-.8-.2-1.2-.2-1.85 0-3.35 1.5-3.35 3.35s1.5 3.35 3.35 3.35 3.4-1.45 3.4-3.3L11.5 1.8h3.3c.3 2.5 2.3 4.45 4.8 4.55v2.45z"/></svg>,
  arrowExt: (c) => <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M2 9L9 2m0 0H4m5 0v5" stroke={c} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
};

// ─────────────────────────────────────────────────────────────
// PHOTO — responsive img with CLS-safe aspect box (Vite analogue of next/image)
// ─────────────────────────────────────────────────────────────
const DEFAULT_SIZES = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';

export function Photo({
  src,
  alt = '',
  height,
  width,
  ratio,
  sizes = DEFAULT_SIZES,
  priority = false,
  accent,
  overlay,
  children,
  style = {},
  objectPosition = 'center',
}) {
  const [err, setErr] = React.useState(false);
  const fb = accent
    ? `linear-gradient(135deg, ${accent[0]} 0%, ${accent[1]} 100%)`
    : 'linear-gradient(135deg, #E8E0D2 0%, #D4C5A8 100%)';
  const aspectRatio = ratio || (width && height ? `${width} / ${height}` : undefined);

  return (
    <div
      className={priority ? 'photo-frame photo-frame--priority' : 'photo-frame'}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: fb,
        height,
        aspectRatio,
        width: width && !height ? width : undefined,
        ...style,
      }}
    >
      {!err && src && (
        <img
          className="photo-frame__img"
          src={src}
          alt={alt}
          sizes={sizes}
          width={width}
          height={height}
          onError={() => setErr(true)}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding="async"
          style={{ objectPosition }}
        />
      )}
      {overlay && (
        <div className="photo-frame__overlay" style={{ background: overlay }}/>
      )}
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// MONOGRAM — designed portrait placeholder with initials
// ─────────────────────────────────────────────────────────────
export function Monogram({ name, accent = ['#E8E0D2', '#D4C5A8'], ink = '#0F4D44', height, ratio, style = {}, children }) {
  const initials = (name || '')
    .replace(/^dr\.\s*/i, '')
    .split(/\s+/).slice(0, 2)
    .map(s => s[0] || '')
    .join('')
    .toUpperCase();
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: `linear-gradient(135deg, ${accent[0]} 0%, ${accent[1]} 100%)`,
      height, aspectRatio: ratio, ...style,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0, opacity: 0.22 }} aria-hidden="true">
        <path d="M200 0 Q40 30 30 200 Q140 170 200 0z" fill={ink}/>
        <path d="M40 180 Q90 130 180 30" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.5"/>
      </svg>
      <svg width="100%" height="100%" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid meet"
           style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        <circle cx="100" cy="100" r="58" fill="none" stroke={ink} strokeWidth="0.6" opacity="0.35"/>
      </svg>
      <div style={{
        position: 'absolute', inset: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--serif)', fontStyle: 'italic',
        fontSize: '4em', color: ink, opacity: 0.85,
        letterSpacing: '-0.04em',
      }}>{initials}</div>
      {children}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BRAND MARK — leaf in oval
// ─────────────────────────────────────────────────────────────
export function Logo({ size = 28, color = '#1B6B5F' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <ellipse cx="20" cy="20" rx="18" ry="18" fill="none" stroke={color} strokeWidth="1.4"/>
      <path d="M12 26 C 12 16, 20 12, 28 12 C 28 22, 22 28, 14 28 Z" fill={color} opacity="0.95"/>
      <path d="M14 26 Q 20 22, 28 14" stroke="#fff" strokeWidth="0.9" fill="none" opacity="0.6"/>
    </svg>
  );
}

export function Wordmark({ color = '#1B6B5F', sub = true }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
      <Logo size={28} color={color}/>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500, color, letterSpacing: 1.2 }}>SKINDERMA</span>
        {sub && <span style={{ fontSize: 8.5, color: 'var(--ink-soft)', letterSpacing: 1.5, marginTop: 3, fontWeight: 500 }}>AESTHETIC CLINIC</span>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PRIMITIVES
// ─────────────────────────────────────────────────────────────
export function Pill({ children, tone = 'teal' }) {
  const tones = {
    teal: { bg: 'rgba(27,107,95,0.08)', fg: '#1B6B5F' },
    gold: { bg: 'rgba(184,153,104,0.13)', fg: '#8E7341' },
    cream: { bg: 'rgba(255,255,255,0.7)', fg: '#2C2C2C' },
    dark: { bg: 'rgba(0,0,0,0.7)', fg: '#fff' },
  };
  const t = tones[tone];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 4,
      fontSize: 10.5, fontWeight: 600, letterSpacing: 0.6,
      textTransform: 'uppercase', color: t.fg, background: t.bg,
      padding: '5px 9px', borderRadius: 99, whiteSpace: 'nowrap',
    }}>{children}</span>
  );
}

export function StarRow({ n = 5 }) {
  return <div style={{ display: 'flex', gap: 2 }} role="img" aria-label={`${n} out of 5 stars`}>{Array.from({ length: n }).map((_, i) => <span key={i}>{Ico.star('#B89968')}</span>)}</div>;
}

export function SectionHead({ eyebrow, title, action, onAction }) {
  return (
    <div style={{ padding: '0 20px', marginBottom: 16 }}>
      {eyebrow && <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.6, textTransform: 'uppercase', fontWeight: 600, marginBottom: 6 }}>{eyebrow}</div>}
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
        <h2 style={{ margin: 0, fontFamily: 'var(--serif)', fontSize: 26, fontWeight: 400, color: 'var(--ink)', letterSpacing: -0.3, lineHeight: 1.15 }}>{title}</h2>
        {action && (
          <button onClick={onAction} style={{
            background: 'none', border: 'none', color: 'var(--teal)', fontSize: 12.5,
            fontWeight: 600, cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', gap: 4,
          }}>{action} {Ico.arrow('#1B6B5F')}</button>
        )}
      </div>
    </div>
  );
}

export function SocialBar({ tone = 'light', showHandles = false, size = 38 }) {
  const dark = tone === 'dark';
  return (
    <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
      {SOCIAL.map(s => (
        <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={`${s.label} — ${s.handle}`} style={{
          display: 'inline-flex', alignItems: 'center', gap: showHandles ? 10 : 0,
          padding: showHandles ? '8px 14px 8px 10px' : 0,
          width: showHandles ? 'auto' : size, height: size,
          justifyContent: 'center',
          borderRadius: 99,
          background: dark ? 'rgba(255,255,255,0.1)' : '#fff',
          border: dark ? '1px solid rgba(255,255,255,0.18)' : '1px solid var(--line)',
          color: dark ? '#fff' : 'var(--ink)', textDecoration: 'none',
          fontSize: 12.5, fontWeight: 500,
          transition: 'transform 0.15s ease',
        }}>
          <div style={{ width: size - 14, height: size - 14, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {Ico[s.id](dark ? '#fff' : 'var(--teal)', 18)}
          </div>
          {showHandles && <span style={{ fontSize: 12, color: dark ? 'rgba(255,255,255,0.85)' : 'var(--ink-soft)' }}>{s.handle}</span>}
        </a>
      ))}
    </div>
  );
}
