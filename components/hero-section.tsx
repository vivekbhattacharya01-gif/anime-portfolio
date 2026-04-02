"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Download, ArrowDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [titleRevealed, setTitleRevealed] = useState(false)
  const [subtitleVisible, setSubtitleVisible] = useState(false)

  useEffect(() => {
    setMounted(true)
    const titleTimer = setTimeout(() => setTitleRevealed(true), 500)
    const subtitleTimer = setTimeout(() => setSubtitleVisible(true), 1500)
    return () => {
      clearTimeout(titleTimer)
      clearTimeout(subtitleTimer)
    }
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const name = "Vivek Bhattacharya"
  const title = "MERN Stack Developer"

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden aurora-bg"
    >
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="speed-line"
            style={{
              top: `${10 + i * 12}%`,
              width: `${100 + Math.random() * 200}px`,
              animationDelay: `${i * 0.3}s`,
              opacity: 0.3,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rotate-45 floating" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-accent/20 rounded-full floating" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-primary/10 floating" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-20 right-10 w-12 h-12 border-2 border-accent/20 rotate-12 floating" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-primary/5 rounded-full floating" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-accent/5 rotate-45 floating" style={{ animationDelay: "2.5s" }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-20 text-center">
        {/* Glitch Name */}
        <div className="mb-4 overflow-hidden">
          <h1
            className={cn(
              "font-[family-name:var(--font-bebas-neue)] text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider transition-all duration-1000",
              mounted && titleRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            )}
          >
            {name.split("").map((char, i) => (
              <span
                key={i}
                className={cn(
                  "inline-block transition-all glitch-text text-foreground",
                  char === " " ? "w-4 md:w-8" : ""
                )}
                data-text={char}
                style={{
                  animationDelay: `${i * 50}ms`,
                  transitionDelay: `${i * 30}ms`,
                }}
              >
                {char}
              </span>
            ))}
          </h1>
        </div>

        {/* Title with Typewriter Effect */}
        <div className="mb-6 h-10 flex items-center justify-center">
          {subtitleVisible && (
            <p className="font-[family-name:var(--font-share-tech-mono)] text-lg md:text-2xl text-primary typewriter inline-block">
              {title}
            </p>
          )}
        </div>

        {/* Subtitle */}
        <p
          className={cn(
            "max-w-2xl mx-auto text-muted-foreground text-base md:text-lg mb-10 transition-all duration-700 delay-500",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Building modern, responsive, and scalable web applications with clean UI and smooth user experiences
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            "flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-700",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-transparent border-2 border-primary text-primary font-[family-name:var(--font-share-tech-mono)] text-sm uppercase tracking-wider overflow-hidden transition-all hover:text-primary-foreground"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </button>
          <a
            href="https://drive.google.com/file/d/1ZxFBELyxLqQleWKmOAagFaZDXPArBkKl/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-primary text-primary-foreground font-[family-name:var(--font-share-tech-mono)] text-sm uppercase tracking-wider overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download Resume
            </span>
          </a>
        </div>

        {/* Social Links */}
        <div
          className={cn(
            "flex items-center justify-center gap-6 transition-all duration-700 delay-1000",
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          <a
            href="https://github.com/vivekbhattacharya01"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/vivek-bhattacharya-9a661528a"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-12 h-12 rounded-full border-2 border-border flex items-center justify-center hover:border-primary transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            <div className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-colors" />
          </a>
        </div>

        {/* Floating Code Window */}
        <div
          className={cn(
            "hidden lg:block absolute right-10 top-1/3 w-80 transform rotate-3 floating transition-all duration-1000 delay-1000",
            mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          )}
        >
          <div className="bg-card/90 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 font-[family-name:var(--font-share-tech-mono)] text-xs text-muted-foreground">
                vivek.tsx
              </span>
            </div>
            <div className="p-4 font-[family-name:var(--font-share-tech-mono)] text-xs">
              <p className="text-muted-foreground">{"// Welcome to my portfolio"}</p>
              <p className="mt-2">
                <span className="text-accent">const</span>{" "}
                <span className="text-primary">developer</span> = {"{"}
              </p>
              <p className="ml-4">
                <span className="text-foreground">name</span>:{" "}
                <span className="text-green-400">{'"Vivek"'}</span>,
              </p>
              <p className="ml-4">
                <span className="text-foreground">stack</span>:{" "}
                <span className="text-green-400">{'"MERN"'}</span>,
              </p>
              <p className="ml-4">
                <span className="text-foreground">passion</span>:{" "}
                <span className="text-green-400">{'"Building UIs"'}</span>
              </p>
              <p>{"}"}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-[family-name:var(--font-share-tech-mono)] text-xs text-muted-foreground uppercase tracking-wider">
          Scroll
        </span>
        <ArrowDown className="w-5 h-5 text-primary" />
      </div>
    </section>
  )
}
