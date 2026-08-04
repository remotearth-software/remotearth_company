import { useCallback, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import {
  ThemeContext,
  applyTheme,
  initialTheme,
  saveTheme,
  storedTheme,
  themeFromSearch,
} from '@/lib/theme'
import type { Theme } from '@/lib/theme'

/**
 * Site-wide light/dark switching.
 *
 * Precedence: `?theme=` in the URL → saved preference → OS setting.
 *
 * The query parameter is a *session* override and is deliberately never saved:
 * the DriveSmooth app opens `/drivesmooth/privacy?theme=dark` to match its own
 * theme, and that must not overwrite a preference the visitor set on the site.
 *
 * Must render inside the router — it reads the query string.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const { search } = useLocation()
  const [theme, setThemeState] = useState<Theme>(() => initialTheme(search))

  const searchTheme = themeFromSearch(search)

  // Honour `?theme=` on load and whenever it changes during navigation.
  useEffect(() => {
    if (searchTheme) setThemeState(searchTheme)
  }, [searchTheme])

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  // With no saved preference and no override, keep following the OS.
  useEffect(() => {
    if (searchTheme || storedTheme()) return
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) =>
      setThemeState(event.matches ? 'dark' : 'light')
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [searchTheme])

  const setTheme = useCallback((next: Theme) => {
    saveTheme(next)
    setThemeState(next)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      toggleTheme: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    }),
    [theme, setTheme],
  )

  return <ThemeContext value={value}>{children}</ThemeContext>
}
