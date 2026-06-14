import { getPayloadClient } from '../payload'
import { Service } from '@/payload-types'

export const FALLBACK_SERVICES: Service[] = [
  {
    id: 1,
    title: 'Blasting & Painting',
    description: 'Surface preparation and protective coating for marine assets, with documented inspection at each stage.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 2,
    title: 'Manpower Supply',
    description: 'Skilled marine manpower across welding, fitting, rigging, painting, and scaffolding — mobilised from our Batam pool.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 3,
    title: 'Scaffolding',
    description: 'Scaffolding design, erection, and dismantling for marine engineering work — sized to project scope and access conditions.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 4,
    title: 'Equipment Supply',
    description: 'A well-maintained equipment fleet supporting project execution across our service disciplines.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 5,
    title: 'HVAC / Mechanical-Electrical',
    description: 'HVAC retrofit, mechanical-electrical install, and commissioning for accommodation blocks, control rooms, and electrical houses — from drawings through to commissioning.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
]

export async function fetchServices(): Promise<Service[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'services',
      depth: 1,
      limit: 100,
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs
    }

    return FALLBACK_SERVICES
  } catch (error) {
    console.error('Error fetching services collection from Payload:', error)
    return FALLBACK_SERVICES
  }
}
