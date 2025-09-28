import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"

const TESTIMONIALS = [
  {
    name: "Aisha K.",
    text: "The speaking sessions boosted my confidence. I improved from Band 6.0 to 7.5 in 6 weeks!",
    band: "Band 7.5",
  },
  {
    name: "Rahul S.",
    text: "Mock tests felt just like the real exam. The detailed feedback helped me fix my weak areas.",
    band: "Band 7.0",
  },
  {
    name: "Meera P.",
    text: "AI writing feedback was a game changer—clear suggestions and quick turnaround.",
    band: "Band 7.5",
  },
]

function Stars() {
  return (
    <div className="flex items-center gap-0.5 text-primary" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="h-4 w-4" aria-hidden="true" />
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section id="testimonials" aria-labelledby="testimonials-title" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 id="testimonials-title" className="text-balance text-2xl font-semibold md:text-3xl">
              Results our students love
            </h2>
            <p className="mt-2 text-muted-foreground">
              Real improvements with structured practice and expert feedback.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="h-full">
              <CardHeader className="gap-3">
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder-user.jpg"
                    alt={`${t.name} headshot`}
                    className="h-10 w-10 rounded-full border border-border object-cover"
                  />
                  <div>
                    <CardTitle className="text-base">{t.name}</CardTitle>
                    <p className="text-xs text-primary">{t.band}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <Stars />
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">“{t.text}”</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
