import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollManager } from '@/components/layout/ScrollManager'
import { useEmbed } from '@/hooks/useEmbed'
import { cn } from '@/lib/cn'

export function Layout() {
  // `?embed=1` — rendered inside a host app's WebView, which supplies its own
  // top bar. Site chrome would just stack a second navigation on top of it.
  const embedded = useEmbed()

  return (
    <div className="flex min-h-svh flex-col">
      <ScrollManager />

      {!embedded && (
        <a
          href="#main"
          className="focus:bg-brand-400 focus:text-on-brand sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:px-5 focus:py-2.5 focus:font-medium"
        >
          Skip to content
        </a>
      )}

      {!embedded && <Header />}

      {/* pt-18 clears the fixed header; there is no header when embedded. */}
      <main id="main" className={cn('flex-1', !embedded && 'pt-18')}>
        <Outlet />
      </main>

      {!embedded && <Footer />}
    </div>
  )
}
