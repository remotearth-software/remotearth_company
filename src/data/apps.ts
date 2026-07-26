import driveSmoothCover from '@/assets/apps/drivesmooth-cover.svg'
import driveSmoothIcon from '@/assets/apps/drivesmooth-icon.svg'
import expenseCover from '@/assets/apps/expense-tracker-cover.svg'
import expenseIcon from '@/assets/apps/expense-tracker-icon.svg'

export type Platform = 'Android' | 'iOS' | 'Web'

export interface AppProject {
  id: string
  name: string
  tagline: string
  description: string
  platforms: Platform[]
  highlights: string[]
  /** Tailwind gradient stops used for the card's ambient glow + accents. */
  accent: { from: string; to: string; text: string; ring: string }
  cover: string
  icon: string
  links: {
    playStore?: string
    appStore?: string
    website?: string
  }
}

/**
 * The apps we publish.
 *
 * Replace the placeholder SVGs in `src/assets/apps/` with real screenshots
 * (same file names, or point `cover`/`icon` at the new files) and fill in the
 * store URLs under `links` — the cards render store buttons automatically.
 */
export const apps: AppProject[] = [
  {
    id: 'drivesmooth',
    name: 'DriveSmooth',
    tagline: 'Drive smooth, earn rewards.',
    description:
      'DriveSmooth turns everyday trips into a score. It reads how smoothly you accelerate, brake and corner, then rewards calm, fuel-efficient driving with points you can actually use.',
    platforms: ['Android', 'iOS'],
    highlights: [
      'Automatic trip detection',
      'Per-trip smoothness score',
      'Points and reward tiers',
      'Battery-friendly tracking',
    ],
    accent: {
      from: 'from-brand-500/25',
      to: 'to-accent-500/20',
      text: 'text-brand-300',
      ring: 'group-hover:border-brand-400/40',
    },
    cover: driveSmoothCover,
    icon: driveSmoothIcon,
    links: {},
  },
  {
    id: 'expense-tracker',
    name: 'Expense Tracker',
    tagline: 'Know where the money goes.',
    description:
      'A fast, private way to log spending and see the month at a glance. Categories, budgets and recurring bills — without the spreadsheet ritual or a bank login.',
    platforms: ['Android', 'iOS'],
    highlights: [
      'Two-tap expense entry',
      'Budgets per category',
      'Monthly and yearly insights',
      'Data stays on your device',
    ],
    accent: {
      from: 'from-violet-500/25',
      to: 'to-fuchsia-500/20',
      text: 'text-violet-300',
      ring: 'group-hover:border-violet-400/40',
    },
    cover: expenseCover,
    icon: expenseIcon,
    links: {},
  },
]
