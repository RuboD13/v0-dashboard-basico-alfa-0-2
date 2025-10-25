"use server"

/**
 * Server action to get the Google Maps API key
 * This prevents direct exposure of the API key in client-side code
 */
export async function getGoogleMapsKey(): Promise<string | null> {
  return process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY || null
}
