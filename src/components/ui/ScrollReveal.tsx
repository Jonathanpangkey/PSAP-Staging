'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number // in ms
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay)
          } else {
            setIsVisible(true)
          }
          // Once it reveals, we don't need to observe it anymore
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      {
        threshold: 0.05, // trigger early
        rootMargin: '0px 0px -50px 0px', // trigger slightly before entering fully
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
