// App.jsx — bottom tab nav, screen routing, language toggle.
// Desktop (>=768px): app shown inside a presentation iPhone frame + top banner.
// Mobile (<768px): frame & banner are dropped; the app fills the real viewport.
import React from 'react';
import { COPY, TREATMENTS } from './data.js';
import { Ico, Wordmark, Pill } from './shared.jsx';
import { IOSDevice } from './ios-frame.jsx';
import { HomeScreen } from './screens/Home.jsx';
import { TreatmentsScreen, TreatmentDetail } from './screens/Treatments.jsx';
import { AboutScreen } from './screens/About.jsx';
import { JournalScreen } from './screens/Journal.jsx';
import { ContactScreen, BookingSheet } from './screens/Contact.jsx';

const MOBILE_QUERY = '(max-width: 767px)';

// Single source of truth for "is this a real phone-sized viewport?".
// Initialised synchronously so the first paint is already correct (no frame flash).
function useIsMobile() {
  const read = () => (typeof window !== 'undefined' && 'matchMedia' in window)
    ? window.matchMedia(MOBILE_QUERY).matches
    : false;
  const [isMobile, setIsMobile] = React.useState(read);
  React.useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return isMobile;
}

const TABS = [
  { id: 'home', icon: 'home' },
  { id: 'treatments', icon: 'spark' },
  { id: 'about', icon: 'user' },
  { id: 'journal', icon: 'book' },
  { id: 'contact', icon: 'pin' },
];

function BottomNav({ active, onChange, lang }) {
  const t = COPY[lang];
  return (
    <nav aria-label={lang === 'en' ? 'Primary' : 'Utama'} style={{
      position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 50,
      // Respect the iOS home-indicator safe area on real devices (0 on desktop).
      paddingBottom: 'calc(28px + env(safe-area-inset-bottom, 0px))',
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.96) 50%)',
    }}>
      <div style={{
        margin: '0 14px', background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(20px) saturate(160%)', WebkitBackdropFilter: 'blur(20px) saturate(160%)',
        border: '1px solid rgba(0,0,0,0.04)', borderRadius: 26, padding: '8px 6px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        boxShadow: '0 8px 28px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)',
      }}>
        {TABS.map(tab => {
          const isActive = active === tab.id;
          const color = isActive ? '#1B6B5F' : '#999';
          return (
            <button key={tab.id} onClick={() => onChange(tab.id)} aria-current={isActive ? 'page' : undefined} aria-label={t.nav[tab.id]} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
              padding: '8px 12px', borderRadius: 14, minWidth: 56, position: 'relative',
            }}>
              {isActive && (
                <div style={{ position: 'absolute', top: 2, left: '50%', transform: 'translateX(-50%)', width: 4, height: 4, borderRadius: 99, background: '#1B6B5F' }}/>
              )}
              {Ico[tab.icon](color)}
              <span style={{ fontSize: 9.5, fontWeight: isActive ? 600 : 500, color, letterSpacing: 0.2 }}>{t.nav[tab.id]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function PhoneApp({ lang, mobile = false, onLangChange }) {
  const [tab, setTab] = React.useState('home');
  const [openTreatment, setOpenTreatment] = React.useState(null);
  const [booking, setBooking] = React.useState(false);
  const scrollRef = React.useRef(null);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [tab]);

  const handleNav = (t) => setTab(t);
  const handleBook = () => setBooking(true);
  const treatment = openTreatment ? TREATMENTS.find(t => t.id === openTreatment) : null;

  return (
    <div style={{ position: 'absolute', inset: 0, background: '#fff', overflow: 'hidden', color: 'var(--ink)' }}>
      <main ref={scrollRef} style={{ position: 'absolute', inset: 0, overflowY: 'auto', overflowX: 'hidden', WebkitOverflowScrolling: 'touch', overscrollBehavior: 'contain', paddingBottom: 110 }}>
        {tab === 'home' && <HomeScreen lang={lang} mobile={mobile} onNav={handleNav} onBook={handleBook} onOpenTreatment={(id) => setOpenTreatment(id)}/>}
        {tab === 'treatments' && <TreatmentsScreen lang={lang} onOpenTreatment={(id) => setOpenTreatment(id)} onBook={handleBook}/>}
        {tab === 'about' && <AboutScreen lang={lang} onBook={handleBook}/>}
        {tab === 'journal' && <JournalScreen lang={lang}/>}
        {tab === 'contact' && <ContactScreen lang={lang} onBook={handleBook}/>}
      </main>

      <BottomNav active={tab} onChange={setTab} lang={lang}/>

      {/* On mobile the desktop top banner is gone, so the language toggle floats
          here (below modals via z-index, above page chrome). */}
      {mobile && onLangChange && (
        <div className="lang-fab">
          <LanguagePill lang={lang} onChange={onLangChange}/>
        </div>
      )}

      {treatment && <TreatmentDetail tr={treatment} lang={lang} onClose={() => setOpenTreatment(null)} onBook={handleBook}/>}
      {booking && <BookingSheet lang={lang} onClose={() => setBooking(false)}/>}
    </div>
  );
}

function LanguagePill({ lang, onChange }) {
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, background: '#fff', border: '1px solid var(--line)', padding: 4, borderRadius: 99, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}>
      {[{ id: 'en', l: 'EN' }, { id: 'id', l: 'ID' }].map(o => (
        <button key={o.id} onClick={() => onChange(o.id)} aria-pressed={lang === o.id} aria-label={o.id === 'en' ? 'English' : 'Bahasa Indonesia'} style={{
          padding: '6px 14px', border: 'none', borderRadius: 99,
          background: lang === o.id ? 'var(--teal)' : 'transparent',
          color: lang === o.id ? '#fff' : 'var(--ink-soft)',
          fontSize: 11.5, fontWeight: 600, cursor: 'pointer', letterSpacing: 0.4,
        }}>{o.l}</button>
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = React.useState('en');
  const isMobile = useIsMobile();

  React.useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Lock body scroll on mobile so only the in-app screen scrolls (no double scrollbars).
  React.useEffect(() => {
    document.body.classList.toggle('mobile-app', isMobile);
    return () => document.body.classList.remove('mobile-app');
  }, [isMobile]);

  // ── Mobile: native full-screen, no frame, no presentation banner ──
  if (isMobile) {
    return (
      <div className="mobile-stage">
        <PhoneApp lang={lang} mobile onLangChange={setLang}/>
      </div>
    );
  }

  // ── Desktop: keep the presentation iPhone frame + top "App preview" banner ──
  return (
    <div style={{
      minHeight: '100vh', padding: '40px 20px',
      background: 'radial-gradient(circle at 20% 0%, #F5EFE6 0%, #EFE9DF 60%, #E8E1D3 100%)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, fontFamily: 'var(--sans)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: 402, maxWidth: '100%', padding: '0 6px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Wordmark sub={false}/>
          <Pill tone="gold">App preview</Pill>
        </div>
        <LanguagePill lang={lang} onChange={setLang}/>
      </div>

      <div style={{ display: 'flex', gap: 30, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <IOSDevice width={402} height={870}>
          <PhoneApp lang={lang}/>
        </IOSDevice>
      </div>

      <div style={{ fontSize: 11, color: 'var(--ink-soft)', letterSpacing: 0.4, marginTop: 8, textAlign: 'center', maxWidth: 402 }}>
        {lang === 'en'
          ? 'Tap any treatment card · open the booking sheet from "Book Consultation" · use the language toggle above'
          : 'Ketuk kartu perawatan · buka formulir dari "Buat Janji" · gunakan tombol bahasa di atas'}
      </div>
    </div>
  );
}
