"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    const height = (canvas.height = 600) // Fixed height for hero section
    let animationFrameId: number

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth
    }

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
      setIsHovering(
        e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom,
      )
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    // Particle class with enhanced properties
    class Particle {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      baseRadius: number
      color: string
      isDark: boolean
      angle: number
      speed: number
      oscillationSpeed: number
      xOscillationAmplitude: number
      yOscillationAmplitude: number
      glowIntensity: number
      pulseSpeed: number
      pulsePhase: number

      constructor(isDark: boolean) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.baseRadius = Math.random() * 3 + 1
        this.radius = this.baseRadius
        this.isDark = isDark
        this.angle = Math.random() * Math.PI * 2
        this.speed = Math.random() * 0.5 + 0.1
        this.vx = Math.cos(this.angle) * this.speed
        this.vy = Math.sin(this.angle) * this.speed
        this.oscillationSpeed = Math.random() * 0.02 + 0.01
        this.xOscillationAmplitude = Math.random() * 2
        this.yOscillationAmplitude = Math.random() * 2
        this.glowIntensity = Math.random() * 0.5 + 0.5
        this.pulseSpeed = Math.random() * 0.05 + 0.01
        this.pulsePhase = Math.random() * Math.PI * 2

        // Enhanced color schemes for light/dark mode
        if (isDark) {
          // For dark mode - vibrant colors with more variety
          const hue = Math.random() * 60 + 280 // Purple to pink range
          const saturation = 90 + Math.random() * 10 // High saturation
          const lightness = 60 + Math.random() * 20 // Brighter
          this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.8)`
        } else {
          // For light mode - rose/pink hues
          const hue = Math.random() * 40 + 330 // Rose to pink range
          const saturation = 80 + Math.random() * 20
          const lightness = 50 + Math.random() * 20
          this.color = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.7)`
        }
      }

      update(mouseX: number, mouseY: number, isHovering: boolean) {
        // Base movement
        this.x += this.vx
        this.y += this.vy

        // Add oscillation for more dynamic movement
        this.x += Math.sin(this.angle * 5 + Date.now() * this.oscillationSpeed) * this.xOscillationAmplitude
        this.y += Math.cos(this.angle * 5 + Date.now() * this.oscillationSpeed) * this.yOscillationAmplitude

        // Pulsing effect
        this.radius = this.baseRadius * (1 + 0.3 * Math.sin(Date.now() * this.pulseSpeed + this.pulsePhase))

        // Mouse interaction
        if (isHovering) {
          const dx = mouseX - this.x
          const dy = mouseY - this.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 150

          if (distance < maxDistance) {
            // Particles are repelled by the mouse
            const force = (maxDistance - distance) / maxDistance
            this.vx -= (dx / distance) * force * 0.05
            this.vy -= (dy / distance) * force * 0.05
          }
        }

        // Boundary check with bounce
        if (this.x < 0 || this.x > width) {
          this.vx = -this.vx * 0.8
          this.x = this.x < 0 ? 0 : width
        }
        if (this.y < 0 || this.y > height) {
          this.vy = -this.vy * 0.8
          this.y = this.y < 0 ? 0 : height
        }

        // Gradually normalize velocity
        this.vx *= 0.99
        this.vy *= 0.99

        // Add a small random movement for natural flow
        this.vx += (Math.random() - 0.5) * 0.05
        this.vy += (Math.random() - 0.5) * 0.05

        // Cap max velocity
        const maxVel = 2
        const vel = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
        if (vel > maxVel) {
          this.vx = (this.vx / vel) * maxVel
          this.vy = (this.vy / vel) * maxVel
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        // Create glow effect
        const glow = this.isDark ? 15 : 10
        const gradient = ctx.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.radius * (1 + glow * this.glowIntensity),
        )

        gradient.addColorStop(0, this.color)
        gradient.addColorStop(1, `${this.color.slice(0, -2)}0)`)

        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius * (1 + glow * this.glowIntensity), 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Core of the particle
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create more particles for a denser effect
    const particles: Particle[] = []
    const isDarkMode = theme === "dark"
    const particleCount = window.innerWidth < 768 ? 100 : 200 // Responsive particle count

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle(isDarkMode))
    }

    // Animation loop with enhanced effects
    function animate() {
      if (!ctx) return

      // Clear with a semi-transparent background for trail effect
      ctx.fillStyle = isDarkMode ? "rgba(10, 10, 20, 0.2)" : "rgba(255, 245, 245, 0.2)"
      ctx.fillRect(0, 0, width, height)

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mousePosition.x, mousePosition.y, isHovering)
        particle.draw(ctx)
      })

      // Draw enhanced connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 120

          if (distance < maxDistance) {
            // Calculate opacity based on distance
            const opacity = (1 - distance / maxDistance) * 0.8

            // Calculate line width based on distance
            const lineWidth = (1 - distance / maxDistance) * 2

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            // Create gradient line
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)

            // Extract colors from particles for the gradient
            const color1 = particles[i].color
            const color2 = particles[j].color

            gradient.addColorStop(0, color1.replace(/[^,]+(?=\))/, `${opacity}`))
            gradient.addColorStop(1, color2.replace(/[^,]+(?=\))/, `${opacity}`))

            ctx.strokeStyle = gradient
            ctx.lineWidth = lineWidth
            ctx.stroke()
          }
        }
      }

      // Add occasional "energy burst" effect
      if (Math.random() < 0.02) {
        const burstX = Math.random() * width
        const burstY = Math.random() * height
        const burstRadius = Math.random() * 50 + 30

        const burstGradient = ctx.createRadialGradient(burstX, burstY, 0, burstX, burstY, burstRadius)

        const burstColor = isDarkMode
          ? `hsla(${Math.random() * 60 + 280}, 100%, 70%, `
          : `hsla(${Math.random() * 20 + 340}, 100%, 60%, `

        burstGradient.addColorStop(0, `${burstColor}0.4)`)
        burstGradient.addColorStop(1, `${burstColor}0)`)

        ctx.beginPath()
        ctx.arc(burstX, burstY, burstRadius, 0, Math.PI * 2)
        ctx.fillStyle = burstGradient
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme, mousePosition, isHovering])

  return <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full -z-10" />
}
