/**
 * Single source of truth for company-wide details.
 * Update here and every page/section picks it up.
 */
export const site = {
  name: 'Remotearth Software',
  shortName: 'Remotearth',
  domain: 'remotearth.ca',
  url: 'https://remotearth.ca',
  email: 'info@remotearth.ca',
  tagline: 'A software studio building apps people keep using.',
  description:
    'Remotearth Software is an independent studio that designs, builds and maintains its own mobile and web apps — fast, private and made to last.',
  foundedYear: 2024,
  legalName: 'Remotearth Software',
  // Add real profiles when they exist; empty links are simply not rendered.
  social: {
    x: '',
    linkedin: '',
    github: '',
    youtube: '',
  },
  /**
   * TODO: confirm these before launch — the legal pages read from here.
   * `governingLaw` is a placeholder; set it to your actual jurisdiction and
   * have a lawyer review /privacy and /terms before publishing.
   */
  legal: {
    governingLaw: 'Ontario, Canada',
    lastUpdated: 'July 26, 2026',
  },
} as const

export const navLinks = [
  { label: 'Apps', href: '/#apps' },
  { label: 'How we work', href: '/#approach' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const
