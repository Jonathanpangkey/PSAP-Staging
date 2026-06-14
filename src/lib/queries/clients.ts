import { getPayloadClient } from '../payload'
import { Client } from '@/payload-types'

export const FALLBACK_CLIENTS: Partial<Client>[] = [
  { id: 1, name: 'PERTAMINA' },
  { id: 2, name: 'McDermott' },
  { id: 3, name: 'Saipem' },
  { id: 4, name: 'PaxOcean' },
  { id: 5, name: 'Sembcorp' },
]

export async function fetchClients(): Promise<Client[]> {
  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'clients',
      depth: 1,
      limit: 100,
    })

    if (result.docs && result.docs.length > 0) {
      return result.docs as Client[]
    }

    return FALLBACK_CLIENTS as Client[]
  } catch (error) {
    console.error('Error fetching clients collection from Payload:', error)
    return FALLBACK_CLIENTS as Client[]
  }
}
