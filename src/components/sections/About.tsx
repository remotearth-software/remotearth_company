import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { site } from '@/data/site'

const facts = [
  { label: 'Focus', value: 'Mobile & web apps' },
  { label: 'Platforms', value: 'Android · iOS · Web' },
  { label: 'Apps', value: 'DriveSmooth · Expense Tracker' },
  { label: 'Contact', value: site.email },
]

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_50%_50%_at_80%_50%,rgb(0_195_253/0.08),transparent)]"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About us"
              title={
                <>
                  Independent, deliberately small,
                  <span className="text-gradient"> here for the long run</span>
                </>
              }
            />

            <Reveal delay={140}>
              <div className="text-ink-300 mt-6 space-y-4 leading-relaxed">
                <p>
                  {site.name} is an independent software studio. We build our own
                  products rather than chasing one big idea — and what we learn
                  building one app goes straight back into the next one.
                </p>
                <p>
                  Every product starts the same way: a problem we have ourselves,
                  a prototype in weeks rather than quarters, and a long tail of
                  refinement once real people are using it. We'd rather have a
                  handful of apps that stay good than a catalogue that quietly
                  rots.
                </p>
                <p>
                  If you have feedback, a bug, a partnership idea or just a
                  question about one of our apps, write to{' '}
                  <a
                    href={`mailto:${site.email}`}
                    className="text-brand-300 hover:text-brand-200 underline decoration-dotted underline-offset-4 transition"
                  >
                    {site.email}
                  </a>{' '}
                  — it reaches a human.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <dl className="glass grid gap-px overflow-hidden rounded-3xl bg-white/5 sm:grid-cols-2">
              {facts.map((fact) => (
                <div key={fact.label} className="bg-ink-950/80 p-6">
                  <dt className="text-ink-500 text-xs tracking-[0.16em] uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-2 text-base font-medium break-words text-white">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
