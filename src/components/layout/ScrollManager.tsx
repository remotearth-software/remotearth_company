import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Route-aware scrolling: jump to the top on page changes, and scroll to the
 * matching section when a link carries a hash (e.g. /#apps from another page).
 */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists after a route change.
      const id = hash.slice(1)
      const raf = requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      })
      return () => cancelAnimationFrame(raf)
    }

    window.scrollTo({ top: 0, left: 0 })
  }, [pathname, hash])

  return null
}
