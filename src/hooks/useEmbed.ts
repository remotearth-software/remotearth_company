import { useLocation } from 'react-router-dom'

/**
 * True when the page is being rendered inside a host app's WebView
 * (`?embed=1`). Embedded pages drop the site header, footer and back link —
 * the host already provides its own navigation chrome.
 */
export function useEmbed() {
  const value = new URLSearchParams(useLocation().search).get('embed')
  return value === '1' || value === 'true'
}
