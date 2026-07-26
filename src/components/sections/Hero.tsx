import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Gauge,
  LineChart,
  Mail,
  Route,
  ShieldCheck,
  Sparkles,
} from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { buttonStyles } from '@/components/ui/button-styles'
import { site } from '@/data/site'

const orbitCards = [
  {
    icon: Route,
    label: 'DriveSmooth',
    meta: 'Trip score 92',
    className:
      'left-[4%] top-[12%] sm:left-[2%] md:left-[-2%] animate-float [animation-delay:-1s]',
    accent: 'text-brand-300',
  },
  {
    icon: LineChart,
    label: 'Expense Tracker',
    meta: '$1,284 this month',
    className:
      'right-[3%] top-[8%] md:right-[-1%] animate-float-slow [animation-delay:-3s]',
    accent: 'text-violet-300',
  },
  {
    icon: ShieldCheck,
    label: 'Privacy by default',
    meta: 'No trackers, no resale',
    className:
      'left-[6%] bottom-[10%] md:left-[1%] animate-float-slow [animation-delay:-5s]',
    accent: 'text-accent-300',
  },
  {
    icon: Gauge,
    label: 'Built to stay fast',
    meta: 'Tested on real phones',
    className:
      'right-[5%] bottom-[14%] md:right-[0%] animate-float [animation-delay:-2s]',
    accent: 'text-brand-200',
  },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-16 pb-20 sm:pt-24 md:pt-28 md:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div className="grid-backdrop absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
        <div className="bg-brand-500/20 absolute top-[-14rem] left-1/2 size-[42rem] -translate-x-1/2 rounded-full blur-[130px]" />
        <div className="bg-accent-500/15 absolute top-[6rem] right-[-10rem] size-[30rem] rounded-full blur-[120px]" />
        <div className="absolute bottom-[-12rem] left-[-8rem] size-[28rem] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-ink-200 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs sm:text-sm">
              <Sparkles className="text-brand-300 size-3.5" aria-hidden="true" />
              Independent app studio
              <span className="text-ink-500 hidden sm:inline">·</span>
              <span className="text-ink-400 hidden sm:inline">
                {site.domain}
              </span>
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl leading-[1.05] font-semibold tracking-tight sm:text-5xl md:text-6xl lg:text-[4.25rem]">
              We build apps
              <br className="hidden sm:block" /> people{' '}
              <span className="text-gradient">actually keep</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="text-ink-300 mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
              {site.shortName} Software is a small studio that designs, builds
              and looks after its own mobile and web apps — each one made to be
              fast, private and genuinely useful.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/#apps"
                className={buttonStyles({
                  size: 'lg',
                  className: 'w-full sm:w-auto',
                })}
              >
                Explore our apps
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
              <a
                href={`mailto:${site.email}`}
                className={buttonStyles({
                  variant: 'secondary',
                  size: 'lg',
                  className: 'w-full sm:w-auto',
                })}
              >
                <Mail className="size-4" aria-hidden="true" />
                {site.email}
              </a>
            </div>
          </Reveal>
        </div>

        {/* Floating product tiles */}
        <Reveal delay={300}>
          <div className="relative mx-auto mt-12 h-[21rem] w-full max-w-4xl sm:h-[27rem] md:mt-16">
            {/* Centre device */}
            <div className="absolute inset-x-0 top-1/2 z-10 mx-auto w-[15rem] -translate-y-1/2 sm:w-[17rem]">
              <div className="from-brand-400/40 to-accent-400/40 rounded-[2.6rem] bg-gradient-to-br p-px shadow-[0_40px_100px_-40px_rgb(0_101_252/0.65)]">
                <div className="bg-ink-900 rounded-[2.55rem] p-4">
                  <div className="bg-ink-800/60 mx-auto mb-4 h-1.5 w-16 rounded-full" />
                  <div className="from-brand-500/20 to-accent-500/10 space-y-3 rounded-3xl bg-gradient-to-b p-4">
                    <p className="text-ink-400 text-xs">Every app we ship</p>
                    <p className="font-display text-2xl font-semibold text-white">
                      Fast. Private.
                    </p>
                    <div className="space-y-2 pt-1">
                      {[88, 64, 42].map((width, index) => (
                        <div
                          key={width}
                          className="bg-white/6 h-2.5 overflow-hidden rounded-full"
                        >
                          <div
                            className="from-brand-400 to-accent-400 h-full rounded-full bg-gradient-to-r"
                            style={{
                              width: `${width}%`,
                              opacity: 1 - index * 0.25,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                      <p className="text-ink-500 text-[0.65rem]">Platforms</p>
                      <p className="mt-1 text-sm font-medium text-white">
                        iOS · Android
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3">
                      <p className="text-ink-500 text-[0.65rem]">Support</p>
                      <p className="mt-1 text-sm font-medium text-white">
                        Real humans
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {orbitCards.map((card) => (
              <div
                key={card.label}
                className={`glass absolute hidden w-52 rounded-2xl p-4 shadow-card sm:block ${card.className}`}
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <card.icon
                      className={`size-4.5 ${card.accent}`}
                      aria-hidden="true"
                    />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-white">
                      {card.label}
                    </p>
                    <p className="text-ink-400 truncate text-xs">{card.meta}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
