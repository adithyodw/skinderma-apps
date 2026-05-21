// data.js — bilingual content for the SKINDERMA app (no JSX, pure data)

export const COPY = {
  en: {
    tagline: "Where medical precision meets aesthetic excellence",
    subhead: "Batam Acne & Melasma Centre",
    bookConsult: "Book Consultation",
    learnMore: "Learn more",
    viewAll: "View all treatments",
    fromPrice: "From",
    stats: [
      { value: "4,800+", label: "Patients treated" },
      { value: "Since 2021", label: "Physician-led" },
      { value: "12", label: "Treatment modalities" },
      { value: "98%", label: "Patient satisfaction" },
    ],
    sections: {
      featured: "Featured treatments",
      featuredSub: "Evidence-based protocols, tailored to your skin",
      about: "About the clinic",
      doctor: "Meet your physician",
      team: "Our medical team",
      why: "Why patients choose us",
      reviews: "Patient stories",
      journal: "From our medical journal",
      locations: "Visit us",
      whatwedo: "What we do",
      whatwedoSub: "Four core programmes for Asian skin",
      partners: "Clinically validated technology",
      partnersSub: "We invest only in devices with peer-reviewed evidence",
      shop: "Take the clinic home",
      shopSub: "Physician-formulated skincare and at-home protocols",
    },
    nav: { home: "Home", treatments: "Treatments", about: "About", journal: "Journal", contact: "Contact" },
  },
  id: {
    tagline: "Presisi medis bertemu keunggulan estetika",
    subhead: "Pusat Acne & Melasma Batam",
    bookConsult: "Buat Janji Konsultasi",
    learnMore: "Selengkapnya",
    viewAll: "Lihat semua perawatan",
    fromPrice: "Mulai",
    stats: [
      { value: "4.800+", label: "Pasien dirawat" },
      { value: "Sejak 2021", label: "Dipimpin dokter" },
      { value: "12", label: "Modalitas perawatan" },
      { value: "98%", label: "Kepuasan pasien" },
    ],
    sections: {
      featured: "Perawatan unggulan",
      featuredSub: "Protokol berbasis bukti, disesuaikan dengan kulit Anda",
      about: "Tentang klinik",
      doctor: "Dokter Anda",
      team: "Tim medis kami",
      why: "Mengapa memilih kami",
      reviews: "Cerita pasien",
      journal: "Jurnal medis kami",
      locations: "Kunjungi kami",
      whatwedo: "Apa yang kami lakukan",
      whatwedoSub: "Empat program inti untuk kulit Asia",
      partners: "Teknologi yang tervalidasi klinis",
      partnersSub: "Kami hanya berinvestasi pada perangkat dengan bukti peer-reviewed",
      shop: "Bawa klinik ke rumah",
      shopSub: "Skincare yang diformulasikan dokter dan protokol di rumah",
    },
    nav: { home: "Beranda", treatments: "Perawatan", about: "Tentang", journal: "Jurnal", contact: "Kontak" },
  },
};

