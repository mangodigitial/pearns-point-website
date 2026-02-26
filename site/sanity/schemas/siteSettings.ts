import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'siteName', title: 'Site Name', type: 'string' }),
    defineField({ name: 'contactPhoneAntigua', title: 'Phone (Antigua)', type: 'string' }),
    defineField({ name: 'contactPhoneSales', title: 'Phone (Sales)', type: 'string' }),
    defineField({ name: 'contactEmail', title: 'Email', type: 'string' }),
    defineField({ name: 'footerTagline', title: 'Footer Tagline', type: 'text', rows: 3 }),
    defineField({
      name: 'navLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'URL', type: 'string' }),
          ],
        },
      ],
    }),
  ],
})
