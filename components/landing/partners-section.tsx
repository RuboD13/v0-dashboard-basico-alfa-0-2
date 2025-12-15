export function PartnersSection() {
  const partners = [
    { name: "Idealista", logo: "I" },
    { name: "Fotocasa", logo: "F" },
    { name: "Habitaclia", logo: "H" },
    { name: "Pisos.com", logo: "P" },
    { name: "Google", logo: "G" },
    { name: "WhatsApp", logo: "W" },
    { name: "Zapier", logo: "Z" },
    { name: "Stripe", logo: "S" },
  ]

  return (
    <section className="py-12 lg:py-16 bg-porcelain border-y border-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-medium text-secondary/50 mb-8">
          Integraciones con las plataformas que ya usas
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center gap-2 text-secondary/40 hover:text-secondary/60 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-white border border-base flex items-center justify-center font-bold text-lg">
                {partner.logo}
              </div>
              <span className="text-sm font-medium hidden sm:block">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
