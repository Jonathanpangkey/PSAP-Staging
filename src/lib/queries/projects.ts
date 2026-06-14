import { getPayloadClient } from '../payload'
import { Project } from '@/payload-types'

export const FALLBACK_PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Ceres FPSO — Topsides Coating',
    description: 'Topsides surface preparation and protective coating for FPSO Ceres, executed under a documented quality plan.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 2,
    title: 'Karimun Yard — FSO Scaffold Frame',
    description: 'Engineered scaffold frame for FSO conversion, sized and erected to project scope.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 3,
    title: 'Accommodation Block — HVAC Retrofit',
    description: 'Mechanical-electrical retrofit of accommodation HVAC system, with commissioning to operator sign-off.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 4,
    title: 'Natuna Basin — Manpower Mobilisation',
    description: 'Mobilisation of skilled marine manpower across welding, painting, scaffolding, and rigging disciplines.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 5,
    title: 'Anoa Field — Compressor Module Refit',
    description: 'Compressor module refit, with full surface preparation and protective coating.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
  {
    id: 6,
    title: 'Electrical House — Install & Commissioning',
    description: 'Electrical house installation, termination, and commissioning to operator sign-off.',
    updatedAt: '',
    createdAt: '',
    photos: null,
  },
]

export async function fetchProjects(): Promise<Project[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'projects',
      depth: 1,
      limit: 100,
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs
    }

    return FALLBACK_PROJECTS
  } catch (error) {
    console.error('Error fetching projects collection from Payload:', error)
    return FALLBACK_PROJECTS
  }
}
