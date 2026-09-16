/**
 * Countries offered on the enquiry form's "Country of Residence" field.
 *
 * Also doubles as a server-side validation list (see /api/enquiry): a free-text
 * country field was one of the fields a spam bot filled with random gibberish
 * ("Rvfqe", "Wragtdd") since it never had to match anything. A closed list
 * closes that off structurally rather than trying to pattern-match garbage.
 */
export const COUNTRIES = [
  'United States', 'United Kingdom', 'Canada', 'Antigua and Barbuda', 'Ireland',
  'Australia', 'New Zealand', 'Germany', 'France', 'Italy', 'Spain', 'Portugal',
  'Netherlands', 'Belgium', 'Switzerland', 'Austria', 'Sweden', 'Norway',
  'Denmark', 'Finland', 'Luxembourg', 'Monaco', 'United Arab Emirates',
  'Saudi Arabia', 'Qatar', 'Singapore', 'Hong Kong', 'Japan', 'South Korea',
  'India', 'South Africa', 'Nigeria', 'Brazil', 'Mexico', 'Argentina',
  'Jamaica', 'Barbados', 'Trinidad and Tobago', 'Bahamas', 'Dominican Republic',
  'St Kitts and Nevis', 'St Lucia', 'Grenada', 'Dominica', 'Anguilla',
  'British Virgin Islands', 'US Virgin Islands', 'Cayman Islands', 'Bermuda',
  'Turks and Caicos', 'Puerto Rico', 'Other',
] as const

export type Country = (typeof COUNTRIES)[number]

export function isKnownCountry(value: string): boolean {
  return (COUNTRIES as readonly string[]).includes(value)
}
