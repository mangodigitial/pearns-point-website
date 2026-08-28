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
    defineField({
      name: 'useInteractiveSitePlan',
      title: 'Use the interactive site plan',
      type: 'boolean',
      initialValue: false,
      description:
        'Off: the page shows the painted site map image below. On: it shows the interactive plan, with every lot clickable and coloured by the Lot Status list. Flip this when the interactive plan is signed off \u2014 no redeploy needed.',
    }),
    defineField({
      name: 'siteMapImage',
      title: 'Site Map Image (fallback)',
      type: 'image',
      description:
        'Only shown if the Lot Status list below is empty. The page normally renders the interactive site plan instead.',
    }),
    defineField({
      name: 'lotStatuses',
      title: 'Lot Status',
      type: 'array',
      description:
        'Availability for each lot on the interactive site plan. The shapes themselves are drawn from Studio RHE\u2019s master plan and are not editable here \u2014 only status, size and price. Leave size and price blank to keep the published figures.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'number',
              title: 'Lot Number',
              type: 'number',
              validation: (Rule) => Rule.required().integer().min(1).max(71),
            }),
            defineField({
              name: 'status',
              title: 'Status',
              type: 'string',
              options: {
                list: [
                  { title: 'Available', value: 'available' },
                  { title: 'Reserved', value: 'reserved' },
                  { title: 'Sold', value: 'sold' },
                ],
                layout: 'radio',
                direction: 'horizontal',
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({ name: 'sqft', title: 'Size (sq ft)', type: 'number' }),
            defineField({ name: 'price', title: 'Price (US$)', type: 'number' }),
          ],
          preview: {
            select: { number: 'number', status: 'status', price: 'price' },
            prepare({ number, status, price }: { number?: number; status?: string; price?: number }) {
              return {
                title: `Lot ${number ?? '—'}`,
                subtitle: [status, price ? `$${price.toLocaleString('en-US')}` : null]
                  .filter(Boolean)
                  .join(' · '),
              }
            },
          },
        },
      ],
    }),
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
              description: 'Shown below the hero image. The first two are visible; any extras scroll horizontally.',
              validation: (Rule) => Rule.max(12),
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'videoUrl',
              title: 'Drone Video URL (Bunny.net)',
              type: 'url',
              description: 'Direct Bunny.net video URL (.mp4 or .m3u8 HLS). Leave empty to hide the "Drone Video" button for this area.',
            }),
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
