'use server'

import { getPayloadClient } from '../payload'

export type SubmissionResult = {
  success: boolean
  message: string
  errors?: Record<string, string>
}

export async function submitInquiryAction(
  prevState: any,
  formData: FormData
): Promise<SubmissionResult> {
  const fullName = formData.get('fullName') as string
  const company = formData.get('company') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  const errors: Record<string, string> = {}

  if (!fullName || fullName.trim() === '') {
    errors.fullName = 'Full name is required.'
  }
  if (!company || company.trim() === '') {
    errors.company = 'Company is required.'
  }
  if (!email || !email.includes('@')) {
    errors.email = 'A valid email address is required.'
  }
  if (!phone || phone.trim() === '') {
    errors.phone = 'Phone number is required.'
  }
  if (!message || message.trim() === '') {
    errors.message = 'Message is required.'
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: 'Please resolve the validation errors above.',
      errors,
    }
  }

  // Map service value to enum options
  let serviceValue:
    | 'blasting-painting'
    | 'manpower-supply'
    | 'scaffolding'
    | 'equipment-supply'
    | 'hvac-mechanical-electrical'
    | 'custom-scope' = 'blasting-painting'

  if (service === 'Manpower Supply') serviceValue = 'manpower-supply'
  else if (service === 'Scaffolding') serviceValue = 'scaffolding'
  else if (service === 'Equipment Supply') serviceValue = 'equipment-supply'
  else if (service === 'HVAC / Mechanical-Electrical') serviceValue = 'hvac-mechanical-electrical'
  else if (service === 'Custom Scope') serviceValue = 'custom-scope'

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'inquiries',
      data: {
        fullName,
        company,
        email,
        phone,
        serviceOfInterest: serviceValue,
        message,
      },
    })

    return {
      success: true,
      message: 'Thank you! Your message has been sent successfully.',
    }
  } catch (error) {
    console.error('Error saving inquiry in database:', error)
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    }
  }
}
