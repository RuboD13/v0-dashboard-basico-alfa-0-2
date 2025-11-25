export default function Partners() {
  const partners = [
    { name: "Idealista", color: "#FF6B35" },
    { name: "Fotocasa", color: "#00A651" },
    { name: "Habitaclia", color: "#E4002B" },
    { name: "Pisos.com", color: "#0066CC" },
    { name: "Yaencontre", color: "#FF9500" },
    { name: "Milanuncios", color: "#FF5A5F" },
  ]

  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Integrado con los principales portales inmobiliarios</p>
        <div className="partners-logos">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill={partner.color}>
                <rect x="2" y="2" width="20" height="20" rx="4" />
              </svg>
              {partner.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
