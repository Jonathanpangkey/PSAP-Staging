import { getPayloadClient } from '../payload'
import { HomeAsset } from '@/payload-types'

export async function fetchHomeAssets(): Promise<HomeAsset | null> {
  try {
    const payload = await getPayloadClient()
    const assets = await payload.findGlobal({
      slug: 'home-assets',
    })
    return assets
  } catch (error) {
    console.error('Error fetching home assets global from Payload:', error)
    return null
  }
}
