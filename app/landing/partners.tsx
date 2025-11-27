export default function Partners() {
  const partners = [
    { name: "Idealista", color: "#7ED321" },
    { name: "Fotocasa", color: "#FF5A5F" },
    { name: "Habitaclia", color: "#0066CC" },
    { name: "Pisos.com", color: "#E91E63" },
    { name: "Yaencontre", color: "#FF9800" },
    { name: "Milanuncios", color: "#00BCD4" },
  ]

  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Integrado con los principales portales inmobiliarios</p>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <span className="partner-logo-text" style={{ color: partner.color }}>
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
