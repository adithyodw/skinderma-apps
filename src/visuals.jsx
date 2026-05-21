// visuals.jsx — branded SVG illustrations for treatments, articles, hero, gallery.
import React from 'react';

const GOLD = 'rgba(184,153,104,0.9)';
const GOLD_SOFT = 'rgba(184,153,104,0.55)';
const WHITE = '#fff';
const WHITE_SOFT = 'rgba(255,255,255,0.65)';
const WHITE_FAINT = 'rgba(255,255,255,0.3)';

// ─────────────────────────────────────────────────────────────
// Background: tinted gradient + topographic curves + corner mark
// ─────────────────────────────────────────────────────────────
export function VisualFrame({ accent, children, height, ratio, style = {}, corner = 'SKINDERMA' }) {
  const [a, b] = accent;
  return (
    <div style={{
      position: 'relative', overflow: 'hidden',
      background: `linear-gradient(135deg, ${a} 0%, ${b} 100%)`,
      height, aspectRatio: ratio, ...style,
    }}>
      <svg viewBox="0 0 240 180" width="100%" height="100%" preserveAspectRatio="none"
           style={{ position: 'absolute', inset: 0, opacity: 0.18 }} aria-hidden="true">
        <path d="M-10 30 Q60 18 130 30 T260 28" stroke={WHITE} strokeWidth="0.7" fill="none"/>
        <path d="M-10 58 Q60 46 130 58 T260 56" stroke={WHITE} strokeWidth="0.7" fill="none"/>
        <path d="M-10 88 Q70 78 140 88 T260 88" stroke={WHITE} strokeWidth="0.7" fill="none"/>
        <path d="M-10 120 Q70 108 140 120 T260 120" stroke={WHITE} strokeWidth="0.7" fill="none"/>
        <path d="M-10 152 Q70 140 140 152 T260 150" stroke={WHITE} strokeWidth="0.7" fill="none"/>
      </svg>
      <svg viewBox="0 0 240 180" width="100%" height="100%" preserveAspectRatio="xMidYMid meet"
           style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        {children}
      </svg>
      {corner && (
        <div style={{
          position: 'absolute', bottom: 10, right: 12,
          fontFamily: 'var(--serif)', fontSize: 9.5, letterSpacing: 1.2,
          color: 'rgba(255,255,255,0.75)', fontStyle: 'italic', fontWeight: 500,
        }}>{corner}</div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// TREATMENT-SPECIFIC ILLUSTRATIONS
// ─────────────────────────────────────────────────────────────
const TREATMENT_VISUALS = {
  facial: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M70 60 Q70 38 88 33 Q112 28 128 44 Q145 60 144 88 Q142 116 130 130 Q116 142 95 138 Q72 130 66 108 Q62 88 70 60z"
            stroke={WHITE} strokeWidth="1.4"/>
      <circle cx="108" cy="78" r="2.2" fill={WHITE}/>
      <path d="M93 115 Q103 120 117 116" stroke={WHITE} strokeWidth="1.2"/>
      <path d="M118 90 L 114 105 L 119 108" stroke={WHITE} strokeWidth="1.2"/>
      <circle cx="180" cy="60" r="12" stroke={GOLD} strokeWidth="1.4"/>
      <circle cx="180" cy="60" r="20" stroke={GOLD_SOFT} strokeWidth="1"/>
      <circle cx="180" cy="60" r="30" stroke={WHITE_FAINT} strokeWidth="0.8"/>
      <circle cx="180" cy="60" r="4" fill={GOLD}/>
      <line x1="170" y1="68" x2="148" y2="86" stroke={GOLD_SOFT} strokeWidth="0.9" strokeDasharray="2 3"/>
    </g>
  ),
  acne: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="120" cy="92" rx="38" ry="48" stroke={WHITE} strokeWidth="1.4"/>
      <circle cx="108" cy="80" r="2.2" fill={WHITE}/>
      <circle cx="132" cy="80" r="2.2" fill={WHITE}/>
      <path d="M120 90 L 117 102 L 121 105" stroke={WHITE} strokeWidth="1.2"/>
      <path d="M110 118 Q120 124 130 118" stroke={WHITE} strokeWidth="1.2"/>
      <circle cx="103" cy="95" r="3.5" stroke={GOLD} strokeWidth="1.4"/>
      <circle cx="103" cy="95" r="7" stroke={GOLD_SOFT} strokeWidth="0.8"/>
      <circle cx="120" cy="68" r="3" stroke={GOLD} strokeWidth="1.4"/>
      <circle cx="120" cy="68" r="6" stroke={GOLD_SOFT} strokeWidth="0.8"/>
      <circle cx="133" cy="108" r="3" stroke={GOLD} strokeWidth="1.4"/>
      <circle cx="133" cy="108" r="6" stroke={GOLD_SOFT} strokeWidth="0.8"/>
      <g stroke={WHITE_SOFT} strokeWidth="0.8">
        <line x1="113" y1="128" x2="127" y2="128"/>
        <line x1="120" y1="121" x2="120" y2="135"/>
      </g>
    </g>
  ),
  scar: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke={WHITE_FAINT} strokeWidth="0.6">
        {Array.from({ length: 8 }).map((_, i) => <line key={'v' + i} x1={60 + i * 18} y1="120" x2={60 + i * 18} y2="160"/>)}
        {Array.from({ length: 3 }).map((_, i) => <line key={'h' + i} x1="60" y1={125 + i * 10} x2="206" y2={125 + i * 10}/>)}
      </g>
      <g transform="rotate(-22 130 70)">
        <rect x="116" y="38" width="28" height="62" rx="6" stroke={WHITE} strokeWidth="1.4"/>
        <rect x="120" y="46" width="20" height="6" rx="1" stroke={WHITE} strokeWidth="0.9"/>
        <rect x="120" y="58" width="20" height="3" rx="1" stroke={WHITE_SOFT} strokeWidth="0.7"/>
        <rect x="120" y="66" width="20" height="3" rx="1" stroke={WHITE_SOFT} strokeWidth="0.7"/>
        <path d="M124 100 L 130 116 L 136 100z" stroke={GOLD} strokeWidth="1.4" fill={GOLD}/>
      </g>
      {[0, 1, 2, 3, 4].map(i => (
        <circle key={i} cx={108 + i * 6} cy={120 + (i % 2) * 2} r="0.9" fill={GOLD}/>
      ))}
    </g>
  ),
  pigment: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="115" cy="92" rx="36" ry="48" stroke={WHITE} strokeWidth="1.4"/>
      <circle cx="103" cy="82" r="2" fill={WHITE}/>
      <circle cx="127" cy="82" r="2" fill={WHITE}/>
      <path d="M115 90 L 112 102 L 116 104" stroke={WHITE} strokeWidth="1.2"/>
      <path d="M106 116 Q115 121 125 116" stroke={WHITE} strokeWidth="1.2"/>
      <ellipse cx="98" cy="100" rx="4" ry="2.5" fill={GOLD} opacity="0.6"/>
      <ellipse cx="93" cy="92" rx="3" ry="2" fill={GOLD} opacity="0.5"/>
      <ellipse cx="138" cy="98" rx="3.5" ry="2.2" fill={GOLD} opacity="0.55"/>
      <ellipse cx="143" cy="92" rx="2.5" ry="1.8" fill={GOLD} opacity="0.45"/>
      <rect x="174" y="38" width="46" height="20" rx="3" stroke={WHITE} strokeWidth="1.4"/>
      <circle cx="180" cy="48" r="3" stroke={GOLD} strokeWidth="1.2"/>
      <line x1="174" y1="58" x2="98" y2="100" stroke={GOLD_SOFT} strokeWidth="0.9" strokeDasharray="3 3"/>
    </g>
  ),
  contour: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M82 60 Q80 38 100 32 Q120 27 140 32 Q160 38 158 60 Q158 80 156 100 Q154 122 138 138 Q120 152 102 138 Q86 122 84 100 Q82 80 82 60z"
            stroke={WHITE} strokeWidth="1.4"/>
      <circle cx="105" cy="82" r="2.2" fill={WHITE}/>
      <circle cx="135" cy="82" r="2.2" fill={WHITE}/>
      <path d="M120 88 L 117 102 L 122 105" stroke={WHITE} strokeWidth="1.2"/>
      <path d="M110 120 Q120 125 130 120" stroke={WHITE} strokeWidth="1.2"/>
      <g stroke={GOLD} strokeWidth="1.4" fill="none">
        <path d="M70 130 Q60 110 65 95"/>
        <path d="M60 100 L 65 95 L 70 100" strokeLinejoin="round"/>
        <path d="M170 130 Q180 110 175 95"/>
        <path d="M170 100 L 175 95 L 180 100" strokeLinejoin="round"/>
        <path d="M105 50 Q102 38 110 32"/>
        <path d="M107 38 L 110 32 L 114 36" strokeLinejoin="round"/>
        <path d="M135 50 Q138 38 130 32"/>
        <path d="M126 36 L 130 32 L 133 38" strokeLinejoin="round"/>
      </g>
    </g>
  ),
  multilaser: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g transform="rotate(28 110 90)">
        <path d="M58 70 L130 70 L138 80 L130 90 L58 90 z" stroke={WHITE} strokeWidth="1.4"/>
        <circle cx="70" cy="80" r="3" stroke={WHITE} strokeWidth="1"/>
        <circle cx="84" cy="80" r="2" fill={WHITE}/>
        <line x1="96" y1="80" x2="116" y2="80" stroke={WHITE_SOFT} strokeWidth="0.9"/>
        <circle cx="132" cy="80" r="4" fill={GOLD}/>
      </g>
      <line x1="156" y1="116" x2="200" y2="156" stroke={GOLD} strokeWidth="1.4"/>
      <line x1="156" y1="116" x2="208" y2="148" stroke={GOLD_SOFT} strokeWidth="0.9" strokeDasharray="2 3"/>
      <line x1="156" y1="116" x2="204" y2="162" stroke={WHITE_SOFT} strokeWidth="0.8" strokeDasharray="1 2"/>
      <circle cx="200" cy="156" r="4" stroke={GOLD} strokeWidth="1.4"/>
      <circle cx="200" cy="156" r="9" stroke={GOLD_SOFT} strokeWidth="0.8"/>
      <g fill={WHITE_SOFT}>
        <circle cx="172" cy="130" r="1"/>
        <circle cx="186" cy="142" r="1"/>
      </g>
    </g>
  ),
  cocktail: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke={WHITE} strokeWidth="1.4">
        <path d="M70 56 L70 124 Q70 132 78 132 L86 132 Q94 132 94 124 L94 56 Z"/>
        <line x1="70" y1="68" x2="94" y2="68"/>
        <line x1="72" y1="54" x2="92" y2="54" strokeWidth="2.5"/>
        <rect x="70" y="100" width="24" height="24" fill={GOLD_SOFT} stroke="none"/>
      </g>
      <g stroke={WHITE} strokeWidth="1.4">
        <path d="M104 64 L104 124 Q104 132 112 132 L118 132 Q126 132 126 124 L126 64 Z"/>
        <line x1="104" y1="76" x2="126" y2="76"/>
        <line x1="106" y1="62" x2="124" y2="62" strokeWidth="2.5"/>
        <rect x="104" y="92" width="22" height="32" fill={GOLD} opacity="0.45" stroke="none"/>
      </g>
      <g transform="rotate(20 175 90)" stroke={WHITE} strokeWidth="1.4">
        <rect x="148" y="78" width="60" height="14" rx="2"/>
        <line x1="160" y1="78" x2="160" y2="92"/>
        <line x1="172" y1="78" x2="172" y2="92"/>
        <line x1="184" y1="78" x2="184" y2="92"/>
        <line x1="148" y1="85" x2="138" y2="85"/>
        <rect x="130" y="80" width="8" height="10" rx="1"/>
        <line x1="208" y1="85" x2="222" y2="85"/>
        <circle cx="226" cy="85" r="2" fill={GOLD}/>
      </g>
    </g>
  ),
  body: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke={WHITE} strokeWidth="1.4">
        <circle cx="120" cy="40" r="10"/>
        <path d="M104 56 Q100 60 100 70 L 96 100 Q92 122 100 142 Q108 162 120 162 Q132 162 140 142 Q148 122 144 100 L 140 70 Q140 60 136 56 Q128 52 120 52 Q112 52 104 56z"/>
        <path d="M104 64 Q86 78 80 110 Q78 122 82 132"/>
        <path d="M136 64 Q154 78 160 110 Q162 122 158 132"/>
      </g>
      <g stroke={GOLD} strokeWidth="1.2" strokeDasharray="3 2">
        <path d="M96 96 Q120 92 144 96"/>
        <path d="M94 116 Q120 110 146 116"/>
        <path d="M96 136 Q120 130 144 136"/>
      </g>
      <circle cx="120" cy="100" r="3" fill={GOLD}/>
      <circle cx="120" cy="120" r="3" fill={GOLD}/>
    </g>
  ),
  hairremoval: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <line x1="20" y1="118" x2="220" y2="118" stroke={WHITE} strokeWidth="1.4"/>
      <path d="M120 118 L 120 150 Q120 156 124 156 Q128 156 128 150 L 128 130" stroke={WHITE_SOFT} strokeWidth="1.2"/>
      <circle cx="124" cy="158" r="3" stroke={GOLD} strokeWidth="1.4"/>
      <g transform="rotate(15 130 70)" stroke={WHITE} strokeWidth="1.4">
        <path d="M80 50 L150 50 L165 65 L150 80 L80 80 z"/>
        <line x1="155" y1="65" x2="170" y2="65" strokeWidth="3" stroke={GOLD}/>
        <circle cx="92" cy="65" r="2.5"/>
        <circle cx="104" cy="65" r="2.5"/>
      </g>
      <line x1="150" y1="92" x2="124" y2="116" stroke={GOLD} strokeWidth="1.4"/>
      <line x1="155" y1="98" x2="128" y2="118" stroke={GOLD_SOFT} strokeWidth="0.8" strokeDasharray="2 2"/>
      <circle cx="124" cy="118" r="3" stroke={GOLD} strokeWidth="1.4"/>
      <circle cx="124" cy="118" r="7" stroke={GOLD_SOFT} strokeWidth="0.8"/>
    </g>
  ),
  hair: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M30 90 Q120 70 210 90" stroke={WHITE} strokeWidth="1.4"/>
      <path d="M30 110 Q120 90 210 110" stroke={WHITE_FAINT} strokeWidth="0.9"/>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const x = 50 + i * 22;
        const y = 90 - (Math.sin(i * 0.8) * 5 + 14);
        return (
          <g key={i} stroke={WHITE_SOFT} strokeWidth="1.2">
            <line x1={x} y1={y + 16} x2={x + 2} y2={y - 8}/>
          </g>
        );
      })}
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const x = 50 + i * 22;
        return (
          <g key={'r' + i}>
            <circle cx={x} cy="118" r="3" fill={i === 3 ? GOLD : 'rgba(255,255,255,0.3)'} stroke="none"/>
            {i === 3 && <circle cx={x} cy="118" r="8" stroke={GOLD_SOFT} strokeWidth="0.8" fill="none"/>}
          </g>
        );
      })}
    </g>
  ),
};

