export function Partners() {
  const partners = ["Idealista", "Fotocasa", "Habitaclia", "Pisos.com", "Google", "WhatsApp", "Outlook", "Stripe"]

  return (
    <section className="rf-partners">
      <div className="rf-container">
        <p className="rf-partners-title">Integrado con las principales plataformas</p>
        <div className="rf-partners-grid">
          {partners.map((partner) => (
            <div
              key={partner}
              style={{
                padding: "0.75rem 1.5rem",
                background: "#F8FBF8",
                borderRadius: "8px",
                border: "1px solid #EAE5E3",
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "#475569",
              }}
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