// Core procedures — synced with skinderma-clinic-website.vercel.app/procedures
export const TREATMENTS = [
  {
    id: "facial",
    category: "skincare",
    name: { en: "Facial Treatment", id: "Perawatan Wajah" },
    sub: { en: "Medical-grade facial protocol", id: "Protokol facial medis" },
    tag: { en: "Skincare", id: "Skincare" },
    price: "IDR 250,000",
    duration: "60–90 min",
    image: "https://images.unsplash.com/photo-1570172619644-dfd710f63844?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "A comprehensive facial tailored to your skin type and condition. Our medical-grade protocol deeply cleanses, exfoliates, and nourishes — addressing congestion, dullness, dehydration, and early signs of aging under physician supervision.",
      id: "Facial komprehensif yang disesuaikan dengan tipe dan kondisi kulit Anda. Protokol medis kami membersihkan, eksfoliasi, dan menutrisi kulit secara mendalam — mengatasi pori tersumbat, kusam, dehidrasi, dan tanda penuaan dini di bawah pengawasan dokter.",
    },
    benefits: { en: ["Deep pore cleansing and extraction", "Improved skin clarity and radiance", "Balanced sebum production"], id: ["Pembersihan pori dan ekstraksi mendalam", "Kulit lebih jernih dan bercahaya", "Produksi sebum lebih seimbang"] },
    modalities: ["Deep cleansing", "Manual extraction", "LED phototherapy", "Custom mask"],
    accent: ["#E8E0D2", "#D4C5A8"],
  },
  {
    id: "dermapen",
    category: "rejuvenation",
    name: { en: "Dermapen 4.0", id: "Dermapen 4.0" },
    sub: { en: "Microneedling (Dermapen 4.0)", id: "Microneedling (Dermapen 4.0)" },
    tag: { en: "Rejuvenation", id: "Peremajaan" },
    price: "IDR 500,000",
    duration: "45–60 min",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f11c4c494?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "The world's most advanced microneedling device creates controlled micro-channels to stimulate collagen and elastin. Clinically proven for acne scars, enlarged pores, fine lines, and uneven texture with minimal downtime.",
      id: "Perangkat microneedling tercanggih menciptakan mikro-saluran terkontrol untuk merangsang kolagen dan elastin. Terbukti klinis untuk bekas jerawat, pori membesar, garis halus, dan tekstur tidak merata dengan downtime minimal.",
    },
    benefits: { en: ["Reduces acne scars and PIH marks", "Minimises enlarged pores", "Stimulates collagen and elastin"], id: ["Mengurangi bekas jerawat dan PIH", "Memperkecil pori", "Merangsang kolagen dan elastin"] },
    modalities: ["Dermapen 4.0", "PDRN booster", "Soothing mask"],
    accent: ["#E5DCE8", "#C5A8D4"],
  },
  {
    id: "nd-yag",
    category: "laser",
    name: { en: "Nd:YAG Laser", id: "Laser Nd:YAG" },
    sub: { en: "1064nm pigment laser", id: "Laser pigmen 1064nm" },
    tag: { en: "Laser", id: "Laser" },
    price: "IDR 400,000",
    duration: "30–45 min",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "Gold-standard Nd:YAG laser at 1064nm selectively targets melanin without damaging surrounding tissue — visible improvement in melasma, hyperpigmentation, freckles, and overall skin tone, safe for Fitzpatrick IV–VI.",
      id: "Laser Nd:YAG 1064nm secara selektif menargetkan melanin tanpa merusak jaringan sekitar — perbaikan terlihat pada melasma, hiperpigmentasi, bintik, dan warna kulit, aman untuk Fitzpatrick IV–VI.",
    },
    benefits: { en: ["Targets melasma and hyperpigmentation", "Safe for darker skin tones", "Reduces freckles and sun spots"], id: ["Menargetkan melasma dan hiperpigmentasi", "Aman untuk kulit gelap", "Mengurangi bintik dan flek"] },
    modalities: ["Nd:YAG 1064nm", "Laser toning", "Cooling protocol"],
    accent: ["#EAD9D2", "#D4A8A8"],
  },
  {
    id: "hifu",
    category: "rejuvenation",
    name: { en: "HIFU", id: "HIFU" },
    sub: { en: "High-Intensity Focused Ultrasound", id: "Ultrasonik Terfokus Intensitas Tinggi" },
    tag: { en: "Lifting", id: "Lifting" },
    price: "IDR 1,500,000",
    duration: "60–90 min",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "Non-invasive lifting delivering focused ultrasound to foundational skin layers — the same depth as surgical facelifts. Stimulates new collagen for visible lifting of face, neck, and décolletage without surgery.",
      id: "Lifting non-invasif dengan ultrasonik terfokus ke lapisan kulit fundamental — merangsang kolagen baru untuk pengangkatan wajah, leher, dan décolletage tanpa operasi.",
    },
    benefits: { en: ["Non-surgical face and neck lifting", "Deep collagen remodelling", "Visible results in 2–3 months"], id: ["Lifting wajah dan leher non-bedah", "Remodeling kolagen dalam", "Hasil terlihat dalam 2–3 bulan"] },
    modalities: ["HIFU (Ultraformer)", "SMAS-layer targeting", "Collagen stimulation"],
    accent: ["#E0DACE", "#C9B889"],
  },
  {
    id: "rf",
    category: "rejuvenation",
    name: { en: "Radio Frequency (RF)", id: "Radio Frequency (RF)" },
    sub: { en: "Non-invasive skin tightening", id: "Pengencangan kulit non-invasif" },
    tag: { en: "Rejuvenation", id: "Peremajaan" },
    price: "IDR 600,000",
    duration: "45–60 min",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "Controlled RF energy gently heats the deep dermis, stimulating collagen contraction and neocollagenesis for skin tightening, fine-line reduction, and face and body contouring.",
      id: "Energi RF terkontrol memanaskan dermis dalam, merangsang kontraksi kolagen dan neokolagenesis untuk pengencangan kulit, mengurangi garis halus, dan kontur wajah serta tubuh.",
    },
    benefits: { en: ["Tightens and firms lax skin", "Reduces fine lines and wrinkles", "Non-invasive body contouring"], id: ["Mengencangkan kulit kendur", "Mengurangi garis halus", "Kontur tubuh non-invasif"] },
    modalities: ["Monopolar/bipolar RF", "Collagen heating", "Contour protocols"],
    accent: ["#D7E4DC", "#A8C9B8"],
  },
  {
    id: "mesotherapy",
    category: "injectables",
    name: { en: "Mesotherapy", id: "Mesotherapy" },
    sub: { en: "Mesoderm vitamin infusion", id: "Infusi vitamin mesoderm" },
    tag: { en: "Injectables", id: "Suntikan" },
    price: "IDR 450,000",
    duration: "30–45 min",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "A customised cocktail of vitamins, minerals, amino acids, and hyaluronic acid delivered into the mesoderm for deep hydration, revitalisation, and brightening from within.",
      id: "Koktail vitamin, mineral, asam amino, dan asam hialuronat yang disesuaikan dan disuntikkan ke mesoderm untuk hidrasi mendalam, revitalisasi, dan pencerahan dari dalam.",
    },
    benefits: { en: ["Deep skin hydration and luminosity", "Active ingredients at target depth", "Improves tone and elasticity"], id: ["Hidrasi dan luminositas kulit dalam", "Bahan aktif pada kedalaman target", "Meningkatkan tone dan elastisitas"] },
    modalities: ["Vitamin cocktails", "Hyaluronic acid", "Amino acid complexes"],
    accent: ["#F0D9C8", "#E0AA88"],
  },
  {
    id: "chemical-peel",
    category: "peels",
    name: { en: "Chemical Peel", id: "Chemical Peel" },
    sub: { en: "Medical-grade exfoliation", id: "Eksfoliasi medis" },
    tag: { en: "Peels", id: "Peeling" },
    price: "IDR 300,000",
    duration: "30–45 min",
    image: "https://images.unsplash.com/photo-1598440947619-37c3393e2e56?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "Physician-selected medical peels remove damaged outer layers and stimulate renewal — addressing acne, post-inflammatory hyperpigmentation, melasma, and dull skin, core specialisations of our clinic.",
      id: "Peeling medis yang dipilih dokter menghilangkan lapisan luar yang rusak dan merangsang peremajaan — mengatasi jerawat, hiperpigmentasi pasca-inflamasi, melasma, dan kulit kusam.",
    },
    benefits: { en: ["Treats acne and comedones", "Fades post-acne hyperpigmentation", "Improves texture and radiance"], id: ["Mengatasi jerawat dan komedo", "Memudarkan hiperpigmentasi pasca-jerawat", "Meningkatkan tekstur dan kilau"] },
    modalities: ["Superficial peel", "Medium-depth peel", "Acne & pigment protocols"],
    accent: ["#D7E4DC", "#A8C9B8"],
  },
  {
    id: "dna-salmon",
    category: "injectables",
    name: { en: "DNA Salmon Therapy", id: "Terapi DNA Salmon" },
    sub: { en: "PDRN polynucleotide therapy", id: "Terapi polinukleotida PDRN" },
    tag: { en: "Injectables", id: "Suntikan" },
    price: "IDR 700,000",
    duration: "30–45 min",
    image: "https://images.unsplash.com/photo-1631217868264-e178506a8a28?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "PDRN polynucleotides derived from salmon DNA stimulate tissue repair, accelerate healing, and intensively hydrate while activating fibroblasts for collagen and elastin synthesis.",
      id: "Polinukleotida PDRN dari DNA salmon merangsang perbaikan jaringan, mempercepat penyembuhan, dan menghidrasi intensif sambil mengaktifkan fibroblas untuk sintesis kolagen dan elastin.",
    },
    benefits: { en: ["Accelerates skin repair and healing", "Intense cellular hydration", "Reduces inflammation and redness"], id: ["Mempercepat perbaikan kulit", "Hidrasi intensif seluler", "Mengurangi peradangan dan kemerahan"] },
    modalities: ["PDRN (PLINEST)", "Micro-injection", "Bio-regeneration"],
    accent: ["#E5DCE8", "#C5A8D4"],
  },
  {
    id: "vitamin-booster",
    category: "injectables",
    name: { en: "Vitamin & Booster Injections", id: "Injeksi Vitamin & Booster" },
    sub: { en: "Physician-administered boosters", id: "Booster oleh dokter" },
    tag: { en: "Injectables", id: "Suntikan" },
    price: "IDR 200,000",
    duration: "15–30 min",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "High-potency vitamins and nutritional compounds delivered for maximum bioavailability — Vitamin C brightening, Immune Booster, and Whitening complexes tailored to your goals.",
      id: "Vitamin dan nutrisi berpotensi tinggi untuk bioavailabilitas maksimal — Vitamin C pencerah, Immune Booster, dan kompleks Whitening disesuaikan dengan tujuan Anda.",
    },
    benefits: { en: ["Higher bioavailability than oral supplements", "Vitamin C: brightening & antioxidant", "Immune & whitening protocols available"], id: ["Bioavailabilitas lebih tinggi dari oral", "Vitamin C: pencerah & antioksidan", "Protokol imun & whitening tersedia"] },
    modalities: ["Vitamin C IV/IM", "Immune booster", "Whitening complex"],
    accent: ["#E8E0D2", "#D4C5A8"],
  },
  {
    id: "electrocautery",
    category: "skincare",
    name: { en: "Electrocautery", id: "Elektrokauter (Cauter)" },
    sub: { en: "Precise lesion removal", id: "Penghapusan lesi presisi" },
    tag: { en: "Skincare", id: "Skincare" },
    price: "IDR 150,000",
    duration: "15–30 min",
    image: "https://images.unsplash.com/photo-1551076805-e186903961b2?w=800&auto=format&fit=crop&q=80",
    desc: {
      en: "Physician-performed electrocautery removes benign skin tags, milia, sebaceous hyperplasia, and small warts with controlled electrical current — quick, targeted, minimal scarring.",
      id: "Elektrokauter yang dilakukan dokter menghilangkan skin tag, milia, hiperplasia sebasea, dan kutil kecil dengan arus listrik terkontrol — cepat, presisi, bekas luka minimal.",
    },
    benefits: { en: ["Precise removal of skin tags and milia", "Minimal surrounding tissue damage", "Quick in-clinic procedure"], id: ["Penghapusan presisi skin tag dan milia", "Kerusakan jaringan sekitar minimal", "Prosedur cepat di klinik"] },
    modalities: ["Electrocautery", "Topical anaesthetic", "Wound care protocol"],
    accent: ["#EAD9D2", "#D4A8A8"],
  },
];

