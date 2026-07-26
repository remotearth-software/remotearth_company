import { useEffect } from 'react'
import { site } from '@/data/site'

function setMeta(selector: string, attribute: string, content: string) {
  const tag = document.head.querySelector(selector)
  if (tag) tag.setAttribute(attribute, content)
}

/** Keeps the document title and key meta tags in sync with the active page. */
export function useSeo(title: string, description: string = site.description) {
  useEffect(() => {
    const fullTitle =
      title === site.name ? site.name : `${title} · ${site.shortName}`

    document.title = fullTitle
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', fullTitle)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', fullTitle)
    setMeta('meta[name="twitter:description"]', 'content', description)
  }, [title, description])
}
