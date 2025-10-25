import { getGoogleMapsKey } from "@/lib/actions/maps"

interface MapEmbedProps {
  address: string
  height?: number
}

export async function MapEmbed({ address, height = 200 }: MapEmbedProps) {
  // [v0] Fetch Google Maps API key from server action to avoid client-side exposure
  const apiKey = await getGoogleMapsKey()

  // [v0] Show placeholder if no address is provided
  if (!address || address.trim() === "") {
    return (
      <div
        className="border rounded-lg overflow-hidden bg-muted flex items-center justify-center"
        style={{ height: `${height}px` }}
      >
        <p className="text-sm text-muted-foreground">Ingrese una dirección para ver el mapa</p>
      </div>
    )
  }

  // [v0] Show error if API key is not configured
  if (!apiKey) {
    return (
      <div
        className="border rounded-lg overflow-hidden bg-destructive/10 flex items-center justify-center"
        style={{ height: `${height}px` }}
      >
        <p className="text-sm text-destructive">Error: Google Maps API key no configurada</p>
      </div>
    )
  }

  // [v0] Encode address for URL safety
  const encodedAddress = encodeURIComponent(address)

  return (
    <div className="border rounded-lg overflow-hidden">
      <iframe
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`}
        title={`Mapa de ${address}`}
      />
    </div>
  )
}
