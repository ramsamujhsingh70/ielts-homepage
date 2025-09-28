import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="bg-card">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 px-4 py-12 md:grid-cols-2 md:py-16">
        <div>
          <p className="inline-block rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
            Trusted by 5,000+ learners
          </p>
          <h1 className="mt-3 text-pretty text-3xl font-bold tracking-tight md:text-5xl">
            Achieve your target IELTS band with expert guidance
          </h1>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Structured lessons, daily speaking practice, realistic mock tests, and AI-powered feedback to help you
            improve fast—on your schedule.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#contact">Book Free Demo</a>
            </Button>
            <Button asChild variant="secondary">
              <a href="#features">Explore Features</a>
            </Button>
          </div>

          {/* Simple stats for credibility */}
          <div className="mt-8 grid grid-cols-3 gap-3 rounded-lg border border-border bg-background p-4 text-center">
            <div>
              <div className="text-xl font-semibold">7.5+</div>
              <div className="text-xs text-muted-foreground">Avg Band</div>
            </div>
            <div>
              <div className="text-xl font-semibold">95%</div>
              <div className="text-xs text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-xl font-semibold">200+</div>
              <div className="text-xs text-muted-foreground">Mock Tests/mo</div>
            </div>
          </div>
        </div>

        <div className="relative">
          <img
            src="/students-studying-ielts-preparation-classroom.jpg"
            alt="Students studying for IELTS with notebooks and laptops"
            className="h-auto w-full rounded-lg border border-border"
          />
        </div>
      </div>
    </section>
  )
}
