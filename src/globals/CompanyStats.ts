import { GlobalConfig } from 'payload'

export const CompanyStats: GlobalConfig = {
  slug: 'company-stats',
  label: 'Company Statistics',
  fields: [
    {
      name: 'yearsOfExpertise',
      type: 'number',
      required: true,
      label: 'Years of Expertise',
    },
    {
      name: 'projectsCompleted',
      type: 'number',
      required: true,
      label: 'Projects Completed',
    },
    {
      name: 'skilledManpower',
      type: 'number',
      required: true,
      label: 'Skilled Manpower',
    },
  ],
}