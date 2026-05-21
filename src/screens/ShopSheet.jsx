import React from 'react';
import { SHOP_PRODUCTS, buildShopOrderWhatsAppUrl } from '../data.js';
import { Ico, Pill } from '../shared.jsx';

function ProductVisual({ accent }) {
  const [a, b] = accent;
  return (
    <div style={{
      aspectRatio: '4 / 5',
      background: `linear-gradient(145deg, ${a} 0%, ${b} 100%)`,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingBottom: 16,
    }}>
      <svg width="56" height="88" viewBox="0 0 56 88" aria-hidden="true" style={{ opacity: 0.9 }}>
        <path d="M18 8 L38 8 Q42 8 42 14 L42 72 Q42 80 36 80 L20 80 Q14 80 14 72 L14 14 Q14 8 18 8z" fill="rgba(255,255,255,0.35)" stroke="#fff" strokeWidth="1.2"/>
        <rect x="20" y="4" width="16" height="8" rx="2" fill="rgba(255,255,255,0.5)"/>
        <rect x="18" y="36" width="20" height="28" fill="rgba(184,153,104,0.45)"/>
      </svg>
    </div>
  );
}

export function ShopSheet({ lang, onClose }) {
  const [expanded, setExpanded] = React.useState(null);

  const orderProduct = (product) => {
    const title = product.name[lang];
    window.location.href = buildShopOrderWhatsAppUrl({ title, price: product.price });
  };

  return (
    <>
      <div className="sheet-backdrop" onClick={onClose} role="presentation"/>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={lang === 'en' ? 'Skincare shop' : 'Toko skincare'}
        className="sheet-panel sheet-panel--tall"
      >
        <div className="sheet-panel__header">
          <div>
            <Pill tone="gold">{lang === 'en' ? 'Skincare' : 'Skincare'}</Pill>
            <h2 className="sheet-panel__title">
              {lang === 'en' ? 'Physician-formulated shop' : 'Toko formulasi dokter'}
            </h2>
            <p className="sheet-panel__sub">
              {lang === 'en'
                ? 'Take the clinic home — order directly via WhatsApp.'
                : 'Bawa klinik ke rumah — pesan langsung via WhatsApp.'}
            </p>
          </div>
          <button type="button" onClick={onClose} className="sheet-close-btn" aria-label={lang === 'en' ? 'Close' : 'Tutup'}>
            {Ico.close('#666')}
          </button>
        </div>

        <div className="sheet-panel__scroll">
          <div className="shop-grid">
          {SHOP_PRODUCTS.map((p) => {
            const isOpen = expanded === p.id;
            return (
              <article key={p.id} className="shop-card">
                <ProductVisual accent={p.accent}/>
                <div className="shop-card__body">
                  <div className="shop-card__meta">{p.volume}</div>
                  <h3 className="shop-card__title">{p.name[lang]}</h3>
                  <p className="shop-card__sub">{p.sub[lang]}</p>
                  <div className="shop-card__price">{p.price}</div>
                  {isOpen && (
                    <p className="shop-card__desc">{p.desc[lang]}</p>
                  )}
                  <div className="shop-card__actions">
                    <button
                      type="button"
                      className="shop-card__btn shop-card__btn--ghost"
                      onClick={() => setExpanded(isOpen ? null : p.id)}
                    >
                      {isOpen
                        ? (lang === 'en' ? 'Hide details' : 'Tutup detail')
                        : (lang === 'en' ? 'View details' : 'Lihat detail')}
                    </button>
                    <button
                      type="button"
                      className="shop-card__btn shop-card__btn--primary"
                      onClick={() => orderProduct(p)}
                    >
                      {Ico.whatsapp('#fff')}
                      {lang === 'en' ? 'Order via WhatsApp' : 'Pesan via WhatsApp'}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
          </div>
        </div>
      </div>
    </>
  );
}
