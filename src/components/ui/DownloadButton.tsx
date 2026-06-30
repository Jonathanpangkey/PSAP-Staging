'use client'

import { useState } from 'react'

export default function DownloadButton() {
  const [loading, setLoading] = useState(false)

  const handleDownload = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    if (loading) return
    setLoading(true)
    
    try {
      const response = await fetch('/api/download-profile')
      if (response.ok) {
        const blob = await response.blob()
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'PT_Perintis_Sarana_Astra_Company_Profile.pdf'
        document.body.appendChild(a)
        a.click()
        a.remove()
        window.URL.revokeObjectURL(url)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <a
      className="btn btn-ghost-light"
      href="#"
      onClick={handleDownload}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
    >
      {loading ? (
        <>
          <span className="spinner-dot" /> Downloading...
        </>
      ) : (
        'Download Profile'
      )}
    </a>
  )
}
