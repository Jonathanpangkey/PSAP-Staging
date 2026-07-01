import { GlobalConfig } from 'payload'

export const ContactInfo: GlobalConfig = {
  slug: 'contact-info',
  label: 'Contact Information',
  admin: {
    hideAPIURL: true,
  },
  fields: [
    {
      name: 'emailInfo',
      type: 'text',
      required: true,
      label: 'Email (General)',
    },
    {
      name: 'emailInfoSubdesc',
      type: 'text',
      required: true,
      label: 'Email (General) — Sub-description',
    },
    {
      name: 'emailTender',
      type: 'text',
      required: true,
      label: 'Email (Tender/RFQ)',
    },
    {
      name: 'emailTenderSubdesc',
      type: 'text',
      required: true,
      label: 'Email (Tender/RFQ) — Sub-description',
    },
    {
      name: 'whatsapp',
      type: 'text',
      required: true,
      label: 'WhatsApp Number',
    },
    {
      name: 'whatsappSubdesc',
      type: 'text',
      required: true,
      label: 'WhatsApp — Sub-description',
    },
    {
      name: 'phoneOffice',
      type: 'text',
      required: true,
      label: 'Phone (Office)',
    },
    {
      name: 'phoneOfficeSubdesc',
      type: 'text',
      required: true,
      label: 'Phone (Office) — Sub-description',
    },
    {
      name: 'address',
      type: 'textarea',
      required: true,
      label: 'Office Address',
    },
    {
      name: 'addressSubdesc',
      type: 'text',
      required: true,
      label: 'Address — Sub-description',
    },
    {
      name: 'googleMapsUrl',
      type: 'text',
      required: true,
      label: 'Google Maps URL',
    },
    {
      name: 'companyProfilePdf',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Company Profile PDF',
    },
  ],
}