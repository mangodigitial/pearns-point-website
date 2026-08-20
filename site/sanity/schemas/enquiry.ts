import { defineField, defineType } from 'sanity'

/**
 * Enquiry
 * ---------------------------------------------------------------------------
 * Every submission from the website contact form and newsletter form is
 * written here by /api/enquiry before the notification email is sent.
 *
 * This is deliberately the source of truth for leads: email can bounce, get
 * filtered or be deleted, but a document in the dataset cannot be silently
 * lost. If the email ever fails, the lead is still recorded here.
 *
 * Documents are created server-side with a write token, so this type is
 * read-only in the Studio - editors should never hand-create one.
 */
export default defineType({
  name: 'enquiry',
  title: 'Enquiry',
  type: 'document',
  orderings: [
    {
      title: 'Newest first',
      name: 'submittedAtDesc',
      by: [{ field: 'submittedAt', direction: 'desc' }],
    },
  ],
  fields: [
    defineField({ name: 'submittedAt', title: 'Submitted at', type: 'datetime', readOnly: true }),
    defineField({
      name: 'source',
      title: 'Source',
      type: 'string',
      readOnly: true,
      options: {
        list: [
          { title: 'Contact form', value: 'contact-form' },
          { title: 'Newsletter', value: 'newsletter' },
        ],
      },
    }),
    defineField({ name: 'name', title: 'Name', type: 'string', readOnly: true }),
    defineField({ name: 'email', title: 'Email', type: 'string', readOnly: true }),
    defineField({ name: 'phone', title: 'Phone', type: 'string', readOnly: true }),
    defineField({ name: 'country', title: 'Country', type: 'string', readOnly: true }),
    defineField({
      name: 'interest',
      title: 'Interested in',
      type: 'string',
      readOnly: true,
      description: 'The value chosen in the enquiry type dropdown.',
    }),
    defineField({ name: 'message', title: 'Message', type: 'text', rows: 6, readOnly: true }),
    defineField({ name: 'consent', title: 'Consented to being contacted', type: 'boolean', readOnly: true }),

    // --- Attribution: lets a lead be traced back to the campaign that paid for it
    defineField({ name: 'pageUrl', title: 'Page submitted from', type: 'url', readOnly: true }),
    defineField({ name: 'referrer', title: 'Referrer', type: 'string', readOnly: true }),
    defineField({ name: 'gclid', title: 'Google click ID (gclid)', type: 'string', readOnly: true }),
    defineField({ name: 'utmSource', title: 'utm_source', type: 'string', readOnly: true }),
    defineField({ name: 'utmMedium', title: 'utm_medium', type: 'string', readOnly: true }),
    defineField({ name: 'utmCampaign', title: 'utm_campaign', type: 'string', readOnly: true }),
    defineField({ name: 'utmTerm', title: 'utm_term', type: 'string', readOnly: true }),
    defineField({ name: 'utmContent', title: 'utm_content', type: 'string', readOnly: true }),

    // --- Sales workflow: the only fields an editor is meant to touch
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'new',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Qualified', value: 'qualified' },
          { title: 'Not qualified', value: 'not-qualified' },
          { title: 'Closed', value: 'closed' },
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'notes',
      title: 'Internal notes',
      type: 'text',
      rows: 4,
      description: 'Not shown anywhere on the website.',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'email', status: 'status', date: 'submittedAt' },
    prepare({ title, subtitle, status, date }) {
      const when = date ? new Date(date).toLocaleDateString('en-GB') : ''
      return {
        title: title || 'Unnamed enquiry',
        subtitle: [subtitle, status, when].filter(Boolean).join(' - '),
      }
    },
  },
})