// Top-level treatment categories ("What We Do") — linked to core procedures
export const FIGHTERS = [
  { id: "acne", treatId: "chemical-peel", name: { en: "Acne Fighter", id: "Acne Fighter" }, sub: { en: "For active breakouts", id: "Untuk jerawat aktif" } },
  { id: "pigment", treatId: "nd-yag", name: { en: "Pigment Fighter", id: "Pigment Fighter" }, sub: { en: "Melasma & hyperpigmentation", id: "Melasma & hiperpigmentasi" } },
  { id: "scar", treatId: "dermapen", name: { en: "Scar Fighter", id: "Scar Fighter" }, sub: { en: "Acne scars & texture", id: "Bekas jerawat & tekstur" } },
  { id: "contour", treatId: "hifu", name: { en: "Face Contouring", id: "Face Contouring" }, sub: { en: "Lifting & anti-ageing", id: "Lifting & anti-penuaan" } },
];

export const TEAM = [
  {
    id: "yeyen",
    name: "dr. Yeyen Handoko",
    role: { en: "Founder · Aesthetic Physician", id: "Pendiri · Dokter Estetika" },
    expertise: { en: "Acne & Melasma · Asian skin", id: "Jerawat & Melasma · Kulit Asia" },
    img: "/assets/yeyen.jpg",
    accent: ["#E8E0D2", "#D4C5A8"],
    location: "Batam Centre & Tembesi",
  },
  {
    id: "sarah",
    name: "dr. Sarah Lim, Dipl.AAAM",
    role: { en: "Senior Aesthetic Physician", id: "Dokter Estetika Senior" },
    expertise: { en: "HIFU · Energy devices", id: "HIFU · Perangkat energi" },
    accent: ["#D7E4DC", "#A8C9B8"],
    location: "Batam Centre",
  },
  {
    id: "priscilla",
    name: "dr. Priscilla Tan, M.Biomed",
    role: { en: "Anti-Aging Physician", id: "Dokter Anti-Penuaan" },
    expertise: { en: "Bio-stimulators · PDRN", id: "Bio-stimulator · PDRN" },
    accent: ["#E5DCE8", "#C5A8D4"],
    location: "Tembesi",
  },
  {
    id: "marcus",
    name: "dr. Marcus Tan, Dipl.Derm",
    role: { en: "Dermatologist", id: "Dermatologis" },
    expertise: { en: "Acne · Cosmetic dermatology", id: "Jerawat · Dermatologi kosmetik" },
    accent: ["#EAD9D2", "#D4A8A8"],
    location: "Batam Centre",
  },
];

