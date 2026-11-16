const REPLACEMENTS = [
  { before: 'Sveska', after: 'Porudžbine i rokovi', line: 'Svaka porudžbina na jednom mestu, sa kupcem, artiklima i rokom.' },
  { before: 'Pozivi u radionicu', after: 'Radnik javi sam', line: 'Na telefonu dodirne „Završi“, a Vi to odmah vidite.' },
  { before: 'Digitron', after: 'Zarada na porudžbini', line: 'Spona sama računa šta je plaćeno, šta ostaje i koliko ste zaradili.' },
]

export default function WhatIsSponaSection() {
  return (
    <section className="band band--white" aria-labelledby="what-title">
      <div className="page-width">
        <div className="split">
          <h2 className="section-title" id="what-title">Šta je Spona?</h2>
          <p className="lead"><b>Program za radionice koje rade po porudžbini:</b> nameštaj po meri, stolarija, bravarija. Radi na računaru, tabletu i telefonu. Ništa se ne instalira.</p>
        </div>
        <div className="replacements">
          {REPLACEMENTS.map((replacement) => (
            <div className="replacement" key={replacement.before}>
              <s>{replacement.before}</s>
              <b>{replacement.after}</b>
              <span>{replacement.line}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
