export function SiteFooter() {
  return (
    <section id="contact" className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block rounded-md bg-primary/10 px-2 py-1 text-sm font-semibold text-primary">
                IELTS
              </span>
              <span className="text-sm font-semibold">Pro Institute</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Helping students achieve their dream IELTS scores with structured training and personalized support.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Quick Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground">
                  Features
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@ieltspro.example</li>
              <li>Phone: +1 (555) 012-3456</li>
              <li>Address: 123 Learning Ave, Study City</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} IELTS Pro Institute. All rights reserved.
        </div>
      </div>
    </section>
  )
}
