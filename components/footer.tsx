"use client"

import { Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-card border-t border-border">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse"
          style={{ animationDuration: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Name */}
          <div className="flex items-center gap-2">
            <span className="font-[family-name:var(--font-bebas-neue)] text-xl tracking-wider text-foreground">
              Vivek Bhattacharya
            </span>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Built with</span>
            <span className="font-[family-name:var(--font-share-tech-mono)] text-primary">
              React
            </span>
            <span>&</span>
            <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          </div>

          {/* Year */}
          <div className="font-[family-name:var(--font-share-tech-mono)] text-xs text-muted-foreground">
            &copy; {currentYear} All rights reserved
          </div>
        </div>

        {/* Decorative code comment */}
        <div className="mt-6 text-center">
          <p className="font-[family-name:var(--font-share-tech-mono)] text-xs text-muted-foreground/50">
            {"/* Thanks for scrolling this far! */"}
          </p>
        </div>
      </div>
    </footer>
  )
}
