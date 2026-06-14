import { getPayloadClient } from '../payload'
import { CompanyStat } from '@/payload-types'

export const DEFAULT_COMPANY_STATS: CompanyStat = {
  id: 0,
  yearsOfExpertise: 20,
  projectsCompleted: 300,
  skilledManpower: 1200,
}

export async function fetchCompanyStats(): Promise<CompanyStat> {
  try {
    const payload = await getPayloadClient()
    const stats = await payload.findGlobal({
      slug: 'company-stats',
    })
    
    return {
      id: stats.id ?? DEFAULT_COMPANY_STATS.id,
      yearsOfExpertise: stats.yearsOfExpertise ?? DEFAULT_COMPANY_STATS.yearsOfExpertise,
      projectsCompleted: stats.projectsCompleted ?? DEFAULT_COMPANY_STATS.projectsCompleted,
      skilledManpower: stats.skilledManpower ?? DEFAULT_COMPANY_STATS.skilledManpower,
    }
  } catch (error) {
    console.error('Error fetching company stats global from Payload:', error)
    return DEFAULT_COMPANY_STATS
  }
}
