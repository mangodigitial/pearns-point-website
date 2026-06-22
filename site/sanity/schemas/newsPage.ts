import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'newsPage',
  title: 'Latest News',
  type: 'document',
  fields: [
    defineField({ name: 'heroImage', title: 'Hero Image', type: 'image' }),
    defineField({ name: 'heroEyebrow', title: 'Hero Eyebrow', type: 'string' }),
    defineField({ name: 'heroTitle', title: 'Hero Title', type: 'string' }),
    defineField({ name: 'heroSubtitle', title: 'Hero Subtitle', type: 'text', rows: 2 }),
    defineField({
      name: 'featuredPost',
      title: 'Featured Post',
      type: 'reference',
      to: [{ type: 'blogPost' }],
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
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'newsletter',
      title: 'Newsletter Band',
      type: 'object',
      fields: [
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Title', type: 'string', description: 'HTML allowed, e.g. Subscribe to <em>Updates</em>.' }),
        defineField({ name: 'body', title: 'Body', type: 'text', rows: 2 }),
      ],
    }),
    defineField({
      name: 'ctaBand',
      title: 'Bottom CTA Band',
      type: 'object',
      fields: [
        defineField({ name: 'title', title: 'Title', type: 'string' }),
        defineField({ name: 'subtitle', title: 'Subtitle', type: 'text', rows: 2 }),
        defineField({ name: 'primaryLabel', title: 'Primary Button Label', type: 'string' }),
        defineField({ name: 'primaryHref', title: 'Primary Button Link', type: 'string' }),
        defineField({ name: 'secondaryLabel', title: 'Secondary Button Label', type: 'string' }),
        defineField({ name: 'secondaryHref', title: 'Secondary Button Link', type: 'string' }),
      ],
    }),
  ],
})
