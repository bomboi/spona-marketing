---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
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
  }

  section {
    font-family: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
    background: var(--bg-base);
    color: var(--text-primary);
    padding: 48px 60px;
    font-size: 0.88rem;
    line-height: 1.5;
  }

  section.cover {
    background: var(--bg-overlay);
    color: #ffffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 80px;
  }
  section.cover h1 {
    font-size: 3.8rem;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 10px 0;
    color: #ffffff;
    letter-spacing: -0.02em;
  }
  section.cover .accent { color: var(--brand-primary); }
  section.cover .subtitle {
    font-size: 1.15rem;
    font-weight: 400;
    color: rgba(255,255,255,0.6);
    margin: 0 0 44px 0;
    line-height: 1.6;
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
    margin-bottom: 32px;
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

  section.section-green {
    background: var(--brand-primary);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 80px;
  }
  section.section-green h2 {
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
  section.section-green .num {
    font-size: 5rem;
    font-weight: 700;
    color: rgba(255,255,255,0.15);
    line-height: 1;
    margin-bottom: 8px;
  }

  section.section-dark {
    background: var(--bg-overlay);
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 64px 80px;
  }
  section.section-dark h2 {
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--brand-primary);
    margin: 0 0 12px 0;
    line-height: 1.15;
  }
  section.section-dark p {
    font-size: 1.1rem;
    color: rgba(255,255,255,0.65);
    margin: 0;
    max-width: 560px;
  }

  h1 {
    font-size: 1.9rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 6px 0;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
  h2 {
    font-size: 1.55rem;
    font-weight: 700;
    color: var(--brand-primary);
    margin: 0 0 18px 0;
    line-height: 1.25;
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

  .card {
    background: var(--bg-container);
    border-radius: 1rem;
    padding: 18px 22px;
    margin-bottom: 12px;
  }

  .two-col {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
  }
  .three-col {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
    align-items: start;
  }
  .two-col-wide {
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 24px;
    align-items: start;
  }

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

  .checklist li {
    font-size: 0.92rem;
    padding: 8px 0 8px 30px;
    color: var(--text-primary);
  }
  .checklist li::before {
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

  .stat-big {
    font-size: 3rem;
    font-weight: 700;
    color: var(--brand-primary);
    line-height: 1;
  }
  .stat-label {
    font-size: 0.78rem;
    color: var(--text-secondary);
    font-weight: 500;
    margin-top: 6px;
  }

  .problem-card {
    background: rgba(220,53,69,0.06);
    border-radius: 1rem;
    padding: 18px 20px;
  }
  .problem-card h3 { color: var(--error); }
  .problem-card li { color: #5a1d22; }
  .problem-card li::before { background: var(--error); }

  .problem-card-big {
    background: #fff;
    border-radius: 1.25rem;
    padding: 28px 22px 24px;
    text-align: center;
    box-shadow: 0 2px 0 0 rgba(220,53,69,0.12);
    background: rgba(220,53,69,0.1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .problem-card-big .picon {
    width: 64px;
    height: 64px;
    background: rgba(220,53,69,0.08);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  }
  .problem-card-big .picon .bi {
    font-size: 1.9rem;
    color: var(--error);
  }
  .problem-card-big h3 {
    color: var(--text-primary);
    font-size: 1rem;
    font-weight: 700;
    margin: 0;
    line-height: 1.3;
  }
  .problem-card-big .pline {
    font-size: 0.8rem;
    color: var(--text-secondary);
    line-height: 1.5;
    margin: 0;
  }
  .problem-card-big .pquote {
    font-size: 0.78rem;
    font-style: italic;
    color: var(--error);
    background: rgba(220,53,69,0.06);
    border-radius: 0.5rem;
    padding: 7px 12px;
    margin-top: 4px;
    line-height: 1.4;
  }
  .pimg {
    width: 100%;
    height: 110px;
    border-radius: 0.75rem;
    border: 2px dashed rgba(220,53,69,0.35);
    background: rgba(220,53,69,0.04);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 6px;
    color: rgba(220,53,69,0.5);
    font-size: 0.7rem;
    font-weight: 500;
    text-align: center;
    padding: 8px 12px;
    line-height: 1.4;
  }
  .pimg .bi { font-size: 1.4rem; opacity: 0.6; }

  .solution-card {
    background: var(--brand-primary-light);
    border-radius: 1rem;
    padding: 18px 20px;
  }
  .solution-card h3 { color: var(--brand-primary-dark); }

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

  hr { border: none; border-top: 2px solid var(--bg-container); margin: 16px 0; }
  section::after { font-size: 0.65rem; color: var(--text-tertiary); }

  .bi { vertical-align: middle; line-height: 1; }
  h3 .bi { margin-right: 5px; font-size: 1.05rem; }
  .screenshot .icon .bi { font-size: 2rem; }
  .stat-big .bi { font-size: 2.6rem; }
  .device-icon .bi { font-size: 3rem; }

  .brand-logo {
    width: 80px;
    height: 80px;
    border-radius: 20px;
    margin-bottom: 0px;
    display: block;
  }

  section.cover img {
    width: 48px !important;
    height: 48px !important;
    max-width: 48px !important;
    object-fit: contain;
  }
  section.cover img.brand-logo {
    width: 120px !important;
    height: 80px !important;
    max-width: 500px !important;
  }

  .cover-sep {
    border: none;
    border-top: 1px solid rgba(255,255,255,0.08);
    margin: 0;
  }

  .pricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 14px;
    align-items: stretch;
  }
  .price-card {
    border-radius: 1rem;
    padding: 20px 18px;
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
    margin-bottom: 12px;
  }
  .price-card--popular .price-period { color: rgba(255,255,255,0.35); }
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
---

<!-- _class: cover -->
<!-- _paginate: false -->

<img src="../logos/iOS App icon - 1 - horizontal.png" class="brand-logo">


<h1 style="font-size:4rem;font-weight:700;line-height:1.1;margin:0 0 24px 0;color:#ffffff;letter-spacing:-0.02em;max-width:600px;">Tvoj posao —<br><span style="color:var(--brand-primary);">red i mirna glava.</span></h1>

<p style="font-size:1.05rem;color:rgba(255,255,255,0.55);margin:0 0 56px 0;line-height:1.6;max-width:480px;">Sve na jednom mestu — kupci, narudžbine, fakture i pregled zarade.</p>

<div style="display:flex;gap:12px;">
<span class="pill"><i class="bi bi-people-fill"></i> Kupci</span>
<span class="pill"><i class="bi bi-box-seam"></i> Narudžbine</span>
<span class="pill"><i class="bi bi-receipt"></i> Fakture</span>
<span class="pill"><i class="bi bi-graph-up-arrow"></i> Zarada</span>
</div>

---

<!-- _paginate: false -->

## Da vam posao ne oduzima sav mir

<p class="page-sub">Posao je porastao — i to je dobra stvar. Ali kad ima više posla, teže je sve držati u glavi. Papiri znaju da naprave pometnju.</p>

<div class="three-col">

<div class="problem-card-big">
<img src="slika-1.jpg" style="width:100%;height:110px;object-fit:cover;border-radius:0.75rem;">
<h3>Tefter se izgubi baš kad treba</h3>
<p class="pline">Sve si zapisao — ali gde? U kojoj svesci, na kom papiru, u kojoj fascikli?</p>
<p class="pquote">"Znam da sam negde zapisao, ali..."</p>
</div>

<div class="problem-card-big">
<img src="slika-2.jpg" style="width:100%;height:110px;object-fit:cover;border-radius:0.75rem;">
<h3>Fakture i papiri gutaju vreme</h3>
<p class="pline">Kraj meseca dođe brzo. A onda kreće sabiranje, traženje papira i pisanje faktura ručno.</p>
<p class="pquote">"Ne znam ko mi duguje, a ko je platio."</p>
</div>

<div class="problem-card-big">
<img src="slika-3.jpg" style="width:100%;height:110px;object-fit:cover;border-radius:0.75rem;">
<h3>Radnik te zove, ti zoveš radnika</h3>
<p class="pline">Ko je preuzeo porudžbinu, šta je gotovo, šta čeka — teško pratiti kad nema jednog mesta.</p>
<p class="pquote">"Sto puta me pitaju istu stvar..."</p>
</div>

</div>

<br>

<div class="card" style="text-align:center; padding: 14px 24px; background: var(--brand-primary-light);">
<strong style="color:var(--brand-primary-dark); font-size:0.95rem;">Spona stavlja red u papire — i nije ništa komplikovanije od slanja poruke na Viberu.</strong>
</div>

---

## Digitalni tefter koji sam računa

<div class="two-col-wide">
<div>

<p class="page-sub">Spona je tefter koji se ne može izgubiti — sam sabira i oduzima, pamti svakog kupca i svaki dogovor, i drži sve na jednom mestu od prvog dana.</p>

<ul class="checklist">
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
  <strong>SCREENSHOT: Glavni pregled</strong>
  Sve najvažnije na jednom ekranu — odmah vidiš kako stoji posao
</div>

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

<p class="page-sub">Upišeš kupca jednom — i sve što si s njim radio ostane u Sponi zauvek. Ime, telefon, istorija porudžbina, šta ste se dogovorili. Nema više: "Kako mu beše broj?"</p>

<ul>
<li><strong>Ime, telefon, adresa</strong> — sve na jednom mestu</li>
<li><strong>Cela istorija porudžbina</strong> po svakom kupcu</li>
<li><strong>Nađeš bilo koga za sekunde</strong> — samo ukucaš ime</li>
<li><strong>Beleška uz profil</strong> — zapiši šta god treba upamtiti</li>
<li><strong>Grupe kupaca</strong> — veleprodaja odvojeno od maloprodaje</li>
</ul>

<br>

<div class="card">
<div class="eyebrow">Mirna glava</div>
Čisti računi s kupcima — znaš ko ti šta duguje i šta ste se dogovorili, čak i kad si na odmoru.
</div>

</div>
<div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-people-fill"></i></div>
  <strong>SCREENSHOT: Pregled kupaca</strong>
  Jasna lista svih kupaca — nađeš koga treba za par sekundi
</div>

<br>

<div class="screenshot">
  <div class="icon"><i class="bi bi-person-fill"></i></div>
  <strong>SCREENSHOT: Kartica kupca</strong>
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

<p class="page-sub">Kupac naruči — ti upišeš u Sponu za minut. Od tog trenutka svaki radnik zna šta treba da uradi, bez telefoniranja i petljanja.</p>

<ul>
<li><strong>Odabereš kupca</strong> iz svoje baze jednim klikom</li>
<li><strong>Dodaš šta je naručeno</strong> — cene se same upišu</li>
<li><strong>Gotovinsko, na fakturu, karticom</strong> — piše odmah</li>
<li><strong>Pratiš gde je porudžbina</strong> — u radu, gotovo, otkazano</li>
<li><strong>Ostavi napomenu radniku</strong> — bez telefoniranja</li>
</ul>

<br>

<div class="solution-card">
<h3><i class="bi bi-printer-fill"></i> Radni nalog na štampu</h3>
Jednim klikom odštampaš nalog za radionicu ili magacin — jasno napisano, bez grešaka. Radnik uzme papir i zna šta radi.
</div>

</div>
<div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-box-seam"></i></div>
  <strong>SCREENSHOT: Pregled porudžbina</strong>
  Vidiš sve porudžbine — šta čeka, šta je u radu, šta je gotovo
</div>

<br>

<div class="screenshot">
  <div class="icon"><i class="bi bi-pencil"></i></div>
  <strong>SCREENSHOT: Unos nove porudžbine</strong>
  Brz unos — odabereš kupca, dodaš artikle, gotovo
</div>

</div>
</div>

---

## Sve na dlanu — bez traženja papira

<div class="two-col">
<div>

Gde god da si — u firmi, u autu, na putu — otvoriš Sponu na telefonu i za desetak sekundi vidiš gde stoji svaka porudžbina. Nema više poziva, nema nagađanja.

<br>

<div class="card">
<div class="eyebrow">Jednim pogledom vidiš</div>
<ul>
<li>Ko je naručio i kad</li>
<li>Šta tačno treba da se uradi i po kojoj ceni</li>
<li>Koliko ukupno plaća i da li je dato popust</li>
<li>Da li je platio — ili još duguje</li>
<li>Ko od radnika je zadužen</li>
</ul>
</div>

</div>
<div>

<div class="screenshot" style="min-height:240px;">
  <div class="icon"><i class="bi bi-search"></i></div>
  <strong>SCREENSHOT: Otvorena porudžbina</strong>
  Sve piše na jednom mestu — više ne moraš da pitaš radnike šta je ko radio
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

<p class="page-sub">Nema više ručnog pisanja. Spona napravi fakturu sama iz porudžbine — uredno, ispravno, s tvojim logom — za pola minute. Odštampaš ili pošalješ mejlom, gotovo.</p>

<ul>
<li><strong>Sve se samo popuni</strong> iz porudžbine — nema ponovnog kucanja</li>
<li><strong>Odštampaj ili pošalji mejlom</strong> za dva klika</li>
<li><strong>Brojevi faktura idu sami po redu</strong> — ne moraš da pamtiš</li>
<li><strong>Jasno vidiš ko je platio, a ko nije</strong></li>
<li><strong>Tvoj logo i firma</strong> na svakoj fakturi</li>
</ul>

<br>

<div class="quote">
"Faktura je gotova pre nego što kupac izađe iz radnje."
</div>

</div>
<div>

<div class="screenshot" style="min-height:220px;">
  <div class="icon"><i class="bi bi-receipt"></i></div>
  <strong>SCREENSHOT: Gotova faktura</strong>
  Uredno odštampana faktura s tvojim logom — profesionalno, bez muke
</div>

<br>

<div class="screenshot">
  <div class="icon"><i class="bi bi-list-ul"></i></div>
  <strong>SCREENSHOT: Pregled faktura</strong>
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

## Sve što prodaješ — upisano jednom, uvek pri ruci

<div class="two-col">
<div>

<p class="page-sub">Upišeš sve što prodaješ jednom — i Spona to sama nudi svaki put kad praviš porudžbinu. Nema više računanja na papiru ili grešaka u ceni.</p>

<ul>
<li><strong>Naziv i cena</strong> za svaki artikal ili uslugu</li>
<li><strong>Varijante</strong> — veličina, boja, tip — sve jasno razdvojeno</li>
<li><strong>Grupe</strong> za lakše snalaženje u velikim cenovnicima</li>
<li><strong>Posebne cene po kupcu</strong> — veleprodaja, stalni kupci</li>
</ul>

<br>

<div class="card">
<div class="eyebrow">Kako to izgleda u praksi</div>
Pri unosu porudžbine samo ukucaš par slova — Spona iskoči s artiklom i cenom. Odabereš količinu, gotovo. Nema greške, nema računanja.
</div>

</div>
<div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-grid"></i></div>
  <strong>SCREENSHOT: Cenovnik</strong>
  Svi tvoji artikli i cene na jednom mestu
</div>

<br>

<div class="screenshot">
  <div class="icon"><i class="bi bi-tag-fill"></i></div>
  <strong>SCREENSHOT: Kartica artikla</strong>
  Varijante, cene i opis — sve na jednom mestu
</div>

</div>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">05</div>

## Čisti računi na kraju dana

Bez sabiranja do ponoći — crno na belo vidiš kako stoji posao.

---

## Crno na belo — bez digitrona i sabiranja

<div class="two-col">
<div>

<p class="page-sub">Nema više sabiranja do ponoći. Otvoriš Sponu — i odmah vidiš čiste račune: ko je platio, koliko si zaradio, šta se dobro prodaje.</p>

<div class="three-col" style="margin-bottom:16px;">
<div class="card" style="margin:0;text-align:center;">
<div class="stat-big"><i class="bi bi-graph-up-arrow"></i></div>
<div class="stat-label">Koliko si zaradio</div>
</div>
<div class="card" style="margin:0;text-align:center;">
<div class="stat-big"><i class="bi bi-star-fill"></i></div>
<div class="stat-label">Ko ti nosi najviše</div>
</div>
<div class="card" style="margin:0;text-align:center;">
<div class="stat-big"><i class="bi bi-box-seam"></i></div>
<div class="stat-label">Šta ide, šta stoji</div>
</div>
</div>

<ul>
<li><strong>Zarada po danu, mesecu ili godini</strong> — bez jednog sabiranja</li>
<li><strong>Ko ti donosi najviše para</strong> — da znaš na koga da računaš</li>
<li><strong>Šta se dobro prodaje, a šta skuplja prašinu</strong></li>
<li><strong>Ko od radnika šta uradi</strong> — bez ispitivanja</li>
</ul>

</div>
<div>

<div class="screenshot" style="min-height:280px;">
  <div class="icon"><i class="bi bi-graph-up-arrow"></i></div>
  <strong>SCREENSHOT: Pregled poslovanja</strong>
  Odmah vidiš gde si u plusu i šta se dobro prodaje
</div>

</div>
</div>

---

<!-- _class: section-green -->
<!-- _paginate: false -->

<div class="num">06</div>

## Svako zna svoj deo posla

Ne moraš sve da pratiš lično — Spona sredi ko šta radi.

---

## Svako radi svoje — bez gužve i grešaka

<div class="two-col">
<div>

<p class="page-sub">Svaki radnik se prijavi sa svojim nalogom i odmah vidi šta ga čeka — ni više ni manje. A ti kao gazda uvek možeš da proveriš šta se radi, gde god da si.</p>

<div class="card" style="margin-bottom:12px;">
<div class="eyebrow">Ko šta vidi</div>
<ul>
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
<div>

<div class="screenshot">
  <div class="icon"><i class="bi bi-people-fill"></i></div>
  <strong>SCREENSHOT: Pregled radnika</strong>
  Ko je u timu i šta svako sme da radi
</div>

<br>

<div class="screenshot">
  <div class="icon"><i class="bi bi-gear-fill"></i></div>
  <strong>SCREENSHOT: Nalog radnika</strong>
  Svaki radnik ima svoje pristupne podatke
</div>

</div>
</div>

---

<!-- _class: section-dark -->
<!-- _paginate: false -->

## Jednostavno kao daljinski od TV-a

Nema komplikovane obuke — ako umeš da koristiš telefon, umeš da koristiš Sponu.

---

## Radi na telefonu, tabletu i računaru

<div class="three-col" style="margin-bottom:20px;">

<div class="card" style="margin:0;text-align:center;">
<div class="device-icon" style="margin-bottom:8px;"><i class="bi bi-display"></i></div>
<h3>U kancelariji</h3>
<p style="color:var(--text-secondary);font-size:0.82rem;">Na računaru imaš pun pregled — idealno za unos i praćenje svega.</p>
</div>

<div class="card" style="margin:0;text-align:center;">
<div class="device-icon" style="margin-bottom:8px;"><i class="bi bi-phone-fill"></i></div>
<h3>Na terenu</h3>
<p style="color:var(--text-secondary);font-size:0.82rem;">Na telefonu proveriš porudžbinu ili status dok si kod kupca ili na isporuci.</p>
</div>

<div class="card" style="margin:0;text-align:center;">
<div class="device-icon" style="margin-bottom:8px;"><i class="bi bi-airplane-fill"></i></div>
<h3>Na odmoru</h3>
<p style="color:var(--text-secondary);font-size:0.82rem;">Otvoriš Sponu na telefonu i za minut znaš šta se dešava u firmi — pa se opusti.</p>
</div>

</div>

<div class="card" style="text-align:center; padding: 18px 32px;">
<div class="eyebrow">Nema instalacije, nema komplikacija</div>
<strong style="font-size:1rem;color:var(--text-primary);">Spona radi u pretraživaču — otvoriš kao stranicu, kao Facebook ili YouTube. Ništa posebno ne treba instalirati.</strong>
</div>

---

<!-- _class: section-dark -->
<!-- _paginate: false -->

## Kako početi?

Mi smo tu uz tebe — od prvog dana.

---

## Kreneš za tri koraka — mi smo uz tebe

<div class="three-col" style="margin-bottom:24px;">

<div class="card" style="margin:0;text-align:center;">
<div style="font-size:2.5rem;font-weight:700;color:var(--brand-primary);margin-bottom:8px;">1</div>
<h3>Javi nam se</h3>
<p style="color:var(--text-secondary);font-size:0.84rem;">Pozoveš ili napišeš — za koji minut dobiješ pristup. Nema paperologije.</p>
</div>

<div class="card" style="margin:0;text-align:center;">
<div style="font-size:2.5rem;font-weight:700;color:var(--brand-primary);margin-bottom:8px;">2</div>
<h3>Unesemo zajedno</h3>
<p style="color:var(--text-secondary);font-size:0.84rem;">Mi ti pomognemo da uneseš kupce, artikle i cenovnik. Ne moraš ništa sam.</p>
</div>

<div class="card" style="margin:0;text-align:center;">
<div style="font-size:2.5rem;font-weight:700;color:var(--brand-primary);margin-bottom:8px;">3</div>
<h3>Kreneš odmah</h3>
<p style="color:var(--text-secondary);font-size:0.84rem;">Napraviš prvu porudžbinu i odmah osetiš razliku. A mi smo tu kad zatreba.</p>
</div>

</div>

<div class="card" style="text-align:center;padding:20px 32px;">
<div class="eyebrow">Nisi sam u tome</div>
<strong style="font-size:1rem;color:var(--text-primary);">Obučimo tebe i tvoje radnike, odgovorimo na sva pitanja i budemo dostupni kad zatreba. Nisi prepušten sam sebi.</strong>
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
<div class="price-period">*mesečno</div>
<hr class="price-divider">
<ul class="price-list">
<li>Do 3 korisnika</li>
<li>Kupci i porudžbine</li>
<li>Fakture (PDF)</li>
<li>Osnovni izveštaji</li>
<li>Email podrška</li>
</ul>
</div>

<div class="price-card price-card--popular">
<div class="price-badge">★ Najpopularniji</div>
<div class="price-name">Standard</div>
<div class="price-amount">5.900 RSD</div>
<div class="price-period">*mesečno</div>
<hr class="price-divider">
<ul class="price-list">
<li>Do 10 korisnika</li>
<li>Sve iz Starter plana</li>
<li>Korisnički uloge</li>
<li>Napredni izveštaji</li>
<li>Prioritetna podrška</li>
</ul>
</div>

<div class="price-card">
<div class="price-name">Pro</div>
<div class="price-amount">Po dogovoru</div>
<div class="price-period">*mesečno</div>
<hr class="price-divider">
<ul class="price-list">
<li>Neograničeni korisnici</li>
<li>Sve iz Standard plana</li>
<li>API pristup</li>
<li>Prilagođeni izveštaji</li>
<li>Dedicirani menadžer</li>
</ul>
</div>

</div>

<p class="price-footnote">Nisi siguran koji plan? Javi nam se i pomoći ćemo ti da odabereš pravi.</p>

---

<!-- _class: cover -->
<!-- _paginate: false -->

<div class="label-row">
  <span class="pill">Spona</span>
</div>

<div style="display:flex;align-items:center;gap:24px;margin-bottom:0;">
<img src="../logos/iOS App icon - 1 - horizontal.png" class="brand-logo" style="margin-bottom:0;flex-shrink:0;">
<h1 style="font-size:3.8rem;font-weight:700;line-height:1.1;margin:0;color:#ffffff;letter-spacing:-0.02em;">Tvoj posao, <span style="color:var(--brand-primary);">pod kontrolom.</span></h1>
</div>

<div class="divider"></div>

<p class="subtitle">Kupci. Porudžbine. Fakture. Zarada.<br>Sve na jednom mestu — i mirna glava na kraju dana.</p>
