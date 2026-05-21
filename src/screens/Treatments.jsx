// Treatments.jsx — full treatments list + detail sheet
import React from 'react';
import { COPY, TREATMENTS } from '../data.js';
import { Pill, Ico } from '../shared.jsx';
import { TreatmentVisual } from '../visuals.jsx';

export function TreatmentsScreen({ lang, onOpenTreatment, onBook }) {
  const [filter, setFilter] = React.useState('all');
  const t = COPY[lang];

  const filters = [
    { id: 'all', en: 'All', id_l: 'Semua' },
    { id: 'skincare', en: 'Skincare', id_l: 'Skincare' },
    { id: 'injectables', en: 'Injectables', id_l: 'Suntikan' },
    { id: 'laser', en: 'Laser', id_l: 'Laser' },
    { id: 'rejuvenation', en: 'Rejuvenation', id_l: 'Peremajaan' },
    { id: 'peels', en: 'Peels', id_l: 'Peeling' },
  ];

  const visible = filter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter((tr) => tr.category === filter);

  return (
    <div style={{ paddingBottom: 24, background: 'var(--cream)', minHeight: '100%' }}>
      <div style={{ padding: '64px 20px 0' }}>
        <Pill tone="gold">{lang === 'en' ? 'Treatments' : 'Perawatan'}</Pill>
        <h1 style={{ margin: '12px 0 8px', fontFamily: 'var(--serif)', fontSize: 34, fontWeight: 400, color: 'var(--ink)', letterSpacing: -0.5, lineHeight: 1.05 }}>
          {lang === 'en' ? <>Evidence-based <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>protocols</em></> : <>Protokol berbasis <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>bukti</em></>}
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '0 0 22px', maxWidth: 320 }}>
          {lang === 'en'
            ? 'Each treatment is calibrated to your skin type, condition, and goals — supervised by dr. Yeyen.'
            : 'Setiap perawatan disesuaikan dengan tipe, kondisi, dan tujuan kulit Anda — diawasi oleh dr. Yeyen.'}
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', padding: '4px 20px 20px', scrollbarWidth: 'none' }}>
        {filters.map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)} style={{
            flexShrink: 0, padding: '8px 14px', borderRadius: 99, fontSize: 12.5, fontWeight: 500, cursor: 'pointer',
            background: filter === f.id ? 'var(--teal)' : '#fff', color: filter === f.id ? '#fff' : 'var(--ink-soft)',
            border: filter === f.id ? 'none' : '1px solid var(--line)',
          }}>{lang === 'en' ? f.en : f.id_l}</button>
        ))}
      </div>

      <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {visible.map(tr => (
          <div key={tr.id} onClick={() => onOpenTreatment(tr.id)} role="button" tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenTreatment(tr.id); } }}
            style={{ background: '#fff', borderRadius: 22, overflow: 'hidden', border: '1px solid var(--line)', cursor: 'pointer', boxShadow: '0 4px 16px rgba(0,0,0,0.03)' }}>
            <div style={{ position: 'relative' }}>
              <TreatmentVisual tr={tr} height={170}/>
              <div style={{ position: 'absolute', top: 14, left: 14 }}><Pill tone="dark">{tr.tag[lang]}</Pill></div>
              <div style={{ position: 'absolute', bottom: 14, right: 14, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)', padding: '6px 12px', borderRadius: 99, fontSize: 11, fontWeight: 600, color: 'var(--ink)', display: 'flex', alignItems: 'center', gap: 5 }}>{Ico.clock('#1B6B5F')} {tr.duration}</div>
            </div>
            <div style={{ padding: '18px 18px 18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 20, color: 'var(--ink)', letterSpacing: -0.3, lineHeight: 1.15 }}>{tr.name[lang]}</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 3 }}>{tr.sub[lang]}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: 10.5, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: 0.6 }}>{t.fromPrice}</div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--teal)', marginTop: 2, whiteSpace: 'nowrap' }}>{tr.price}</div>
                </div>
              </div>
              <p style={{ margin: '12px 0 0', fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.55 }}>{tr.desc[lang]}</p>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: '32px 20px 8px' }}>
        <div style={{ background: 'var(--teal)', borderRadius: 22, padding: 24, color: '#fff', position: 'relative', overflow: 'hidden' }}>
          <svg style={{ position: 'absolute', right: -20, top: -20, opacity: 0.15 }} width="140" height="140" viewBox="0 0 100 100" aria-hidden="true">
            <path d="M100 0 Q20 20 15 100 Q70 80 100 0z" fill="#fff"/>
          </svg>
          <div style={{ position: 'relative' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.2, marginBottom: 8, letterSpacing: -0.2 }}>
              {lang === 'en' ? 'Not sure which is right for you?' : 'Tidak yakin yang mana untuk Anda?'}
            </div>
            <div style={{ fontSize: 13, opacity: 0.85, marginBottom: 16, lineHeight: 1.5 }}>
              {lang === 'en' ? 'Book a 30-minute consultation. dr. Yeyen will assess your skin and build a personalised plan.' : 'Buat janji konsultasi 30 menit. dr. Yeyen akan menilai kulit Anda dan menyusun rencana yang dipersonalisasi.'}
            </div>
            <button onClick={onBook} style={{ background: '#fff', color: 'var(--teal)', border: 'none', padding: '13px 22px', borderRadius: 99, fontSize: 13.5, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
              {Ico.whatsapp('#1B6B5F')} {t.bookConsult}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TreatmentDetail({ tr, lang, onClose, onBook }) {
  const t = COPY[lang];
  if (!tr) return null;
  return (
    <div role="dialog" aria-modal="true" aria-label={tr.name[lang]} style={{
      position: 'absolute', inset: 0, zIndex: 100, background: '#fff',
      display: 'flex', flexDirection: 'column', animation: 'sheetUp 280ms cubic-bezier(0.16, 1, 0.3, 1)',
    }}>
      <div style={{ position: 'relative', flexShrink: 0 }}>
        <TreatmentVisual tr={tr} height={320}/>
        <button onClick={onClose} aria-label={lang === 'en' ? 'Close' : 'Tutup'} style={{ position: 'absolute', top: 60, left: 16, width: 40, height: 40, borderRadius: 99, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.close('#1B6B5F')}</button>
        <button aria-label={lang === 'en' ? 'Share' : 'Bagikan'} style={{ position: 'absolute', top: 60, right: 16, width: 40, height: 40, borderRadius: 99, background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(10px)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.share('#1B6B5F')}</button>
        <div style={{ position: 'absolute', bottom: 16, left: 16 }}><Pill tone="dark">{tr.tag[lang]}</Pill></div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', paddingBottom: 100 }}>
        <div style={{ padding: '24px 20px 0' }}>
          <div style={{ fontSize: 12, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: 1.4, fontWeight: 600 }}>{tr.sub[lang]}</div>
          <h1 style={{ margin: '6px 0 12px', fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 400, color: 'var(--ink)', letterSpacing: -0.5, lineHeight: 1.05 }}>{tr.name[lang]}</h1>

          <div style={{ display: 'flex', gap: 14, alignItems: 'center', marginBottom: 22, paddingBottom: 22, borderBottom: '1px solid var(--line)' }}>
            <div>
              <div style={{ fontSize: 10.5, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: 0.6 }}>{t.fromPrice}</div>
              <div style={{ fontSize: 18, fontWeight: 600, color: 'var(--teal)', fontFamily: 'var(--serif)' }}>{tr.price}</div>
            </div>
            <div style={{ width: 1, height: 30, background: 'var(--line)' }}/>
            <div>
              <div style={{ fontSize: 10.5, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: 0.6 }}>{lang === 'en' ? 'Session' : 'Sesi'}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginTop: 2 }}>{tr.duration}</div>
            </div>
            <div style={{ width: 1, height: 30, background: 'var(--line)' }}/>
            <div>
              <div style={{ fontSize: 10.5, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: 0.6 }}>{lang === 'en' ? 'Downtime' : 'Downtime'}</div>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)', marginTop: 2 }}>{lang === 'en' ? 'Minimal' : 'Minimal'}</div>
            </div>
          </div>

          <p style={{ margin: '0 0 26px', fontSize: 14.5, color: 'var(--ink-soft)', lineHeight: 1.65 }}>{tr.desc[lang]}</p>

          <div style={{ marginBottom: 28 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--ink)', marginBottom: 14 }}>{lang === 'en' ? "What's included" : 'Yang termasuk'}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {(tr.benefits[lang] || tr.benefits.en).map((b, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 22, height: 22, borderRadius: 99, background: 'rgba(27,107,95,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{Ico.check('#1B6B5F')}</div>
                  <span style={{ fontSize: 13.5, color: 'var(--ink)' }}>{b}</span>
                </div>
              ))}
            </div>
          </div>

          {tr.modalities && tr.modalities.length > 0 && (
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--ink)', marginBottom: 14 }}>{lang === 'en' ? 'Modalities used' : 'Modalitas yang digunakan'}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {tr.modalities.map((m, i) => (
                  <span key={i} style={{ fontSize: 12, color: 'var(--teal)', fontWeight: 500, padding: '8px 12px', background: 'rgba(27,107,95,0.07)', borderRadius: 99, letterSpacing: 0.1 }}>{m}</span>
                ))}
              </div>
            </div>
          )}

          <div style={{ background: 'var(--cream)', borderRadius: 18, padding: 20, marginBottom: 24 }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)', marginBottom: 14 }}>{lang === 'en' ? 'Your protocol' : 'Protokol Anda'}</div>
            {[
              { en: 'Consultation & skin assessment', id: 'Konsultasi & penilaian kulit' },
              { en: 'Treatment plan personalised by dr. Yeyen', id: 'Rencana perawatan dipersonalisasi oleh dr. Yeyen' },
              { en: 'Session in clinic with after-care kit', id: 'Sesi di klinik dengan kit perawatan pasca' },
              { en: 'Follow-up review at 2 weeks', id: 'Tinjauan lanjutan dalam 2 minggu' },
            ].map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 0', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 13, color: 'var(--teal)', minWidth: 22, paddingTop: 2 }}>0{i + 1}</div>
                <div style={{ fontSize: 13.5, color: 'var(--ink)', lineHeight: 1.45 }}>{step[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '14px 20px 32px', background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(12px)', borderTop: '1px solid var(--line)' }}>
        <button onClick={onBook} style={{ width: '100%', background: 'var(--teal)', color: '#fff', border: 'none', padding: '16px 18px', borderRadius: 99, fontSize: 14.5, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', boxShadow: '0 6px 16px rgba(27,107,95,0.25)' }}>
          {Ico.whatsapp('#fff')} {lang === 'en' ? `Book ${tr.name.en}` : `Pesan ${tr.name.id}`}
        </button>
      </div>
    </div>
  );
}
