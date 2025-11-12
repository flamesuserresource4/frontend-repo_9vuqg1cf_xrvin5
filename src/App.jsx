import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import PublicGreeting from './pages/PublicGreeting'
import PrivateGate from './pages/PrivateGate'
import Journey from './pages/Journey'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/friends" element={<PublicGreeting />} />
      <Route path="/aditi" element={<PrivateGate />} />
      <Route path="/journey" element={<Journey />} />
    </Routes>
  )
}

export default App
