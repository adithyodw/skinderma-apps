import React from 'react';
import { Ico, Pill } from '../shared.jsx';

const COUNTRY_CODES = [
  { id: '+62', label: 'ID +62' },
  { id: '+65', label: 'SG +65' },
  { id: '+60', label: 'MY +60' },
];

function portalReducer(state, action) {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.step, error: '' };
    case 'SET_MODE':
      return { ...state, mode: action.mode, step: 'verify', error: '' };
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value, error: '' };
    case 'SET_ERROR':
      return { ...state, error: action.error };
    case 'VERIFY_START':
      return { ...state, step: 'loading', error: '' };
    case 'VERIFY_DONE':
      return { ...state, step: 'success', error: '' };
    case 'RESET':
      return { ...initialPortalState };
    default:
      return state;
  }
}

const initialPortalState = {
  step: 'choose',
  mode: null,
  countryCode: '+62',
  phone: '',
  patientRef: '',
  error: '',
};

export function PatientPortalSheet({ lang, onClose }) {
  const [state, dispatch] = React.useReducer(portalReducer, initialPortalState);
  const { step, mode, countryCode, phone, patientRef, error } = state;

  const validate = () => {
    const digits = phone.replace(/\D/g, '');
    if (digits.length < 9) {
      return lang === 'en' ? 'Enter a valid mobile number.' : 'Masukkan nomor ponsel yang valid.';
    }
    if (!patientRef.trim()) {
      return mode === 'login'
        ? (lang === 'en' ? 'Enter your Patient ID.' : 'Masukkan ID Pasien Anda.')
        : (lang === 'en' ? 'Enter your date of birth (DD/MM/YYYY).' : 'Masukkan tanggal lahir (DD/MM/YYYY).');
    }
    return '';
  };

  const handleVerify = () => {
    const err = validate();
    if (err) {
      dispatch({ type: 'SET_ERROR', error: err });
      return;
    }
    dispatch({ type: 'VERIFY_START' });
    window.setTimeout(() => dispatch({ type: 'VERIFY_DONE' }), 1600);
  };

  const handleClose = () => {
    dispatch({ type: 'RESET' });
    onClose();
  };

  return (
    <>
      <div className="sheet-backdrop" onClick={handleClose} role="presentation"/>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={lang === 'en' ? 'Patient portal' : 'Portal pasien'}
        className="sheet-panel sheet-panel--tall"
      >
        <div className="sheet-panel__header">
          <div>
            <Pill tone="gold">{lang === 'en' ? 'Existing patients' : 'Pasien lama'}</Pill>
            <h2 className="sheet-panel__title">
              {step === 'choose'
                ? (lang === 'en' ? 'Patient portal' : 'Portal pasien')
                : step === 'success'
                ? (lang === 'en' ? 'Access granted' : 'Akses diberikan')
                : (lang === 'en' ? 'Verify your identity' : 'Verifikasi identitas')}
            </h2>
          </div>
          <button type="button" onClick={handleClose} className="sheet-close-btn" aria-label={lang === 'en' ? 'Close' : 'Tutup'}>
            {Ico.close('#666')}
          </button>
        </div>

        <div className="sheet-panel__scroll portal-body">
          {step === 'choose' && (
            <div className="portal-choose">
              <p className="portal-choose__lead">
                {lang === 'en'
                  ? 'Secure access to your treatment history, photos, and prescriptions.'
                  : 'Akses aman ke riwayat perawatan, foto, dan resep Anda.'}
              </p>
              <button
                type="button"
                className="portal-option"
                onClick={() => dispatch({ type: 'SET_MODE', mode: 'login' })}
              >
                <span className="portal-option__icon">{Ico.user('#1B6B5F')}</span>
                <span>
                  <strong>{lang === 'en' ? 'Log in to Patient Portal' : 'Masuk ke Portal Pasien'}</strong>
                  <small>{lang === 'en' ? 'Patient ID + registered mobile' : 'ID Pasien + ponsel terdaftar'}</small>
                </span>
              </button>
              <button
                type="button"
                className="portal-option"
                onClick={() => dispatch({ type: 'SET_MODE', mode: 'history' })}
              >
                <span className="portal-option__icon">{Ico.book('#1B6B5F')}</span>
                <span>
                  <strong>{lang === 'en' ? 'Retrieve treatment history' : 'Ambil riwayat perawatan'}</strong>
                  <small>{lang === 'en' ? 'Phone + date of birth lookup' : 'Ponsel + tanggal lahir'}</small>
                </span>
              </button>
            </div>
          )}

          {step === 'verify' && (
            <div className="portal-form">
              <button
                type="button"
                className="portal-back"
                onClick={() => dispatch({ type: 'SET_STEP', step: 'choose' })}
              >
                {Ico.arrow('#1B6B5F', 180)} {lang === 'en' ? 'Back' : 'Kembali'}
              </button>
              <label className="portal-label" htmlFor="portal-phone">
                {lang === 'en' ? 'Phone number' : 'Nomor telepon'}
              </label>
              <div className="portal-phone-row">
                <select
                  id="portal-code"
                  className="portal-input portal-input--code"
                  value={countryCode}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'countryCode', value: e.target.value })}
                >
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.id} value={c.id}>{c.label}</option>
                  ))}
                </select>
                <input
                  id="portal-phone"
                  type="tel"
                  inputMode="numeric"
                  className="portal-input"
                  placeholder={lang === 'en' ? '812 6188 4912' : '812 6188 4912'}
                  value={phone}
                  onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'phone', value: e.target.value })}
                />
              </div>
              <label className="portal-label" htmlFor="portal-ref">
                {mode === 'login'
                  ? (lang === 'en' ? 'Patient ID' : 'ID Pasien')
                  : (lang === 'en' ? 'Date of birth' : 'Tanggal lahir')}
              </label>
              <input
                id="portal-ref"
                type={mode === 'login' ? 'text' : 'text'}
                className="portal-input"
                placeholder={mode === 'login' ? 'SKD-2024-0001' : 'DD/MM/YYYY'}
                value={patientRef}
                onChange={(e) => dispatch({ type: 'SET_FIELD', field: 'patientRef', value: e.target.value })}
              />
              {error && <p className="portal-error" role="alert">{error}</p>}
              <button type="button" className="portal-submit" onClick={handleVerify}>
                {lang === 'en' ? 'Verify identity' : 'Verifikasi identitas'}
              </button>
            </div>
          )}

          {step === 'loading' && (
            <div className="portal-loading gpu-promote" aria-live="polite">
              <div className="portal-spinner"/>
              <p>{lang === 'en' ? 'Verifying securely…' : 'Memverifikasi dengan aman…'}</p>
            </div>
          )}

          {step === 'success' && (
            <div className="portal-success">
              <div className="portal-token-banner gpu-promote">
                <div className="portal-token-banner__icon">{Ico.check('#1B6B5F')}</div>
                <div>
                  <strong>{lang === 'en' ? 'Secure access token sent' : 'Token akses aman terkirim'}</strong>
                  <p>
                    {lang === 'en'
                      ? `A one-time link was sent to ${countryCode} ${phone} via WhatsApp/SMS.`
                      : `Tautan sekali pakai dikirim ke ${countryCode} ${phone} via WhatsApp/SMS.`}
                  </p>
                </div>
              </div>
              <div className="portal-dashboard">
                <h3>{lang === 'en' ? 'Your summary' : 'Ringkasan Anda'}</h3>
                <div className="portal-stat">
                  <span>{lang === 'en' ? 'Next appointment' : 'Janji berikutnya'}</span>
                  <strong>{lang === 'en' ? 'Facial · Batam Centre' : 'Facial · Batam Centre'}</strong>
                  <small>Sat, 24 May · 14:30 WIB</small>
                </div>
                <div className="portal-stat">
                  <span>{lang === 'en' ? 'Loyalty balance' : 'Saldo loyalitas'}</span>
                  <strong>2,450 {lang === 'en' ? 'points' : 'poin'}</strong>
                  <small>{lang === 'en' ? 'Gold tier · expires Dec 2026' : 'Tier Gold · berlaku Des 2026'}</small>
                </div>
                <div className="portal-stat portal-stat--muted">
                  <span>{lang === 'en' ? 'Last treatment' : 'Perawatan terakhir'}</span>
                  <strong>{lang === 'en' ? 'Nd:YAG Laser toning' : 'Laser Nd:YAG toning'}</strong>
                  <small>12 Apr 2026 · dr. Yeyen Handoko</small>
                </div>
              </div>
              <button type="button" className="portal-submit" onClick={handleClose}>
                {lang === 'en' ? 'Done' : 'Selesai'}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
