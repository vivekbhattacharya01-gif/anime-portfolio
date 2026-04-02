"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Coffee, FolderGit2 } from "lucide-react"
import { cn } from "@/lib/utils"

const skills = [
  "React.js",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "REST APIs",
  "Git",
  "HTML5/CSS3",
]

const stats = [
  { icon: Code2, label: "Years of Experience", value: 2, suffix: "+" },
  { icon: FolderGit2, label: "Projects Built", value: 10, suffix: "+" },
  { icon: Coffee, label: "Cups of Coffee", value: 300, suffix: "+" },
]

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref} className="font-[family-name:var(--font-bebas-neue)] text-4xl md:text-5xl text-primary">
      {count}{suffix}
    </span>
  )
}

export function AboutSection() {
  const [visibleSkills, setVisibleSkills] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          skills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleSkills((prev) => [...prev, index])
            }, index * 100)
          })
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-secondary/30"
    >
      {/* Decorative ink splash divider */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute -top-1 left-0 w-full h-24 fill-background"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" />
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" />
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="relative inline-block font-[family-name:var(--font-bebas-neue)] text-4xl md:text-6xl tracking-wider text-foreground">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-linear-to-r from-transparent via-primary to-transparent" />
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Avatar Placeholder */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Rotating outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
              <div className="absolute inset-3 rounded-full border-2 border-primary/50 animate-spin" style={{ animationDuration: "15s", animationDirection: "reverse" }} />
              
              {/* Inner avatar area */}
              <div className="absolute inset-6 rounded-full bg-linear-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden border-2 border-primary/30">
                <div className="text-center">
                  <span className="font-[family-name:var(--font-bebas-neue)] text-6xl md:text-7xl text-primary">VB</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-accent/20 rotate-45" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-2 border-primary/30 rounded-full" />
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              B.Tech Computer Science student at Raj Kumar Goel Institute of Technology and Management, Ghaziabad. 
              Passionate about building modern, responsive, and scalable web applications with clean UI and smooth user experiences. 
              Currently diving deep into full-stack MERN development and TypeScript, and open to frontend developer roles, 
              internships, and web development opportunities.
            </p>

            {/* Skills Grid */}
            <div className="mb-10">
              <h3 className="font-[family-name:var(--font-share-tech-mono)] text-sm uppercase tracking-wider text-primary mb-4">
                {"<"} Tech Stack {"/>"}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-4 py-2 bg-card border border-border rounded-lg font-[family-name:var(--font-share-tech-mono)] text-sm text-foreground transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 card-glow",
                      visibleSkills.includes(index)
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    )}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="relative p-6 bg-card border border-border rounded-lg text-center group hover:border-primary transition-all duration-300 card-glow overflow-hidden"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="mt-2 font-[family-name:var(--font-share-tech-mono)] text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
