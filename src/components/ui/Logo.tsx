import logoLockup from '@/assets/brand/remotearth-logo.webp'
import logoMark from '@/assets/brand/remotearth-mark.webp'
import { cn } from '@/lib/cn'

/** The R + globe mark on its own — used wherever space is tight. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <img
      src={logoMark}
      alt=""
      width={240}
      height={213}
      className={cn('h-10 w-auto sm:h-11', className)}
    />
  )
}

/**
 * Mark + wordmark for the header. The wordmark is set in HTML rather than
 * baked into the image so it stays crisp and legible at small sizes.
 */
export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <LogoMark />
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[1.1rem] font-semibold tracking-tight text-white">
            Remote<span className="text-brand-400">arth</span>
          </span>
          <span className="text-ink-400 mt-1 text-[0.6rem] font-medium tracking-[0.3em] uppercase">
            Software
          </span>
        </span>
      )}
    </span>
  )
}

/** Full stacked logo including the wordmark and tagline. */
export function LogoLockup({ className }: { className?: string }) {
  return (
    <img
      src={logoLockup}
      alt="Remotearth Software — simple solutions, global impact"
      width={440}
      height={368}
      className={cn('h-28 w-auto', className)}
    />
  )
}
