"use client"

import { useEffect, useRef, useState } from "react"
import { GraduationCap, Shield, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    year: "Aug 2023 – Present",
    title: "B.Tech in Computer Science",
    place: "Raj Kumar Goel Institute of Technology and Management, Ghaziabad",
    description:
      "Pursuing Bachelor's in Computer Science Engineering with a strong focus on full-stack web development using the MERN stack.",
    icon: GraduationCap,
    type: "education",
  },
  {
    year: "Oct – Dec 2025",
    title: "Web Exploit Hunting & Bug Bounty Intern",
    place: "EduSkills (AICTE)",
    description:
      "Worked on identifying web vulnerabilities and reporting security exploits as part of a structured bug bounty internship program under AICTE.",
    icon: Shield,
    type: "work",
  },
  {
    year: "Mar 2026",
    title: "Generative AI Program",
    place: "NASSCOM Skill Development Program",
    description:
      "Completed a certified Generative AI program under NASSCOM's Skill Development initiative, gaining hands-on exposure to modern AI tools and concepts.",
    icon: Sparkles,
    type: "certification",
  },
]

export function ExperienceSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const [lineHeight, setLineHeight] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current && sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight

        if (sectionRect.top < viewportHeight && sectionRect.bottom > 0) {
          const progress = Math.min(
            1,
            Math.max(0, (viewportHeight - sectionRect.top) / (sectionRect.height + viewportHeight * 0.5))
          )
          setLineHeight(progress * 100)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0")
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        })
      },
      { threshold: 0.3 }
    )

    const items = document.querySelectorAll("[data-timeline-item]")
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-secondary/30"
    >
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute -top-1 left-0 w-full h-24 fill-background"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="relative inline-block font-[family-name:var(--font-bebas-neue)] text-4xl md:text-6xl tracking-wider text-foreground">
            My Journey
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </h2>
          <p className="mt-4 font-[family-name:var(--font-share-tech-mono)] text-sm text-muted-foreground">
            {"<"} Experience & Education {"/>"}
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5">
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-accent transition-all duration-300 ease-out glow"
              style={{ height: `${lineHeight}%` }}
            />
          </div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-timeline-item
                data-index={index}
                className={cn(
                  "relative pl-12 md:pl-0 transition-all duration-700",
                  index % 2 === 0 ? "md:pr-[52%]" : "md:pl-[52%]",
                  visibleItems.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
              >
                {/* Timeline Dot */}
                <div
                  className={cn(
                    "absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-card border-2 border-primary flex items-center justify-center transform md:-translate-x-1/2 transition-all duration-500",
                    visibleItems.includes(index) && "pulse-glow"
                  )}
                >
                  <exp.icon className="w-4 h-4 text-primary" />
                </div>

                {/* Card */}
                <div
                  className={cn(
                    "relative bg-card border border-border rounded-lg p-6 group hover:border-primary transition-all duration-300 card-glow",
                    index % 2 === 0 ? "md:text-right" : ""
                  )}
                >
                  {/* Year Badge */}
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-[family-name:var(--font-share-tech-mono)] text-xs rounded mb-3">
                    {exp.year}
                  </span>

                  <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-foreground tracking-wide mb-1">
                    {exp.title}
                  </h3>

                  <p className="font-[family-name:var(--font-share-tech-mono)] text-xs text-accent mb-3">
                    {exp.place}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Quest Card Corner */}
                  <div
                    className={cn(
                      "absolute top-0 w-16 h-16 overflow-hidden",
                      index % 2 === 0 ? "left-0" : "right-0"
                    )}
                  >
                    <div
                      className={cn(
                        "absolute w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent transform rotate-45",
                        index % 2 === 0
                          ? "-translate-x-16 -translate-y-16"
                          : "translate-x-16 -translate-y-16"
                      )}
                    />
                  </div>
                </div>

                {/* Connection Arrow (desktop) */}
                <div
                  className={cn(
                    "hidden md:block absolute top-1/2 w-4 h-0.5 bg-border -translate-y-0.5",
                    index % 2 === 0
                      ? "right-0 translate-x-full"
                      : "left-0 -translate-x-full"
                  )}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
