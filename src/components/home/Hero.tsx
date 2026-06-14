'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import { CompanyStat } from '@/payload-types'

interface HeroProps {
  stats: CompanyStat
}

export default function Hero({ stats }: HeroProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stickyRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const currentTimeRef = useRef(0)
  const targetTimeRef = useRef(0)

  // Throttle refs
  const lastScrollTime = useRef(0)
  const lastMoveTime = useRef(0)

  const dragRef = useRef({
    active: false,
    startX: 0,
    startTime: 0,
  })

  useEffect(() => {
    const section = sectionRef.current
    const video = videoRef.current
    const sticky = stickyRef.current
    const canvas = canvasRef.current
    if (!section || !video || !sticky || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const drawLoop = () => {
      if (video.readyState >= 2 && video.duration) {
        if (Math.abs(targetTimeRef.current - currentTimeRef.current) > 0.001) {
          currentTimeRef.current = targetTimeRef.current
          video.currentTime = currentTimeRef.current
        }
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
      }
      rafRef.current = requestAnimationFrame(drawLoop)
    }
    rafRef.current = requestAnimationFrame(drawLoop)

    // ── Sync scroll bar ───────────────────────────────────────────────────────
    const syncScrollBar = (progress: number) => {
      const bar = document.getElementById('hero-scroll-bar')
      if (bar) bar.style.height = `${progress * 100}%`
    }

    // ── Scroll scrubbing (throttle 16ms ≈ 60fps) ──────────────────────────────
    const onScroll = () => {
      const now = performance.now()
      if (now - lastScrollTime.current < 16) return
      lastScrollTime.current = now

      if (!video.duration) return
      const totalScroll = section.offsetHeight - window.innerHeight
      const scrolled = Math.max(0, window.scrollY - section.offsetTop)
      const progress = Math.min(1, scrolled / totalScroll)
      targetTimeRef.current = progress * video.duration
      syncScrollBar(progress)
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    const onMouseDown = (e: MouseEvent) => {
      dragRef.current = {
        active: true,
        startX: e.clientX,
        startTime: currentTimeRef.current,
      }
      sticky.style.cursor = 'grabbing'
    }

    const onMouseMove = (e: MouseEvent) => {
      const now = performance.now()
      if (now - lastMoveTime.current < 16) return
      lastMoveTime.current = now

      if (!dragRef.current.active || !video.duration) return
      const dx = e.clientX - dragRef.current.startX
      const delta = (dx / 600) * video.duration
      const next = Math.max(0, Math.min(video.duration, dragRef.current.startTime - delta))
      targetTimeRef.current = next
      syncScrollBar(next / video.duration)
      const totalScroll = section.offsetHeight - window.innerHeight
      window.scrollTo({
        top: section.offsetTop + (next / video.duration) * totalScroll,
        behavior: 'instant',
      })
    }

    const onMouseUp = () => {
      dragRef.current.active = false
      sticky.style.cursor = 'grab'
    }

    const onTouchStart = (e: TouchEvent) => {
      dragRef.current = {
        active: true,
        startX: e.touches[0].clientX,
        startTime: currentTimeRef.current,
      }
    }

    const onTouchMove = (e: TouchEvent) => {
      const now = performance.now()
      if (now - lastMoveTime.current < 16) return
      lastMoveTime.current = now

      if (!dragRef.current.active || !video.duration) return
      const dx = e.touches[0].clientX - dragRef.current.startX
      const delta = (dx / 600) * video.duration
      const next = Math.max(0, Math.min(video.duration, dragRef.current.startTime - delta))
      targetTimeRef.current = next
      syncScrollBar(next / video.duration)
      const totalScroll = section.offsetHeight - window.innerHeight
      window.scrollTo({
        top: section.offsetTop + (next / video.duration) * totalScroll,
        behavior: 'instant',
      })
    }

    const onTouchEnd = () => {
      dragRef.current.active = false
    }

    sticky.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    sticky.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })
    window.addEventListener('touchend', onTouchEnd)

    onScroll()

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('scroll', onScroll)
      sticky.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      sticky.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('touchend', onTouchEnd)
    }
  }, [])

  return (
    <div ref={sectionRef} className="hero-scroll-container">
      <div ref={stickyRef} className="hero hero-sticky">
        <div className="hero-bg" aria-hidden="true">
          <video
            ref={videoRef}
            src="/assets/home/[PSAP2] Hero Landing Page.mp4"
            muted
            playsInline
            preload="auto"
            style={{ display: 'none' }}
            onLoadedMetadata={(e) => {
              const v = e.currentTarget
              v.currentTime = v.duration
              setTimeout(() => {
                v.currentTime = 0
              }, 150)
            }}
          />
          <canvas ref={canvasRef} className="hero-bg-canvas" aria-hidden="true" />
        </div>

        <div className="hero-grid-lines" aria-hidden="true" />
        <div className="hero-grid">
          <div>
            <div className="eyebrow">Marine Oil and Gas · Contractor</div>
            <h1 className="display lg">
              Marine Oil and Gas,
              <br />
              <em>Engineered to Last</em>.
            </h1>
            <p className="lead hero-lead">
              PSA delivers blasting &amp; painting, manpower supply, scaffolding, equipment, and
              HVAC / mechanical-electrical work for Marine Oil and Gas operators across the
              Asia-Pacific.
            </p>
            <div className="hero-cta-group">
              <Link className="btn btn-primary" href="/contact">
                Contact Us <span className="arrow">→</span>
              </Link>
              <Link className="btn btn-secondary" href="/services">
                Explore Services <span className="arrow">→</span>
              </Link>
            </div>
            <div className="hero-trust">
              <span>{stats.projectsCompleted}+ Projects Completed</span>
              <span>Batam, Indonesia</span>
              <span>{stats.yearsOfExpertise}+ Years of Expertise</span>
            </div>
          </div>

          <div className="hero-scroll-cue" aria-hidden="true">
            <div className="hero-scroll-track">
              <div className="hero-scroll-bar" id="hero-scroll-bar" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
