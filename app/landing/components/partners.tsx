export function Partners() {
  const partners = [
    { name: "Idealista", color: "#8BC53F" },
    { name: "Fotocasa", color: "#E31837" },
    { name: "Habitaclia", color: "#FF6600" },
    { name: "Pisos.com", color: "#0066CC" },
    { name: "Yaencontre", color: "#00A3E0" },
    { name: "Milanuncios", color: "#FF9900" },
  ]

  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="container">
        <h2 id="partners-title" className="partners__title">
          Integrado con los principales portales inmobiliarios
        </h2>
        <div className="partners__grid">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="partners__logo"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.5rem 1rem",
                background: "#f8f9fa",
                borderRadius: "8px",
                fontWeight: 600,
                color: partner.color,
                opacity: 0.7,
                transition: "opacity 0.3s ease",
              }}
              title={partner.name}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill={partner.color}>
                <rect width="24" height="24" rx="4" />
              </svg>
              <span style={{ color: "#4A4A5A" }}>{partner.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
