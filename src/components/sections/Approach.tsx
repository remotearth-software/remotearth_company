import { Gauge, Layers, ShieldCheck, Wrench } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const principles = [
  {
    icon: ShieldCheck,
    title: 'Privacy by default',
    description:
      'We collect what an app needs to work and nothing more. No selling data, no hidden trackers, no surprises buried in a settings screen.',
  },
  {
    icon: Gauge,
    title: 'Fast on real phones',
    description:
      'Performance is a feature. Our apps are tested on mid-range devices and older hardware, not just the newest flagship.',
  },
  {
    icon: Layers,
    title: 'Shared foundations',
    description:
      'Every product sits on the same core: auth, sync, design system and analytics. New ideas ship faster because the groundwork is already solid.',
  },
  {
    icon: Wrench,
    title: 'Maintained, not abandoned',
    description:
      'Shipping v1 is the start. We keep apps updated for new OS versions and answer support mail from a real person.',
  },
]

export function Approach() {
  return (
    <section id="approach" className="relative scroll-mt-24 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              align="left"
              eyebrow="How we work"
              title="A studio built on a few stubborn rules"
              description="These aren't slogans on a wall — they decide what we ship and what we cut."
            />

            <Reveal delay={180}>
              <div className="glass mt-10 rounded-3xl p-6">
                <p className="text-ink-200 text-sm leading-relaxed italic">
                  “If a feature makes an app slower, creepier or harder to
                  understand, it doesn't ship. That single rule has saved us more
                  than any roadmap.”
                </p>
                <p className="text-ink-500 mt-4 text-xs tracking-[0.16em] uppercase">
                  Remotearth product principle
                </p>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-5 sm:grid-cols-2">
              {principles.map((principle, index) => (
                <Reveal key={principle.title} delay={index * 90}>
                  <article className="glass h-full rounded-3xl p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20">
                    <span className="border-brand-400/20 bg-brand-400/10 flex size-11 items-center justify-center rounded-2xl border">
                      <principle.icon
                        className="text-brand-300 size-5"
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">
                      {principle.title}
                    </h3>
                    <p className="text-ink-400 mt-2.5 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
