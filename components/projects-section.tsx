"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"

const projects = [
  {
    name: "AgencyAI",
    subtitle: "AI Powered Agency Website",
    description:
      "Production-grade multi-section agency website built with React.js component architecture, reusable components, smooth scrolling, and fully responsive layouts optimized for all devices.",
    techStack: ["React.js", "JavaScript", "Tailwind CSS", "Responsive Design"],
    liveDemo: "https://agency-ai-758.netlify.app/",
    github: "https://github.com/vivekbhattacharya01-gif/agency-ai",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "CoinPulse",
    subtitle: "Real-Time Cryptocurrency Tracker",
    description:
      "Live crypto tracking dashboard powered by CoinGecko API with real-time updates, responsive UI using Flexbox, and 20% improved page load performance through optimized rendering.",
    techStack: ["JavaScript", "HTML5", "CSS3", "REST API", "Responsive Design"],
    liveDemo: "https://vivekbhattacharya01-gif.github.io/CoinPulse/",
    github: "https://github.com/vivekbhattacharya01-gif/CoinPulse",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "CodeWave",
    subtitle: "QR Code Generator Web App",
    description:
      "QR code generator web app with API integration and accessible cross-device interface used by 50+ users during testing, achieving 30% improved user satisfaction through clean, intuitive UI.",
    techStack: ["JavaScript", "HTML5", "CSS3", "API Integration", "UI/UX"],
    liveDemo: "https://vivek-codewave.netlify.app/",
    github: "https://github.com/vivekbhattacharya01-gif/CodeWave",
    gradient: "from-emerald-500 to-teal-500",
  },
]

export function ProjectsSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          projects.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index])
            }, index * 200)
          })
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="relative py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="relative inline-block font-[family-name:var(--font-bebas-neue)] text-4xl md:text-6xl tracking-wider text-foreground">
            {"Things I've Built"}
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          </h2>
          <p className="mt-4 font-[family-name:var(--font-share-tech-mono)] text-sm text-muted-foreground">
            {"<"} Featured Projects {"/>"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className={cn(
                "group relative bg-card border border-border rounded-lg overflow-hidden transition-all duration-500 tilt-card card-glow",
                visibleCards.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              )}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-br opacity-80",
                    project.gradient
                  )}
                />
                {/* Speed lines on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute h-0.5 bg-white/40"
                      style={{
                        top: `${20 + i * 15}%`,
                        left: "-100%",
                        width: "200%",
                        animation: `speed-lines 0.5s ease-out ${i * 0.1}s forwards`,
                      }}
                    />
                  ))}
                </div>
                {/* Project Name Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-[family-name:var(--font-bebas-neue)] text-4xl text-white/90 tracking-wider drop-shadow-lg">
                    {project.name}
                  </span>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-[family-name:var(--font-bebas-neue)] text-2xl text-foreground tracking-wide mb-1">
                  {project.name}
                </h3>
                <p className="font-[family-name:var(--font-share-tech-mono)] text-xs text-primary mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-secondary text-secondary-foreground font-[family-name:var(--font-share-tech-mono)] text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground font-[family-name:var(--font-share-tech-mono)] text-xs uppercase tracking-wider rounded hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-border text-foreground font-[family-name:var(--font-share-tech-mono)] text-xs uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-all"
                  >
                    <Github className="w-3 h-3" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/20 to-transparent transform rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-12 group-hover:-translate-y-12 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
