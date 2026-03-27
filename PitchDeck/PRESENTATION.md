---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700;12..96,800&family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Inter:wght@400;500;600;700;800&display=swap');
  @import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

  :root {
    --brand-primary: #02cc81;
    --brand-secondary: #ffba00;
    --brand-primary-dark: #019660;
    --brand-primary-light: #c9f6e1;
    --bg-base: #ffffff;
    --bg-container: #f8f9fa;
    --bg-overlay: #1c1c1c;
    --text-primary: #343a40;
    --text-secondary: #6c757d;
    --text-tertiary: #adb5bd;
    --error: #dc3545;
    --font-sans: 'Bricolage Grotesque', 'Inter', sans-serif;
    --font-serif: 'Playfair Display', Georgia, serif;
  }

  section {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    background: var(--bg-base);
    color: var(--text-primary);
    padding: 48px 60px;
    font-size: 0.88rem;
    line-height: 1.5;
  }

  /* ── Cover ───────────────────────────────────────────── */
  section.cover {
    background: var(--bg-overlay);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 80px;
  }
  section.cover h1 {
    font-family: var(--font-sans);
    font-size: 3.8rem;
    font-weight: 800;
    line-height: 1.1;
    margin: 0 0 10px 0;
    color: #ffffff;
    letter-spacing: -0.02em;
  }
  section.cover h1 em {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
    color: var(--brand-primary);
  }
  section.cover .accent { color: var(--brand-primary); }
  section.cover .subtitle {
    font-size: 1.05rem;
    font-weight: 400;
    color: rgba(255,255,255,0.55);
    margin: 0 0 44px 0;
    line-height: 1.6;
  }
  section.cover .eyebrow {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--brand-primary);
    margin-bottom: 16px;
  }
  section.cover .divider {
    width: 52px;
    height: 4px;
    background: var(--brand-primary);
    border-radius: 2px;
    margin: 24px 0 28px 0;
  }
  section.cover .label-row {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  section.cover .pill {
    display: inline-block;
    background: rgba(2,204,129,0.15);
    color: var(--brand-primary);
    border-radius: 100px;
    padding: 6px 18px;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }

  /* ── Section dividers ────────────────────────────────── */
  section.section-green {
    background: var(--brand-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 80px;
  }
  section.section-green .num {
    font-family: var(--font-sans);
    font-size: 5rem;
    font-weight: 800;
    color: rgba(255,255,255,0.15);
    line-height: 1;
    margin-bottom: 8px;
  }
  section.section-green h2 {
    font-family: var(--font-sans);
    font-size: 2.8rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 12px 0;
    line-height: 1.15;
  }
  section.section-green p {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.78);
    margin: 0;
    max-width: 520px;
  }

  section.section-dark {
    background: var(--bg-overlay);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 80px;
  }
  section.section-dark .eyebrow {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(2,204,129,0.8);
    margin-bottom: 12px;
  }
  section.section-dark h2 {
    font-family: var(--font-sans);
    font-size: 2.8rem;
    font-weight: 700;
    color: #ffffff;
    margin: 0 0 12px 0;
    line-height: 1.15;
  }
  section.section-dark p {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.65);
    margin: 0;
    max-width: 560px;
  }

  /* ── Typography ──────────────────────────────────────── */
  h1 {
    font-family: var(--font-sans);
    font-size: 1.9rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 6px 0;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
  h1 em {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
  }
  h2 {
    font-family: var(--font-sans);
    font-size: 1.55rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 18px 0;
    line-height: 1.25;
  }
  h2 em {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
  }
  h3 {
    font-size: 1rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 8px 0;
  }

  .page-sub {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin: 0 0 22px 0;
    line-height: 1.55;
  }

  .eyebrow {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--brand-primary);
    margin-bottom: 6px;
  }

  /* ── Layout ──────────────────────────────────────────── */
  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
  }
  .two-col-wide {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 24px;
    align-items: start;
  }
  .three-col {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    align-items: start;
  }

  /* ── Card ────────────────────────────────────────────── */
  .card {
    background: var(--bg-container);
    border-radius: 1rem;
    padding: 18px 22px;
    margin-bottom: 12px;
  }

  /* ── Problem cards ───────────────────────────────────── */
  .problem-card {
    background: rgba(220,53,69,0.06);
    border-radius: 1rem;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .problem-card .p-icon {
    width: 52px;
    height: 52px;
    background: rgba(220,53,69,0.1);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }
  .p-icon .bi { font-size: 1.5rem; color: var(--error); }
  .problem-card h3 { color: var(--text-primary); font-size: 0.95rem; margin: 0; line-height: 1.35; }
  .problem-card p { color: var(--text-secondary); font-size: 0.82rem; margin: 0; line-height: 1.5; }
  .problem-card .pquote {
    font-style: italic;
    color: var(--error);
    background: rgba(220,53,69,0.06);
    border-radius: 0.5rem;
    padding: 7px 12px;
    font-size: 0.78rem;
    line-height: 1.4;
    margin: 0;
  }

  .solve-strip {
    margin-top: 20px;
    background: var(--brand-primary-light);
    border-radius: 1rem;
    padding: 14px 24px;
    text-align: center;
  }
  .solve-strip strong {
    color: var(--brand-primary-dark);
    font-size: 0.92rem;
  }

  /* ── Feature tag ─────────────────────────────────────── */
  .feature-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(2,204,129,0.1);
    color: var(--brand-primary-dark);
    border-radius: 100px;
    padding: 5px 14px;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 12px;
  }

  .feature-title {
    font-family: var(--font-sans);
    font-size: 1.55rem;
    font-weight: 700;
    color: var(--text-primary);
    line-height: 1.2;
    letter-spacing: -0.01em;
    margin: 0 0 12px 0;
  }
  .feature-title em {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 400;
  }
  .feature-desc {
    font-size: 0.88rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 18px;
  }

  /* ── Lists ───────────────────────────────────────────── */
  ul {
    padding: 0;
    list-style: none;
    margin: 0;
  }
  ul li {
    padding: 5px 0 5px 22px;
    position: relative;
    color: var(--text-secondary);
    font-size: 0.84rem;
    line-height: 1.5;
  }
  ul li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 13px;
    width: 8px;
    height: 8px;
    background: var(--brand-primary);
    border-radius: 50%;
  }
  ul li strong { color: var(--text-primary); }

  .check-list li {
    font-size: 0.92rem;
    padding: 8px 0 8px 30px;
    color: var(--text-primary);
  }
  .check-list li::before {
    content: '\2713';
    background: none;
    color: var(--brand-primary);
    font-weight: 700;
    width: auto;
    height: auto;
    font-size: 1rem;
    top: 9px;
    left: 2px;
  }

  .dot-list li {
    padding: 5px 0 5px 22px;
    color: var(--text-secondary);
    font-size: 0.84rem;
    line-height: 1.5;
    position: relative;
  }
  .dot-list li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 13px;
    width: 8px;
    height: 8px;
    background: var(--brand-primary);
    border-radius: 50%;
  }
  .dot-list li strong { color: var(--text-primary); }

  /* ── Screenshot / mockup placeholders ───────────────── */
  .screenshot {
    background: var(--bg-container);
    border-radius: 1rem;
    border: 2.5px dashed #c9f6e1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 28px 20px;
    color: var(--text-tertiary);
    font-size: 0.75rem;
    font-weight: 500;
    gap: 8px;
    min-height: 140px;
    overflow: hidden;
  }
  .screenshot .icon {
    font-size: 2rem;
    margin-bottom: 4px;
    opacity: 0.5;
  }
  .screenshot strong {
    color: var(--brand-primary);
    font-size: 0.78rem;
    display: block;
  }

  /* ── Mockup image boxes ──────────────────────────────── */
  .mockup-box {
    background: var(--bg-container);
    border-radius: 1rem;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 4px 24px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
  }
  .mockup-box img {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 200px;
    display: block;
  }
  .mockup-box .m-cap {
    padding: 10px 14px;
    font-size: 0.72rem;
    color: var(--text-secondary);
    border-top: 1px solid rgba(0,0,0,0.06);
  }
  .mockup-box .m-cap strong {
    color: var(--text-primary);
    font-size: 0.78rem;
    display: block;
    margin-bottom: 2px;
  }

  /* ── Stats strip ─────────────────────────────────────── */
  .stats-strip {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    background: var(--bg-container);
    border-radius: 1.5rem;
    padding: 32px;
    margin-top: 28px;
  }
  .stat-item { text-align: center; }
  .stat-big {
    font-family: var(--font-sans);
    font-size: 3rem;
    font-weight: 800;
    color: var(--brand-primary);
    line-height: 1;
  }
  .stat-unit {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--brand-primary);
    margin-left: 2px;
  }
  .stat-label {
    font-size: 0.78rem;
    color: var(--text-secondary);
    font-weight: 500;
    margin-top: 6px;
  }
  .stat-meta {
    font-size: 0.72rem;
    color: var(--text-secondary);
    margin-top: 4px;
  }

  /* ── Quote ───────────────────────────────────────────── */
  .quote {
    background: var(--bg-container);
    border-left: 4px solid var(--brand-primary);
    border-radius: 0 0.75rem 0.75rem 0;
    padding: 16px 20px;
    font-size: 0.95rem;
    font-style: italic;
    color: var(--text-secondary);
    margin: 16px 0;
  }

  /* ── Steps ───────────────────────────────────────────── */
  .steps-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin: 24px 0;
  }
  .step-card {
    background: var(--bg-container);
    border-radius: 1rem;
    padding: 24px 20px;
    text-align: center;
  }
  .step-num {
    font-family: var(--font-sans);
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--brand-primary);
    margin-bottom: 8px;
  }
  .step-card h3 { font-size: 1rem; margin-bottom: 8px; }
  .step-card p { font-size: 0.82rem; color: var(--text-secondary); margin: 0; line-height: 1.5; }
  .step-duration {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.68rem;
    font-weight: 700;
    color: var(--brand-primary);
    background: rgba(2,204,129,0.1);
    border-radius: 100px;
    padding: 3px 10px;
    margin-top: 10px;
  }
  .step-duration.active { background: var(--brand-primary); color: #0a2a1c; }

  .support-strip {
    background: var(--bg-container);
    border-radius: 1rem;
    padding: 16px 24px;
    text-align: center;
  }
  .support-strip .eyebrow { margin-bottom: 6px; }
  .support-strip strong { font-size: 0.9rem; color: var(--text-primary); }

  /* ── Devices (dark bg) ───────────────────────────────── */
  .devices-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    margin-bottom: 20px;
  }
  .device-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 1rem;
    padding: 24px 20px;
    text-align: center;
  }
  .device-card .d-icon {
    font-size: 2.8rem;
    color: var(--brand-primary);
    margin-bottom: 12px;
  }
  .device-card h3 { color: #ffffff; font-size: 1rem; margin-bottom: 8px; }
  .device-card p { font-size: 0.82rem; color: rgba(255,255,255,0.55); margin: 0; }

  .no-install-strip {
    background: rgba(255,255,255,0.06);
    border: 1px solid rgba(255,255,255,0.1);
    border-radius: 1rem;
    padding: 16px 28px;
    text-align: center;
  }
  .no-install-strip .eyebrow { color: rgba(2,204,129,0.8); margin-bottom: 6px; }
  .no-install-strip strong { color: #ffffff; font-size: 0.9rem; }

  /* ── Pricing ─────────────────────────────────────────── */
  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;
    align-items: stretch;
    margin-top: 20px;
  }
  .price-card {
    border-radius: 1rem;
    padding: 22px 18px;
    display: flex;
    flex-direction: column;
    background: var(--bg-container);
    border: 1.5px solid #e2e8f0;
  }
  .price-card--popular {
    background: var(--bg-overlay);
    border-color: var(--brand-primary);
    border-width: 2px;
  }
  .price-badge {
    display: inline-block;
    background: var(--brand-primary);
    color: #0a2a1c;
    border-radius: 100px;
    padding: 2px 10px;
    font-size: 0.58rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    margin-bottom: 10px;
    align-self: flex-start;
  }
  .price-name {
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--brand-primary);
    margin-bottom: 6px;
  }
  .price-card--popular .price-name { color: rgba(255,255,255,0.45); }
  .price-amount {
    font-family: var(--font-sans);
    font-size: 1.9rem;
    font-weight: 800;
    line-height: 1;
    color: var(--text-primary);
    letter-spacing: -0.02em;
    margin-bottom: 2px;
  }
  .price-card--popular .price-amount { color: #ffffff; }
  .price-period {
    font-size: 0.66rem;
    color: var(--text-tertiary);
    margin-bottom: 8px;
  }
  .price-card--popular .price-period { color: rgba(255,255,255,0.35); }
  .price-desc {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-bottom: 12px;
    line-height: 1.4;
  }
  .price-card--popular .price-desc { color: rgba(255,255,255,0.55); }
  .price-divider {
    border: none;
    border-top: 1px solid #e2e8f0;
    margin: 10px 0 12px;
  }
  .price-card--popular .price-divider { border-color: rgba(255,255,255,0.12); }
  .price-list { flex: 1; }
  .price-list li { font-size: 0.76rem; padding: 3px 0 3px 20px; }
  .price-card--popular .price-list li { color: rgba(255,255,255,0.7); }
  .price-card--popular .price-list li::before { background: var(--brand-primary); }
  .price-footnote {
    text-align: center;
    font-size: 0.72rem;
    color: var(--text-tertiary);
    margin-top: 14px;
  }

  /* ── FAQ ─────────────────────────────────────────────── */
  .faq-item {
    border-bottom: 1px solid rgba(0,0,0,0.07);
    padding: 13px 0;
  }
  .faq-q {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 6px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .faq-q .bi { color: var(--brand-primary); flex-shrink: 0; }
  .faq-a {
    font-size: 0.81rem;
    color: var(--text-secondary);
    line-height: 1.6;
    margin: 0;
    padding-left: 22px;
  }

  /* ── Brand logo ──────────────────────────────────────── */
  .brand-logo {
    width: 140px;
    height: auto;
    border-radius: 12px;
    display: block;
    margin-bottom: 0;
  }
  section.cover img.brand-logo {
    width: 140px !important;
    height: auto !important;
    max-width: 500px !important;
    object-fit: contain;
  }

  hr { border: none; border-top: 2px solid var(--bg-container); margin: 16px 0; }
  section::after { font-size: 0.65rem; color: var(--text-tertiary); }
  .bi { vertical-align: middle; line-height: 1; }
  h3 .bi { margin-right: 5px; font-size: 1.05rem; }
---

<!-- _class: cover -->
<!-- _paginate: false -->

<img src="../logos/iOS App icon - 1 - horizontal.png" class="brand-logo">

<div class="eyebrow" style="margin-top:28px;">Tvoj posao, pod kontrolom.</div>

<h1>Tvoj posao —<br><em>red i mirna glava.</em></h1>

<p class="subtitle">Sve na jednom mestu — kupci, narudžbine, fakture i pregled zarade.</p>

<div style="display:flex;gap:12px;">
<span class="pill"><i class="bi bi-people-fill"></i> Kupci</span>
<span class="pill"><i class="bi bi-box-seam"></i> Porudžbine</span>
<span class="pill"><i class="bi bi-receipt"></i> Fakture</span>
<span class="pill"><i class="bi bi-graph-up-arrow"></i> Zarada</span>
</div>

---

<!-- _paginate: false -->

<div class="eyebrow">Problem koji poznaješ</div>

## Da vam posao ne oduzima *sav mir*

<p class="page-sub">Posao je porastao — i to je dobra stvar. Ali kad ima više posla, teže je sve držati u glavi. Papiri znaju da naprave pometnju.</p>

<div class="three-col">

<div class="problem-card">
<div class="p-icon"><i class="bi bi-journal-x"></i></div>
<h3>Rokovnik se izgubi baš kad treba</h3>
<p>Sve si zapisao — ali gde? U kojoj svesci, na kom papiru, u kojoj fascikli?</p>
<p class="pquote">"Znam da sam negde zapisao, ali..."</p>
</div>

<div class="problem-card">
<div class="p-icon"><i class="bi bi-file-earmark-x"></i></div>
<h3>Fakture i papiri gutaju vreme</h3>
<p>Kraj meseca dođe brzo. A onda kreće sabiranje, traženje papira i pisanje faktura ručno.</p>
<p class="pquote">"Ne znam ko mi duguje, a ko je platio."</p>
</div>

<div class="problem-card">
<div class="p-icon"><i class="bi bi-telephone-x"></i></div>
<h3>Radnik te zove, ti zoveš radnika</h3>
<p>Ko je preuzeo porudžbinu, šta je gotovo, šta čeka — teško pratiti kad nema jednog mesta.</p>
<p class="pquote">"Sto puta me pitaju istu stvar..."</p>
</div>

</div>

<div class="solve-strip">
<strong>Spona uvodi red u papire — i nije ništa komplikovanije od slanja poruka na Viberu.</strong>
</div>

---

<div class="eyebrow">Rešenje</div>

## Digitalni rokovnik koji *sam računa*

<div class="two-col-wide">
<div>

<p class="page-sub">Spona je rokovnik koji se ne može izgubiti — sam sabira i oduzima, pamti svakog kupca i svaki dogovor, i drži sve na jednom mestu od prvog dana.</p>

<ul class="check-list">
<li>Svaki kupac i dogovor — zapisan i na mestu</li>
<li>Svaka porudžbina praćena od upisa do isporuke</li>
<li>Faktura gotova za pola minute, bez grešaka</li>
<li>Na kraju dana vidiš crno na belo kako stoji posao</li>
<li>Svaki radnik vidi samo šta njemu pripada</li>
<li>Radi na telefonu, tabletu i računaru</li>
</ul>

</div>
<div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-display"></i></div>
  <strong>Glavni pregled</strong>
  Sve najvažnije na jednom ekranu — odmah vidiš kako stoji posao
</div>

</div>
</div>

---

<!-- _paginate: false -->

<div class="eyebrow">Spona u brojevima</div>

## Provereno u praksi

<div class="stats-strip">

<div class="stat-item">
<div class="stat-big">30<span class="stat-unit">sek</span></div>
<div class="stat-label"><i class="bi bi-receipt"></i> Faktura od porudžbine do PDF-a</div>
</div>

<div class="stat-item">
<div class="stat-big">100<span class="stat-unit">%</span></div>
<div class="stat-label"><i class="bi bi-shield-fill-check"></i> Sigurni podaci</div>
</div>

<div class="stat-item">
<div class="stat-big">3<span class="stat-unit"> uloge</span></div>
<div class="stat-label"><i class="bi bi-people-fill"></i> Admin, Poslovođa, Radnik</div>
</div>

<div class="stat-item">
<div class="stat-big">0<span class="stat-unit"> inst.</span></div>
<div class="stat-label"><i class="bi bi-globe2"></i> Radi u svakom pretraživaču</div>
</div>

</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">01</div>

## Tvoji kupci

Da uvek znaš šta si se s kim dogovorio — čak i za godinu dana.

---

## Nikad više izgubljen kontakt ni dogovor

<div class="two-col">
<div>

<div class="feature-tag"><i class="bi bi-people"></i> 01 — Kupci</div>
<p class="page-sub">Upišeš kupca jednom — i sve što si s njim radio ostane u Sponi zauvek. Ime, telefon, istorija porudžbina, šta ste se dogovorili. Nema više: "Kako mu beše broj?"</p>

<ul class="dot-list">
<li><strong>Ime, telefon, adresa</strong> — sve na jednom mestu</li>
<li><strong>Cela istorija porudžbina</strong> po svakom kupcu</li>
<li><strong>Nađeš bilo koga za sekundu</strong> — samo ukucaš ime</li>
<li><strong>Beleške uz profil</strong> — zapiši šta god treba upamtiti</li>
<li><strong>Grupe porudžbina</strong> — veleprodaja odvojeno od maloprodaje</li>
</ul>

<br>

<div class="card">
<div class="eyebrow">Mirna glava</div>
Čisti računi s kupcima — znaš ko ti šta duguje i šta ste se dogovorili, čak i kad si na odmoru.
</div>

</div>
<div style="display:flex;flex-direction:column;gap:14px;">

<div class="mockup-box">
<img src="../LandingPage/users.png" alt="Pregled kupaca">
<div class="m-cap">
<strong>Pregled kupaca</strong>
Jasna lista svih kupaca — nađeš koga treba za par sekundi
</div>
</div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-person-fill"></i></div>
  <strong>Kartica kupca</strong>
  Sve porudžbine, dugovanja i beleške za jednog kupca
</div>

</div>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">02</div>

## Porudžbine

Da radnik ne mora da te zove deset puta dnevno da pita šta da radi.

---

## Svaka porudžbina — zapisana i praćena

<div class="two-col">
<div>

<div class="feature-tag"><i class="bi bi-box-seam"></i> 02 — Porudžbine</div>
<p class="page-sub">Kupac naruči — ti upišeš u Sponu za minut. Od tog trenutka svaki radnik zna šta treba da uradi, bez telefoniranja i petljanja.</p>

<ul class="dot-list">
<li><strong>Odabereš kupca</strong> iz svoje baze jednim klikom</li>
<li><strong>Dodaš šta je naručeno</strong> — cene se same upišu</li>
<li><strong>Gotovinsko, na fakturu, karticom</strong> — piše odmah</li>
<li><strong>Pratiš gde je porudžbina</strong> — u radu, gotovo, otkazano</li>
<li><strong>Ostavi napomenu radniku</strong> — bez telefoniranja</li>
</ul>

<br>

<div class="card" style="background:var(--brand-primary-light);">
<h3 style="color:var(--brand-primary-dark);"><i class="bi bi-printer-fill"></i> Radni nalog na štampu</h3>
<span style="font-size:0.85rem;color:var(--text-secondary);">Jednim klikom odštampaš nalog za radionicu ili magacin — jasno napisano, bez grešaka. Radnik uzme papir i zna šta radi.</span>
</div>

</div>
<div style="display:flex;flex-direction:column;gap:14px;">

<div class="screenshot">
  <div class="icon"><i class="bi bi-box-seam"></i></div>
  <strong>Pregled porudžbina</strong>
  Vidiš sve porudžbine — šta čeka, šta je u radu, šta je gotovo
</div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-pencil"></i></div>
  <strong>Unos nove porudžbine</strong>
  Brz unos — odabereš kupca, dodaš artikle, gotovo
</div>

</div>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">03</div>

## Fakture

Da završiš papire dok kupac još nije ni izašao iz radnje.

---

## Faktura za pola minute, bez greške

<div class="two-col">
<div>

<div class="feature-tag"><i class="bi bi-receipt"></i> 03 — Fakture</div>
<p class="page-sub">Nema više ručnog pisanja. Spona napravi fakturu sama iz porudžbine — uredno, ispravno, s tvojim logom — za pola minute. Odštampaš ili pošalješ mejlom, gotovo.</p>

<ul class="dot-list">
<li><strong>Sve se samo popuni</strong> iz porudžbine — nema ponovnog kucanja</li>
<li><strong>Odštampaj ili pošalji mejlom</strong> za dva klika</li>
<li><strong>Brojevi faktura idu sami po redu</strong> — ne moraš da pamtiš</li>
<li><strong>Jasno vidiš ko je platio, a ko nije</strong></li>
<li><strong>Tvoj logo i firma</strong> na svakoj fakturi</li>
</ul>

<div class="quote">
"Faktura je gotova pre nego što kupac izađe iz radnje."
</div>

</div>
<div style="display:flex;flex-direction:column;gap:14px;">

<div class="mockup-box">
<img src="../LandingPage/invoice.jpg" alt="Gotova faktura">
<div class="m-cap">
<strong>Gotova faktura</strong>
Uredno odštampana faktura s tvojim logom — profesionalno, bez muke
</div>
</div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-list-ul"></i></div>
  <strong>Pregled faktura</strong>
  Jasna lista — ko je platio, a ko nije
</div>

</div>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">04</div>

## Cenovnik i artikli

Cene se ne zaboravljaju — i uvek su ispravne.

---

## Cene se ne zaboravljaju — i uvek su ispravne

<div class="two-col">
<div>

<div class="feature-tag"><i class="bi bi-tag"></i> 04 — Cenovnik</div>
<p class="page-sub">Upišeš sve što prodaješ jednom — i Spona ti to sama nudi svaki put kad praviš porudžbinu. Nema više računanja na papiru ili grešaka u ceni.</p>

<ul class="dot-list">
<li><strong>Naziv i cena</strong> za svaki artikal ili uslugu</li>
<li><strong>Varijante</strong> — veličina, boja, tip — sve jasno razdvojeno</li>
<li><strong>Kategorije</strong> za lakše snalaženje u velikim cenovnicima</li>
<li><strong>Posebne cene po kupcu</strong> — veleprodaja, stalni kupci</li>
</ul>

<br>

<div class="card">
<div class="eyebrow">Kako to izgleda u praksi</div>
Pri unosu porudžbine samo ukucaš par slova — Spona iskoči s artiklom i cenom. Odabereš količinu, gotovo. Nema greške, nema računanja.
</div>

</div>
<div style="display:flex;flex-direction:column;gap:14px;">

<div class="screenshot">
  <div class="icon"><i class="bi bi-grid"></i></div>
  <strong>Cenovnik</strong>
  Svi tvoji artikli i cene na jednom mestu
</div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-tag-fill"></i></div>
  <strong>Kartica artikla</strong>
  Varijante, cene i opis — sve na jednom mestu
</div>

</div>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">05</div>

## Zarada

Bez sabiranja do ponoći — crno na belo vidiš kako stoji posao.

---

## Crno na belo — bez digitrona

<div class="two-col">
<div>

<div class="feature-tag"><i class="bi bi-graph-up-arrow"></i> 05 — Zarada</div>
<p class="page-sub">Nema više sabiranja do ponoći. Otvoriš Sponu — i odmah vidiš čiste račune: ko je platio, koliko si zaradio, šta se dobro prodaje.</p>

<div class="three-col" style="margin-bottom:16px;gap:10px;">
<div class="card" style="margin:0;text-align:center;padding:14px 10px;">
<div style="font-size:1.8rem;color:var(--brand-primary);"><i class="bi bi-graph-up-arrow"></i></div>
<div style="font-size:0.74rem;color:var(--text-secondary);margin-top:5px;font-weight:500;">Koliko si zaradio</div>
</div>
<div class="card" style="margin:0;text-align:center;padding:14px 10px;">
<div style="font-size:1.8rem;color:var(--brand-primary);"><i class="bi bi-star-fill"></i></div>
<div style="font-size:0.74rem;color:var(--text-secondary);margin-top:5px;font-weight:500;">Ko ti nosi najviše</div>
</div>
<div class="card" style="margin:0;text-align:center;padding:14px 10px;">
<div style="font-size:1.8rem;color:var(--brand-primary);"><i class="bi bi-box-seam"></i></div>
<div style="font-size:0.74rem;color:var(--text-secondary);margin-top:5px;font-weight:500;">Šta ide, šta stoji</div>
</div>
</div>

<ul class="dot-list">
<li><strong>Zarada po danu, mesecu ili godini</strong> — bez jednog sabiranja</li>
<li><strong>Ko ti donosi najviše para</strong> — da znaš na koga da računaš</li>
<li><strong>Šta se dobro prodaje, a šta skuplja prašinu</strong></li>
<li><strong>Ko od radnika šta uradi</strong> — bez ispitivanja</li>
</ul>

</div>
<div>

<div class="mockup-box" style="min-height:260px;">
<img src="../LandingPage/statistics.png" alt="Pregled poslovanja">
<div class="m-cap">
<strong>Pregled poslovanja</strong>
Odmah vidiš gde si u plusu i šta se dobro prodaje
</div>
</div>

</div>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">06</div>

## Tim

Ne moraš sve da pratiš lično — Spona sredi ko šta radi.

---

## Svako zna svoj deo posla

<div class="two-col">
<div>

<div class="feature-tag"><i class="bi bi-people"></i> 06 — Tim</div>
<p class="page-sub">Svaki radnik se prijavi sa svojim nalogom i odmah vidi šta ga čeka — ni više ni manje. A ti kao gazda uvek možeš da proveriš šta se radi, gde god da si.</p>

<div class="card" style="margin-bottom:12px;">
<div class="eyebrow">Ko šta vidi</div>
<ul class="dot-list">
<li><strong>Ti kao gazda</strong> — vidiš i menjaš baš sve</li>
<li><strong>Poslovođa</strong> — prati tim i sve porudžbine</li>
<li><strong>Radnik / prodavac</strong> — unosi porudžbine, vidi samo što mu treba</li>
</ul>
</div>

<div class="card">
<div class="eyebrow">Čisti računi unutar firme</div>
Svako ima svoju lozinku. Cene, kupci, zarada — to ostaje između tebe i Spone. Niko sa strane ne može da zaviri.
</div>

</div>
<div style="display:flex;flex-direction:column;gap:14px;">

<div class="screenshot">
  <div class="icon"><i class="bi bi-people-fill"></i></div>
  <strong>Pregled radnika</strong>
  Ko je u timu i šta svako sme da radi
</div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-gear-fill"></i></div>
  <strong>Nalog radnika</strong>
  Svaki radnik ima svoje pristupne podatke
</div>

</div>
</div>

---

<!-- _class: section-dark -->
<!-- _paginate: false -->

<div class="eyebrow">Jednostavno kao daljinski od TV-a</div>

## Radi na telefonu,<br>tabletu i računaru

<p>Nema komplikovane obuke — ako umeš da koristiš telefon, umeš da koristiš Sponu.</p>

---

<!-- _class: section-dark -->
<!-- _paginate: false -->

## Radi na telefonu, tabletu i računaru

<div class="devices-grid">

<div class="device-card">
<div class="d-icon"><i class="bi bi-display"></i></div>
<h3>U kancelariji</h3>
<p>Na računaru imaš pun pregled — idealno za unos i praćenje svega.</p>
</div>

<div class="device-card">
<div class="d-icon"><i class="bi bi-phone-fill"></i></div>
<h3>Na terenu</h3>
<p>Na telefonu proveriš porudžbinu ili status dok si kod kupca ili na isporuci.</p>
</div>

<div class="device-card">
<div class="d-icon"><i class="bi bi-airplane-fill"></i></div>
<h3>Na odmoru</h3>
<p>Otvoriš Sponu na telefonu i za minut znaš šta se dešava u firmi — pa se opusti.</p>
</div>

</div>

<div class="no-install-strip">
<div class="eyebrow">Nema instalacije, nema komplikacija</div>
<strong>Spona radi u pretraživaču — otvoriš kao stranicu, kao Facebook ili YouTube. Ništa posebno ne treba instalirati.</strong>
</div>

---

<!-- _class: section-dark -->
<!-- _paginate: false -->

<div class="eyebrow">Kako početi?</div>

## Kreneš za tri koraka —<br>mi smo uz tebe

<p>Mi smo tu uz tebe — od prvog dana.</p>

---

## Kreneš za tri koraka — mi smo uz tebe

<div class="steps-grid">

<div class="step-card">
<div class="step-num">1</div>
<h3>Javi nam se</h3>
<p>Pozoveš ili nam pišeš — za koji minut dobiješ pristup. Nema papirologije.</p>
<div class="step-duration"><i class="bi bi-clock"></i> Odmah</div>
</div>

<div class="step-card">
<div class="step-num">2</div>
<h3>Unesimo podatke zajedno</h3>
<p>Mi ti pomognemo da uneseš kupce, artikle i cenovnik. Ne moraš ništa sam.</p>
<div class="step-duration"><i class="bi bi-clock"></i> ~30 minuta</div>
</div>

<div class="step-card">
<div class="step-num">3</div>
<h3>Spreman odmah</h3>
<p>Napraviš prvu porudžbinu i odmah osetiš razliku. A mi smo tu kad zatreba.</p>
<div class="step-duration active"><i class="bi bi-check-circle-fill"></i> Spreman!</div>
</div>

</div>

<div class="support-strip">
<div class="eyebrow">Nisi sam</div>
<strong>Obučavamo tebe i tvoje radnike, odgovaramo na sva pitanja i dostupni smo kad zatreba. Nisi prepušten sam sebi.</strong>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">07</div>

## Jasne cene, bez iznenađenja

Odaberi plan koji odgovara tvojoj firmi. Besplatan period od 14 dana — bez kreditne kartice.

---

## Jasne cene, bez iznenađenja

<p class="page-sub">Odaberi plan koji odgovara tvojoj firmi. Besplatan period od 14 dana — bez kreditne kartice.</p>

<div class="pricing-grid">

<div class="price-card">
<div class="price-name">Starter</div>
<div class="price-amount">2.900 RSD</div>
<div class="price-period">mesečno</div>
<div class="price-desc">Savršen za frilensere i male timove koji tek počinju.</div>
<hr class="price-divider">
<ul class="price-list">
<li>Do 3 korisnika</li>
<li>Kupci i porudžbine</li>
<li>Predračuni (PDF)</li>
<li>Email podrška</li>
</ul>
</div>

<div class="price-card price-card--popular">
<div class="price-badge">★ Najpopularniji</div>
<div class="price-name">Standard</div>
<div class="price-amount">5.900 RSD</div>
<div class="price-period">mesečno</div>
<div class="price-desc">Za rastuće firme kojima treba više kontrole i saradnje.</div>
<hr class="price-divider">
<ul class="price-list">
<li>Sve iz Starter plana</li>
<li>Do 10 korisnika</li>
<li>Korisničke uloge</li>
<li>Statistika</li>
<li>Prioritetna podrška</li>
</ul>
</div>

<div class="price-card">
<div class="price-name">Pro</div>
<div class="price-amount">Dogovor</div>
<div class="price-period">mesečno</div>
<div class="price-desc">Za etablirane firme sa velikim timovima i punim zahtevima.</div>
<hr class="price-divider">
<ul class="price-list">
<li>Sve iz Standard plana</li>
<li>Neograničeni korisnici</li>
<li>Napredne funkcionalnosti</li>
<li>Personalizovane funkcionalnosti</li>
</ul>
</div>

</div>

<p class="price-footnote">Nisi siguran koji plan? Javi nam se i pomoći ćemo ti da odabereš pravi.</p>

---

<!-- _paginate: false -->

<div class="eyebrow">Česta pitanja</div>

## Imaš pitanja? Mi imamo odgovore.

<div class="faq-item">
<p class="faq-q"><i class="bi bi-plus-circle"></i> Da li postoji besplatni probni period?</p>
<p class="faq-a">Da! Svaki plan dolazi sa 14 dana besplatnog korišćenja — bez kreditne kartice. Možeš testirati sve funkcije pre nego što se odlučiš.</p>
</div>

<div class="faq-item">
<p class="faq-q"><i class="bi bi-plus-circle"></i> Da li moram da instaliram nešto?</p>
<p class="faq-a">Ne. Spona je cloud aplikacija koju koristiš direktno iz browsera. Nema instalacije, nema ažuriranja — uvek si na najnovijoj verziji.</p>
</div>

<div class="faq-item">
<p class="faq-q"><i class="bi bi-plus-circle"></i> Koji korisnički uloge postoje?</p>
<p class="faq-a">Postoje tri uloge: <strong>Admin</strong> koji ima pun pristup svim funkcijama, <strong>Poslovođa</strong> koji prati tim i porudžbine, i <strong>Radnik</strong> koji vidi samo ono što mu treba.</p>
</div>

<div class="faq-item">
<p class="faq-q"><i class="bi bi-plus-circle"></i> Da li su moji podaci bezbedni?</p>
<p class="faq-a">Apsolutno. Svi podaci su šifrovani SSL/TLS protokolom, a serveri se nalaze u EU datacentrima koji zadovoljavaju GDPR standarde.</p>
</div>

<div class="faq-item">
<p class="faq-q"><i class="bi bi-plus-circle"></i> Mogu li da otkažem pretplatu u bilo kom trenutku?</p>
<p class="faq-a">Da, bez ikakvih penala. Možeš otkazati pretplatu direktno iz podešavanja naloga. Pristup ostaje aktivan do kraja plaćenog perioda.</p>
</div>

---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="label-row">
  <span class="pill">Spona</span>
</div>

<div style="display:flex;align-items:center;gap:24px;margin-bottom:0;">
<img src="../logos/iOS App icon - 1 - horizontal.png" class="brand-logo" style="margin-bottom:0;flex-shrink:0;">
<h1 style="font-family:'Bricolage Grotesque','Inter',sans-serif;font-size:3.2rem;font-weight:800;line-height:1.1;margin:0;color:#ffffff;letter-spacing:-0.02em;">Tvoj posao, <span class="accent">pod kontrolom.</span></h1>
</div>

<div class="divider"></div>

<p class="subtitle">Kupci. Porudžbine. Fakture. Zarada.<br>Sve na jednom mestu — i mirna glava na kraju dana.</p>

<div style="display:flex;gap:12px;margin-top:8px;">
<a style="display:inline-flex;align-items:center;gap:8px;background:var(--brand-primary);color:#0a2a1c;border-radius:100px;padding:12px 28px;font-size:0.88rem;font-weight:700;text-decoration:none;"><i class="bi bi-envelope-fill"></i> Pošalji upit</a>
<a style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.08);color:#ffffff;border:1px solid rgba(255,255,255,0.2);border-radius:100px;padding:12px 28px;font-size:0.88rem;font-weight:700;text-decoration:none;"><i class="bi bi-telephone-fill"></i> Pozovi nas</a>
</div>
