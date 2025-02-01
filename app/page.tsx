import { Hero } from "@/components/hero"
import { Intro } from "@/components/intro"
import { Services } from "@/components/services"
import { Process } from "@/components/process"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { CiTA } from "@/components/cta"

export default function Home() {
  return (
    <main>
      <Hero />
      <Intro />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <CiTA />
    </main>
  )
}