export const PARTNERS = [
  "Allergan", "Ultherapy", "Profhilo", "Rejuran",
  "Lutronic", "Candela", "Asclepion", "Teosyal",
  "Dermapen", "PDRN PLINEST", "Thermage FLX", "Radiesse",
];

export const ARTICLES = [
  {
    id: 1,
    cat: { en: "Pigmentation", id: "Pigmentasi" },
    title: {
      en: "Understanding melasma: causes, triggers & medical treatment options",
      id: "Memahami melasma: penyebab, pemicu & opsi perawatan medis",
    },
    excerpt: {
      en: "A physician's primer on why melasma develops in Asian skin and which protocols actually work long-term.",
      id: "Panduan dokter tentang mengapa melasma berkembang pada kulit Asia dan protokol mana yang benar-benar berhasil jangka panjang.",
    },
    topic: "pigment",
    date: "01 Dec 2024",
    read: "8 min",
    accent: ["#E5DCE8", "#C5A8D4"],
    quote: {
      en: "The right treatment for the wrong skin type is still the wrong treatment.",
      id: "Perawatan yang tepat untuk tipe kulit yang salah tetap merupakan perawatan yang salah.",
    },
    body: {
      en: [
        "Melasma is one of the most common — and most misunderstood — pigmentary conditions we treat in Batam. It appears as symmetrical brown or grey-brown patches, usually across the cheeks, forehead, upper lip, and bridge of the nose. In Asian skin (Fitzpatrick III–V) it is especially stubborn because the pigment often sits deeper in the skin and the same melanocytes that cause it are easily provoked by heat, light, and inflammation.",
        "There is rarely a single cause. The three biggest drivers we see are ultraviolet and visible light exposure, hormonal shifts (pregnancy, oral contraceptives, and hormonal therapy), and genetic predisposition. Living near the equator compounds the first of these — the visible-light load in Batam is high year-round, and visible light alone can darken melasma even when UV is controlled.",
        "The most important thing to understand is that melasma is managed, not 'cured' in a single visit. Aggressive treatment aimed at fast clearance is the classic mistake: high-energy lasers or strong peels on reactive skin can trigger rebound hyperpigmentation that is worse than the original. We have seen many patients arrive after exactly this kind of over-treatment elsewhere.",
        "Our protocol begins conservatively. Daily broad-spectrum sun protection with tinted (iron-oxide) coverage is non-negotiable, because tinted formulas also block visible light. On top of that we layer prescription topicals — typically a tyrosinase-inhibiting regimen — and, when the skin is ready, gentle Nd:YAG 1064nm laser toning at low fluence and superficial chemical peels.",
        "Realistic timelines matter. Most patients see meaningful improvement over 8–12 weeks of consistent treatment, with maintenance continuing afterwards. Melasma can flare with sun, heat, and hormones, so the goal is durable control and a routine you can sustain — not a single dramatic 'before and after'.",
        "If you have patches that darken in the sun or after facials, book a consultation before trying stronger products at home. The wrong active at the wrong strength is one of the fastest ways to make melasma worse.",
      ],
      id: [
        "Melasma adalah salah satu kondisi pigmentasi paling umum — dan paling sering disalahpahami — yang kami tangani di Batam. Ia muncul sebagai bercak coklat atau abu-abu kecoklatan yang simetris, biasanya di pipi, dahi, bibir atas, dan batang hidung. Pada kulit Asia (Fitzpatrick III–V) melasma sangat membandel karena pigmen sering berada lebih dalam dan melanosit yang sama mudah terpicu oleh panas, cahaya, dan peradangan.",
        "Jarang ada penyebab tunggal. Tiga pemicu terbesar yang kami lihat adalah paparan sinar ultraviolet dan cahaya tampak, perubahan hormon (kehamilan, kontrasepsi oral, dan terapi hormon), serta faktor genetik. Tinggal di dekat khatulistiwa memperparah yang pertama — beban cahaya tampak di Batam tinggi sepanjang tahun, dan cahaya tampak saja dapat menggelapkan melasma meski UV terkendali.",
        "Hal terpenting untuk dipahami adalah melasma dikelola, bukan 'disembuhkan' dalam satu kunjungan. Perawatan agresif demi hasil cepat adalah kesalahan klasik: laser berenergi tinggi atau peeling kuat pada kulit reaktif dapat memicu hiperpigmentasi rebound yang lebih buruk dari aslinya.",
        "Protokol kami dimulai secara konservatif. Perlindungan matahari berspektrum luas setiap hari dengan tinted (iron-oxide) bersifat wajib, karena formula tinted juga memblokir cahaya tampak. Di atas itu kami menambahkan topikal resep — biasanya regimen penghambat tyrosinase — dan, saat kulit siap, laser toning Nd:YAG 1064nm berfluence rendah serta peeling kimia superfisial.",
        "Ekspektasi waktu yang realistis itu penting. Sebagian besar pasien melihat perbaikan berarti dalam 8–12 minggu perawatan konsisten, dengan pemeliharaan setelahnya. Melasma dapat kambuh karena matahari, panas, dan hormon, jadi tujuannya adalah kontrol yang tahan lama dan rutinitas yang bisa Anda jalankan.",
        "Jika Anda memiliki bercak yang menggelap saat terkena matahari atau setelah facial, buatlah janji konsultasi sebelum mencoba produk yang lebih kuat di rumah. Bahan aktif yang salah pada kekuatan yang salah adalah cara tercepat memperburuk melasma.",
      ],
    },
  },
  {
    id: 2,
    cat: { en: "Acne", id: "Jerawat" },
    title: {
      en: "Acne scars in Batam's climate: which treatment is right for you",
      id: "Bekas jerawat di iklim Batam: perawatan yang tepat untuk Anda",
    },
    excerpt: {
      en: "Tropical humidity changes how scars heal. A guide to choosing between Dermapen, peels, and laser resurfacing.",
      id: "Kelembapan tropis mengubah cara bekas luka sembuh. Panduan memilih antara Dermapen, peeling, dan laser.",
    },
    topic: "acne",
    date: "20 Nov 2024",
    read: "7 min",
    accent: ["#D7E4DC", "#A8C9B8"],
    quote: {
      en: "Treat the scar type you actually have — not the one in the brochure.",
      id: "Rawat tipe bekas luka yang benar-benar Anda miliki — bukan yang ada di brosur.",
    },
    body: {
      en: [
        "Acne scars are not all the same, and the single biggest reason treatments disappoint is that the wrong scar type is being treated. Before choosing any device, we map your scars: ice-pick (narrow and deep), boxcar (wide with sharp edges), and rolling (broad, wavy depressions). Most patients have a mix, which is why a single modality rarely solves everything.",
        "Batam's climate adds a real variable. High humidity and sun exposure mean that post-inflammatory hyperpigmentation — the brown marks left after a breakout — is often more prominent than the textural scar itself. Many patients who think they have 'scars' actually have flat pigment that fades with sun protection and topicals alone, no resurfacing required.",
        "For genuine atrophic scars, Dermapen 4.0 microneedling is our workhorse. It induces collagen with controlled micro-injuries and is safe across darker skin tones because it does not rely on heat in the epidermis. It suits rolling and shallow boxcar scars best, usually over 4–6 sessions spaced a month apart.",
        "Deep ice-pick scars respond better to focal techniques such as TCA CROSS, where a high-strength acid is applied precisely into each scar to remodel it. Fractional laser resurfacing can give faster textural change but carries more downtime and a higher pigmentation risk in Fitzpatrick IV–V skin, so we use it selectively and at conservative settings.",
        "Whatever the plan, sun protection is the foundation. Resurfacing freshly treated skin and then exposing it to equatorial light is the fastest route to new pigment. We pair every scar programme with a strict daily SPF and, where helpful, PDRN bio-regeneration to speed healing.",
        "If your scars have been static for years, that's actually good news — mature scars respond predictably to a staged plan. Book an assessment so we can map your scar types and give you an honest, session-by-session estimate.",
      ],
      id: [
        "Bekas jerawat tidak semuanya sama, dan alasan terbesar perawatan mengecewakan adalah karena tipe bekas luka yang salah yang dirawat. Sebelum memilih perangkat apa pun, kami memetakan bekas luka Anda: ice-pick (sempit dan dalam), boxcar (lebar dengan tepi tajam), dan rolling (cekungan lebar bergelombang). Sebagian besar pasien memiliki campuran, sehingga satu modalitas jarang menyelesaikan semuanya.",
        "Iklim Batam menambah variabel nyata. Kelembapan tinggi dan paparan matahari berarti hiperpigmentasi pasca-inflamasi — bekas coklat setelah jerawat — sering lebih menonjol daripada bekas tekstur itu sendiri. Banyak pasien yang mengira memiliki 'bekas luka' sebenarnya memiliki pigmen datar yang memudar dengan perlindungan matahari dan topikal saja.",
        "Untuk bekas luka atrofi sejati, microneedling Dermapen 4.0 adalah andalan kami. Ia menginduksi kolagen dengan mikro-cedera terkontrol dan aman untuk warna kulit lebih gelap karena tidak mengandalkan panas pada epidermis. Paling cocok untuk bekas rolling dan boxcar dangkal, biasanya 4–6 sesi berjarak sebulan.",
        "Bekas ice-pick yang dalam merespons lebih baik pada teknik fokal seperti TCA CROSS, di mana asam berkekuatan tinggi diaplikasikan tepat ke setiap bekas untuk membentuknya kembali. Laser fraksional dapat memberi perubahan tekstur lebih cepat tetapi membawa lebih banyak downtime dan risiko pigmentasi lebih tinggi pada kulit Fitzpatrick IV–V.",
        "Apa pun rencananya, perlindungan matahari adalah fondasinya. Melakukan resurfacing pada kulit yang baru dirawat lalu memaparkannya ke cahaya khatulistiwa adalah jalur tercepat menuju pigmen baru. Kami memasangkan setiap program bekas luka dengan SPF harian ketat dan, bila membantu, bio-regenerasi PDRN.",
        "Jika bekas luka Anda sudah stabil selama bertahun-tahun, itu kabar baik — bekas matang merespons rencana bertahap secara terprediksi. Buat janji penilaian agar kami dapat memetakan tipe bekas Anda dan memberi estimasi jujur sesi demi sesi.",
      ],
    },
  },
  {
    id: 3,
    cat: { en: "Daily Care", id: "Perawatan Harian" },
    title: {
      en: "The physician's guide to daily sun protection in a tropical climate",
      id: "Panduan dokter untuk perlindungan matahari harian di iklim tropis",
    },
    excerpt: {
      en: "SPF is non-negotiable in equatorial light. What to look for in a sunscreen — and what most people get wrong.",
      id: "SPF adalah suatu keharusan di bawah cahaya khatulistiwa. Apa yang harus dicari dalam tabir surya.",
    },
    topic: "sun",
    date: "05 Nov 2024",
    read: "6 min",
    accent: ["#E8E0D2", "#D4C5A8"],
    quote: {
      en: "The best sunscreen is the one you will actually re-apply.",
      id: "Tabir surya terbaik adalah yang benar-benar Anda aplikasikan ulang.",
    },
    body: {
      en: [
        "If we could prescribe one habit to every patient in Batam, it would be daily sunscreen — not for the beach, but for ordinary life. At this latitude the ultraviolet index is high almost every day, and UV reaches your skin through cloud cover and car windows. Sun exposure is the single largest driver of pigmentation, premature ageing, and treatment relapse that we see.",
        "Start with the label. 'Broad spectrum' means it covers both UVB (which burns) and UVA (which ages and drives pigment). Look for SPF 30–50 and, ideally, a PA rating of PA+++ or higher, which reflects UVA protection. For pigment-prone or melasma patients, a tinted sunscreen with iron oxides is a meaningful upgrade because it also blocks visible light.",
        "Quantity is where most people fall short. Effective protection needs roughly two finger-lengths of product for the face and neck. Most people apply a fraction of that, which quietly drops a high-SPF formula down to a fraction of its rated protection.",
        "Re-application is the other half. Sunscreen degrades and rubs off, so reapply every two to three hours when you are outdoors or near windows. Powder or stick formulas make midday re-application realistic over makeup — and the sunscreen you will actually reapply beats the 'perfect' one you apply once and forget.",
        "Texture matters in humidity. Heavy creams feel unpleasant and get skipped, so for oily and combination skin we recommend lightweight gel or fluid formulas that sit well under makeup. Mineral (zinc/titanium) options suit sensitive and reactive skin; modern chemical filters suit those who dislike any white cast.",
        "Sunscreen is a foundation, not the whole house. Pair it with shade, a wide-brimmed hat, and sunglasses during peak hours. Done consistently, daily protection does more for long-term skin health than almost any treatment we offer.",
      ],
      id: [
        "Jika kami bisa meresepkan satu kebiasaan untuk setiap pasien di Batam, itu adalah tabir surya harian — bukan untuk pantai, tetapi untuk kehidupan sehari-hari. Pada garis lintang ini indeks ultraviolet tinggi hampir setiap hari, dan UV mencapai kulit melalui awan dan jendela mobil. Paparan matahari adalah pendorong terbesar pigmentasi, penuaan dini, dan kekambuhan perawatan yang kami lihat.",
        "Mulai dari label. 'Broad spectrum' berarti melindungi dari UVB (yang membakar) dan UVA (yang menua dan memicu pigmen). Cari SPF 30–50 dan, idealnya, rating PA+++ atau lebih tinggi, yang mencerminkan perlindungan UVA. Untuk pasien rentan pigmen atau melasma, tabir surya tinted dengan iron oxide adalah peningkatan berarti karena juga memblokir cahaya tampak.",
        "Kuantitas adalah tempat kebanyakan orang gagal. Perlindungan efektif membutuhkan sekitar dua ruas jari produk untuk wajah dan leher. Kebanyakan orang mengaplikasikan sebagian kecil dari itu, yang diam-diam menurunkan formula SPF tinggi menjadi sebagian kecil dari perlindungan terukurnya.",
        "Aplikasi ulang adalah separuh lainnya. Tabir surya terdegradasi dan luntur, jadi aplikasikan ulang setiap dua hingga tiga jam saat di luar atau dekat jendela. Formula bedak atau stik membuat aplikasi ulang siang hari realistis di atas makeup.",
        "Tekstur penting dalam kelembapan. Krim berat terasa tidak nyaman dan dilewati, jadi untuk kulit berminyak dan kombinasi kami merekomendasikan formula gel atau fluid ringan yang nyaman di bawah makeup. Pilihan mineral (zinc/titanium) cocok untuk kulit sensitif dan reaktif.",
        "Tabir surya adalah fondasi, bukan seluruh rumah. Pasangkan dengan tempat teduh, topi lebar, dan kacamata hitam saat jam puncak. Dilakukan konsisten, perlindungan harian berbuat lebih untuk kesehatan kulit jangka panjang daripada hampir semua perawatan yang kami tawarkan.",
      ],
    },
  },
  {
    id: 4,
    cat: { en: "Skincare 101", id: "Skincare 101" },
    title: {
      en: "Building your first skincare routine: a beginner's guide",
      id: "Membangun rutinitas skincare pertama: panduan pemula",
    },
    excerpt: {
      en: "Cleanser, treatment, moisturiser, SPF. The four-step framework that actually delivers results.",
      id: "Pembersih, perawatan, pelembap, SPF. Kerangka empat langkah yang benar-benar memberikan hasil.",
    },
    topic: "routine",
    date: "15 Oct 2024",
    read: "6 min",
    accent: ["#EAD9D2", "#D4A8A8"],
    quote: {
      en: "Consistency beats complexity. Four steps done daily outperform ten done occasionally.",
      id: "Konsistensi mengalahkan kerumitan. Empat langkah harian lebih unggul dari sepuluh langkah sesekali.",
    },
    body: {
      en: [
        "A good skincare routine does not need ten products. For most people, four well-chosen steps — cleanse, treat, moisturise, and protect — deliver almost all of the benefit. The mistake we see most often is starting with too many actives at once, which irritates the skin and makes it impossible to tell what is helping.",
        "Cleanser comes first. Use a gentle, pH-balanced cleanser morning and night; in Batam's humidity a lightweight gel cleanser usually suits oily and combination skin best. Avoid anything that leaves your skin feeling tight and squeaky — that is a sign the barrier is being stripped.",
        "The treatment step is where results come from, and it should be introduced slowly. A vitamin C serum in the morning supports brightness and sun defence; a retinoid at night supports texture and acne over time. Start a new active two or three nights a week and build up only once your skin tolerates it.",
        "Moisturiser is non-negotiable, even for oily skin. A simple moisturiser with ingredients such as hyaluronic acid, glycerin, or ceramides keeps the barrier healthy, which in turn makes your actives work better and reduces irritation. Oily skin can choose a gel-cream rather than skipping this step.",
        "The final morning step is sunscreen, every single day. It is the one product that protects all the work the others are doing; without it, brightening and anti-ageing actives are fighting a losing battle against equatorial light.",
        "Give any routine eight to twelve weeks before judging it, and change one variable at a time. If you are unsure which actives suit your skin — or you have acne, melasma, or sensitivity — a single consultation can save you months of trial and error and a drawer full of products that do not suit you.",
      ],
      id: [
        "Rutinitas skincare yang baik tidak membutuhkan sepuluh produk. Bagi sebagian besar orang, empat langkah terpilih — membersihkan, merawat, melembapkan, dan melindungi — memberikan hampir seluruh manfaatnya. Kesalahan yang paling sering kami lihat adalah memulai dengan terlalu banyak bahan aktif sekaligus, yang mengiritasi kulit dan membuat sulit mengetahui apa yang membantu.",
        "Pembersih lebih dulu. Gunakan pembersih lembut ber-pH seimbang pagi dan malam; dalam kelembapan Batam, pembersih gel ringan biasanya paling cocok untuk kulit berminyak dan kombinasi. Hindari apa pun yang membuat kulit terasa kencang dan 'berderit' — itu tanda barrier terkikis.",
        "Langkah perawatan adalah sumber hasil, dan harus diperkenalkan perlahan. Serum vitamin C di pagi hari mendukung kecerahan dan pertahanan matahari; retinoid di malam hari mendukung tekstur dan jerawat seiring waktu. Mulai bahan aktif baru dua atau tiga malam seminggu dan tingkatkan hanya setelah kulit menoleransinya.",
        "Pelembap bersifat wajib, bahkan untuk kulit berminyak. Pelembap sederhana dengan bahan seperti asam hialuronat, gliserin, atau ceramide menjaga barrier tetap sehat, yang membuat bahan aktif bekerja lebih baik dan mengurangi iritasi. Kulit berminyak bisa memilih gel-cream daripada melewati langkah ini.",
        "Langkah pagi terakhir adalah tabir surya, setiap hari. Ini satu-satunya produk yang melindungi semua kerja produk lain; tanpanya, bahan aktif pencerah dan anti-penuaan berjuang sia-sia melawan cahaya khatulistiwa.",
        "Beri waktu delapan hingga dua belas minggu sebelum menilai rutinitas apa pun, dan ubah satu variabel pada satu waktu. Jika ragu bahan aktif mana yang cocok — atau Anda memiliki jerawat, melasma, atau sensitivitas — satu konsultasi dapat menghemat berbulan-bulan coba-coba.",
      ],
    },
  },
];

