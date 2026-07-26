import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ScrollManager } from '@/components/layout/ScrollManager'

export function Layout() {
  return (
    <div className="flex min-h-svh flex-col">
      <ScrollManager />

      <a
        href="#main"
        className="focus:bg-brand-400 focus:text-ink-950 sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:px-5 focus:py-2.5 focus:font-medium"
      >
        Skip to content
      </a>

      <Header />

      <main id="main" className="flex-1 pt-18">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
