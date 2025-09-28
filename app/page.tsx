import { Navbar } from "@/components/ielts/navbar"
import { Hero } from "@/components/ielts/hero"
import { Features } from "@/components/ielts/features"
import { Testimonials } from "@/components/ielts/testimonials"
import { SiteFooter } from "@/components/ielts/site-footer"

export default function Page() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>

      <footer>
        <SiteFooter />
      </footer>
    </>
  )
}
