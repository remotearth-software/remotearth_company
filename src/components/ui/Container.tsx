import type { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
  size?: 'default' | 'narrow'
}

export function Container({
  children,
  className,
  size = 'default',
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-5 sm:px-8',
        size === 'narrow' ? 'max-w-3xl' : 'max-w-7xl',
        className,
      )}
    >
      {children}
    </div>
  )
}
