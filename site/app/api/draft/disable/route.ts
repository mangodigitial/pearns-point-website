import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

/** Exits Draft Mode and returns to the homepage. */
export async function GET() {
  draftMode().disable()
  redirect('/')
}
