import { useEffect, useState } from 'react'

/**
 * Types out one or more strings, character by character, looping through
 * the list with a pause + delete between each. Pass a single-item array
 * for a one-shot, non-looping type-out.
 */
export function useTyping(
  words: string[],
  options: { typeSpeed?: number; deleteSpeed?: number; pause?: number; loop?: boolean } = {},
): string {
  const { typeSpeed = 55, deleteSpeed = 30, pause = 1400, loop = true } = options
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    const atEnd = !deleting && text === current
    const atStart = deleting && text === ''

    if (atEnd) {
      if (!loop && wordIndex === words.length - 1) return
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }

    if (atStart) {
      setDeleting(false)
      setWordIndex((i) => (i + 1) % words.length)
      return
    }

    const t = setTimeout(
      () => setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1)),
      deleting ? deleteSpeed : typeSpeed,
    )
    return () => clearTimeout(t)
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause, loop])

  return text
}