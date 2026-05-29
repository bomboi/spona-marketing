import { useRef, useState } from 'react'

export default function VideoDemo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  function handlePlay() {
    const v = videoRef.current
    if (!v) return
    v.play()
    setPlaying(true)
  }

  function handleEnded() {
    setPlaying(false)
  }

  return (
    <section className="section-video-demo" id="demo">
      <div className="container">
        <div className="video-demo-inner">

          <div className="video-demo-text reveal">
            <div className="eyebrow">Pogledaj Sponu u akciji</div>
            <h2 className="section-title">Sve što ti treba —<br /><em>za 60 sekundi</em></h2>
            <p className="section-sub">
              Unos porudžbine, pregled kupaca, predračun — pogledaj kako to izgleda na telefonu, bez instalacije i bez objašnjavanja.
            </p>
            <ul className="vd-bullets">
              <li><i className="bi bi-check-circle-fill" /> Porudžbina upisana za manje od 30 sekundi</li>
              <li><i className="bi bi-check-circle-fill" /> Radnik odmah vidi šta treba da napravi</li>
              <li><i className="bi bi-check-circle-fill" /> Predračun direktno iz porudžbine — jedan klik</li>
            </ul>
          </div>

          <div className="vd-video-wrap reveal">
            <video
              ref={videoRef}
              src="/spona-demo.mp4"
              playsInline
              controls={playing}
              preload="metadata"
              onEnded={handleEnded}
            />
            {!playing && (
              <button className="vp-play-btn" onClick={handlePlay} aria-label="Pusti video">
                <span className="vp-play-circle">
                  <i className="bi bi-play-fill" />
                </span>
                <span className="vp-play-label">Pusti demo</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
