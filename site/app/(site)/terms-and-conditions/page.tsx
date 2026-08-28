import type { Metadata } from 'next'
import LegalPage, { type LegalBlock } from '@/components/global/LegalPage'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    'The terms on which Orange Limited makes the Pearns Point website available, including the status of the information published on it.',
  alternates: { canonical: '/terms-and-conditions' },
  robots: { index: true, follow: true },
}

const UPDATED = '28 August 2026'
const EMAIL = 'info@orangelimited.com'

const blocks: LegalBlock[] = [
  {
    heading: 'These terms',
    paragraphs: [
      'This website is operated by Orange Limited ("Orange Limited", "we", "us", "our"), the owner and developer of Pearns Point, Antigua. By using this website you accept these terms. If you do not accept them, please do not use the site.',
      'We may revise these terms at any time by updating this page. The date above shows when they were last changed.',
    ],
  },
  {
    heading: 'The information on this site is not an offer',
    paragraphs: [
      'Nothing on this website forms part of any contract, offer or invitation to treat. Descriptions of lots, villas, plans, prices, availability, amenities and timescales are given in good faith for general guidance only, and do not constitute a representation, warranty or contractual commitment.',
      'Any purchase of a lot or property at Pearns Point will be governed solely by the written sale and purchase agreement signed by the parties, together with its annexes. In the event of any inconsistency between this website and that agreement, the agreement prevails.',
    ],
  },
  {
    heading: 'Plans, images and computer-generated imagery',
    paragraphs: [
      'Site plans, lot boundaries, areas, dimensions and orientations shown on this website are indicative and subject to survey. Photographs, illustrations, artist&rsquo;s impressions and computer-generated images are for illustration only. They may show proposed rather than completed work, may include landscaping, furnishings, finishes or features that are not included in a sale, and may not represent the final built result.',
      'Villa designs shown are examples of what may be built at Pearns Point and are the work of the named architects. They are not standard products offered for sale unless expressly agreed in writing.',
    ],
  },
  {
    heading: 'Prices and availability',
    paragraphs: [
      'Prices and lot availability change. Any price shown on this website is indicative, is exclusive of taxes, duties, professional fees and closing costs unless stated otherwise, and is subject to change without notice. Availability shown on the site plan is a guide only and should be confirmed with our sales team before you rely on it.',
    ],
  },
  {
    heading: 'Citizenship by Investment',
    paragraphs: [
      'Information published on this website about the Antigua and Barbuda Citizenship by Investment Programme is provided for general information only. It is not legal, immigration, tax or financial advice, and it is not a substitute for advice from a licensed professional.',
      'The programme is administered by the Antigua and Barbuda Citizenship by Investment Unit, and its rules, qualifying investment levels, fees, eligibility criteria and residency requirements are set and changed by the Government of Antigua and Barbuda. Applications are made through a Government-authorised agent, and the decision on any application rests entirely with the Citizenship by Investment Unit. We do not guarantee that any application will succeed. Please take independent professional advice, and confirm the current rules with the Citizenship by Investment Unit, before making any decision.',
    ],
  },
  {
    heading: 'No investment advice',
    paragraphs: [
      'Nothing on this website is an offer of securities, a financial promotion, or advice about the merits of an investment. Property values can fall as well as rise, and any rental, resale or return figures mentioned are illustrations rather than forecasts. You should take your own independent legal, tax and financial advice before entering into any transaction.',
    ],
  },
  {
    heading: 'Using this website',
    paragraphs: [
      'You may view, download and print material from this website for your own personal, non-commercial use. You may not:',
    ],
    bullets: [
      'Reproduce, republish or distribute any part of the site for commercial purposes without our written permission.',
      'Use the site in any way that is unlawful, fraudulent, or harmful to us or to other users.',
      'Attempt to gain unauthorised access to the site, its server, or any connected system or database.',
      'Introduce viruses or other malicious material, or attempt to disrupt the site by any means.',
    ],
  },
  {
    heading: 'Intellectual property',
    paragraphs: [
      'All content on this website — including text, photography, illustrations, computer-generated imagery, plans, logos, and the Pearns Point name and marks — is owned by Orange Limited or by its licensors, including the architects and photographers credited on the site, and is protected by copyright and other intellectual property rights. Nothing on this site grants you any licence to use that material except as expressly set out in these terms.',
    ],
  },
  {
    heading: 'Links to other sites',
    paragraphs: [
      'Where this site links to websites operated by others, those links are provided for convenience only. We have no control over the content of those sites and accept no responsibility for them or for any loss arising from your use of them.',
    ],
  },
  {
    heading: 'Availability and liability',
    paragraphs: [
      'We do not guarantee that this website will always be available or uninterrupted, and we may suspend, withdraw or change all or any part of it without notice.',
      'To the fullest extent permitted by law, we exclude all conditions, warranties and other terms that might otherwise be implied, and we are not liable for any loss of profit, loss of business, business interruption, or loss of anticipated savings arising from your use of, or inability to use, this website or from reliance on any content on it. Nothing in these terms limits or excludes our liability for death or personal injury caused by our negligence, or for fraud or fraudulent misrepresentation.',
    ],
  },
  {
    heading: 'Privacy',
    paragraphs: [
      'Our use of the personal information you provide through this site is set out in our <a href="/privacy-policy" class="text-ocean hover:text-ocean-deep">Privacy Policy</a>.',
    ],
  },
  {
    heading: 'Governing law',
    paragraphs: [
      'These terms and any dispute arising out of them or out of your use of this website are governed by the laws of Antigua and Barbuda, and the courts of Antigua and Barbuda have exclusive jurisdiction. Nothing in this clause affects any mandatory rights you may have as a consumer in your country of residence.',
    ],
  },
  {
    heading: 'Contact',
    paragraphs: [
      `Questions about these terms can be sent to <a href="mailto:${EMAIL}" class="text-ocean hover:text-ocean-deep">${EMAIL}</a>, or by post to Orange Limited, Pearns Point, Five Islands, St. John&rsquo;s, Antigua and Barbuda.`,
    ],
  },
]

export default function Page() {
  return (
    <LegalPage
      eyebrow="Terms and Conditions"
      title="Terms &amp; <em>Conditions</em>"
      intro="The basis on which we make this website and the information on it available to you."
      updated={UPDATED}
      blocks={blocks}
    />
  )
}
