import { useEffect, useState } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Loader from './components/Loader/Loader'
import Home from './pages/Home'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <ThemeProvider>
      {loading ? <Loader /> : <Home />}
    </ThemeProvider>
  )
}