import type { ReactNode } from 'react'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

interface SectionHeadingProps {
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="text-brand-300/90 mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium tracking-[0.14em] uppercase">
            <span className="bg-brand-400 animate-shimmer size-1.5 rounded-full" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={60}>
        <h2 className="text-3xl leading-[1.1] font-semibold tracking-tight sm:text-4xl md:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={120}>
          <p className="text-ink-300 mt-5 text-base leading-relaxed sm:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  )
}
