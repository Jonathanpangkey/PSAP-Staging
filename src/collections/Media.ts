import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: {
    hideAPIURL: true,
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
  ],
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/png', 'image/jpeg', 'application/pdf'],
    imageSizes: [
      {
        name: 'card',
        width: 768,
        height: 480,
        position: 'centre',
      },
      {
        name: 'logo',
        width: 320,
        height: 120,
        position: 'centre',
      },
    ],
  },
}
