import { NextResponse } from 'next/server'
import { fetchContactInfo } from '@/lib/queries/contact-info'

export async function GET() {
  try {
    const contactInfo = await fetchContactInfo()
    const pdfUrl =
      contactInfo.companyProfilePdf && typeof contactInfo.companyProfilePdf === 'object'
        ? contactInfo.companyProfilePdf.url
        : null

    if (!pdfUrl) {
      return new NextResponse('PDF not found', { status: 404 })
    }

    const response = await fetch(pdfUrl)
    if (!response.ok) {
      throw new Error('Failed to fetch PDF from storage')
    }

    const arrayBuffer = await response.arrayBuffer()
    const headers = new Headers()
    headers.set(
      'Content-Disposition',
      'attachment; filename="PT_Perintis_Sarana_Astra_Company_Profile.pdf"'
    )
    headers.set('Content-Type', 'application/pdf')

    return new NextResponse(arrayBuffer, { headers })
  } catch (error) {
    console.error('Error downloading PDF:', error)
    return new NextResponse('Error downloading file', { status: 500 })
  }
}
