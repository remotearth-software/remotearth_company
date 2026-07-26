import { Hero } from '@/components/sections/Hero'
import { AppsShowcase } from '@/components/sections/AppsShowcase'
import { Approach } from '@/components/sections/Approach'
import { About } from '@/components/sections/About'
import { Contact } from '@/components/sections/Contact'
import { useSeo } from '@/hooks/useSeo'
import { site } from '@/data/site'

export function HomePage() {
  useSeo(site.name, site.description)

  return (
    <>
      <Hero />
      <AppsShowcase />
      <Approach />
      <About />
      <Contact />
    </>
  )
}
