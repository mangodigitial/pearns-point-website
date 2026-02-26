import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'lotsSitePlanPage',
  title: 'Lots & Site Plan',
  type: 'document',
  fields: [
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'heroEyebrow', title: 'Hero Eyebrow', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 2 }),
    defineField({ name: 'siteMapImage', title: 'Site Map Image', type: 'image' }),
    defineField({
      name: 'lotAreas',
      title: 'Lot Areas',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string' }),
            defineField({ name: 'lotRange', title: 'Lot Range', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
            defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
            defineField({
              name: 'thumbnails',
              title: 'Thumbnails',
              type: 'array',
              of: [{ type: 'image' }],
              validation: (Rule) => Rule.max(2),
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({ name: 'youtubeId', title: 'YouTube Video ID', type: 'string' }),
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'SEO Title', type: 'string' }),
        defineField({ name: 'description', title: 'SEO Description', type: 'text', rows: 3 }),
      ],
    }),
    defineField({
      name: 'availabilityBanner',
      title: 'Availability Banner',
      type: 'object',
      fields: [
        defineField({
          name: 'stats',
          title: 'Stats',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({ name: 'number', title: 'Number', type: 'string' }),
                defineField({ name: 'label', title: 'Label', type: 'string' }),
              ],
            },
          ],
        }),
      ],
    }),
  ],
})
