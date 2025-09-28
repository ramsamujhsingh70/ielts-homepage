"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react" // switch to Lucide icon for reliability

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      aria-label="Main"
      className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2" aria-label="IELTS Pro Institute Home">
            <span className="inline-block rounded-md bg-primary/10 px-2 py-1 text-sm font-semibold text-primary">
              IELTS
            </span>
            <span className="text-balance text-lg font-semibold">Pro Institute</span>
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="hidden items-center gap-6 md:flex">
            <NavLinks />
            <Button asChild>
              <a href="#contact">Book Free Demo</a>
            </Button>
          </div>
        </div>

        <div className={cn("pb-4 md:hidden", open ? "block" : "hidden")}>
          <div className="flex flex-col gap-3">
            <a href="#features" className="text-muted-foreground hover:text-foreground">
              Features
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-foreground">
              Testimonials
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground">
              Contact
            </a>
            <Button asChild className="mt-1">
              <a href="#contact">Book Free Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLinks() {
  return (
    <>
      <a href="#features" className="text-sm text-muted-foreground hover:text-foreground">
        Features
      </a>
      <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground">
        Testimonials
      </a>
      <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground">
        Contact
      </a>
    </>
  )
}
