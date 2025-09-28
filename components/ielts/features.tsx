import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mic2, ClipboardCheck, Sparkles, UserRound } from "lucide-react"

const FEATURES = [
  {
    title: "Speaking Practice",
    desc: "Daily speaking rooms with trainer feedback to improve fluency and confidence.",
    icon: Mic2,
  },
  {
    title: "Mock Tests",
    desc: "Weekly full-length mock tests with detailed reports to track your progress.",
    icon: ClipboardCheck,
  },
  {
    title: "AI Band Score",
    desc: "Instant AI evaluation for Writing & Speaking with actionable suggestions.",
    icon: Sparkles,
  },
  {
    title: "Expert Mentorship",
    desc: "Personalized study plans and 1:1 doubt clearing from certified mentors.",
    icon: UserRound,
  },
] as const

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <h2 id="features-title" className="text-balance text-2xl font-semibold md:text-3xl">
          Everything you need to score higher
        </h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Practical practice, realistic testing, and smart feedback—built for faster improvement.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => {
            const Icon = f.icon
            return (
              <Card key={f.title} className="h-full">
                <CardHeader className="flex min-h-28 flex-row items-start gap-3">
                  <span
                    className="inline-flex size-10 items-center justify-center rounded-md bg-primary/10 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <CardTitle className="text-base">{f.title}</CardTitle>
                    <CardDescription className="mt-1">{f.desc}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent />
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
