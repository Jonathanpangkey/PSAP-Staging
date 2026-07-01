import { CollectionConfig } from 'payload'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  labels: {
    singular: 'Inquiry',
    plural: 'Inquiries',
  },
  admin: {
    useAsTitle: 'fullName',
    hideAPIURL: true,
    defaultColumns: ['fullName', 'company', 'email', 'phone', 'serviceOfInterest', 'createdAt'],
  },
  access: {
    create: () => false,
    update: () => false,
    read: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
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
      type: 'text',
      required: true,
      label: 'Service of Interest',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
  ],
}