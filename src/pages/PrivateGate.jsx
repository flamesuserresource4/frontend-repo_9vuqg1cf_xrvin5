import { useState } from 'react'

export default function PrivateGate() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const submit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await fetch(`${baseUrl}/api/auth/verify`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })
      if (!res.ok) throw new Error('Invalid password')
      const data = await res.json()
      localStorage.setItem('the19thscroll_token', data.token)
      window.location.href = '/journey'
    } catch (err) {
      setError('That password does not unlock the sky. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white/5 border border-white/10 rounded-2xl p-6">
        <h1 className="text-2xl font-semibold">Are you Aditi?</h1>
        <p className="text-white/60 mt-2">Enter the secret to step through the gate.</p>
        <form onSubmit={submit} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full bg-white/10 border border-white/10 rounded-lg p-3 outline-none focus:border-white/30"
          />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-lg transition disabled:opacity-60"
          >
            {loading ? 'Unlocking…' : 'Unlock the private experience'}
          </button>
          <a href="/" className="block text-center text-white/60 hover:text-white">← Back</a>
        </form>
      </div>
    </div>
  )
}