export const REVIEWS = [
  {
    name: "Mei L.",
    loc: { en: "Singapore", id: "Singapura" },
    treatment: { en: "Nd:YAG Laser", id: "Laser Nd:YAG" },
    rating: 5,
    quote: {
      en: "After years of trying everything for my melasma, dr. Yeyen's protocol was the first that actually worked. Six sessions and my skin looks even-toned again.",
      id: "Setelah bertahun-tahun mencoba berbagai cara untuk melasma saya, protokol dr. Yeyen adalah yang pertama benar-benar bekerja.",
    },
  },
  {
    name: "Ariffin K.",
    loc: { en: "Johor, Malaysia", id: "Johor, Malaysia" },
    treatment: { en: "Dermapen 4.0", id: "Dermapen 4.0" },
    rating: 5,
    quote: {
      en: "The clinic feels like a high-end Singapore practice but at Batam pricing. Booked four sessions and the scars from my teens are visibly smoother.",
      id: "Klinik terasa seperti praktik kelas atas di Singapura tetapi dengan harga Batam. Bekas luka saya jauh lebih halus.",
    },
  },
  {
    name: "Putri A.",
    loc: { en: "Jakarta, Indonesia", id: "Jakarta, Indonesia" },
    treatment: { en: "HIFU", id: "HIFU" },
    rating: 5,
    quote: {
      en: "I flew in specifically for the HIFU. No swelling, no downtime, and three months on the lift is exactly what dr. Yeyen described.",
      id: "Saya terbang khusus untuk HIFU. Tidak ada bengkak, tidak ada downtime, dan hasilnya persis seperti yang dijelaskan.",
    },
  },
  {
    name: "Sarah T.",
    loc: { en: "Singapore", id: "Singapura" },
    treatment: { en: "DNA Salmon", id: "DNA Salmon" },
    rating: 5,
    quote: {
      en: "The under-eye work was extraordinary. Subtle, natural, no filler look. My friends just say I look rested.",
      id: "Hasil di bawah mata luar biasa. Halus, alami, tidak terlihat seperti filler.",
    },
  },
];

