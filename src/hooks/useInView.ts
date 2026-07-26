import { useEffect, useRef, useState } from 'react'

interface Options {
  /** Fraction of the element that must be visible before it counts. */
  threshold?: number
  /** Margin around the root, e.g. '0px 0px -10% 0px'. */
  rootMargin?: string
  /** Stop observing after the first intersection (default: true). */
  once?: boolean
}

/**
 * Observes an element and reports when it scrolls into view.
 * Falls back to "always visible" where IntersectionObserver is unavailable.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.15,
  rootMargin = '0px 0px -8% 0px',
  once = true,
}: Options = {}) {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
