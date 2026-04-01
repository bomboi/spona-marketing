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
    background: #ffffff;
    border-radius: 1rem;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  }
  .problem-card .p-icon {
    width: 48px;
    height: 48px;
    background: rgba(2,204,129,0.10);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--brand-primary);
    margin-bottom: 4px;
  }
  .p-icon .bi { font-size: 1.5rem; color: var(--brand-primary); }
  .problem-card h3 { color: var(--text-primary); font-size: 0.95rem; margin: 0; line-height: 1.35; font-weight: 700; }
  .problem-card p { color: var(--text-secondary); font-size: 0.82rem; margin: 0; line-height: 1.6; }
  .problem-card .pquote {
    font-style: italic;
    color: var(--text-tertiary);
    background: rgba(255,255,255,0.75);
    border-left: 3px solid rgba(2,204,129,0.5);
    border-radius: 0 4px 4px 0;
    padding: 6px 10px;
    font-size: 0.79rem;
    line-height: 1.5;
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
    background: transparent;
    border-radius: 1.5rem;
    padding: 0;
    margin-top: 28px;
  }
  .stat-item { text-align: center; }
  .stat-big {
    font-family: var(--font-sans);
    font-size: 3rem;
    font-weight: 800;
    color: var(--brand-primary);
    line-height: 1;
    display: flex;
    align-items: baseline;
    justify-content: center;
    gap: 4px;
    letter-spacing: -0.03em;
  }
  .stat-unit {
    font-size: 1.1rem;
    font-weight: 600;
    color: rgba(2,204,129,0.65);
    margin-left: 2px;
  }
  .stat-label {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.45);
    font-weight: 500;
    margin-top: 8px;
  }
  .stat-meta {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.38);
    font-weight: 500;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  /* ── App mockup components ───────────────────────────── */
  .app-mockup {
    background: #ffffff;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.07);
    box-shadow: 0 4px 6px rgba(0,0,0,0.04), 0 16px 40px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
  }
  .app-mockup + .app-mockup { margin-top: 14px; }
  .am-body { padding: 18px 16px 16px; display: flex; flex-direction: column; gap: 0; }
  .am-stats-row { display: flex; gap: 8px; margin-bottom: 10px; }
  .am-stat-block { flex: 1; background: var(--bg-container); border-radius: 10px; padding: 10px 10px 8px; }
  .am-stat-val { font-size: 1rem; font-weight: 800; color: var(--text-primary); line-height: 1.1; letter-spacing: -0.02em; }
  .am-stat-lbl { font-size: 0.6rem; color: var(--text-tertiary); margin-top: 3px; line-height: 1.3; }
  .am-stat-up  { font-size: 0.62rem; font-weight: 600; color: var(--brand-primary); margin-top: 4px; }
  .am-chart { background: var(--bg-container); border-radius: 10px; padding: 10px 12px 12px; margin-bottom: 10px; }
  .am-chart-label { font-size: 0.58rem; font-weight: 700; color: var(--text-tertiary); letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 8px; }
  .am-chart-bars { display: flex; align-items: stretch; gap: 5px; height: 48px; }
  .am-bar-wrap { flex: 1; display: flex; flex-direction: column; align-items: center; gap: 4px; justify-content: flex-end; }
  .am-bar-fill { width: 100%; height: var(--h, 40%); background: rgba(2,204,129,0.18); border-radius: 3px 3px 0 0; }
  .am-bar-fill.active { background: var(--brand-primary); box-shadow: 0 0 10px rgba(2,204,129,0.45); }
  .am-bar-wrap > span { font-size: 0.56rem; color: var(--text-tertiary); }
  .am-section-label { font-size: 0.58rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-tertiary); margin: 8px 0 4px; }
  .am-order-row { display: flex; align-items: center; gap: 8px; padding: 7px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
  .am-order-row:last-child { border-bottom: none; }
  .am-order-status { font-size: 0.58rem; font-weight: 700; padding: 2px 7px; border-radius: 100px; letter-spacing: 0.03em; white-space: nowrap; flex-shrink: 0; }
  .am-order-status.novo   { background: rgba(2,204,129,0.14); color: var(--brand-primary); }
  .am-order-status.uradu  { background: rgba(255,186,0,0.14);  color: #a07000; }
  .am-order-status.gotovo { background: rgba(0,0,0,0.05);      color: var(--text-secondary); }
  .am-order-name { flex: 1; font-size: 0.73rem; font-weight: 500; color: var(--text-primary); min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
  .am-order-amt  { font-size: 0.73rem; font-weight: 700; color: var(--text-primary); white-space: nowrap; }
  .am-cust-row { display: flex; align-items: center; gap: 9px; padding: 7px 6px; border-radius: 8px; cursor: default; }
  .am-cust-row.active { background: rgba(2,204,129,0.07); outline: 1px solid rgba(2,204,129,0.2); }
  .am-cust-av { width: 32px; height: 32px; border-radius: 50%; background: var(--av, linear-gradient(135deg,rgba(2,204,129,0.7),rgba(1,120,77,0.9))); display: flex; align-items: center; justify-content: center; font-size: 0.62rem; font-weight: 700; color: #fff; flex-shrink: 0; }
  .am-cust-info { flex: 1; min-width: 0; }
  .am-cust-name { font-size: 0.73rem; font-weight: 600; color: var(--text-primary); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
  .am-cust-sub  { font-size: 0.6rem; color: var(--text-tertiary); }
  .am-product-row { display: flex; align-items: center; gap: 10px; padding: 8px 4px; border-bottom: 1px solid rgba(0,0,0,0.05); }
  .am-product-row:last-child { border-bottom: none; }
  .am-product-icon { width: 32px; height: 32px; border-radius: 8px; background: var(--brand-primary-light); display: flex; align-items: center; justify-content: center; font-size: 1rem; flex-shrink: 0; }
  .am-product-info { flex: 1; min-width: 0; }
  .am-product-name  { font-size: 0.73rem; font-weight: 600; color: var(--text-primary); }
  .am-product-price { font-size: 0.75rem; font-weight: 700; color: var(--brand-primary-dark); white-space: nowrap; }
  .am-team-row { display: flex; align-items: center; gap: 9px; padding: 7px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
  .am-team-row:last-child { border-bottom: none; }
  .am-role-badge { font-size: 0.58rem; font-weight: 700; padding: 2px 8px; border-radius: 100px; letter-spacing: 0.03em; white-space: nowrap; flex-shrink: 0; }
  .am-role-badge.admin      { background: rgba(2,204,129,0.14); color: var(--brand-primary); }
  .am-role-badge.poslovodja { background: rgba(255,186,0,0.14);  color: #a07000; }
  .am-role-badge.radnik     { background: rgba(0,0,0,0.06);      color: var(--text-secondary); }
  .am-perm-table { width: 100%; border-collapse: collapse; font-size: 0.68rem; }
  .am-perm-table th { padding: 4px 6px; text-align: center; font-weight: 600; }
  .am-perm-table th:first-child { text-align: left; }
  .am-perm-table td { padding: 6px 6px; border-bottom: 1px solid rgba(0,0,0,0.05); color: var(--text-secondary); text-align: center; }
  .am-perm-table td:first-child { text-align: left; font-size: 0.68rem; }
  .am-perm-table tr:last-child td { border-bottom: none; }
  .am-check { color: var(--brand-primary); font-size: 0.9rem; }
  .am-dash  { color: var(--brand-secondary); font-size: 0.9rem; }
  .am-cross { color: #dc3545; font-size: 0.9rem; opacity: 0.5; }
  .am-form-field { margin-bottom: 8px; }
  .am-field-label { font-size: 0.6rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-tertiary); margin-bottom: 4px; }
  .am-field-val { background: var(--bg-container); border-radius: 8px; padding: 7px 10px; font-size: 0.73rem; color: var(--text-primary); font-weight: 500; display: flex; align-items: center; gap: 6px; }
  .am-field-selected { border: 1px solid rgba(2,204,129,0.4); background: rgba(2,204,129,0.06); }
  .am-item-row { display: flex; align-items: center; gap: 8px; padding: 7px 0; border-bottom: 1px solid rgba(0,0,0,0.05); }
  .am-item-row:last-child { border-bottom: none; }
  .am-item-info { flex: 1; min-width: 0; }
  .am-item-qty { font-size: 0.65rem; font-weight: 600; color: var(--text-tertiary); background: var(--bg-container); padding: 2px 8px; border-radius: 6px; white-space: nowrap; }
  .am-divider-line { height: 1px; background: rgba(0,0,0,0.07); margin: 8px 0; }
  .am-tabs { display: flex; gap: 5px; margin-bottom: 10px; flex-wrap: wrap; }
  .am-tab { font-size: 0.62rem; font-weight: 600; padding: 3px 9px; border-radius: 100px; background: var(--bg-container); color: var(--text-secondary); white-space: nowrap; }
  .am-tab.active { background: rgba(2,204,129,0.12); color: var(--brand-primary); }

  /* ── Testimonial ─────────────────────────────────────── */
  .testimonial-card { background: var(--bg-container); border-radius: 1.5rem; padding: 32px 36px; max-width: 800px; margin: 0 auto; }
  .testimonial-stars { color: var(--brand-secondary); font-size: 1rem; margin-bottom: 16px; letter-spacing: 3px; }
  .testimonial-quote { font-family: var(--font-serif); font-style: italic; font-size: 1.1rem; color: var(--text-primary); line-height: 1.7; margin: 0 0 20px; border: none; padding: 0; background: none; }
  .testimonial-author { display: flex; align-items: center; gap: 14px; }
  .testimonial-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--brand-primary-light); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: var(--brand-primary); flex-shrink: 0; }
  .testimonial-meta strong { display: block; font-size: 0.88rem; color: var(--text-primary); font-weight: 700; }
  .testimonial-meta span { font-size: 0.78rem; color: var(--text-tertiary); }

  /* ── Trust bar ───────────────────────────────────────── */
  .trust-bar-inner { display: flex; align-items: center; justify-content: center; gap: 0; }
  .trust-item { display: flex; align-items: center; gap: 8px; padding: 8px 20px; font-size: 0.82rem; font-weight: 500; color: var(--text-secondary); }
  .trust-item .bi { color: var(--brand-primary); font-size: 0.95rem; }
  .trust-divider { width: 1px; height: 18px; background: rgba(0,0,0,0.1); flex-shrink: 0; }

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

  .step-node-icon {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: white;
    border: 2px solid var(--brand-primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    color: var(--brand-primary);
    margin: 0 auto 10px;
    box-shadow: 0 4px 16px rgba(2,204,129,0.12);
  }
  .step-node-icon.active {
    background: var(--brand-primary);
    border-color: var(--brand-primary);
    color: white;
    box-shadow: 0 6px 24px rgba(2,204,129,0.38);
  }

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

  /* ── Pricing (mirroring index.html styling) ──────────── */
  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;
    align-items: stretch;
    margin-top: 20px;
  }
  .pricing-card {
    background: #ffffff;
    border-radius: 1.25rem;
    padding: 28px 22px 24px;
    border: 1.5px solid rgba(0,0,0,0.09);
    box-shadow: 0 4px 20px rgba(0,0,0,0.07);
    display: flex;
    flex-direction: column;
  }
  .pricing-card.popular {
    background: #f4fdf9;
    border-color: rgba(2,204,129,0.40);
    box-shadow: 0 12px 48px rgba(2,204,129,0.16), 0 4px 16px rgba(0,0,0,0.07);
  }
  .pricing-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: rgba(2,204,129,0.15);
    color: var(--brand-primary-dark);
    font-size: 0.6rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 12px;
    border-radius: 100px;
    margin-bottom: 16px;
    width: fit-content;
    border: 1px solid rgba(2,204,129,0.25);
  }
  .pricing-plan {
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--text-secondary);
    margin-bottom: 10px;
  }
  .pricing-price {
    font-family: var(--font-sans);
    font-size: 2.4rem;
    font-weight: 900;
    color: var(--text-primary);
    line-height: 1;
    margin-bottom: 4px;
    letter-spacing: -0.04em;
  }
  .pricing-card.popular .pricing-price { color: var(--brand-primary-dark); }
  .pricing-price sup { font-size: 1rem; font-weight: 700; vertical-align: super; margin-right: 3px; }
  .pricing-per { font-size: 0.68rem; color: var(--text-tertiary); margin-bottom: 14px; }
  .pricing-desc { font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; margin-bottom: 18px; padding-bottom: 18px; border-bottom: 1px solid rgba(0,0,0,0.06); flex-shrink: 0; }
  .pricing-features { list-style: none; padding: 0; margin: 0 0 20px; flex: 1; }
  .pricing-features li { display: flex; align-items: flex-start; gap: 8px; padding: 5px 0; font-size: 0.82rem; color: var(--text-secondary); line-height: 1.5; }
  .pricing-features li::before { display: none; }
  .pricing-features li .bi { color: var(--brand-primary); font-size: 0.88rem; flex-shrink: 0; margin-top: 2px; }
  .pricing-cta { display: block; width: 100%; text-align: center; border-radius: 100px; padding: 11px 20px; font-size: 0.85rem; font-weight: 700; cursor: pointer; border: none; margin-top: auto; }
  .pricing-cta.primary { background: var(--brand-primary); color: #fff; }
  .pricing-cta.outline { background: transparent; border: 1.5px solid rgba(0,0,0,0.15); color: var(--text-primary); }
  .pricing-note { text-align: center; margin-top: 16px; font-size: 0.78rem; color: var(--text-tertiary); }

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

<div class="eyebrow" style="margin-top:28px;">Tvoj biznis, pod kontrolom.</div>

<h1>Tvoj biznis<br><em>red i mirna glava.</em></h1>

<p class="subtitle">Program za porudžbine, fakture i kupce — sve na jednom mestu, za male firme u Srbiji.</p>

<div class="trust-bar-inner" style="margin-top:20px;justify-content:flex-start;gap:20px;">
<div class="trust-item"><i class="bi bi-gift"></i> <span>14 dana besplatno — bez kartice</span></div>
<div class="trust-divider"></div>
<div class="trust-item"><i class="bi bi-flag-fill"></i> <span>Napravljeno u Srbiji, za srpske firme</span></div>
<div class="trust-divider"></div>
<div class="trust-item"><i class="bi bi-x-circle"></i> <span>Otkaži kad hoćeš, bez penala</span></div>
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

<div class="app-mockup">
<div class="am-body">
<div class="am-stats-row">
<div class="am-stat-block"><div class="am-stat-val">1,5M</div><div class="am-stat-lbl">Zarada<br>ovaj mesec</div><div class="am-stat-up"><i class="bi bi-arrow-up"></i> +14%</div></div>
<div class="am-stat-block"><div class="am-stat-val">42</div><div class="am-stat-lbl">Porudžbina</div></div>
<div class="am-stat-block"><div class="am-stat-val">8</div><div class="am-stat-lbl">Kupaca</div></div>
</div>
<div class="am-chart">
<div class="am-chart-label">Zarada — poslednjih 6 meseci</div>
<div class="am-chart-bars">
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:55%"></div><span>Jan</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:42%"></div><span>Feb</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:68%"></div><span>Mar</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:50%"></div><span>Apr</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:75%"></div><span>Maj</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill active" style="--h:100%"></div><span>Jun</span></div>
</div>
</div>
<div class="am-section-label">Poslednje porudžbine</div>
<div class="am-order-row"><span class="am-order-status novo">Novo</span><span class="am-order-name">Popović Gradnja</span><span class="am-order-amt">375.000</span></div>
<div class="am-order-row"><span class="am-order-status uradu">U izradi</span><span class="am-order-name">Janković Trgovina</span><span class="am-order-amt">88.000</span></div>
<div class="am-order-row"><span class="am-order-status gotovo">Gotovo</span><span class="am-order-name">Luka Andrić</span><span class="am-order-amt">120.000</span></div>
</div>
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
<div class="stat-meta"><i class="bi bi-receipt"></i> Faktura od porudžbine do PDF-a</div>
</div>

<div class="stat-item">
<div class="stat-big">14<span class="stat-unit">dana</span></div>
<div class="stat-meta"><i class="bi bi-gift"></i> Besplatno — bez kartice</div>
</div>

<div class="stat-item">
<div class="stat-big">3<span class="stat-unit">uloge</span></div>
<div class="stat-meta"><i class="bi bi-people-fill"></i> Admin, Poslovođa, Radnik</div>
</div>

<div class="stat-item">
<div class="stat-big">2022<span class="stat-unit">.</span></div>
<div class="stat-meta"><i class="bi bi-flag-fill"></i> Napravljeno u Srbiji</div>
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

<div class="app-mockup">
<div class="am-body">
<div class="am-cust-row active">
<div class="am-cust-av">MP</div>
<div class="am-cust-info"><div class="am-cust-name">Marko Popović</div><div class="am-cust-sub">47 porudžbina</div></div>
<i class="bi bi-chevron-right" style="color:var(--brand-primary);font-size:0.72rem;"></i>
</div>
<div class="am-cust-row">
<div class="am-cust-av" style="--av:linear-gradient(135deg,#667eea,#764ba2)">JT</div>
<div class="am-cust-info"><div class="am-cust-name">Janković Trgovina</div><div class="am-cust-sub">31 porudžbina</div></div>
<i class="bi bi-chevron-right" style="color:var(--text-tertiary);font-size:0.72rem;"></i>
</div>
<div class="am-cust-row">
<div class="am-cust-av" style="--av:linear-gradient(135deg,#f093fb,#f5576c)">MM</div>
<div class="am-cust-info"><div class="am-cust-name">Mila Marković</div><div class="am-cust-sub">12 porudžbina</div></div>
<i class="bi bi-chevron-right" style="color:var(--text-tertiary);font-size:0.72rem;"></i>
</div>
</div>
</div>

<div class="app-mockup">
<div class="am-body">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
<div class="am-cust-av" style="width:40px;height:40px;font-size:0.78rem;">MP</div>
<div>
<div style="font-weight:700;font-size:0.85rem;color:var(--text-primary);">Marko Popović</div>
<div style="font-size:0.65rem;color:var(--text-tertiary);">Popović Gradnja · Veleprodaja</div>
</div>
<div style="margin-left:auto;font-size:0.65rem;font-weight:700;color:var(--brand-primary);"><i class="bi bi-circle-fill" style="font-size:0.5rem;"></i> Aktivan</div>
</div>
<div class="am-stats-row" style="margin-bottom:8px;">
<div class="am-stat-block" style="text-align:center;"><div class="am-stat-val">47</div><div class="am-stat-lbl">Porudžbina</div></div>
<div class="am-stat-block" style="text-align:center;"><div class="am-stat-val" style="font-size:0.85rem;">975.000</div><div class="am-stat-lbl">Ukupno RSD</div></div>
</div>
<div class="am-section-label">Istorija porudžbina</div>
<div class="am-order-row"><span class="am-order-status gotovo">Isporučeno</span><span class="am-order-name">#0041 — Prozori ALU</span><span class="am-order-amt">280.000</span></div>
<div class="am-order-row"><span class="am-order-status novo">Novo</span><span class="am-order-name">#0042 — Montaža i isporuka</span><span class="am-order-amt">375.000</span></div>
</div>
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

<div class="app-mockup">
<div class="am-body">
<div class="am-tabs">
<span class="am-tab active">Sve (18)</span>
<span class="am-tab">Novo (5)</span>
<span class="am-tab">U izradi (8)</span>
<span class="am-tab">Isporučeno (5)</span>
</div>
<div class="am-order-row">
<span class="am-order-status novo">Novo</span>
<div style="flex:1;min-width:0;"><div class="am-order-name">#0042 — Popović Gradnja</div><div style="font-size:0.6rem;color:var(--text-tertiary);">3× Prozori ALU + Montaža</div></div>
<span class="am-order-amt">375.000</span>
</div>
<div class="am-order-row">
<span class="am-order-status uradu">U izradi</span>
<div style="flex:1;min-width:0;"><div class="am-order-name">#0041 — Janković Trgovina</div><div style="font-size:0.6rem;color:var(--text-tertiary);">5× Roletne PVC</div></div>
<span class="am-order-amt">88.000</span>
</div>
<div class="am-order-row">
<span class="am-order-status gotovo">Isporučeno</span>
<div style="flex:1;min-width:0;"><div class="am-order-name">#0040 — Luka Andrić</div><div style="font-size:0.6rem;color:var(--text-tertiary);">2× Vrata ALU</div></div>
<span class="am-order-amt">120.000</span>
</div>
</div>
</div>

<div class="app-mockup">
<div class="am-body">
<div class="am-form-field">
<div class="am-field-label">Kupac</div>
<div class="am-field-val am-field-selected">
<div class="am-cust-av" style="width:22px;height:22px;font-size:0.55rem;">MP</div>
Marko Popović
</div>
</div>
<div class="am-section-label">Artikli</div>
<div class="am-item-row">
<div class="am-item-info"><div style="font-size:0.72rem;font-weight:600;color:var(--text-primary);">Prozor ALU</div><div style="font-size:0.6rem;color:var(--text-tertiary);">56.000 din/kom</div></div>
<div class="am-item-qty">× 3</div>
<div style="font-size:0.78rem;font-weight:700;color:var(--text-primary);">168.000</div>
</div>
<div class="am-item-row">
<div class="am-item-info"><div style="font-size:0.72rem;font-weight:600;color:var(--text-primary);">Montaža</div><div style="font-size:0.6rem;color:var(--text-tertiary);">35.000 din/kom</div></div>
<div class="am-item-qty">× 2</div>
<div style="font-size:0.78rem;font-weight:700;color:var(--text-primary);">70.000</div>
</div>
<div class="am-divider-line"></div>
<div style="display:flex;justify-content:space-between;align-items:center;">
<span style="font-size:0.7rem;color:var(--text-secondary);">Ukupno</span>
<span style="font-size:0.92rem;font-weight:800;color:var(--text-primary);">238.000 RSD</span>
</div>
</div>
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

<div class="app-mockup">
<div class="am-body">
<div class="am-tabs">
<span class="am-tab active">Svi (24)</span>
<span class="am-tab">Prozori</span>
<span class="am-tab">Vrata</span>
<span class="am-tab">Usluge</span>
</div>
<div class="am-product-row">
<div class="am-product-icon">🪟</div>
<div class="am-product-info"><div class="am-product-name">Prozor ALU</div></div>
<div class="am-product-price">56.000 din</div>
</div>
<div class="am-product-row">
<div class="am-product-icon">🚪</div>
<div class="am-product-info"><div class="am-product-name">Vrata ALU</div></div>
<div class="am-product-price">85.000 din</div>
</div>
<div class="am-product-row">
<div class="am-product-icon" style="font-size:0.9rem;">🔧</div>
<div class="am-product-info"><div class="am-product-name">Montaža</div></div>
<div class="am-product-price">35.000 din</div>
</div>
</div>
</div>

<div class="app-mockup">
<div class="am-body">
<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
<div class="am-product-icon" style="width:44px;height:44px;font-size:1.5rem;border-radius:12px;">🪟</div>
<div>
<div style="font-weight:700;font-size:0.85rem;color:var(--text-primary);">Prozor ALU</div>
<div style="font-size:0.65rem;color:var(--text-tertiary);">Kategorija: Prozori</div>
</div>
</div>
<div class="am-stats-row" style="margin-bottom:10px;">
<div class="am-stat-block" style="text-align:center;"><div class="am-stat-val" style="font-size:0.88rem;">56.000 RSD</div></div>
</div>
</div>
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

<div class="app-mockup">
<div class="am-body">
<div class="am-stats-row">
<div class="am-stat-block"><div class="am-stat-val">142.500</div><div class="am-stat-lbl">Zarada<br>ovaj mesec</div><div class="am-stat-up"><i class="bi bi-arrow-up"></i> +18%</div></div>
<div class="am-stat-block"><div class="am-stat-val">37</div><div class="am-stat-lbl">Porudžbine<br>ovaj mesec</div><div class="am-stat-up"><i class="bi bi-arrow-up"></i> +5</div></div>
<div class="am-stat-block"><div class="am-stat-val">Nikolić d.o.o.</div><div class="am-stat-lbl">Top kupac<br>ovaj mesec</div></div>
</div>
<div class="am-chart">
<div class="am-chart-label">Zarada — poslednjih 6 meseci (RSD)</div>
<div class="am-chart-bars">
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:45%"></div><span>Jan</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:58%"></div><span>Feb</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:50%"></div><span>Mar</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:70%"></div><span>Apr</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill" style="--h:82%"></div><span>Maj</span></div>
<div class="am-bar-wrap"><div class="am-bar-fill active" style="--h:100%"></div><span>Jun</span></div>
</div>
</div>
</div>
</div>

<div class="app-mockup">
<div class="am-body">
<div class="am-section-label">Najprodavaniji artikli</div>
<div class="am-order-row"><div class="am-order-name">Prozor ALU 120×140</div><div class="am-order-amt">41.200 RSD</div></div>
<div class="am-order-row"><div class="am-order-name">Vrata PVC 90×210</div><div class="am-order-amt">28.500 RSD</div></div>
<div class="am-order-row"><div class="am-order-name">Montaža i ugradnja</div><div class="am-order-amt">18.000 RSD</div></div>
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

<div class="app-mockup">
<div class="am-body">
<div class="am-team-row">
<div class="am-cust-av" style="width:34px;height:34px;font-size:0.7rem;">MM</div>
<div class="am-cust-info" style="flex:1;"><div class="am-cust-name">Milan Matić</div><div class="am-cust-sub">Admin</div></div>
<span class="am-role-badge admin">Admin</span>
</div>
<div class="am-team-row">
<div class="am-cust-av" style="width:34px;height:34px;font-size:0.7rem;--av:linear-gradient(135deg,#4facfe,#00f2fe);">NK</div>
<div class="am-cust-info" style="flex:1;"><div class="am-cust-name">Nina Kovač</div><div class="am-cust-sub">Prodavac</div></div>
<span class="am-role-badge radnik">Prodavac</span>
</div>
<div class="am-team-row">
<div class="am-cust-av" style="width:34px;height:34px;font-size:0.7rem;--av:linear-gradient(135deg,#f093fb,#f5576c);">DV</div>
<div class="am-cust-info" style="flex:1;"><div class="am-cust-name">Dragan Vukić</div><div class="am-cust-sub">Radnik</div></div>
<span class="am-role-badge radnik">Radnik</span>
</div>
</div>
</div>

<div class="app-mockup">
<div class="am-body">
<table class="am-perm-table">
<thead>
<tr>
<th></th>
<th><span class="am-role-badge admin">Admin</span></th>
<th><span class="am-role-badge poslovodja" style="font-size:0.52rem;">Posl.</span></th>
<th><span class="am-role-badge radnik">Radnik</span></th>
</tr>
</thead>
<tbody>
<tr><td>Porudžbine</td><td><i class="bi bi-check-circle-fill am-check"></i></td><td><i class="bi bi-check-circle-fill am-check"></i></td><td><i class="bi bi-check-circle-fill am-check"></i></td></tr>
<tr><td>Kupci</td><td><i class="bi bi-check-circle-fill am-check"></i></td><td><i class="bi bi-check-circle-fill am-check"></i></td><td><i class="bi bi-dash-circle am-dash"></i></td></tr>
<tr><td>Zarada</td><td><i class="bi bi-check-circle-fill am-check"></i></td><td><i class="bi bi-dash-circle am-dash"></i></td><td><i class="bi bi-x-circle am-cross"></i></td></tr>
<tr><td>Podešavanja</td><td><i class="bi bi-check-circle-fill am-check"></i></td><td><i class="bi bi-x-circle am-cross"></i></td><td><i class="bi bi-x-circle am-cross"></i></td></tr>
</tbody>
</table>
</div>
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
<div class="d-icon"><i class="bi bi-tablet-landscape-fill"></i></div>
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

## Kreneš u tri koraka —<br><span class="accent">mi smo uz tebe</span>

<p>Mi smo tu za tebe — od prvog dana.</p>

---

## Kreneš u tri koraka — mi smo uz tebe

<div class="steps-grid">

<div class="step-card">
<div class="step-num">1</div>
<div class="step-node-icon"><i class="bi bi-telephone-fill"></i></div>
<h3>Javi nam se</h3>
<p>Pozoveš nas ili nam pišeš — vrlo brzo dobiješ pristup. Nema papirologije.</p>
<div class="step-duration"><i class="bi bi-clock"></i> Odmah</div>
</div>

<div class="step-card">
<div class="step-num">2</div>
<div class="step-node-icon"><i class="bi bi-person-fill-add"></i></div>
<h3>Unosimo podatke zajedno</h3>
<p>Mi ti pomažemo da uneseš kupce, artikle i cenovnik. Ne moraš ništa sam.</p>
<div class="step-duration"><i class="bi bi-clock"></i> ~30 minuta</div>
</div>

<div class="step-card">
<div class="step-num">3</div>
<div class="step-node-icon active"><i class="bi bi-rocket-takeoff-fill"></i></div>
<h3>Kreni — sve radi</h3>
<p>Upišeš prvu porudžbinu i odmah osetiš razliku — red na jednom mestu, bez papira, bez telefoniranja.</p>
<div class="step-duration active"><i class="bi bi-check-circle-fill"></i> Gotovo!</div>
</div>

</div>

<div class="support-strip">
<div class="eyebrow">Nisi sam</div>
<strong>Obučavamo tebe i tvoje radnike, odgovaramo na sva pitanja i dostupni smo kad zatreba. Nisi prepušten sam sebi.</strong>
</div>

---

<!-- _paginate: false -->

<div class="testimonial-card">
<div class="testimonial-stars"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i></div>
<blockquote class="testimonial-quote">"Pre Spone sam sve vodila u rokovniku — uvek nešto nedostaje, a kraj meseca je bio noćna mora. Sad otvoriš i sve stoji tamo gde si ostavio. Faktura se napravi sama, radnici znaju šta rade."</blockquote>
<div class="testimonial-author">
<div class="testimonial-avatar"><i class="bi bi-person-fill"></i></div>
<div class="testimonial-meta"><strong>Vlasnica Arbor Nameštaja</strong><span>Srbija · koristi Sponu od 2022.</span></div>
</div>
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

<div class="pricing-card">
<div class="pricing-plan">Starter</div>
<div class="pricing-price">2.900 <sup>RSD</sup></div>
<div class="pricing-per">mesečno</div>
<div class="pricing-desc">Savršen za frilensere i male timove koji tek počinju.</div>
<ul class="pricing-features">
<li><i class="bi bi-check"></i> Do 3 korisnika</li>
<li><i class="bi bi-check"></i> Kupci i porudžbine</li>
<li><i class="bi bi-check"></i> Predračuni (PDF)</li>
<li><i class="bi bi-check"></i> Email podrška</li>
</ul>
<a style="display:inline-flex;align-items:center;justify-content:center;gap:8px;border:2px solid var(--text-primary);color:var(--text-primary);border-radius:100px;padding:10px 24px;font-size:0.84rem;font-weight:700;text-decoration:none;width:100%;box-sizing:border-box;">Počni besplatno</a>
</div>

<div class="pricing-card popular">
<div class="pricing-badge"><i class="bi bi-star-fill"></i> Najpopularniji</div>
<div class="pricing-plan">Standard</div>
<div class="pricing-price">5.900 <sup>RSD</sup></div>
<div class="pricing-per">mesečno</div>
<div class="pricing-desc">Za rastuće firme kojima treba više kontrole i saradnje.</div>
<ul class="pricing-features">
<li><i class="bi bi-check"></i> Sve iz Starter plana</li>
<li><i class="bi bi-check"></i> Do 10 korisnika</li>
<li><i class="bi bi-check"></i> Korisničke uloge</li>
<li><i class="bi bi-check"></i> Statistika</li>
<li><i class="bi bi-check"></i> Prioritetna podrška</li>
</ul>
<a style="display:inline-flex;align-items:center;justify-content:center;gap:8px;background:var(--brand-primary);color:#0a2a1c;border-radius:100px;padding:10px 24px;font-size:0.84rem;font-weight:700;text-decoration:none;width:100%;box-sizing:border-box;">Počni besplatno</a>
</div>

<div class="pricing-card">
<div class="pricing-plan">Pro</div>
<div class="pricing-price">Dogovor</div>
<div class="pricing-per">mesečno</div>
<div class="pricing-desc">Za etablirane firme sa velikim timovima i punim zahtevima.</div>
<ul class="pricing-features">
<li><i class="bi bi-check"></i> Sve iz Standard plana</li>
<li><i class="bi bi-check"></i> Neograničeni broj korisnika</li>
<li><i class="bi bi-check"></i> Napredne funkcionalnosti</li>
<li><i class="bi bi-check"></i> Personalizovane funkcionalnosti</li>
</ul>
<a style="display:inline-flex;align-items:center;justify-content:center;gap:8px;border:2px solid var(--text-primary);color:var(--text-primary);border-radius:100px;padding:10px 24px;font-size:0.84rem;font-weight:700;text-decoration:none;width:100%;box-sizing:border-box;">Počni besplatno</a>
</div>

</div>

<p class="pricing-note">Nisi siguran koji plan? Javi nam se i pomoći ćemo ti da odabereš pravi.</p>

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
<p class="faq-a">Ne. Spona je internet aplikacija koju koristiš direktno iz browsera. Nema instalacije, nema ažuriranja — uvek si na najnovijoj verziji.</p>
</div>

<div class="faq-item">
<p class="faq-q"><i class="bi bi-plus-circle"></i> Kako počinjem?</p>
<p class="faq-a">Registruj se, unesite podatke o firmi i spreman si za rad. Vodićemo te kroz svaki korak procesa.</p>
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
<p class="faq-q"><i class="bi bi-plus-circle"></i> Kakva podrška je dostupna?</p>
<p class="faq-a">Dostupan je email i telefon. Starter plan ima standardnu email podršku, dok Standard i Pro planovi imaju prioritetni pristup sa kraćim vremenom odgovora.</p>
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
<h1 style="font-family:'Bricolage Grotesque','Inter',sans-serif;font-size:3.2rem;font-weight:800;line-height:1.1;margin:0;color:#ffffff;letter-spacing:-0.02em;">Tvoj biznis, <span class="accent">pod kontrolom.</span></h1>
</div>

<div class="divider"></div>

<p class="subtitle">Kupci. Porudžbine. Fakture. Zarada.<br>Sve na jednom mestu — i mirna glava na kraju dana.</p>

<div style="display:flex;gap:12px;margin-top:8px;">
<a style="display:inline-flex;align-items:center;gap:8px;background:var(--brand-primary);color:#0a2a1c;border-radius:100px;padding:12px 28px;font-size:0.88rem;font-weight:700;text-decoration:none;"><i class="bi bi-envelope-fill"></i> Pošalji upit</a>
<a style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.08);color:#ffffff;border:1px solid rgba(255,255,255,0.2);border-radius:100px;padding:12px 28px;font-size:0.88rem;font-weight:700;text-decoration:none;"><i class="bi bi-telephone-fill"></i> Pozovi nas</a>
</div>
