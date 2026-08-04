import { Link } from 'react-router-dom'
import { Mail, ArrowUpRight } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { LogoLockup } from '@/components/ui/Logo'
import { apps } from '@/data/apps'
import { navLinks, site } from '@/data/site'

const legalLinks = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'DriveSmooth Privacy', to: '/drivesmooth/privacy' },
  { label: 'DriveSmooth Terms', to: '/drivesmooth/terms' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/10 bg-ink-950">
      <div
        className="from-brand-500/40 pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r via-transparent to-accent-500/40"
        aria-hidden="true"
      />

      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <LogoLockup className="h-28 sm:h-32" />
            <p className="text-ink-400 mt-6 max-w-sm text-sm leading-relaxed">
              {site.description}
            </p>
            <a
              href={`mailto:${site.email}`}
              className="text-brand-300 mt-5 inline-flex items-center gap-2 text-sm transition hover:text-brand-200"
            >
              <Mail className="size-4" aria-hidden="true" />
              {site.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-ink-400 text-sm transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Apps
            </h3>
            <ul className="mt-4 space-y-3">
              {apps.map((app) => (
                <li key={app.id}>
                  <Link
                    to={`/#app-${app.id}`}
                    className="text-ink-400 text-sm transition hover:text-white"
                  >
                    {app.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold tracking-[0.18em] text-white uppercase">
              Legal
            </h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-ink-400 group inline-flex items-center gap-1 text-sm transition hover:text-white"
                  >
                    {link.label}
                    <ArrowUpRight
                      className="size-3.5 opacity-0 transition group-hover:opacity-100"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-ink-500 text-xs">
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="text-ink-500 text-xs">
            Independent software studio · {site.domain}
          </p>
        </div>
      </Container>
    </footer>
  )
}