export function TreatmentVisual({ tr, height, ratio, style, corner = 'SKINDERMA' }) {
  const visualKey = tr.visualId || tr.id;
  return (
    <VisualFrame accent={tr.accent} height={height} ratio={ratio} style={style} corner={corner}>
      {TREATMENT_VISUALS[visualKey] || TREATMENT_VISUALS.facial}
    </VisualFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// ARTICLE VISUALS
// ─────────────────────────────────────────────────────────────
const ARTICLE_VISUALS = {
  pigment: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="120" cy="92" rx="36" ry="48" stroke={WHITE} strokeWidth="1.4"/>
      <circle cx="106" cy="82" r="2.2" fill={WHITE}/>
      <circle cx="130" cy="82" r="2.2" fill={WHITE}/>
      <path d="M115 90 L 112 102 L 117 105" stroke={WHITE} strokeWidth="1.2"/>
      <ellipse cx="100" cy="100" rx="4" ry="2.5" fill={GOLD} opacity="0.6"/>
      <ellipse cx="138" cy="100" rx="3.5" ry="2.2" fill={GOLD} opacity="0.55"/>
      <ellipse cx="95" cy="92" rx="2.5" ry="1.6" fill={GOLD} opacity="0.5"/>
      <ellipse cx="143" cy="92" rx="2.5" ry="1.6" fill={GOLD} opacity="0.5"/>
      <circle cx="186" cy="46" r="10" stroke={GOLD} strokeWidth="1.4"/>
      <g stroke={GOLD_SOFT} strokeWidth="1.2">
        <line x1="186" y1="28" x2="186" y2="34"/>
        <line x1="186" y1="58" x2="186" y2="64"/>
        <line x1="168" y1="46" x2="174" y2="46"/>
        <line x1="198" y1="46" x2="204" y2="46"/>
        <line x1="173" y1="33" x2="177" y2="37"/>
        <line x1="195" y1="33" x2="199" y2="37"/>
      </g>
    </g>
  ),
  acne: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="120" cy="92" rx="36" ry="48" stroke={WHITE} strokeWidth="1.4"/>
      <circle cx="108" cy="80" r="2" fill={WHITE}/>
      <circle cx="132" cy="80" r="2" fill={WHITE}/>
      <path d="M120 88 L 117 102 L 121 105" stroke={WHITE} strokeWidth="1.2"/>
      <path d="M110 118 Q120 124 130 118" stroke={WHITE} strokeWidth="1.2"/>
      <g stroke={GOLD_SOFT} strokeWidth="0.9">
        <line x1="103" y1="90" x2="105" y2="95"/>
        <line x1="113" y1="100" x2="115" y2="105"/>
        <line x1="125" y1="92" x2="127" y2="97"/>
        <line x1="135" y1="100" x2="137" y2="105"/>
        <circle cx="113" cy="92" r="1.2" fill={GOLD}/>
        <circle cx="127" cy="105" r="1.2" fill={GOLD}/>
      </g>
    </g>
  ),
  sun: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="120" cy="90" r="32" stroke={GOLD} strokeWidth="1.6"/>
      <circle cx="120" cy="90" r="22" stroke={GOLD_SOFT} strokeWidth="1"/>
      <circle cx="120" cy="90" r="6" fill={GOLD}/>
      <g stroke={WHITE} strokeWidth="1.4">
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 120 + Math.cos(a) * 44;
          const y1 = 90 + Math.sin(a) * 44;
          const x2 = 120 + Math.cos(a) * 56;
          const y2 = 90 + Math.sin(a) * 56;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}/>;
        })}
      </g>
      <path d="M70 138 L 70 155 Q70 168 82 172 Q94 168 94 155 L 94 138 Z" stroke={WHITE} strokeWidth="1.4" fill="rgba(15,77,68,0.15)"/>
      <path d="M76 153 L 80 158 L 88 148" stroke={GOLD} strokeWidth="1.6"/>
    </g>
  ),
  routine: (
    <g fill="none" strokeLinecap="round" strokeLinejoin="round">
      <g stroke={WHITE} strokeWidth="1.4">
        <path d="M48 72 L48 130 Q48 138 56 138 L66 138 Q74 138 74 130 L74 72 z"/>
        <line x1="48" y1="84" x2="74" y2="84"/>
        <line x1="50" y1="70" x2="72" y2="70" strokeWidth="2.5"/>
      </g>
      <g stroke={WHITE} strokeWidth="1.4">
        <path d="M88 64 L88 130 Q88 138 96 138 L106 138 Q114 138 114 130 L114 64 z"/>
        <line x1="88" y1="76" x2="114" y2="76"/>
        <line x1="90" y1="62" x2="112" y2="62" strokeWidth="2.5"/>
      </g>
      <g stroke={WHITE} strokeWidth="1.4">
        <path d="M128 80 L128 130 Q128 138 136 138 L146 138 Q154 138 154 130 L154 80 z"/>
        <line x1="128" y1="92" x2="154" y2="92"/>
        <line x1="130" y1="78" x2="152" y2="78" strokeWidth="2.5"/>
      </g>
      <g stroke={WHITE} strokeWidth="1.4">
        <path d="M168 56 L168 130 Q168 138 176 138 L186 138 Q194 138 194 130 L194 56 z"/>
        <line x1="168" y1="68" x2="194" y2="68"/>
        <line x1="170" y1="54" x2="192" y2="54" strokeWidth="2.5"/>
      </g>
      <g fill={GOLD} fontFamily="serif" fontSize="9" fontStyle="italic">
        <text x="55" y="160">01</text>
        <text x="95" y="160">02</text>
        <text x="135" y="160">03</text>
        <text x="175" y="160">04</text>
      </g>
    </g>
  ),
};

