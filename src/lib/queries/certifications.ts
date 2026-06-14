import { getPayloadClient } from '../payload'
import { Certification } from '@/payload-types'

export const FALLBACK_CERTIFICATIONS: Partial<Certification>[] = [
  {
    id: 1,
    title: 'ISO 9001:2015 — Quality Management Systems',
    description: 'Manpower Supply for the Marine Oil and Gas industry, and provision of Steel Construction; Structural, Piping, Blasting & Painting; Electrical, Mechanical, Scaffolding, and Cleaning works.',
  },
]

export async function fetchCertifications(): Promise<Certification[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'certifications',
      depth: 1,
      limit: 100,
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs as Certification[]
    }

    return FALLBACK_CERTIFICATIONS as Certification[]
  } catch (error) {
    console.error('Error fetching certifications collection from Payload:', error)
    return FALLBACK_CERTIFICATIONS as Certification[]
  }
}
