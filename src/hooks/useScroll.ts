import { useEffect, useState } from 'react'

interface ScrollState {
  scrollY: number
  isScrolled: boolean
}

export function useScroll(threshold = 24): ScrollState {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { scrollY, isScrolled: scrollY > threshold }
}