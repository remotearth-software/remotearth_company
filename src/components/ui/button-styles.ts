import { cn } from '@/lib/cn'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition duration-300 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-400 to-accent-400 text-ink-950 shadow-[0_10px_30px_-12px] shadow-brand-400/70 hover:shadow-[0_16px_40px_-12px] hover:shadow-brand-400/80 hover:brightness-110 active:brightness-95',
  secondary:
    'border border-white/15 bg-white/5 text-white backdrop-blur hover:border-white/30 hover:bg-white/10',
  ghost: 'text-ink-200 hover:bg-white/5 hover:text-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm sm:text-[0.95rem]',
  lg: 'px-7 py-3.5 text-base',
}

/** Shared button look, usable on <button>, <a> and react-router <Link>. */
export function buttonStyles({
  variant = 'primary',
  size = 'md',
  className,
}: {
  variant?: Variant
  size?: Size
  className?: string
} = {}) {
  return cn(base, variants[variant], sizes[size], className)
}
