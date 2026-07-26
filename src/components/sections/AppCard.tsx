import { Apple, Check, ExternalLink, Mail, Play, Smartphone } from 'lucide-react'
import { buttonStyles } from '@/components/ui/button-styles'
import type { AppProject } from '@/data/apps'
import { site } from '@/data/site'
import { cn } from '@/lib/cn'

const platformIcons = {
  Android: Smartphone,
  iOS: Apple,
  Web: ExternalLink,
} as const

export function AppCard({
  app,
  reversed = false,
}: {
  app: AppProject
  reversed?: boolean
}) {
  const hasStoreLinks = Boolean(app.links.playStore || app.links.appStore)

  return (
    <article
      id={`app-${app.id}`}
      className={cn(
        'group glass relative scroll-mt-28 overflow-hidden rounded-[2rem] transition duration-500 hover:border-white/20',
        app.accent.ring,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute -inset-px -z-10 bg-gradient-to-br opacity-60 blur-2xl transition duration-700 group-hover:opacity-100',
          app.accent.from,
          app.accent.to,
        )}
        aria-hidden="true"
      />

      <div
        className={cn(
          'grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10',
          reversed && 'lg:[&>*:first-child]:order-2',
        )}
      >
        {/* Copy */}
        <div>
          <div className="flex items-center gap-4">
            <img
              src={app.icon}
              alt=""
              width={56}
              height={56}
              className="size-14 rounded-2xl shadow-lg"
              loading="lazy"
            />
            <h3 className="text-2xl font-semibold sm:text-3xl">{app.name}</h3>
          </div>

          <p className={cn('mt-5 text-lg font-medium', app.accent.text)}>
            {app.tagline}
          </p>
          <p className="text-ink-300 mt-3 leading-relaxed">{app.description}</p>

          <ul className="mt-6 grid gap-x-6 gap-y-3 sm:grid-cols-2">
            {app.highlights.map((highlight) => (
              <li
                key={highlight}
                className="text-ink-300 flex items-start gap-2.5 text-sm"
              >
                <Check
                  className={cn('mt-0.5 size-4 shrink-0', app.accent.text)}
                  aria-hidden="true"
                />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            {app.links.playStore && (
              <a
                href={app.links.playStore}
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: 'secondary' })}
              >
                <Play className="size-4" aria-hidden="true" />
                Google Play
              </a>
            )}
            {app.links.appStore && (
              <a
                href={app.links.appStore}
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: 'secondary' })}
              >
                <Apple className="size-4" aria-hidden="true" />
                App Store
              </a>
            )}
            {app.links.website && (
              <a
                href={app.links.website}
                target="_blank"
                rel="noreferrer"
                className={buttonStyles({ variant: 'ghost' })}
              >
                Visit site
                <ExternalLink className="size-4" aria-hidden="true" />
              </a>
            )}
            {!hasStoreLinks && (
              <a
                href={`mailto:${site.email}?subject=${encodeURIComponent(`${app.name} — I'd like to know more`)}`}
                className={buttonStyles({ variant: 'secondary' })}
              >
                <Mail className="size-4" aria-hidden="true" />
                Ask us about {app.name}
              </a>
            )}

            <div className="text-ink-500 ml-auto flex items-center gap-3">
              {app.platforms.map((platform) => {
                const Icon = platformIcons[platform]
                return (
                  <span
                    key={platform}
                    className="flex items-center gap-1.5 text-xs"
                    title={platform}
                  >
                    <Icon className="size-3.5" aria-hidden="true" />
                    {platform}
                  </span>
                )
              })}
            </div>
          </div>
        </div>

        {/* Artwork */}
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-ink-900/60">
            <img
              src={app.cover}
              alt={`${app.name} app preview`}
              width={800}
              height={600}
              loading="lazy"
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>
    </article>
  )
}
