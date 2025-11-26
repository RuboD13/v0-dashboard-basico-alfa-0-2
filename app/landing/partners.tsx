import "./landing.css"

const partners = [
  { name: "Idealista", logo: "/idealista-logo-text.jpg" },
  { name: "Fotocasa", logo: "/fotocasa-logo-text.jpg" },
  { name: "Habitaclia", logo: "/habitaclia-logo-text.jpg" },
  { name: "Pisos.com", logo: "/pisos-com-logo.jpg" },
  { name: "Yaencontre", logo: "/yaencontre-logo.jpg" },
  { name: "Milanuncios", logo: "/milanuncios-logo.jpg" },
]

export function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Integrado con los principales portales inmobiliarios de España</p>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div key={partner.name} className="partner-logo">
              <span className="partner-logo-text">{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
