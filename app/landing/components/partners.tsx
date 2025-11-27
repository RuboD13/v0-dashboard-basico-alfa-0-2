export default function Partners() {
  const partners = [
    { name: "Idealista", initial: "I" },
    { name: "Fotocasa", initial: "F" },
    { name: "Habitaclia", initial: "H" },
    { name: "Pisos.com", initial: "P" },
    { name: "Yaencontre", initial: "Y" },
    { name: "Milanuncios", initial: "M" },
  ]

  return (
    <section className="py-16 bg-white border-y border-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm text-text-muted uppercase tracking-wide">Integrado con los principales portales</p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center space-y-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-16 h-16 bg-porcelain rounded-xl flex items-center justify-center border border-silk">
                <span className="text-2xl font-bold text-text-dark">{partner.initial}</span>
              </div>
              <span className="text-xs text-text-muted">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
