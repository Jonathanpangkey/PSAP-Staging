import { GlobalConfig } from 'payload'

const validateInteger = (value: any) => {
  if (value === undefined || value === null || value === '') {
    return true // Let required field validation handle empty checks
  }
  const num = Number(value)
  if (isNaN(num) || !Number.isInteger(num) || num < 0) {
    return 'Value must be a positive integer (no decimals)'
  }
  return true
}

export const CompanyStats: GlobalConfig = {
  slug: 'company-stats',
  label: 'Company Statistics',
  fields: [
    {
      name: 'yearsOfExpertise',
      type: 'number',
      required: true,
      label: 'Years of Expertise',
      validate: validateInteger,
    },
    {
      name: 'projectsCompleted',
      type: 'number',
      required: true,
      label: 'Projects Completed',
      validate: validateInteger,
    },
    {
      name: 'skilledManpower',
      type: 'number',
      required: true,
      label: 'Skilled Manpower',
      validate: validateInteger,
    },
  ],
}