"use client"

import { useState, useRef, useEffect } from "react"
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/meepznqk", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        setIsSuccess(true)
        form.reset()
        setTimeout(() => setIsSuccess(false), 5000)
      }
    } catch {
      console.error("Form submission error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Speed Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              top: `${10 + i * 9}%`,
              left: 0,
              right: 0,
              transform: `rotate(${-3 + Math.random() * 6}deg)`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={cn(
              "font-[family-name:var(--font-bebas-neue)] text-4xl md:text-6xl tracking-wider text-foreground transition-all duration-1000",
              isVisible ? "opacity-100" : "opacity-0"
            )}
          >
            {"Let's Work Together".split("").map((char, i) => (
              <span
                key={i}
                className={cn(
                  "inline-block transition-all duration-300",
                  char === " " ? "w-2 md:w-4" : ""
                )}
                style={{
                  transitionDelay: `${i * 30}ms`,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  opacity: isVisible ? 1 : 0,
                }}
              >
                {char}
              </span>
            ))}
          </h2>
          <p className="mt-4 font-[family-name:var(--font-share-tech-mono)] text-sm text-muted-foreground">
            {"<"} Mission Brief {"/>"}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div
              className={cn(
                "relative bg-card border border-border rounded-lg p-8 transition-all duration-700 delay-200",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              )}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 font-[family-name:var(--font-share-tech-mono)] text-xs text-muted-foreground">
                  contact_terminal.exe
                </span>
              </div>

              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4 pulse-glow">
                    <CheckCircle className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-foreground mb-2">
                    Mission Accepted!
                  </h3>
                  <p className="font-[family-name:var(--font-share-tech-mono)] text-sm text-muted-foreground">
                    {"I'll get back to you soon."}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block font-[family-name:var(--font-share-tech-mono)] text-xs text-primary uppercase tracking-wider mb-2"
                    >
                      {">"} Name_
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block font-[family-name:var(--font-share-tech-mono)] text-xs text-primary uppercase tracking-wider mb-2"
                    >
                      {">"} Email_
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block font-[family-name:var(--font-share-tech-mono)] text-xs text-primary uppercase tracking-wider mb-2"
                    >
                      {">"} Message_
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                      placeholder="Enter your message"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-[family-name:var(--font-share-tech-mono)] text-sm uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Transmitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div
              className={cn(
                "space-y-6 transition-all duration-700 delay-400",
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-10"
              )}
            >
              {/* Email Card */}
              <div className="bg-card border border-border rounded-lg p-6 group hover:border-primary transition-all duration-300 card-glow">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-share-tech-mono)] text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:vivekbhattacharya01@gmail.com"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      vivekbhattacharya01@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-[family-name:var(--font-share-tech-mono)] text-xs text-muted-foreground uppercase tracking-wider mb-4">
                  Connect With Me
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/vivekbhattacharya01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    <span className="font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground group-hover:text-primary transition-colors">
                      GitHub
                    </span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/vivek-bhattacharya-9a661528a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-lg hover:border-primary hover:bg-primary/5 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                    <span className="font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground group-hover:text-primary transition-colors">
                      LinkedIn
                    </span>
                  </a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center gap-3">
                  <div className="relative w-3 h-3">
                    <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75" />
                    <div className="relative w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground">
                    Available for opportunities
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Currently open to frontend developer roles, internships, and web development opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
