import { createContext } from 'react'

export type Theme = 'light' | 'dark'

/** Only written when the visitor explicitly picks a theme — never by `?theme=`. */
export const THEME_STORAGE_KEY = 'remotearth-theme'

/**
 * Browser-chrome tint per theme. Must track `--color-ink-950` in `index.css`,
 * which is the page background in both themes.
 */
const THEME_COLOR: Record<Theme, string> = {
  dark: '#00040e',
  light: '#ffffff',
}

export function isTheme(value: unknown): value is Theme {
  return value === 'light' || value === 'dark'
}

/** Reads the saved preference, tolerating disabled/blocked storage. */
export function storedTheme(): Theme | null {
  try {
    const value = localStorage.getItem(THEME_STORAGE_KEY)
    return isTheme(value) ? value : null
  } catch {
    return null
  }
}

export function saveTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Private mode / storage disabled — the theme still applies for this visit.
  }
}

export function systemTheme(): Theme {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/** `?theme=light|dark`, used by the DriveSmooth app's in-app WebView. */
export function themeFromSearch(search: string): Theme | null {
  const value = new URLSearchParams(search).get('theme')
  return isTheme(value) ? value : null
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.head
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', THEME_COLOR[theme])
}

/**
 * The theme to start on. The inline script in `index.html` has normally already
 * resolved this and stamped `<html data-theme>` before first paint, so trust that
 * first — it keeps React from disagreeing with what is already on screen. The
 * fallback repeats the same order for the case where the script did not run.
 */
export function initialTheme(search: string): Theme {
  const painted = document.documentElement.dataset.theme
  if (isTheme(painted)) return painted
  return themeFromSearch(search) ?? storedTheme() ?? systemTheme()
}

export type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)
