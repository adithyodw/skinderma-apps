// About.jsx — Doctor profile + clinic story + reviews
import React from 'react';
import { COPY, TEAM, ASSOCIATE_PHYSICIANS, REVIEWS, TREATMENTS } from '../data.js';
import { Pill, Photo, SectionHead, StarRow, Ico } from '../shared.jsx';
import { TeamMemberCard } from '../components/TeamMemberCard.jsx';
import { HeroVisual, ClinicVisual } from '../visuals.jsx';

export function AboutScreen({ lang, onBook }) {
  const t = COPY[lang];
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div style={{ paddingBottom: 24 }}>
      <div style={{ position: 'relative', height: 420, overflow: 'hidden' }}>
        <HeroVisual/>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,77,68,0.2) 0%, rgba(15,77,68,0.5) 50%, rgba(15,77,68,0.92) 100%)' }}/>
        <div style={{ position: 'absolute', inset: 0, padding: '70px 20px 30px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', color: '#fff' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start',
            background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.25)',
            padding: '5px 11px', borderRadius: 99, fontSize: 10.5, fontWeight: 600, letterSpacing: 0.8, textTransform: 'uppercase',
            marginBottom: 14, whiteSpace: 'nowrap',
          }}>{lang === 'en' ? 'Est. October 2021' : 'Didirikan Oktober 2021'}</div>
          <h1 style={{ margin: '0 0 14px', fontFamily: 'var(--serif)', fontSize: 32, fontWeight: 400, letterSpacing: -0.4, lineHeight: 1.1, maxWidth: 320 }}>
            {lang === 'en'
              ? <>A physician-led clinic, <em style={{ fontStyle: 'italic', color: '#E5D9B8' }}>not</em> a beauty salon.</>
              : <>Klinik yang dipimpin dokter, <em style={{ fontStyle: 'italic', color: '#E5D9B8' }}>bukan</em> salon kecantikan.</>}
          </h1>
          <p style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.88, margin: 0, maxWidth: 320 }}>
            {lang === 'en'
              ? "SKINDERMA was founded in 2021 by dr. Yeyen Handoko as Batam's dedicated acne and melasma practice. Every protocol is medical, evidence-based, and calibrated for Asian skin types."
              : 'SKINDERMA didirikan pada 2021 oleh dr. Yeyen Handoko sebagai praktik jerawat dan melasma khusus di Batam. Setiap protokol bersifat medis, berbasis bukti, dan dikalibrasi untuk tipe kulit Asia.'}
          </p>
        </div>
      </div>

      <div style={{ padding: '32px 20px 0' }}>
        <SectionHead eyebrow={lang === 'en' ? 'Your physician' : 'Dokter Anda'} title={t.sections.doctor}/>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 22, overflow: 'hidden', marginTop: 16, boxShadow: '0 4px 16px rgba(0,0,0,0.04)' }}>
          <Photo
            src={TEAM[0].img}
            alt={lang === 'en' ? 'dr. Yeyen Handoko, founder and aesthetic physician at SKINDERMA Aesthetic Clinic' : 'dr. Yeyen Handoko, pendiri dan dokter estetika SKINDERMA Aesthetic Clinic'}
            accent={TEAM[0].accent}
            height={360}
            width={400}
            ratio="10 / 9"
            sizes="(max-width: 768px) 100vw, 402px"
            objectPosition="center 12%"
          >
            <div style={{ position: 'absolute', top: 14, left: 14 }}><Pill tone="dark">{lang === 'en' ? 'Founder' : 'Pendiri'}</Pill></div>
          </Photo>
          <div style={{ padding: '20px 20px 22px' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 24, color: 'var(--ink)', letterSpacing: -0.3 }}>dr. Yeyen Handoko</div>
            <div style={{ fontSize: 12.5, color: 'var(--gold)', letterSpacing: 0.6, textTransform: 'uppercase', fontWeight: 600, marginTop: 4 }}>
              {lang === 'en' ? 'Aesthetic Physician · Acne & Melasma Specialist' : 'Dokter Estetika · Spesialis Acne & Melasma'}
            </div>

            <div style={{ display: 'flex', gap: 20, marginTop: 18, paddingTop: 18, borderTop: '1px solid var(--line)' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: 0.5 }}>{lang === 'en' ? 'Practice' : 'Praktik'}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--teal)', marginTop: 4 }}>5 {lang === 'en' ? 'years' : 'tahun'}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: 0.5 }}>{lang === 'en' ? 'Patients' : 'Pasien'}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, color: 'var(--teal)', marginTop: 4 }}>4,800+</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 11, color: 'var(--ink-soft)', textTransform: 'uppercase', letterSpacing: 0.5 }}>{lang === 'en' ? 'Languages' : 'Bahasa'}</div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--teal)', marginTop: 6 }}>EN · ID</div>
              </div>
            </div>

            <p style={{ margin: '18px 0 0', fontSize: 13.5, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
              {expanded
                ? (lang === 'en'
                  ? 'dr. Yeyen Handoko founded SKINDERMA in October 2021 after years of practice in Jakarta and Singapore. Her clinical focus is the medical management of acne and pigmentary disorders in Asian skin — conditions she found were chronically under-treated in the regional market. She trains regularly with international aesthetic faculties and runs evidence-based protocols only. Every patient at SKINDERMA is reviewed personally by dr. Yeyen at consultation, mid-treatment, and at 90-day follow-up.'
                  : 'dr. Yeyen Handoko mendirikan SKINDERMA pada Oktober 2021 setelah bertahun-tahun praktik di Jakarta dan Singapura. Fokus klinisnya adalah manajemen medis jerawat dan gangguan pigmentasi pada kulit Asia — kondisi yang menurutnya kurang ditangani di pasar regional. Dia rutin berlatih dengan fakultas estetika internasional dan hanya menjalankan protokol berbasis bukti.')
                : (lang === 'en'
                  ? 'Founded SKINDERMA in October 2021 after practice in Jakarta and Singapore. Clinical focus: medical management of acne and pigmentary disorders in Asian skin types.'
                  : 'Mendirikan SKINDERMA pada Oktober 2021 setelah praktik di Jakarta dan Singapura. Fokus klinis: manajemen medis jerawat dan gangguan pigmentasi pada kulit Asia.')}
            </p>
            <button onClick={() => setExpanded(!expanded)} style={{ background: 'none', border: 'none', color: 'var(--teal)', fontSize: 12.5, fontWeight: 600, padding: '12px 0 0', cursor: 'pointer' }}>
              {expanded ? (lang === 'en' ? 'Read less' : 'Tutup') : (lang === 'en' ? 'Read full biography' : 'Baca biografi lengkap')} →
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 36 }}>
        <SectionHead eyebrow={lang === 'en' ? 'Associate physicians' : 'Dokter asosiasi'} title={t.sections.team}/>
        <div className="team-grid">
          {ASSOCIATE_PHYSICIANS.map((m) => (
            <TeamMemberCard key={m.id} member={m} lang={lang}/>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 36, padding: '0 20px' }}>
        <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
          {lang === 'en' ? 'Credentials & Training' : 'Kredensial & Pelatihan'}
        </div>
        <div style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 18, padding: 4 }}>
          {[
            { y: '2024', t: { en: 'AMWC Monaco — Advanced HIFU & Polynucleotides', id: 'AMWC Monaco — HIFU & Polinukleotida Lanjutan' } },
            { y: '2023', t: { en: 'Singapore Dermatology Symposium — Asian Melasma Track', id: 'Simposium Dermatologi Singapura — Melasma Asia' } },
            { y: '2022', t: { en: 'Dermapen Master Trainer Certification', id: 'Sertifikasi Master Trainer Dermapen' } },
            { y: '2021', t: { en: 'PERDOSKI — Indonesian Aesthetic Physician', id: 'PERDOSKI — Dokter Estetika Indonesia' } },
            { y: '2018', t: { en: 'MD, Universitas Tarumanagara', id: 'Dokter, Universitas Tarumanagara' } },
          ].map((c, i, a) => (
            <div key={i} style={{ display: 'flex', gap: 14, padding: '14px 16px', borderBottom: i < a.length - 1 ? '1px solid var(--line)' : 'none', alignItems: 'flex-start' }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 13.5, color: 'var(--teal)', minWidth: 38, fontWeight: 500 }}>{c.y}</div>
              <div style={{ fontSize: 13, color: 'var(--ink)', lineHeight: 1.5, flex: 1 }}>{c.t[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 36, padding: '0 20px' }}>
        <div style={{ fontSize: 11, color: 'var(--gold)', letterSpacing: 1.4, textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>
          {lang === 'en' ? 'Inside the clinic' : 'Di dalam klinik'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 8, gridTemplateRows: '120px 120px' }}>
          <div style={{ gridRow: 'span 2', borderRadius: 16, overflow: 'hidden' }}>
            <ClinicVisual kind="treatment-room" accent={['#1B6B5F', '#0F4D44']} style={{ width: '100%', height: '100%' }}/>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden' }}>
            <ClinicVisual kind="consultation" accent={['#2A8E80', '#1B6B5F']} style={{ width: '100%', height: '100%' }}/>
          </div>
          <div style={{ borderRadius: 16, overflow: 'hidden' }}>
            <ClinicVisual kind="reception" accent={['#0F4D44', '#0A3833']} style={{ width: '100%', height: '100%' }}/>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 40 }}>
        <SectionHead eyebrow={lang === 'en' ? '4.9 · 240+ Google reviews' : '4.9 · 240+ ulasan Google'} title={t.sections.reviews}/>
        <div style={{ padding: '0 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {REVIEWS.map((r, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid var(--line)', borderRadius: 18, padding: 18 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 10 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: 99,
                    background: `linear-gradient(135deg, ${TREATMENTS[i % TREATMENTS.length].accent[0]}, ${TREATMENTS[i % TREATMENTS.length].accent[1]})`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--serif)', fontSize: 14, color: 'var(--ink)',
                  }}>{r.name[0]}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>{r.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-soft)' }}>{r.loc[lang]} · {r.treatment[lang]}</div>
                  </div>
                </div>
                <StarRow/>
              </div>
              <p style={{ margin: 0, fontSize: 13, color: 'var(--ink-soft)', lineHeight: 1.55 }}>"{r.quote[lang]}"</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 20px 8px' }}>
        <button onClick={onBook} style={{ width: '100%', background: 'var(--teal)', color: '#fff', border: 'none', padding: '16px 18px', borderRadius: 99, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer', boxShadow: '0 6px 16px rgba(27,107,95,0.25)' }}>
          {Ico.whatsapp('#fff')} {lang === 'en' ? 'Consult with dr. Yeyen' : 'Konsultasi dengan dr. Yeyen'}
        </button>
      </div>
    </div>
  );
}
