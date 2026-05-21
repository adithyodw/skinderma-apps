// Journal.jsx — Blog/articles list + full article reader
import React from 'react';
import { COPY, ARTICLES } from '../data.js';
import { Pill, Ico } from '../shared.jsx';
import { ArticleVisual } from '../visuals.jsx';

export function JournalScreen({ lang }) {
  const [active, setActive] = React.useState(null);

  if (active !== null) {
    const a = ARTICLES[active];
    const paras = (a.body && a.body[lang]) || [];
    return (
      <div style={{ paddingBottom: 24 }}>
        <div style={{ position: 'relative' }}>
          <ArticleVisual topic={a.topic} accent={a.accent} height={300}/>
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.55) 100%)' }}/>
          <button onClick={() => setActive(null)} aria-label={lang === 'en' ? 'Back to journal' : 'Kembali ke jurnal'} style={{ position: 'absolute', top: 60, left: 16, width: 40, height: 40, borderRadius: 99, background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(10px)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.arrow('#1B6B5F', 180)}</button>
          <div style={{ position: 'absolute', bottom: 18, left: 20 }}><Pill tone="cream">{a.cat[lang]}</Pill></div>
        </div>
        <div style={{ padding: '24px 20px 0' }}>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 14 }}>
            <Pill tone="gold">{a.cat[lang]}</Pill>
            <span style={{ fontSize: 11, color: 'var(--ink-soft)', display: 'flex', alignItems: 'center', gap: 5 }}>{Ico.clock('#666')} {a.read}</span>
            <span style={{ fontSize: 11, color: 'var(--ink-soft)' }}>· {a.date}</span>
          </div>
          <h1 style={{ margin: '0 0 14px', fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, color: 'var(--ink)', letterSpacing: -0.4, lineHeight: 1.15 }}>{a.title[lang]}</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: 11, paddingBottom: 22, borderBottom: '1px solid var(--line)' }}>
            <div style={{ width: 32, height: 32, borderRadius: 99, background: 'linear-gradient(135deg,#1B6B5F,#2A8E80)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 12, fontWeight: 600 }}>Y</div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink)' }}>dr. Yeyen Handoko</div>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{lang === 'en' ? 'Founder · Aesthetic Physician' : 'Pendiri · Dokter Estetika'}</div>
            </div>
          </div>

          <p style={{ margin: '20px 0 0', fontSize: 15, color: 'var(--ink-soft)', lineHeight: 1.7, fontStyle: 'italic', fontFamily: 'var(--serif)' }}>{a.excerpt[lang]}</p>
          <div style={{ margin: '24px 0', height: 1, background: 'var(--line)' }}/>

          {/* Lead paragraph */}
          {paras[0] && (
            <p style={{ margin: '0 0 18px', fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.7 }}>{paras[0]}</p>
          )}

          {/* Pull quote */}
          {a.quote && (
            <div style={{ margin: '24px 0', padding: '20px 22px', background: 'var(--cream)', borderLeft: '3px solid var(--teal)', borderRadius: '0 12px 12px 0' }}>
              <p style={{ margin: 0, fontFamily: 'var(--serif)', fontSize: 18, lineHeight: 1.45, color: 'var(--ink)', fontStyle: 'italic' }}>"{a.quote[lang]}"</p>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 10, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>— dr. Yeyen Handoko</div>
            </div>
          )}

          {/* Remaining paragraphs */}
          {paras.slice(1).map((p, i) => (
            <p key={i} style={{ margin: '0 0 18px', fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.7 }}>{p}</p>
          ))}

          {/* Closing note */}
          <div style={{ marginTop: 28, padding: '18px 20px', background: 'rgba(27,107,95,0.05)', borderRadius: 14, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
            {lang === 'en'
              ? 'This article is general education, not a substitute for an in-person medical consultation. Book a consultation with dr. Yeyen for advice specific to your skin.'
              : 'Artikel ini adalah edukasi umum, bukan pengganti konsultasi medis langsung. Buat janji dengan dr. Yeyen untuk saran khusus untuk kulit Anda.'}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: 24, background: 'var(--cream)', minHeight: '100%' }}>
      <div style={{ padding: '64px 20px 0' }}>
        <Pill tone="gold">{lang === 'en' ? 'Journal' : 'Jurnal'}</Pill>
        <h1 style={{ margin: '12px 0 8px', fontFamily: 'var(--serif)', fontSize: 34, fontWeight: 400, color: 'var(--ink)', letterSpacing: -0.5, lineHeight: 1.05 }}>
          {lang === 'en' ? <>Notes from the <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>clinic</em></> : <>Catatan dari <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>klinik</em></>}
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '0 0 32px', maxWidth: 320 }}>
          {lang === 'en' ? 'Long-form pieces on skin science, written by dr. Yeyen for our patients and the curious.' : 'Artikel panjang tentang ilmu kulit, ditulis oleh dr. Yeyen untuk pasien kami dan yang ingin tahu.'}
        </p>
      </div>

      <div onClick={() => setActive(0)} role="button" tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(0); } }}
        style={{ margin: '0 20px 20px', background: '#fff', border: '1px solid var(--line)', borderRadius: 22, overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
        <div style={{ position: 'relative', height: 180 }}>
          <ArticleVisual topic={ARTICLES[0].topic} accent={ARTICLES[0].accent} height={180}/>
          <div style={{ position: 'absolute', top: 14, left: 14 }}><Pill tone="dark">{lang === 'en' ? 'Featured' : 'Unggulan'}</Pill></div>
        </div>
        <div style={{ padding: '18px 18px 20px' }}>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
            <Pill tone="gold">{ARTICLES[0].cat[lang]}</Pill>
            <span style={{ fontSize: 10.5, color: 'var(--ink-soft)' }}>{ARTICLES[0].read} · {ARTICLES[0].date}</span>
          </div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink)', letterSpacing: -0.2, lineHeight: 1.2, marginBottom: 8 }}>{ARTICLES[0].title[lang]}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{ARTICLES[0].excerpt[lang]}</div>
        </div>
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        {ARTICLES.slice(1).map((a, i) => (
          <div key={a.id} onClick={() => setActive(i + 1)} role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setActive(i + 1); } }}
            style={{ display: 'flex', gap: 14, background: '#fff', border: '1px solid var(--line)', borderRadius: 16, overflow: 'hidden', cursor: 'pointer' }}>
            <div style={{ width: 100, flexShrink: 0 }}>
              <ArticleVisual topic={a.topic} accent={a.accent} style={{ width: '100%', height: '100%' }}/>
            </div>
            <div style={{ padding: '14px 14px 14px 0', flex: 1 }}>
              <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 6 }}>
                <span style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase' }}>{a.cat[lang]}</span>
                <span style={{ fontSize: 10, color: 'var(--ink-soft)' }}>· {a.read}</span>
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 15, color: 'var(--ink)', lineHeight: 1.25, letterSpacing: -0.1 }}>{a.title[lang]}</div>
              <div style={{ fontSize: 10.5, color: 'var(--ink-soft)', marginTop: 8 }}>{a.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
