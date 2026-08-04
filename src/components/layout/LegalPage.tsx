import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { useEmbed } from '@/hooks/useEmbed'
import { cn } from '@/lib/cn'
import { site } from '@/data/site'

/**
 * Shared shell + typography for the legal pages.
 * Content is plain JSX; the styles below cover headings, lists and links.
 */
export function LegalPage({
  title,
  intro,
  // Per-app policies carry their own date, independent of the company-wide pages.
  lastUpdated = site.legal.lastUpdated,
  children,
}: {
  title: string
  intro: string
  lastUpdated?: string
  children: ReactNode
}) {
  const embedded = useEmbed()

  return (
    <div className="relative py-16 md:py-24">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgb(0_101_252/0.14),transparent)]"
        aria-hidden="true"
      />

      <Container size="narrow">
        {/* The host app's top bar already has a back affordance when embedded. */}
        {!embedded && (
          <Link
            to="/"
            className="text-ink-400 inline-flex items-center gap-2 text-sm transition hover:text-white"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
        )}

        <h1
          className={cn(
            'text-4xl font-semibold tracking-tight sm:text-5xl',
            !embedded && 'mt-8',
          )}
        >
          {title}
        </h1>
        <p className="text-ink-300 mt-5 text-lg leading-relaxed">{intro}</p>
        <p className="text-ink-500 mt-4 text-sm">Last updated: {lastUpdated}</p>

        <div
          className="mt-12 space-y-6 text-[0.95rem] leading-relaxed text-ink-300 [&_a]:text-brand-300 [&_a]:underline [&_a]:decoration-dotted [&_a]:underline-offset-4 [&_a:hover]:text-brand-200 [&_h2]:mt-12 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_h3]:mt-8 [&_h3]:text-base [&_h3]:font-semibold [&_h3]:text-white [&_li]:pl-1 [&_strong]:text-white [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5"
        >
          {children}
        </div>
      </Container>
    </div>
  )
}
