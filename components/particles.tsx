"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  rotation: number
  rotationSpeed: number
}

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const particles: Particle[] = []
    const particleCount = 30

    // Create particles
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

    const drawPetal = (p: Particle) => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate((p.rotation * Math.PI) / 180)
      ctx.globalAlpha = p.opacity

      // Petal shape
      ctx.beginPath()
      ctx.moveTo(0, -p.size / 2)
      ctx.bezierCurveTo(
        p.size / 2, -p.size / 2,
        p.size / 2, p.size / 2,
        0, p.size / 2
      )
      ctx.bezierCurveTo(
        -p.size / 2, p.size / 2,
        -p.size / 2, -p.size / 2,
        0, -p.size / 2
      )
      ctx.closePath()

      // Color based on theme
      const isDark = theme === "dark"
      if (isDark) {
        ctx.fillStyle = `rgba(0, 245, 255, ${p.opacity * 0.6})`
        ctx.shadowColor = "rgba(0, 245, 255, 0.5)"
        ctx.shadowBlur = 10
      } else {
        ctx.fillStyle = `rgba(255, 183, 197, ${p.opacity})`
        ctx.shadowColor = "rgba(255, 183, 197, 0.5)"
        ctx.shadowBlur = 5
      }

      ctx.fill()
      ctx.restore()
    }

    let animationId: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p) => {
        p.x += p.speedX + Math.sin(p.y * 0.01) * 0.5
        p.y += p.speedY
        p.rotation += p.rotationSpeed

        // Reset particle when it goes off screen
        if (p.y > canvas.height + p.size) {
          p.y = -p.size
          p.x = Math.random() * canvas.width
        }
        if (p.x > canvas.width + p.size) {
          p.x = -p.size
        }
        if (p.x < -p.size) {
          p.x = canvas.width + p.size
        }

        drawPetal(p)
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
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
