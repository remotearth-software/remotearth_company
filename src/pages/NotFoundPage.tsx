import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { buttonStyles } from '@/components/ui/button-styles'
import { useSeo } from '@/hooks/useSeo'

export function NotFoundPage() {
  useSeo('Page not found', 'The page you were looking for does not exist.')

  return (
    <div className="relative flex min-h-[70svh] items-center py-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_60%_at_50%_30%,rgb(0_101_252/0.14),transparent)]"
        aria-hidden="true"
      />
      <Container className="text-center">
        <span className="glass mx-auto flex size-16 items-center justify-center rounded-3xl">
          <Compass className="text-brand-300 size-7" aria-hidden="true" />
        </span>
        <p className="text-ink-500 mt-8 text-sm tracking-[0.3em] uppercase">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          This page drifted off-world
        </h1>
        <p className="text-ink-300 mx-auto mt-5 max-w-md leading-relaxed">
          The link may be out of date, or the page may have moved. Let's get you
          back to something useful.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link to="/" className={buttonStyles({ size: 'lg' })}>
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to home
          </Link>
          <Link
            to="/#apps"
            className={buttonStyles({ variant: 'secondary', size: 'lg' })}
          >
            Browse our apps
          </Link>
        </div>
      </Container>
    </div>
  )
}
