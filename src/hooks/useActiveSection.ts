import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the section currently closest to the top of
 * the viewport, so the header can highlight the matching nav link.
 */
export function useActiveSection(ids: readonly string[], offset = 120) {
  const [activeId, setActiveId] = useState<string | null>(null)

  useEffect(() => {
    if (ids.length === 0) return

    const update = () => {
      let current: string | null = null

      for (const id of ids) {
        const element = document.getElementById(id)
        if (!element) continue
        if (element.getBoundingClientRect().top - offset <= 0) current = id
      }

      // Near the bottom of the page the last section may never cross the
      // offset line, so claim it explicitly.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      if (scrolledToBottom) current = ids[ids.length - 1] ?? current

      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [ids, offset])

  return activeId
}