export function ArticleVisual({ topic, accent, height, ratio, style }) {
  return (
    <VisualFrame accent={accent} height={height} ratio={ratio} style={style} corner="JOURNAL">
      {ARTICLE_VISUALS[topic] || ARTICLE_VISUALS.routine}
    </VisualFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// CLINIC INTERIOR ILLUSTRATIONS — for gallery
// ─────────────────────────────────────────────────────────────
export function ClinicVisual({ kind = 'treatment-room', accent = ['#1B6B5F', '#0F4D44'], height, ratio, style }) {
  const scenes = {
    'treatment-room': (
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" stroke={WHITE} strokeWidth="1.2">
        <line x1="10" y1="140" x2="230" y2="140" strokeWidth="1.4"/>
        <rect x="40" y="100" width="120" height="40" rx="4"/>
        <rect x="40" y="86" width="40" height="16" rx="4"/>
        <line x1="48" y1="140" x2="48" y2="160"/>
        <line x1="152" y1="140" x2="152" y2="160"/>
        <line x1="190" y1="40" x2="190" y2="118"/>
        <circle cx="190" cy="40" r="14"/>
        <circle cx="190" cy="40" r="6" fill={GOLD} stroke="none"/>
        <line x1="180" y1="118" x2="200" y2="118"/>
        <rect x="170" y="60" width="14" height="20" stroke={WHITE_SOFT}/>
      </g>
    ),
    'consultation': (
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" stroke={WHITE} strokeWidth="1.2">
        <line x1="10" y1="140" x2="230" y2="140" strokeWidth="1.4"/>
        <rect x="30" y="100" width="100" height="6"/>
        <line x1="40" y1="106" x2="40" y2="140"/>
        <line x1="120" y1="106" x2="120" y2="140"/>
        <rect x="44" y="80" width="22" height="40" rx="3"/>
        <line x1="44" y1="120" x2="44" y2="138"/>
        <line x1="66" y1="120" x2="66" y2="138"/>
        <rect x="80" y="74" width="42" height="26" rx="2"/>
        <line x1="101" y1="100" x2="101" y2="106"/>
        <path d="M170 100 Q166 70 178 60 Q190 70 186 100 z" fill={GOLD} stroke="none" opacity="0.5"/>
        <rect x="170" y="100" width="16" height="14"/>
        <circle cx="200" cy="40" r="10" stroke={GOLD}/>
        <line x1="200" y1="30" x2="200" y2="50" stroke={GOLD}/>
      </g>
    ),
    'reception': (
      <g fill="none" strokeLinecap="round" strokeLinejoin="round" stroke={WHITE} strokeWidth="1.2">
        <line x1="10" y1="140" x2="230" y2="140" strokeWidth="1.4"/>
        <rect x="60" y="86" width="120" height="54" rx="3"/>
        <line x1="60" y1="100" x2="180" y2="100"/>
        <text x="120" y="116" textAnchor="middle" fontFamily="serif" fontSize="9" fontStyle="italic" fill={GOLD}>SKINDERMA</text>
        <line x1="40" y1="60" x2="40" y2="138"/>
        <path d="M30 60 L 50 60 L 46 78 L 34 78 z" fill={GOLD} stroke="none" opacity="0.6"/>
        <rect x="84" y="34" width="72" height="26"/>
        <path d="M88 50 Q120 38 152 50" stroke={GOLD}/>
      </g>
    ),
  };
  return (
    <VisualFrame accent={accent} height={height} ratio={ratio} style={style} corner={null}>
      {scenes[kind]}
    </VisualFrame>
  );
}

// ─────────────────────────────────────────────────────────────
// HERO VISUAL — full-bleed editorial face illustration
// ─────────────────────────────────────────────────────────────
export function HeroVisual({ style = {} }) {
  return (
    <div style={{
      position: 'absolute', inset: 0,
      background: 'linear-gradient(135deg, #1B6B5F 0%, #0F4D44 60%, #0A3833 100%)',
      ...style,
    }}>
      <svg viewBox="0 0 400 700" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0, opacity: 0.18 }} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <path key={i} d={`M-20 ${60 + i * 60} Q120 ${40 + i * 60} 220 ${60 + i * 60} T420 ${56 + i * 60}`}
                stroke={WHITE} strokeWidth="0.7" fill="none"/>
        ))}
      </svg>
      <svg viewBox="0 0 200 400" width="55%" height="55%" preserveAspectRatio="xMidYMid meet"
           style={{ position: 'absolute', top: 0, left: 0, opacity: 0.18 }} aria-hidden="true">
        <path d="M200 0 Q40 30 30 400 Q160 360 200 0z" fill={GOLD}/>
        <path d="M40 380 Q90 300 170 80" stroke={WHITE} strokeWidth="1" fill="none" opacity="0.6"/>
      </svg>
      <svg viewBox="0 0 400 700" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"
           style={{ position: 'absolute', inset: 0 }} aria-hidden="true">
        <g transform="translate(220 250)" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-60 -120 Q-60 -180 0 -200 Q70 -210 100 -160 Q120 -120 120 -60 Q120 20 100 70 Q70 130 0 130 Q-70 110 -80 40 Q-90 -20 -60 -120z"
                stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
          <circle cx="50" cy="-60" r="3" fill={WHITE} opacity="0.85"/>
          <path d="M10 30 Q30 36 60 30" stroke={WHITE} strokeWidth="1" opacity="0.6"/>
          <circle cx="-10" cy="-30" r="14" stroke={GOLD_SOFT} strokeWidth="1.4"/>
          <circle cx="-10" cy="-30" r="24" stroke={GOLD_SOFT} strokeWidth="0.7"/>
          <circle cx="-10" cy="-30" r="60" stroke={WHITE} strokeWidth="0.6" strokeDasharray="2 6" opacity="0.4"/>
        </g>
      </svg>
    </div>
  );
}
