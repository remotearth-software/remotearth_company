type ClassValue = string | false | null | undefined

/** Tiny className joiner — keeps conditional Tailwind classes readable. */
export function cn(...values: ClassValue[]) {
  return values.filter(Boolean).join(' ')
}
