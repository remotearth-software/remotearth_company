import { useContext } from 'react'
import { ThemeContext } from '@/lib/theme'

/** Current theme plus setters. Must be called under `<ThemeProvider>`. */
export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within a ThemeProvider')
  return context
}
