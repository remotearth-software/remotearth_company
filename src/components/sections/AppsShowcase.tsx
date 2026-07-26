import { Mail, Rocket } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { buttonStyles } from '@/components/ui/button-styles'
import { AppCard } from '@/components/sections/AppCard'
import { apps } from '@/data/apps'
import { site } from '@/data/site'

export function AppsShowcase() {
  return (
    <section id="apps" className="relative scroll-mt-24 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgb(0_101_252/0.10),transparent)]"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading
          eyebrow="Our apps"
          title="Apps we've published"
          description="Designed, built and maintained by Remotearth — and still looked after long after launch."
        />

        <div className="mt-14 space-y-8">
          {apps.map((app, index) => (
            <Reveal key={app.id}>
              <AppCard app={app} reversed={index % 2 === 1} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={80}>
          <article className="from-brand-500/15 to-accent-500/10 mt-8 flex flex-col items-start gap-6 rounded-3xl border border-white/10 bg-gradient-to-br p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-5">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                <Rocket className="text-brand-300 size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-xl font-semibold sm:text-2xl">
                  Have an app idea?
                </h3>
                <p className="text-ink-300 mt-2.5 max-w-xl text-sm leading-relaxed sm:text-base">
                  We take on a small number of partner projects each year. Tell
                  us what you're building and we'll tell you honestly whether
                  we're the right studio for it.
                </p>
              </div>
            </div>

            <a
              href={`mailto:${site.email}?subject=${encodeURIComponent('Project enquiry')}`}
              className={buttonStyles({
                size: 'lg',
                className: 'shrink-0 max-lg:w-full',
              })}
            >
              <Mail className="size-4" aria-hidden="true" />
              Start a conversation
            </a>
          </article>
        </Reveal>
      </Container>
    </section>
  )
}
