export function Partners() {
  const partners = ["Idealista", "Fotocasa", "Habitaclia", "Pisos.com", "Yaencontre", "Tucasa", "Spotahome", "Badi"]

  return (
    <section className="py-16 bg-porcelain border-y border-silk">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-text-muted uppercase tracking-wide">
            Integrado con los principales portales inmobiliarios
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center justify-center h-12 text-text-muted font-medium text-sm hover:text-text-dark transition-colors"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
