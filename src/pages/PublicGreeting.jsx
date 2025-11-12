export default function PublicGreeting() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-900 to-black text-white flex items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-semibold">Happy 19th Birthday!</h1>
        <p className="mt-4 text-white/70">
          Wishing you a night full of laughter, a sky full of stars, and a year full of magic.
        </p>
        <div className="mt-10">
          <a href="/" className="text-white/60 hover:text-white">← Back to main</a>
        </div>
      </div>
    </div>
  )
}
