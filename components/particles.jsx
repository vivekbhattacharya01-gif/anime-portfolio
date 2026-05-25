'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

/**
 * Floating particles canvas animation
 * Creates beautiful animated petal shapes that drift across the screen
 */
export function Particles() {
  const canvasRef = useRef(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Handle canvas resizing
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    const particles = []
    const particleCount = 30

    // Create particle objects with random properties
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 10 + 5,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: Math.random() * 0.5 + 0.2,
        opacity: Math.random() * 0.5 + 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 2,
      })
    }

    // Draw individual petal/particle
    const drawPetal = (particle) => {
      ctx.save()
      ctx.translate(particle.x, particle.y)
      ctx.rotate((particle.rotation * Math.PI) / 180)
      ctx.globalAlpha = particle.opacity

      // Create petal shape with bezier curves
      ctx.beginPath()
      ctx.moveTo(0, -particle.size / 2)
      ctx.bezierCurveTo(
        particle.size / 2,
        -particle.size / 2,
        particle.size / 2,
        particle.size / 2,
        0,
        particle.size / 2
      )
      ctx.bezierCurveTo(
        -particle.size / 2,
        particle.size / 2,
        -particle.size / 2,
        -particle.size / 2,
        0,
        -particle.size / 2
      )
      ctx.closePath()

      // Apply theme-specific colors
      const isDarkTheme = theme === 'dark'
      if (isDarkTheme) {
        // Cyan glow for dark mode
        ctx.fillStyle = `rgba(0, 245, 255, ${particle.opacity * 0.6})`
        ctx.shadowColor = 'rgba(0, 245, 255, 0.5)'
        ctx.shadowBlur = 10
      } else {
        // Pink glow for light mode
        ctx.fillStyle = `rgba(255, 183, 197, ${particle.opacity})`
        ctx.shadowColor = 'rgba(255, 183, 197, 0.5)'
        ctx.shadowBlur = 5
      }

      ctx.fill()
      ctx.restore()
    }

    // Main animation loop
    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw each particle
      particles.forEach((particle) => {
        // Move particle with sinusoidal drift
        particle.x += particle.speedX + Math.sin(particle.y * 0.01) * 0.5
        particle.y += particle.speedY
        particle.rotation += particle.rotationSpeed

        // Wrap particles around screen edges
        if (particle.y > canvas.height + particle.size) {
          particle.y = -particle.size
          particle.x = Math.random() * canvas.width
        }
        if (particle.x > canvas.width + particle.size) {
          particle.x = -particle.size
        }
        if (particle.x < -particle.size) {
          particle.x = canvas.width + particle.size
        }

        drawPetal(particle)
      })

      // Continue animation
      animationId = requestAnimationFrame(animate)
    }

    let animationId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      aria-hidden="true"
    />
  )
}
