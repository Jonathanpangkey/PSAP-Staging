'use client'

import { useEffect, useState, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

function ProgressBarContent() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (active) {
      setProgress(100)
      const timer = setTimeout(() => {
        setVisible(false)
        setActive(false)
        setProgress(0)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [pathname, searchParams])

  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest('a')

      if (!anchor) return

      const href = anchor.getAttribute('href')
      const targetAttr = anchor.getAttribute('target')
      const downloadAttr = anchor.getAttribute('download')

      if (
        !href ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        targetAttr === '_blank' ||
        downloadAttr !== null
      ) {
        return
      }

      const currentUrl = new URL(window.location.href)
      const targetUrl = new URL(href, window.location.href)
      if (currentUrl.pathname === targetUrl.pathname && currentUrl.search === targetUrl.search) {
        return
      }

      setVisible(true)
      setActive(true)
      setProgress(10)

      let currentProgress = 10
      const interval = setInterval(() => {
        currentProgress += (90 - currentProgress) * 0.15
        setProgress(currentProgress)
        if (currentProgress >= 88) {
          clearInterval(interval)
        }
      }, 80)

      const win = window as any
      win._navProgressInterval = interval
    }

    document.addEventListener('click', handleAnchorClick)
    return () => {
      document.removeEventListener('click', handleAnchorClick)
      const win = window as any
      if (win._navProgressInterval) {
        clearInterval(win._navProgressInterval)
      }
    }
  }, [])

  if (!visible) return null

  return (
    <div className="top-loading-bar-container" style={{ opacity: progress === 100 ? 0 : 1, transition: 'opacity 0.2s ease-in-out' }}>
      <div 
        className="top-loading-bar" 
        style={{ 
          width: `${progress}%`, 
          transition: 'width 0.2s ease',
          transform: 'none'
        }} 
      />
    </div>
  )
}

export default function NavigationProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarContent />
    </Suspense>
  )
}
