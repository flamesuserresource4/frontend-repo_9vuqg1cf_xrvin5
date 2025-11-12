import { useEffect, useState, useRef } from 'react'
import { Play } from 'lucide-react'

function Section({ index, title, children }) {
  return (
    <section className="min-h-[80vh] sm:min-h-screen flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <div className="text-white/40 text-xs tracking-widest uppercase">Moment {index}</div>
        <h2 className="mt-2 text-3xl sm:text-5xl font-semibold text-white">{title}</h2>
        <div className="mt-4 text-white/80 leading-relaxed">{children}</div>
      </div>
    </section>
  )
}

export default function Journey() {
  const [allowed, setAllowed] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const token = localStorage.getItem('the19thscroll_token')
    if (!token) {
      window.location.href = '/aditi'
      return
    }
    setAllowed(true)
  }, [])

  const playAudio = () => {
    audioRef.current?.play()
  }

  if (!allowed) return null

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,rgba(14,23,42,1),#000)] text-white">
      <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between px-6 py-4 bg-black/30 backdrop-blur border-b border-white/10">
        <div className="text-sm tracking-widest uppercase text-white/70">The 19th Scroll</div>
        <button onClick={playAudio} className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/10 px-3 py-2 rounded-lg">
          <Play size={16} />
          <span>Play theme</span>
        </button>
      </div>

      {/* Hidden audio element; replace src with selected song */}
      <audio ref={audioRef} src="https://cdn.pixabay.com/download/audio/2021/09/07/audio_3ec6b2f9a1.mp3?filename=immersion-112191.mp3" preload="none" />

      <div className="pt-24">
        <Section index={1} title="The Moon">
          Tonight's sky holds a waxing gibbous — the same quiet light from December 27, 2006.
          It’s here because it meant something then, and it means something now.
        </Section>

        <Section index={2} title="A Single Rose">
          A rose, simple and steady. Not for show — for you. Close your eyes and hold it for a second.
        </Section>

        {/* Moments 3–17 (brief, poetic lines) */}
        {Array.from({ length: 15 }).map((_, i) => (
          <Section key={i} index={i + 3} title={`A small constellation #${i + 3}`}>
            One quiet star joins the next. Thank you for every orbit, every laugh, every quiet minute.
          </Section>
        ))}

        <Section index={18} title="A Heartfelt Apology">
          I’m sorry — not in passing, not as a line break, but for real.
          For the times I misunderstood, for the moments I didn’t do better when I should have.
          You deserved steadiness. I’m working on it.
        </Section>

        <Section index={19} title="The Final Gift">
          One last thing: a promise tucked into a sweet, ridiculous cupcake — because you smiled at the small things.
          Here’s to more of them. Always.
          <div className="mt-4">
            <img
              src="https://images.unsplash.com/photo-1490914327627-9b2d8a0dd56a?q=80&w=1200&auto=format&fit=crop"
              alt="Cupcake"
              className="rounded-xl border border-white/10 shadow-lg max-w-md"
            />
          </div>
        </Section>

        <div className="py-24 text-center text-white/60">
          End of the scroll. Happy 19th, Aditi.
        </div>
      </div>
    </div>
  )
}
