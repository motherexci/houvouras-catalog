import type { CollectionConfig } from 'payload'

export const PoliticalArtworks: CollectionConfig = {
  slug: 'political-artworks',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'year', type: 'text' },
    { name: 'imageHero', type: 'upload', relationTo: 'media', required: true },
  ],
}