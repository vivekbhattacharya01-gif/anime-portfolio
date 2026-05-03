'use client'

import { Navbar } from '@/components/navbar'
import { Particles } from '@/components/particles'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { ProjectsSection } from '@/components/projects-section'
import { ExperienceSection } from '@/components/experience-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

/**
 * Main portfolio page component
 * Orchestrates all sections of the portfolio in a seamless layout
 */
export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Animated particle background */}
      <Particles />

      {/* Fixed navigation header */}
      <Navbar />

      {/* Hero/Landing section */}
      <HeroSection />

      {/* About me section */}
      <AboutSection />

      {/* Featured projects showcase */}
      <ProjectsSection />

      {/* Experience timeline */}
      <ExperienceSection />

      {/* Contact form and info */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
