import { useState, type FormEvent } from 'react'
import { Check, Copy, Handshake, Mail, MessageSquare, Send } from 'lucide-react'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { buttonStyles } from '@/components/ui/button-styles'
import { site } from '@/data/site'

const topics = [
  'General enquiry',
  'Support for an app',
  'Partnership / business',
  'Press & media',
] as const

const fieldClass =
  'w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-ink-500 transition focus:border-brand-400/50 focus:bg-white/[0.06] focus:outline-none'

// Native select arrow replaced with a chevron that matches the dark UI.
const selectClass = `${fieldClass} appearance-none bg-[url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236b7590' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E')] bg-[length:1.15rem] bg-[right_1rem_center] bg-no-repeat pr-11`

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked (insecure context or denied) — the mailto link still works.
    }
  }

  // No backend: compose the message in the visitor's own mail client.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const name = String(data.get('name') ?? '')
    const email = String(data.get('email') ?? '')
    const topic = String(data.get('topic') ?? topics[0])
    const message = String(data.get('message') ?? '')

    const body = `${message}\n\n—\nFrom: ${name}\nReply to: ${email}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      `[${topic}] from ${name || 'website visitor'}`,
    )}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="relative scroll-mt-24 py-20 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <div className="grid-backdrop absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        <div className="bg-brand-500/15 absolute bottom-[-10rem] left-1/2 size-[36rem] -translate-x-1/2 rounded-full blur-[130px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk"
          description="Questions about an app, a support issue, or a project you'd like to build together — we read everything that arrives."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* Email card */}
          <Reveal className="lg:col-span-5">
            <div className="glass flex h-full flex-col justify-between rounded-3xl p-7">
              <div>
                <span className="border-brand-400/20 bg-brand-400/10 flex size-12 items-center justify-center rounded-2xl border">
                  <Mail className="text-brand-300 size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">Email us directly</h3>
                <p className="text-ink-400 mt-2.5 text-sm leading-relaxed">
                  The fastest way to reach us. We usually reply within one or two
                  business days.
                </p>

                <div className="mt-6 flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] p-2 pl-4">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-brand-300 hover:text-brand-200 flex-1 truncate text-sm font-medium transition"
                  >
                    {site.email}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="text-ink-300 inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-xs transition hover:bg-white/10 hover:text-white"
                  >
                    {copied ? (
                      <Check
                        className="text-brand-300 size-3.5"
                        aria-hidden="true"
                      />
                    ) : (
                      <Copy className="size-3.5" aria-hidden="true" />
                    )}
                    {copied ? 'Copied' : 'Copy'}
                  </button>
                </div>
              </div>

              <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <MessageSquare
                    className="text-ink-500 mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-ink-400 text-sm">
                    App support? Mention the app name and your device — it saves
                    a round trip.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake
                    className="text-ink-500 mt-0.5 size-4 shrink-0"
                    aria-hidden="true"
                  />
                  <p className="text-ink-400 text-sm">
                    Partnerships and press enquiries reach the same inbox — just
                    say so in the subject line.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal className="lg:col-span-7" delay={120}>
            <form
              onSubmit={handleSubmit}
              className="glass h-full rounded-3xl p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-ink-300 mb-2 block text-sm"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-ink-300 mb-2 block text-sm"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="topic"
                  className="text-ink-300 mb-2 block text-sm"
                >
                  Topic
                </label>
                <select id="topic" name="topic" className={selectClass}>
                  {topics.map((topic) => (
                    <option key={topic} value={topic} className="bg-ink-900">
                      {topic}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="message"
                  className="text-ink-300 mb-2 block text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us what's on your mind…"
                  className={`${fieldClass} resize-y`}
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button type="submit" className={buttonStyles({ size: 'lg' })}>
                  <Send className="size-4" aria-hidden="true" />
                  Send message
                </button>
                <p className="text-ink-500 text-xs">
                  Opens your email app with the message ready to send.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
