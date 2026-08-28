/* Renders a JSON-LD block. Kept as one component so every structured-data
   payload on the site is serialised the same way, with the `<` escaped so a
   value containing markup can never close the script tag early. */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
