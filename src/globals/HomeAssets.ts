import { GlobalConfig } from 'payload'

export const HomeAssets: GlobalConfig = {
  slug: 'home-assets',
  label: 'Home Page Assets',
  fields: [
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Hero Image',
    },
  ],
}