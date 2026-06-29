import { getPayloadClient } from '../payload'
import { ContactInfo } from '@/payload-types'

export const DEFAULT_CONTACT_INFO: ContactInfo = {
  id: 0,
  emailInfo: 'info@perintissaranaastra.com',
  emailInfoSubdesc: 'Replies within 1 business day',
  emailTender: 'tender@perintissaranaastra.com',
  emailTenderSubdesc: 'Tender, RFQ, & pre-qualification',
  whatsapp: '+62 811-2111-1681',
  whatsappSubdesc: 'Mon–Sat · 08:00–17:00 WIB',
  phoneOffice: '+62 778 555 0188 (office)',
  phoneOfficeSubdesc: 'Office reception · weekday operating hours',
  address: 'Bintang Industrial Park II D10/3AB\nBatam, Indonesia\n1.0902° N · 103.9532° E',
  addressSubdesc: 'Field-service teams dispatch from Batam HQ across the Asia-Pacific region.',
  googleMapsUrl: 'https://maps.google.com/?q=1.0902,103.9532',
  companyProfilePdf: null,
}

export async function fetchContactInfo(): Promise<ContactInfo> {
  try {
    const payload = await getPayloadClient()
    const info = await payload.findGlobal({
      slug: 'contact-info',
    })

    return {
      id: info.id ?? DEFAULT_CONTACT_INFO.id,
      emailInfo: info.emailInfo ?? DEFAULT_CONTACT_INFO.emailInfo,
      emailInfoSubdesc: info.emailInfoSubdesc ?? DEFAULT_CONTACT_INFO.emailInfoSubdesc,
      emailTender: info.emailTender ?? DEFAULT_CONTACT_INFO.emailTender,
      emailTenderSubdesc: info.emailTenderSubdesc ?? DEFAULT_CONTACT_INFO.emailTenderSubdesc,
      whatsapp: info.whatsapp ?? DEFAULT_CONTACT_INFO.whatsapp,
      whatsappSubdesc: info.whatsappSubdesc ?? DEFAULT_CONTACT_INFO.whatsappSubdesc,
      phoneOffice: info.phoneOffice ?? DEFAULT_CONTACT_INFO.phoneOffice,
      phoneOfficeSubdesc: info.phoneOfficeSubdesc ?? DEFAULT_CONTACT_INFO.phoneOfficeSubdesc,
      address: info.address ?? DEFAULT_CONTACT_INFO.address,
      addressSubdesc: info.addressSubdesc ?? DEFAULT_CONTACT_INFO.addressSubdesc,
      googleMapsUrl: info.googleMapsUrl ?? DEFAULT_CONTACT_INFO.googleMapsUrl,
      companyProfilePdf: info.companyProfilePdf ?? null,
    }
  } catch (error) {
    console.error('Error fetching contact info global from Payload:', error)
    return DEFAULT_CONTACT_INFO
  }
}
