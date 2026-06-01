import { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  labels: {
    singular: 'Inquiry',
    plural: 'Inquiries',
  },
  admin: {
    useAsTitle: 'fullName',
  },
  fields: [
    {
      name: 'fullName',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'company',
      type: 'text',
      required: true,
      label: 'Company',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email',
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
      label: 'Phone Number',
    },
    {
      name: 'serviceOfInterest',
      type: 'select',
      required: true,
      label: 'Service of Interest',
      options: [
        { label: 'Blasting & Painting', value: 'blasting-painting' },
        { label: 'Manpower Supply', value: 'manpower-supply' },
        { label: 'Scaffolding', value: 'scaffolding' },
        { label: 'Equipment Supply', value: 'equipment-supply' },
        { label: 'HVAC / Mechanical-Electrical', value: 'hvac-mechanical-electrical' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
  ],
}