export const LOCATIONS = [
  {
    id: "centre",
    name: { en: "Batam Centre", id: "Batam Centre" },
    addr: "Ruko Greenland Blok C No. 7",
    city: "Batam Center, Kepulauan Riau",
    hours: "Mon–Sun 10:00–19:00 WIB",
    phone: "+62 812-6188-4912",
  },
  {
    id: "tembesi",
    name: { en: "Batu Aji / Tembesi", id: "Batu Aji / Tembesi" },
    addr: "Ruko Buana Mas 2 No. 22",
    city: "Tembesi, Batam",
    hours: "Mon–Sun 10:00–19:00 WIB",
    phone: "+62 812-6188-4912",
  },
];

export const WHY = [
  {
    en: { title: "Physician-led", body: "Every protocol designed and supervised personally by dr. Yeyen Handoko." },
    id: { title: "Dipimpin dokter", body: "Setiap protokol dirancang dan diawasi langsung oleh dr. Yeyen Handoko." },
  },
  {
    en: { title: "Asian skin specialists", body: "Evidence-based protocols calibrated for Fitzpatrick III–V skin types." },
    id: { title: "Spesialis kulit Asia", body: "Protokol berbasis bukti yang dikalibrasi untuk tipe kulit Fitzpatrick III–V." },
  },
  {
    en: { title: "Two Batam locations", body: "Batam Centre and Batu Aji clinics — both physician-supervised, same protocols." },
    id: { title: "Dua lokasi Batam", body: "Klinik Batam Centre dan Batu Aji — keduanya diawasi dokter, protokol sama." },
  },
  {
    en: { title: "International patients", body: "English & Bahasa consultations. Travel package available for SG / MY guests." },
    id: { title: "Pasien internasional", body: "Konsultasi Inggris & Bahasa. Paket perjalanan tersedia untuk tamu SG / MY." },
  },
];

