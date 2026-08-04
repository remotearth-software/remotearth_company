import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Logo } from '@/components/ui/Logo'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { buttonStyles } from '@/components/ui/button-styles'
import { useActiveSection } from '@/hooks/useActiveSection'
import { navLinks, site } from '@/data/site'
import { cn } from '@/lib/cn'

const sectionIds = navLinks.map((link) => link.href.split('#')[1] ?? '')

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const isHome = pathname === '/'
  const activeSection = useActiveSection(isHome ? sectionIds : [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu on navigation.
  useEffect(() => setMenuOpen(false), [pathname, hash])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-ink-950/80 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-18 items-center justify-between gap-4">
        <Link
          to="/"
          aria-label={`${site.name} — home`}
          className="rounded-lg transition-opacity hover:opacity-85"
        >
          <Logo />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navLinks.map((link) => {
            const id = link.href.split('#')[1]
            const isActive = isHome && activeSection === id
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm transition-colors',
                  isActive
                    ? 'bg-white/[0.06] text-white'
                    : 'text-ink-300 hover:bg-white/5 hover:text-white',
                )}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* Wrapper handles the responsive display: `hidden` would lose to the
              button's own `inline-flex` in Tailwind's cascade order. */}
          <span className="hidden sm:block">
            <a href={`mailto:${site.email}`} className={buttonStyles()}>
              <Mail className="size-4" aria-hidden="true" />
              Contact us
            </a>
          </span>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="text-ink-100 inline-flex size-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10 lg:hidden"
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          'bg-ink-950/95 overflow-hidden border-t border-white/10 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <Container className="flex flex-col gap-1 py-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="text-ink-200 rounded-xl px-4 py-3 text-base transition hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${site.email}`}
            className={buttonStyles({ size: 'lg', className: 'mt-3' })}
          >
            <Mail className="size-4" aria-hidden="true" />
            {site.email}
          </a>
        </Container>
      </div>
    </header>
  )
}
