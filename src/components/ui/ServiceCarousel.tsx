'use client'

import { useState, useEffect } from 'react'
import { Media } from '@/payload-types'
import PayloadImage from './PayloadImage'

interface ServiceCarouselProps {
  photos?: {
    photo: number | Media
    id?: string | null
  }[]
  alt?: string
}

export default function ServiceCarousel({ photos = [], alt = '' }: ServiceCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Filter out invalid photos
  const validPhotos = photos.filter((p) => p && p.photo)

  useEffect(() => {
    if (validPhotos.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % validPhotos.length)
    }, 3000) // Slide every 3 seconds

    return () => clearInterval(interval)
  }, [validPhotos.length])

  if (validPhotos.length === 0) {
    return <span className="arrowmark">image →</span>
  }

  if (validPhotos.length === 1) {
    return (
      <PayloadImage
        image={validPhotos[0].photo}
        fill
        style={{ objectFit: 'cover' }}
        alt={alt}
      />
    )
  }

  return (
    <div className="carousel-wrapper" style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {/* Slides container */}
      <div
        className="carousel-slides"
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: 'transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        {validPhotos.map((photoObj, idx) => (
          <div
            key={photoObj.id || idx}
            className="carousel-slide"
            style={{
              width: '100%',
              height: '100%',
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <PayloadImage
              image={photoObj.photo}
              size="card"
              fill
              style={{ objectFit: 'cover' }}
              alt={`${alt} - Photo ${idx + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Navigation Indicators / Dots */}
      <div
        className="carousel-dots"
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '6px',
          zIndex: 10,
        }}
      >
        {validPhotos.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setActiveIndex(idx)
            }}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: idx === activeIndex ? '#fff' : 'rgba(255, 255, 255, 0.4)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'background-color 0.3s, transform 0.3s',
              transform: idx === activeIndex ? 'scale(1.2)' : 'scale(1)',
            }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
