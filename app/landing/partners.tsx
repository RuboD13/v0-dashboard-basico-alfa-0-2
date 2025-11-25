export default function Partners() {
  const partners = [
    { name: "Idealista", logo: "idealista" },
    { name: "Fotocasa", logo: "fotocasa" },
    { name: "Habitaclia", logo: "habitaclia" },
    { name: "Pisos.com", logo: "pisos" },
    { name: "Yaencontre", logo: "yaencontre" },
    { name: "Milanuncios", logo: "milanuncios" },
  ]

  return (
    <section className="partners">
      <div className="landing-container">
        <p className="partners-label">Integrado con los principales portales inmobiliarios</p>
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
