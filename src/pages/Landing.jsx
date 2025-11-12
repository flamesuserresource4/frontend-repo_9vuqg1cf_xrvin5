import { Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <header className="px-6 py-5 flex items-center justify-between">
          <div className="text-sm tracking-widest uppercase text-white/70">The 19th Scroll</div>
          <a href="/test" className="text-white/40 hover:text-white/70 text-sm">System</a>
        </header>

        <main className="flex-1 flex items-center">
          <div className="max-w-4xl mx-auto w-full px-6">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest text-white/60">Private Celebration</span>
              <h1 className="mt-3 text-4xl sm:text-6xl font-semibold leading-tight">
                The 19th Scroll
              </h1>
              <p className="mt-4 text-white/70 max-w-2xl">
                A dual-path birthday experience beneath a night sky. Choose your path to continue.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <Link to="/aditi" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition">
                <div className="text-sm text-emerald-300/80">I'm Aditi</div>
                <div className="mt-1 text-white text-2xl">Unlock private journey →</div>
                <p className="mt-2 text-sm text-white/60">Password required</p>
              </Link>

              <Link to="/friends" className="group bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-6 backdrop-blur-sm transition">
                <div className="text-sm text-sky-300/80">I'm not Aditi</div>
                <div className="mt-1 text-white text-2xl">Continue to public greeting →</div>
                <p className="mt-2 text-sm text-white/60">Open access</p>
              </Link>
            </div>

            <div className="mt-10 text-white/60 text-sm">
              Featuring the night sky and a waxing gibbous moon — a quiet promise above a luminous path.
            </div>
          </div>
        </main>

        <footer className="px-6 py-6 text-center text-white/40 text-xs">
          Crafted for one night only.
        </footer>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent" />
    </div>
  )
}
