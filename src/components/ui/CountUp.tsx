'use client'

import { useEffect, useState, useRef } from 'react'

interface CountUpProps {
  end: number
  duration?: number // in ms
}

export default function CountUp({ end, duration = 2000 }: CountUpProps) {
  const [count, setCount] = useState(0)
  const elementRef = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          let startTimestamp: number | null = null

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            setCount(Math.floor(progress * end))

            if (progress < 1) {
              window.requestAnimationFrame(step)
            } else {
              setCount(end)
            }
          }

          window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.1 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration])

  return <span ref={elementRef}>{count.toLocaleString()}</span>
}
