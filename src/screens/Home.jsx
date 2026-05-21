// Home.jsx — Home with hero, What We Do fighters, featured treatments,
// technology partners, why us, reviews, journal teaser, footer
import { COPY, TREATMENTS, FIGHTERS, TEAM, ARTICLES, REVIEWS, WHY, PARTNERS, SOCIAL } from '../data.js';
import { Logo, Pill, StarRow, SectionHead, Photo, Ico } from '../shared.jsx';
import { HeroVisual, TreatmentVisual, ArticleVisual } from '../visuals.jsx';

export function HomeScreen({ lang, onNav, onBook, onOpenTreatment, mobile = false }) {
  const t = COPY[lang];
  return (
    <div>
      {/* ───── HERO ───── */}
      <div style={{ position: 'relative', height: 580, overflow: 'hidden' }}>
        <HeroVisual/>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, rgba(15,77,68,0.0) 0%, rgba(15,77,68,0.4) 55%, rgba(15,77,68,0.85) 100%)',
        }}/>
        <div style={{
          position: 'absolute',
          top: mobile ? 'calc(env(safe-area-inset-top, 0px) + 48px)' : 60,
          left: 0, right: 0,
          padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
            <Logo size={28} color="#fff"/>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500, color: '#fff', letterSpacing: 1.2 }}>SKINDERMA</span>
              <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.7)', letterSpacing: 1.5, marginTop: 3, fontWeight: 500 }}>AESTHETIC CLINIC</span>
            </div>
          </div>
          {!mobile && (
            <button onClick={() => onNav('contact')} aria-label={lang === 'en' ? 'View locations' : 'Lihat lokasi'} style={{
              background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)',
              width: 38, height: 38, borderRadius: 99, display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', backdropFilter: 'blur(8px)',
            }}>{Ico.pin('#fff')}</button>
          )}
        </div>

        <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: '0 20px 30px' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.22)',
            padding: '5px 12px', borderRadius: 99,
            fontSize: 10.5, fontWeight: 600, letterSpacing: 0.8,
            textTransform: 'uppercase', color: '#fff', marginBottom: 16, whiteSpace: 'nowrap',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: 99, background: '#B89968' }}/>
            #HealingYourSkin · {lang === 'en' ? 'Since 2021' : 'Sejak 2021'}
          </div>
          <h1 style={{ margin: '0 0 12px', fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 40, lineHeight: 1.02, color: '#fff', letterSpacing: -0.8 }}>
            {lang === 'en'
              ? <>Where medical<br/><em style={{ fontStyle: 'italic', color: '#E5D9B8' }}>precision</em> meets aesthetic excellence.</>
              : <>Presisi medis<br/>bertemu <em style={{ fontStyle: 'italic', color: '#E5D9B8' }}>keunggulan</em> estetika.</>}
          </h1>
          <p style={{ margin: '0 0 22px', fontSize: 14, lineHeight: 1.55, color: 'rgba(255,255,255,0.85)', maxWidth: 320 }}>
            {lang === 'en'
              ? 'A physician-led aesthetic practice in Batam — specialising in acne and melasma protocols for Asian skin types.'
              : 'Praktik estetika yang dipimpin dokter di Batam — mengkhususkan diri pada protokol jerawat dan melasma untuk kulit Asia.'}
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <button onClick={onBook} style={{
              flex: 1, background: '#fff', color: 'var(--teal)', border: 'none',
              padding: '15px 18px', borderRadius: 99, fontSize: 14, fontWeight: 600,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              cursor: 'pointer', boxShadow: '0 10px 24px rgba(0,0,0,0.18)',
            }}>{Ico.whatsapp('#1B6B5F')} {t.bookConsult}</button>
            <button onClick={() => onNav('treatments')} style={{
              background: 'rgba(255,255,255,0.18)', color: '#fff',
              border: '1px solid rgba(255,255,255,0.35)', backdropFilter: 'blur(8px)',
              padding: '15px 18px', borderRadius: 99, fontSize: 14, fontWeight: 600, cursor: 'pointer',
            }}>{lang === 'en' ? 'Treatments' : 'Perawatan'}</button>
          </div>
        </div>
      </div>

      {/* ───── STATS ───── */}
      <div style={{
        margin: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr',
        background: '#fff', border: '1px solid var(--line)', borderRadius: 20,
        padding: 4, marginTop: -36, position: 'relative', zIndex: 2,
        boxShadow: '0 8px 28px rgba(15,77,68,0.18)',
      }}>
        {t.stats.map((s, i) => (
          <div key={i} style={{
            padding: '18px 16px',
            borderRight: i % 2 === 0 ? '1px solid var(--line)' : 'none',
            borderBottom: i < 2 ? '1px solid var(--line)' : 'none',
          }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--teal)', lineHeight: 1, letterSpacing: -0.3 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: 'var(--ink-soft)', marginTop: 5, lineHeight: 1.3, letterSpacing: 0.2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ───── WHAT WE DO ───── */}
      <div style={{ marginTop: 44 }}>
        <SectionHead eyebrow={t.sections.whatwedoSub} title={t.sections.whatwedo}/>
        <div style={{ padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
          {FIGHTERS.map((f, i) => {
            const linkedTr = TREATMENTS.find(x => x.id === f.treatId) || TREATMENTS[0];
            return (
              <div key={f.id} onClick={() => onOpenTreatment(f.treatId)} role="button" tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenTreatment(f.treatId); } }}
                style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer', borderRadius: 18, aspectRatio: '3 / 4' }}>
                <TreatmentVisual tr={linkedTr} style={{ position: 'absolute', inset: 0 }} corner={null}/>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,77,68,0.05) 0%, rgba(15,77,68,0.35) 55%, rgba(15,77,68,0.9) 100%)' }}/>
                <div style={{ position: 'absolute', inset: 0, padding: 14, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: '#fff' }}>
                  <div style={{
                    alignSelf: 'flex-start', background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.25)', fontSize: 9.5, fontWeight: 600, letterSpacing: 0.8,
                    textTransform: 'uppercase', padding: '4px 9px', borderRadius: 99,
                  }}>0{i + 1}</div>
                  <div>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: 19, lineHeight: 1.1, letterSpacing: -0.2 }}>{f.name[lang]}</div>
                    <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>{f.sub[lang]}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ───── FEATURED TREATMENTS ───── */}
      <div style={{ marginTop: 44 }}>
        <SectionHead eyebrow={t.sections.featuredSub} title={t.sections.featured} action={t.viewAll} onAction={() => onNav('treatments')}/>
        <div style={{ display: 'flex', gap: 14, overflowX: 'auto', padding: '4px 20px 12px', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}>
          {TREATMENTS.slice(0, 6).map(tr => (
            <div key={tr.id} onClick={() => onOpenTreatment(tr.id)} role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onOpenTreatment(tr.id); } }}
              style={{ flex: '0 0 220px', background: '#fff', borderRadius: 18, overflow: 'hidden', border: '1px solid var(--line)', cursor: 'pointer', scrollSnapAlign: 'start', boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}>
              <TreatmentVisual tr={tr} height={140}/>
              <div style={{ padding: '14px 14px 16px' }}>
                <div style={{ marginBottom: 8 }}><Pill tone="cream">{tr.tag[lang]}</Pill></div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 17, color: 'var(--ink)', letterSpacing: -0.2 }}>{tr.name[lang]}</div>
                <div style={{ fontSize: 11.5, color: 'var(--ink-soft)', marginTop: 3 }}>{tr.sub[lang]}</div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--line)' }}>
                  <span style={{ fontSize: 11, color: 'var(--gold)', fontWeight: 600 }}>{t.fromPrice} {tr.price}</span>
                  {Ico.arrow('#1B6B5F')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───── DOCTOR FEATURE STRIP ───── */}
      <div style={{ marginTop: 44, padding: '0 20px' }}>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 22, overflow: 'hidden', boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <Photo src={TEAM[0].img} alt={lang === 'en' ? 'dr. Yeyen Handoko, founder and aesthetic physician at SKINDERMA Aesthetic Clinic' : 'dr. Yeyen Handoko, pendiri dan dokter estetika SKINDERMA Aesthetic Clinic'} accent={TEAM[0].accent} height={280} objectPosition="center 18%">
            <div style={{ position: 'absolute', top: 14, left: 14 }}>
              <Pill tone="dark">{lang === 'en' ? 'Founder' : 'Pendiri'}</Pill>
            </div>
          </Photo>
          <div style={{ padding: '20px 20px 22px' }}>
            <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600 }}>
              {lang === 'en' ? 'Meet your physician' : 'Dokter Anda'}
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)', letterSpacing: -0.3, marginTop: 6 }}>dr. Yeyen Handoko</div>
            <div style={{ fontSize: 12.5, color: 'var(--ink-soft)', marginTop: 4 }}>
              {lang === 'en' ? 'Aesthetic Physician · Acne & Melasma Specialist' : 'Dokter Estetika · Spesialis Acne & Melasma'}
            </div>
            <p style={{ margin: '14px 0 16px', fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
              {lang === 'en'
                ? 'Founded SKINDERMA in October 2021. Every protocol is designed and supervised personally.'
                : 'Mendirikan SKINDERMA pada Oktober 2021. Setiap protokol dirancang dan diawasi secara pribadi.'}
            </p>
            <button onClick={() => onNav('about')} style={{ background: 'none', border: 'none', color: 'var(--teal)', fontSize: 12.5, fontWeight: 600, padding: 0, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              {lang === 'en' ? 'Meet the full team' : 'Lihat seluruh tim'} {Ico.arrow('#1B6B5F')}
            </button>
          </div>
        </div>
      </div>

      {/* ───── TECHNOLOGY PARTNERS ───── */}
      <div style={{ marginTop: 44 }}>
        <SectionHead eyebrow={t.sections.partnersSub} title={t.sections.partners}/>
        <div style={{ padding: '0 20px' }}>
          <div style={{ background: 'var(--cream)', borderRadius: 22, padding: '22px 18px', border: '1px solid var(--line)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0 }}>
              {PARTNERS.map((p, i) => (
                <div key={p} style={{
                  padding: '14px 6px',
                  borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--line)' : 'none',
                  borderBottom: i < PARTNERS.length - 3 ? '1px solid var(--line)' : 'none',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center',
                  fontFamily: 'var(--serif)', fontSize: 13.5, color: 'var(--ink-soft)', letterSpacing: 0.3, fontWeight: 500,
                }}>{p}</div>
              ))}
            </div>
          </div>
          <div style={{ fontSize: 11.5, color: 'var(--ink-soft)', marginTop: 12, textAlign: 'center', letterSpacing: 0.3 }}>
            {lang === 'en' ? 'World-leading aesthetic devices · clinically validated' : 'Perangkat estetika terkemuka dunia · tervalidasi klinis'}
          </div>
        </div>
      </div>

      {/* ───── WHY US ───── */}
      <div style={{ marginTop: 44 }}>
        <SectionHead eyebrow={lang === 'en' ? 'The difference' : 'Perbedaan'} title={t.sections.why}/>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          {WHY.map((w, i) => (
            <div key={i} style={{
              display: 'flex', gap: 14, alignItems: 'flex-start', padding: '16px 16px',
              background: i === 0 ? 'var(--teal)' : '#fff', color: i === 0 ? '#fff' : 'var(--ink)',
              border: i === 0 ? 'none' : '1px solid var(--line)', borderRadius: 16,
            }}>
              <div style={{
                width: 30, height: 30, borderRadius: 99, flexShrink: 0,
                background: i === 0 ? 'rgba(255,255,255,0.15)' : 'rgba(27,107,95,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--serif)', fontSize: 13, color: i === 0 ? '#fff' : 'var(--teal)',
              }}>0{i + 1}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600, fontSize: 14, marginBottom: 4, fontFamily: 'var(--serif)' }}>{w[lang].title}</div>
                <div style={{ fontSize: 12.5, opacity: i === 0 ? 0.85 : 1, color: i === 0 ? '#fff' : 'var(--ink-soft)', lineHeight: 1.5 }}>{w[lang].body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───── REVIEW PREVIEW ───── */}
      <div style={{ marginTop: 44 }}>
        <SectionHead eyebrow={lang === 'en' ? '4.9 · Google reviews' : '4.9 · Ulasan Google'} title={t.sections.reviews}/>
        <div style={{ padding: '0 20px' }}>
          <div style={{ background: 'linear-gradient(180deg, #FAF7F2 0%, #fff 100%)', border: '1px solid var(--line)', borderRadius: 20, padding: 22 }}>
            <StarRow/>
            <p style={{ margin: '14px 0 18px', fontFamily: 'var(--serif)', fontSize: 17, lineHeight: 1.45, color: 'var(--ink)', letterSpacing: -0.1 }}>"{REVIEWS[0].quote[lang]}"</p>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 36, height: 36, borderRadius: 99, background: 'linear-gradient(135deg,#1B6B5F,#2A8E80)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 13, fontWeight: 600 }}>{REVIEWS[0].name[0]}</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{REVIEWS[0].name}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{REVIEWS[0].loc[lang]} · {REVIEWS[0].treatment[lang]}</div>
              </div>
            </div>
          </div>
          <button onClick={() => onNav('about')} style={{ width: '100%', background: 'none', border: 'none', color: 'var(--teal)', fontSize: 12.5, fontWeight: 600, padding: '14px 0 0', cursor: 'pointer' }}>
            {lang === 'en' ? 'Read 240+ reviews' : 'Baca 240+ ulasan'} →
          </button>
        </div>
      </div>

      {/* ───── SHOP CALLOUT ───── */}
      <div style={{ marginTop: 44, padding: '0 20px' }}>
        <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 22, minHeight: 200, background: 'linear-gradient(110deg, #0F4D44 0%, #1B6B5F 60%, #2A8E80 100%)' }}>
          <svg viewBox="0 0 400 240" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, opacity: 0.18 }} aria-hidden="true">
            <path d="M400 0 Q200 40 180 240 Q340 200 400 0z" fill="#B89968"/>
            <path d="M200 220 Q280 140 380 40" stroke="#fff" strokeWidth="0.8" fill="none" opacity="0.5"/>
          </svg>
          <svg viewBox="0 0 240 240" width="180" height="200" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', right: -20, bottom: 0, opacity: 0.45 }} aria-hidden="true">
            <g stroke="#fff" strokeWidth="1.2" fill="none">
              <path d="M70 80 L70 200 Q70 210 80 210 L100 210 Q110 210 110 200 L110 80 z"/>
              <line x1="70" y1="100" x2="110" y2="100"/>
              <line x1="74" y1="76" x2="106" y2="76" strokeWidth="3"/>
              <path d="M130 60 L130 200 Q130 210 140 210 L162 210 Q172 210 172 200 L172 60 z"/>
              <line x1="130" y1="84" x2="172" y2="84"/>
              <line x1="134" y1="56" x2="168" y2="56" strokeWidth="3"/>
            </g>
            <rect x="74" y="120" width="36" height="86" fill="rgba(184,153,104,0.45)"/>
            <rect x="134" y="100" width="38" height="106" fill="rgba(184,153,104,0.3)"/>
          </svg>
          <div style={{ position: 'relative', padding: '22px 22px 24px', color: '#fff', maxWidth: 260 }}>
            <div style={{ display: 'inline-block', fontSize: 10, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase', color: '#E5D9B8', padding: '3px 9px', border: '1px solid rgba(229,217,184,0.5)', borderRadius: 99, marginBottom: 14 }}>
              {lang === 'en' ? 'Skincare' : 'Skincare'}
            </div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 22, lineHeight: 1.15, letterSpacing: -0.2, marginBottom: 10 }}>{t.sections.shop}</div>
            <div style={{ fontSize: 12.5, opacity: 0.88, marginBottom: 16, lineHeight: 1.5 }}>{t.sections.shopSub}</div>
            <button style={{ background: '#fff', color: 'var(--teal)', border: 'none', padding: '10px 18px', borderRadius: 99, fontSize: 12.5, fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
              {lang === 'en' ? 'Browse the shop' : 'Lihat toko'} {Ico.arrow('#1B6B5F')}
            </button>
          </div>
        </div>
      </div>

      {/* ───── JOURNAL TEASER ───── */}
      <div style={{ marginTop: 44, marginBottom: 12 }}>
        <SectionHead eyebrow={lang === 'en' ? 'Recent reading' : 'Bacaan terbaru'} title={t.sections.journal} action={lang === 'en' ? 'All articles' : 'Semua artikel'} onAction={() => onNav('journal')}/>
        <div style={{ display: 'flex', gap: 12, overflowX: 'auto', padding: '0 20px 8px', scrollSnapType: 'x mandatory' }}>
          {ARTICLES.slice(0, 3).map(a => (
            <div key={a.id} onClick={() => onNav('journal')} role="button" tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onNav('journal'); } }}
              style={{ flex: '0 0 200px', cursor: 'pointer', scrollSnapAlign: 'start' }}>
              <ArticleVisual topic={a.topic} accent={a.accent} height={130} style={{ borderRadius: 14 }}/>
              <div style={{ marginTop: 10 }}>
                <div style={{ fontSize: 10, color: 'var(--gold)', fontWeight: 600, letterSpacing: 0.6, textTransform: 'uppercase' }}>{a.cat[lang]} · {a.read}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 14.5, color: 'var(--ink)', lineHeight: 1.25, letterSpacing: -0.1, marginTop: 5 }}>{a.title[lang]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ───── FOOTER ───── */}
      <footer style={{ marginTop: 36, padding: '36px 24px 24px', background: 'var(--teal-deep)', color: '#fff' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 18 }}>
          <Logo size={28} color="#fff"/>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500, letterSpacing: 1.2 }}>SKINDERMA</span>
            <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.6)', letterSpacing: 1.5, marginTop: 3, fontWeight: 500 }}>AESTHETIC CLINIC</span>
          </div>
        </div>
        <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, marginBottom: 22, maxWidth: 280 }}>
          {lang === 'en'
            ? 'Two locations in Batam. Open seven days. Serving patients from Indonesia, Singapore & Malaysia.'
            : 'Dua lokasi di Batam. Buka tujuh hari. Melayani pasien dari Indonesia, Singapura & Malaysia.'}
        </div>
        <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
          {lang === 'en' ? 'Follow our work' : 'Ikuti karya kami'}
        </div>
        <div style={{ display: 'flex', gap: 10, marginBottom: 22 }}>
          {SOCIAL.map(s => (
            <a key={s.id} href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.label} style={{
              width: 42, height: 42, borderRadius: 99, background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', textDecoration: 'none',
            }}>{Ico[s.id]('#fff', 18)}</a>
          ))}
        </div>
        <div style={{ paddingTop: 18, borderTop: '1px solid rgba(255,255,255,0.12)', fontSize: 10.5, color: 'rgba(255,255,255,0.45)', letterSpacing: 0.3 }}>
          © 2026 SKINDERMA Aesthetic Clinic · {lang === 'en' ? 'All rights reserved' : 'Hak cipta dilindungi'}
        </div>
      </footer>
    </div>
  );
}
