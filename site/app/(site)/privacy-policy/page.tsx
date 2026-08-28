import type { Metadata } from 'next'
import LegalPage, { type LegalBlock } from '@/components/global/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'How Orange Limited collects, uses and protects personal information submitted through the Pearns Point website.',
  alternates: { canonical: '/privacy-policy' },
  robots: { index: true, follow: true },
}

const UPDATED = '28 August 2026'
const EMAIL = 'info@orangelimited.com'

const blocks: LegalBlock[] = [
  {
    heading: 'Who we are',
    paragraphs: [
      'Pearns Point is a residential development on the west coast of Antigua, owned and developed by Orange Limited ("Orange Limited", "we", "us", "our"). Orange Limited is the data controller for personal information collected through this website.',
      `You can reach us about anything in this policy by writing to <a href="mailto:${EMAIL}" class="text-ocean hover:text-ocean-deep">${EMAIL}</a>, or by post at Orange Limited, Pearns Point, Five Islands, St. John&rsquo;s, Antigua and Barbuda.`,
    ],
  },
  {
    heading: 'What we collect',
    paragraphs: [
      'We only collect information you choose to give us, together with basic technical information your browser sends to any website you visit.',
    ],
    bullets: [
      '<strong>Enquiry details.</strong> When you complete an enquiry form we collect your name, email address, telephone number, country, the type of enquiry and anything you write in the message field.',
      '<strong>Correspondence.</strong> If you email or call us, we keep a record of that correspondence so we can deal with your enquiry properly.',
      '<strong>Technical and usage data.</strong> Pages viewed, approximate location derived from your IP address, device and browser type, referring website, and how you move through the site. This is collected through cookies and similar technologies.',
    ],
  },
  {
    heading: 'How we use it',
    paragraphs: [
      'We use the information you give us to respond to your enquiry, to send you the sales material you have asked for, and to keep in touch about Pearns Point where you have agreed to that. We use technical and usage data to understand how the site is performing and to improve it.',
      'We do not sell your personal information, and we do not share it with third parties for their own marketing.',
    ],
  },
  {
    heading: 'Our legal basis',
    paragraphs: [
      'Where the UK GDPR or EU GDPR applies to you, we rely on your <strong>consent</strong> for marketing communications and non-essential cookies; on our <strong>legitimate interests</strong> in responding to enquiries, running and securing the website, and understanding how it is used; and on <strong>legal obligation</strong> where we are required to keep records. You may withdraw consent at any time.',
    ],
  },
  {
    heading: 'Who we share it with',
    paragraphs: [
      'We share personal information only with the parties who help us operate the site and handle enquiries, and only so far as they need it:',
    ],
    bullets: [
      'Our website hosting, content management and email delivery providers.',
      'Analytics and advertising measurement providers, including Google, where you have accepted analytics cookies.',
      'Professional advisers, and our appointed agents and representatives who handle sales enquiries on our behalf.',
      'Regulators, law enforcement or other authorities where we are legally required to do so.',
    ],
  },
  {
    heading: 'International transfers',
    paragraphs: [
      'Orange Limited is based in Antigua and Barbuda, and some of our service providers are based in the United Kingdom, the European Union and the United States. Where personal information is transferred outside your own country, we take reasonable steps to ensure it remains protected to a comparable standard, including using providers who offer contractual safeguards such as standard contractual clauses.',
    ],
  },
  {
    heading: 'How long we keep it',
    paragraphs: [
      'We keep enquiry records for as long as we are in contact with you about a possible purchase, and for a reasonable period afterwards in case you come back to us — normally no longer than five years from our last contact, unless a longer period is required for legal, tax or contractual reasons. Analytics data is retained in aggregated form.',
    ],
  },
  {
    heading: 'Cookies',
    paragraphs: [
      'This site uses cookies and similar technologies. Some are necessary for the site to work; others help us measure how the site is used, through Google Tag Manager and Google Analytics, and to measure the performance of our advertising.',
      'You can block or delete cookies through your browser settings. Blocking necessary cookies may stop parts of the site working as intended. You can also opt out of Google Analytics using the browser add-on Google provides.',
    ],
  },
  {
    heading: 'Your rights',
    paragraphs: [
      'Depending on where you live, you may have the right to ask us for a copy of the personal information we hold about you, to have it corrected or deleted, to restrict or object to how we use it, to receive it in a portable format, and to withdraw consent you have given. Residents of Antigua and Barbuda have rights under the Data Protection Act 2013; residents of the United Kingdom and the European Economic Area have rights under the UK and EU GDPR.',
      `To exercise any of these rights, email <a href="mailto:${EMAIL}" class="text-ocean hover:text-ocean-deep">${EMAIL}</a>. We will respond within one month. If you are not satisfied with our response you may complain to your local data protection authority — in the United Kingdom, the Information Commissioner&rsquo;s Office.`,
    ],
  },
  {
    heading: 'Security',
    paragraphs: [
      'We take reasonable technical and organisational measures to protect personal information against loss, misuse and unauthorised access, including encryption in transit and access controls on the systems that hold enquiry data. No method of transmission over the internet is completely secure, and we cannot guarantee absolute security.',
    ],
  },
  {
    heading: 'Other websites',
    paragraphs: [
      'This site links to websites operated by others, including our architectural partners and third-party news outlets. We are not responsible for their content or their privacy practices, and we encourage you to read their policies before providing any information to them.',
    ],
  },
  {
    heading: 'Children',
    paragraphs: [
      'This website is intended for adults. We do not knowingly collect personal information from anyone under 18. If you believe a child has given us their information, contact us and we will delete it.',
    ],
  },
  {
    heading: 'Changes to this policy',
    paragraphs: [
      'We may update this policy from time to time. The date at the top of this page shows when it was last revised. Material changes will be highlighted on this page.',
    ],
  },
]

export default function Page() {
  return (
    <LegalPage
      eyebrow="Privacy Policy"
      title="Privacy <em>Policy</em>"
      intro="How we collect, use and protect the information you share with us."
      updated={UPDATED}
      blocks={blocks}
    />
  )
}
