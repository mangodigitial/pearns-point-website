/**
 * Dev helper: mints a preview secret (as the Studio "Preview" action does) so
 * the /api/draft route can be tested locally without opening the Studio.
 * Prints a ready-to-open localhost URL. Requires the Sanity CLI login token.
 */
import { createClient } from '@sanity/client'
import { createPreviewSecret } from '@sanity/preview-url-secret/create-secret'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'

const cfg = JSON.parse(
  fs.readFileSync(path.join(os.homedir(), '.config', 'sanity', 'config.json'), 'utf8')
)
const client = createClient({
  projectId: 'st9j6mh7',
  dataset: 'production',
  apiVersion: '2025-02-19',
  useCdn: false,
  token: cfg.authToken,
})

const pathname = process.argv[2] || '/news/cricket-in-antigua-the-heartbeat-of-an-island'
const origin = process.argv[3] || 'http://localhost:3000'

const { secret } = await createPreviewSecret(client, 'local-test', origin)
const url = new URL('/api/draft', origin)
url.searchParams.set('sanity-preview-secret', secret)
url.searchParams.set('sanity-preview-pathname', pathname)
console.log(url.toString())