export const WHATSAPP_PHONE = "6281261884912";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  "Halo SKINDERMA! Saya ingin mengetahui lebih lanjut tentang layanan Anda dan ingin membuat janji konsultasi."
)}`;

/** Build WhatsApp deep link for the multi-step consultation booking funnel. */
export function buildConsultationWhatsAppUrl({ name, visitFrom, concerns, clinicId, lang }) {
  const clinic = LOCATIONS.find((l) => l.id === clinicId);
  const clinicLine = clinic
    ? `\n- Preferred clinic: ${clinic.name[lang]}`
    : "";
  const text =
    `Hello SKINDERMA, I would like to book an expert skin consultation. Here are my details:\n` +
    `- Name: ${name.trim()}\n` +
    `- Location: ${visitFrom}\n` +
    `- Skin Concerns: ${concerns.join(", ")}` +
    clinicLine;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export const SOCIAL = [
  { id: "instagram", label: "Instagram", handle: "@skindermaclinic", url: "https://www.instagram.com/skindermaclinic/" },
  { id: "facebook", label: "Facebook", handle: "Skinderma Clinic Batam", url: "https://www.facebook.com/skindermaclinicbatam/" },
  { id: "tiktok", label: "TikTok", handle: "@skinderma", url: "https://www.tiktok.com/@skinderma" },
  { id: "whatsapp", label: "WhatsApp", handle: "+62 812-6188-4912", url: WHATSAPP_URL },
];
