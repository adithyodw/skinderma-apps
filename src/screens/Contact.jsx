// Contact.jsx — Locations, contact methods, booking sheet
import React from 'react';
import { COPY, LOCATIONS, SOCIAL, WHATSAPP_URL, buildConsultationWhatsAppUrl } from '../data.js';
import { Pill, Ico } from '../shared.jsx';

export function ContactScreen({ lang, onBook }) {
  return (
    <div style={{ paddingBottom: 24 }}>
      <div style={{ padding: '64px 20px 0' }}>
        <Pill tone="gold">{lang === 'en' ? 'Contact' : 'Kontak'}</Pill>
        <h1 style={{ margin: '12px 0 8px', fontFamily: 'var(--serif)', fontSize: 34, fontWeight: 400, color: 'var(--ink)', letterSpacing: -0.5, lineHeight: 1.05 }}>
          {lang === 'en' ? <>Visit our <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>clinic</em></> : <>Kunjungi <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>klinik</em> kami</>}
        </h1>
        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.5, margin: '0 0 28px' }}>
          {lang === 'en' ? 'Two Batam locations. Open seven days. WhatsApp for fastest response.' : 'Dua lokasi Batam. Buka tujuh hari. WhatsApp untuk respon tercepat.'}
        </p>
      </div>

      <div style={{ padding: '0 20px', marginBottom: 28 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          <button onClick={() => window.open(WHATSAPP_URL, '_blank', 'noopener,noreferrer')} style={{ background: 'var(--teal)', color: '#fff', border: 'none', padding: '18px 14px', borderRadius: 18, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', boxShadow: '0 6px 16px rgba(27,107,95,0.18)' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.whatsapp('#fff')}</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>WhatsApp</div>
              <div style={{ fontSize: 11, opacity: 0.85, marginTop: 2 }}>{lang === 'en' ? 'Fastest response' : 'Respon tercepat'}</div>
            </div>
          </button>
          <a href="tel:+6281261884912" style={{ background: '#fff', color: 'var(--ink)', border: '1px solid var(--line)', padding: '18px 14px', borderRadius: 18, cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start', textDecoration: 'none' }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'rgba(27,107,95,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.phone('#1B6B5F')}</div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{lang === 'en' ? 'Call clinic' : 'Telepon klinik'}</div>
              <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 2 }}>+62 812-6188-4912</div>
            </div>
          </a>
        </div>
      </div>

      <div style={{ padding: '0 20px' }}>
        <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 14 }}>
          {lang === 'en' ? 'Two clinics in Batam' : 'Dua klinik di Batam'}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {LOCATIONS.map((l, i) => (
            <div key={l.id} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 20, overflow: 'hidden', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ height: 140, position: 'relative', background: i === 0 ? 'linear-gradient(135deg, #D7E4DC 0%, #A8C9B8 100%)' : 'linear-gradient(135deg, #E8E0D2 0%, #D4C5A8 100%)' }}>
                <svg width="100%" height="100%" viewBox="0 0 320 140" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
                  <path d="M0 90 Q80 70 160 80 Q240 90 320 70" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" fill="none"/>
                  <path d="M0 50 Q80 30 160 40 Q240 50 320 30" stroke="rgba(255,255,255,0.4)" strokeWidth="1" fill="none"/>
                  <path d="M40 0 L 60 140" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
                  <path d="M180 0 L 220 140" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8"/>
                  <rect x="70" y="50" width="40" height="30" fill="rgba(255,255,255,0.25)" rx="2"/>
                  <rect x="200" y="80" width="50" height="35" fill="rgba(255,255,255,0.25)" rx="2"/>
                  <rect x="130" y="20" width="35" height="40" fill="rgba(255,255,255,0.25)" rx="2"/>
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -100%)' }}>
                  <svg width="38" height="46" viewBox="0 0 38 46" aria-hidden="true">
                    <path d="M19 0 C 8 0 0 8 0 19 C 0 30 19 46 19 46 C 19 46 38 30 38 19 C 38 8 30 0 19 0 z" fill="#1B6B5F"/>
                    <circle cx="19" cy="18" r="6" fill="#fff"/>
                  </svg>
                </div>
              </div>
              <div style={{ padding: '18px 18px 18px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: 19, color: 'var(--ink)', letterSpacing: -0.2 }}>{l.name[lang]}</div>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#27AE60', fontWeight: 600 }}>
                    <span style={{ width: 6, height: 6, borderRadius: 99, background: '#27AE60' }}/>
                    {lang === 'en' ? 'Open now' : 'Buka sekarang'}
                  </span>
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 12 }}>{l.addr}<br/>{l.city}</div>
                <div style={{ display: 'flex', gap: 14, padding: '12px 0', borderTop: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--ink-soft)' }}>
                    {Ico.clock('#666')} {lang === 'en' ? 'Daily 10:00–19:00' : 'Setiap hari 10:00–19:00'}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('SKINDERMA ' + l.addr + ' ' + l.city)}`} target="_blank" rel="noopener noreferrer" style={{ flex: 1, background: 'var(--teal)', color: '#fff', border: 'none', padding: '11px 14px', borderRadius: 99, fontSize: 12.5, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, textDecoration: 'none' }}>{Ico.pin('#fff')} {lang === 'en' ? 'Directions' : 'Petunjuk'}</a>
                  <a href="tel:+6281261884912" style={{ flex: 1, background: '#fff', color: 'var(--teal)', border: '1px solid rgba(27,107,95,0.25)', padding: '11px 14px', borderRadius: 99, fontSize: 12.5, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, textDecoration: 'none' }}>{Ico.phone('#1B6B5F')} {lang === 'en' ? 'Call' : 'Telepon'}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '28px 20px 0' }}>
        <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
          {lang === 'en' ? 'Follow our work' : 'Ikuti karya kami'}
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 20, padding: 18 }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)', letterSpacing: -0.2, marginBottom: 4 }}>
            {lang === 'en' ? 'See real patient results' : 'Lihat hasil pasien sebenarnya'}
          </div>
          <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', lineHeight: 1.5, marginBottom: 16 }}>
            {lang === 'en' ? 'Daily case studies, before/after, and skincare education from dr. Yeyen and the team.' : 'Studi kasus harian, before/after, dan edukasi skincare dari dr. Yeyen dan tim.'}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {SOCIAL.map(s => (
              <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 14, background: 'var(--cream)', textDecoration: 'none', color: 'var(--ink)' }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: 'rgba(27,107,95,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{Ico[s.id]('#1B6B5F', 18)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{s.label}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--ink-soft)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.handle}</div>
                </div>
                {Ico.arrowExt('#1B6B5F')}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: '28px 20px 0' }}>
        <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
          {lang === 'en' ? 'Existing patients' : 'Pasien lama'}
        </div>
        <button style={{ width: '100%', background: '#fff', border: '1px solid var(--line)', borderRadius: 18, padding: '18px 18px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 38, height: 38, borderRadius: 10, background: 'rgba(27,107,95,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{Ico.user('#1B6B5F')}</div>
          <div style={{ textAlign: 'left', flex: 1 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: 'var(--ink)' }}>{lang === 'en' ? 'Patient Portal' : 'Portal Pasien'}</div>
            <div style={{ fontSize: 11.5, color: 'var(--ink-soft)', marginTop: 2 }}>{lang === 'en' ? 'Treatment history, photos, prescriptions' : 'Riwayat perawatan, foto, resep'}</div>
          </div>
          {Ico.arrow('#666')}
        </button>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// BOOKING BOTTOM SHEET — 3-step consultation funnel → WhatsApp
// ─────────────────────────────────────────────────────────────
const VISIT_REGIONS = ['Batam', 'Singapore', 'Malaysia', 'Other'];

const CONCERN_OPTIONS = [
  { id: 'acne', en: 'Acne & breakouts', id_l: 'Jerawat & breakout' },
  { id: 'pigment', en: 'Melasma & pigment', id_l: 'Melasma & pigmen' },
  { id: 'aging', en: 'Lifting & firming', id_l: 'Lifting & kekencangan' },
  { id: 'texture', en: 'Scars & texture', id_l: 'Bekas luka & tekstur' },
  { id: 'glow', en: 'Glow & maintenance', id_l: 'Glow & perawatan rutin' },
  { id: 'other', en: 'Something else', id_l: 'Lainnya' },
];

function bookingReducer(state, action) {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.value };
    case 'SET_VISIT_FROM':
      return { ...state, visitFrom: action.value };
    case 'TOGGLE_CONCERN': {
      const has = state.concerns.includes(action.id);
      return {
        ...state,
        concerns: has
          ? state.concerns.filter((c) => c !== action.id)
          : [...state.concerns, action.id],
      };
    }
    case 'SET_CLINIC':
      return { ...state, clinicId: action.value };
    case 'SET_STEP':
      return { ...state, step: action.value };
    case 'NEXT':
      return { ...state, step: Math.min(state.step + 1, 2) };
    case 'BACK':
      return { ...state, step: Math.max(state.step - 1, 0) };
    default:
      return state;
  }
}

const bookingInitial = {
  step: 0,
  name: '',
  visitFrom: null,
  concerns: [],
  clinicId: 'centre',
};

export function BookingSheet({ lang, onClose }) {
  const [state, dispatch] = React.useReducer(bookingReducer, bookingInitial);
  const { step, name, visitFrom, concerns, clinicId } = state;

  const concernLabels = concerns.map((id) => {
    const c = CONCERN_OPTIONS.find((o) => o.id === id);
    return c ? (lang === 'en' ? c.en : c.id_l) : id;
  });

  const canContinueStep0 = name.trim().length > 0 && visitFrom;
  const canContinueStep1 = concerns.length > 0;

  const handleContinue = () => {
    if (step === 0 && !canContinueStep0) return;
    if (step === 1 && !canContinueStep1) return;
    if (step < 2) {
      dispatch({ type: 'NEXT' });
      return;
    }
    const url = buildConsultationWhatsAppUrl({
      name,
      visitFrom,
      concerns: concernLabels,
      clinicId,
      lang,
    });
    window.location.href = url;
    onClose();
  };

  const continueDisabled =
    (step === 0 && !canContinueStep0) ||
    (step === 1 && !canContinueStep1);

  return (
    <>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', zIndex: 100, animation: 'fadeIn 200ms ease' }}/>
      <div role="dialog" aria-modal="true" aria-label={lang === 'en' ? 'Book consultation' : 'Buat janji konsultasi'} style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 101, background: '#fff', borderRadius: '24px 24px 0 0',
        padding: '14px 0 calc(16px + env(safe-area-inset-bottom, 0px))',
        animation: 'sheetSlide 320ms cubic-bezier(0.16, 1, 0.3, 1)', maxHeight: '88%', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 14 }}>
          <div style={{ width: 40, height: 4, borderRadius: 99, background: 'rgba(0,0,0,0.15)' }}/>
        </div>

        <div style={{ padding: '0 22px 18px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600 }}>
                {lang === 'en' ? `Step ${step + 1} of 3` : `Langkah ${step + 1} dari 3`}
              </div>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 22, color: 'var(--ink)', letterSpacing: -0.3, marginTop: 4 }}>
                {step === 0
                  ? (lang === 'en' ? 'Tell us about you' : 'Ceritakan tentang Anda')
                  : step === 1
                  ? (lang === 'en' ? 'What brings you in?' : 'Apa yang ingin Anda atasi?')
                  : (lang === 'en' ? 'Which clinic?' : 'Klinik mana?')}
              </div>
            </div>
            <button type="button" onClick={onClose} aria-label={lang === 'en' ? 'Close' : 'Tutup'} style={{ width: 32, height: 32, borderRadius: 99, background: 'var(--cream)', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{Ico.close('#666')}</button>
          </div>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: '20px 22px 0' }}>
          {step === 0 && (
            <div>
              <label htmlFor="booking-name" style={{ fontSize: 11.5, color: 'var(--ink-soft)', letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>
                {lang === 'en' ? 'Your name' : 'Nama Anda'}
              </label>
              <input
                id="booking-name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => dispatch({ type: 'SET_NAME', value: e.target.value })}
                placeholder={lang === 'en' ? 'e.g. Mei Lin' : 'cth. Mei Lin'}
                style={{ width: '100%', padding: '14px 16px', marginTop: 8, marginBottom: 18, border: `1px solid ${name.trim() ? 'var(--teal)' : 'var(--line)'}`, borderRadius: 14, fontSize: 14.5, fontFamily: 'inherit', background: '#fff', boxSizing: 'border-box' }}
              />
              <span style={{ fontSize: 11.5, color: 'var(--ink-soft)', letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>
                {lang === 'en' ? 'Where are you visiting from?' : 'Dari mana Anda berkunjung?'}
              </span>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 8 }}>
                {VISIT_REGIONS.map((o) => {
                  const active = visitFrom === o;
                  return (
                    <button
                      key={o}
                      type="button"
                      onClick={() => dispatch({ type: 'SET_VISIT_FROM', value: o })}
                      aria-pressed={active}
                      style={{
                        padding: '12px 10px', borderRadius: 12, fontSize: 13, fontWeight: active ? 600 : 500, cursor: 'pointer',
                        background: active ? 'var(--teal)' : '#fff',
                        color: active ? '#fff' : 'var(--ink)',
                        border: active ? '1px solid var(--teal)' : '1px solid var(--line)',
                      }}
                    >{o}</button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 1 && (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {CONCERN_OPTIONS.map((c) => {
                const selected = concerns.includes(c.id);
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => dispatch({ type: 'TOGGLE_CONCERN', id: c.id })}
                    aria-pressed={selected}
                    style={{
                      padding: '18px 14px', borderRadius: 16, cursor: 'pointer',
                      background: selected ? 'var(--teal)' : '#fff',
                      color: selected ? '#fff' : 'var(--ink)',
                      border: selected ? '1px solid var(--teal)' : '1px solid var(--line)',
                      fontSize: 13, fontWeight: 500, textAlign: 'left', minHeight: 80,
                      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                    }}
                  >
                    <div style={{ width: 24, height: 24, borderRadius: 99, background: selected ? 'rgba(255,255,255,0.2)' : 'rgba(27,107,95,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {selected ? Ico.check('#fff') : <span style={{ width: 6, height: 6, borderRadius: 99, background: '#1B6B5F' }}/>}
                    </div>
                    <span>{lang === 'en' ? c.en : c.id_l}</span>
                  </button>
                );
              })}
            </div>
          )}

          {step === 2 && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LOCATIONS.map((l) => {
                const active = clinicId === l.id;
                return (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => dispatch({ type: 'SET_CLINIC', value: l.id })}
                    aria-pressed={active}
                    style={{
                      display: 'flex', gap: 14, padding: 16, borderRadius: 16,
                      background: active ? 'rgba(27,107,95,0.06)' : '#fff',
                      border: active ? '1px solid var(--teal)' : '1px solid var(--line)',
                      cursor: 'pointer', textAlign: 'left', alignItems: 'center',
                    }}
                  >
                    <div style={{ width: 20, height: 20, borderRadius: 99, flexShrink: 0, border: active ? 'none' : '1.5px solid var(--line)', background: active ? 'var(--teal)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {active && <span style={{ width: 8, height: 8, borderRadius: 99, background: '#fff' }}/>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--ink)' }}>{l.name[lang]}</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-soft)', marginTop: 2 }}>{l.addr}</div>
                    </div>
                  </button>
                );
              })}

              <div style={{ marginTop: 14, padding: 18, background: 'var(--cream)', borderRadius: 16 }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>
                  {lang === 'en' ? 'What happens next?' : 'Apa selanjutnya?'}
                </div>
                <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', lineHeight: 1.55 }}>
                  {lang === 'en'
                    ? "We'll open WhatsApp with your info pre-filled. Our team confirms your consultation slot within an hour."
                    : 'Kami akan membuka WhatsApp dengan info Anda terisi. Tim kami mengonfirmasi slot konsultasi dalam satu jam.'}
                </div>
              </div>
            </div>
          )}
        </div>

        <div style={{ padding: '16px 22px 0', borderTop: '1px solid var(--line)', marginTop: 14, display: 'flex', gap: 10 }}>
          {step > 0 && (
            <button type="button" onClick={() => dispatch({ type: 'BACK' })} style={{ padding: '15px 22px', background: '#fff', color: 'var(--ink)', border: '1px solid var(--line)', borderRadius: 99, fontSize: 13.5, fontWeight: 600, cursor: 'pointer' }}>
              {lang === 'en' ? 'Back' : 'Kembali'}
            </button>
          )}
          <button
            type="button"
            onClick={handleContinue}
            disabled={continueDisabled}
            style={{
              flex: 1,
              background: continueDisabled ? 'rgba(27,107,95,0.35)' : 'var(--teal)',
              color: '#fff', border: 'none', padding: '15px 18px', borderRadius: 99, fontSize: 14, fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              cursor: continueDisabled ? 'not-allowed' : 'pointer',
              boxShadow: continueDisabled ? 'none' : '0 6px 16px rgba(27,107,95,0.25)',
            }}
          >
            {step < 2 ? (<>{lang === 'en' ? 'Continue' : 'Lanjut'} {Ico.arrow('#fff')}</>) : (<>{Ico.whatsapp('#fff')} {lang === 'en' ? 'Open WhatsApp' : 'Buka WhatsApp'}</>)}
          </button>
        </div>
      </div>
    </>
  );
}
