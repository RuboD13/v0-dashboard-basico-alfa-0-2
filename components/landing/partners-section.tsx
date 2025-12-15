export function PartnersSection() {
  const partners = [
    { name: "Idealista", logo: "https://placeholder.svg/idealista" },
    { name: "Fotocasa", logo: "https://placeholder.svg/fotocasa" },
    { name: "Gmail", logo: "https://placeholder.svg/gmail" },
    { name: "Google Calendar", logo: "https://placeholder.svg/gcalendar" },
    { name: "WhatsApp", logo: "https://placeholder.svg/whatsapp" },
  ]

  return (
    <section className="py-12 border-y border-border bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">Integrado con las principales plataformas</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <span className="text-muted-foreground font-semibold text-lg">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
