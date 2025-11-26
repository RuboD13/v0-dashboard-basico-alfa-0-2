import "./landing.css"

export function ApiShowcase() {
  return (
    <section className="api-showcase section" id="api">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">API REST</span>
          <h2 className="section-title">API potente para integraciones personalizadas</h2>
          <p className="section-subtitle">
            Conecta RentAFlow con tus sistemas existentes mediante nuestra API RESTful completa.
          </p>
        </div>

        <div className="api-grid">
          <div className="api-endpoints">
            <div className="api-endpoint active">
              <div className="api-endpoint-header">
                <span className="api-method get">GET</span>
                <span className="api-path">/api/v1/leads</span>
              </div>
              <p className="api-description">Obtener todos los leads con filtros opcionales</p>
            </div>
            <div className="api-endpoint">
              <div className="api-endpoint-header">
                <span className="api-method post">POST</span>
                <span className="api-path">/api/v1/leads</span>
              </div>
              <p className="api-description">Crear un nuevo lead desde cualquier fuente</p>
            </div>
            <div className="api-endpoint">
              <div className="api-endpoint-header">
                <span className="api-method post">POST</span>
                <span className="api-path">/api/v1/visits/schedule</span>
              </div>
              <p className="api-description">Programar una visita con sincronización de calendario</p>
            </div>
            <div className="api-endpoint">
              <div className="api-endpoint-header">
                <span className="api-method put">PUT</span>
                <span className="api-path">/api/v1/leads/:id/validate</span>
              </div>
              <p className="api-description">Validar un lead con documentación y scoring</p>
            </div>
            <div className="api-endpoint">
              <div className="api-endpoint-header">
                <span className="api-method get">GET</span>
                <span className="api-path">/api/v1/analytics</span>
              </div>
              <p className="api-description">Métricas y estadísticas en tiempo real</p>
            </div>
          </div>

          <div className="code-block">
            <div className="code-header">
              <div className="code-header-dots">
                <span className="code-header-dot" style={{ backgroundColor: "#EF4444" }}></span>
                <span className="code-header-dot" style={{ backgroundColor: "#F59E0B" }}></span>
                <span className="code-header-dot" style={{ backgroundColor: "#10B981" }}></span>
              </div>
              <span className="code-header-title">webhook-payload.json</span>
              <button className="code-header-copy">Copiar</button>
            </div>
            <div className="code-content">
              <pre>
                <code>
                  {`{
  `}
                  <span className="code-property">"event"</span>
                  {`: `}
                  <span className="code-string">"lead.created"</span>
                  {`,
  `}
                  <span className="code-property">"timestamp"</span>
                  {`: `}
                  <span className="code-string">"2024-01-15T10:30:00Z"</span>
                  {`,
  `}
                  <span className="code-property">"data"</span>
                  {`: {
    `}
                  <span className="code-property">"lead"</span>
                  {`: {
      `}
                  <span className="code-property">"id"</span>
                  {`: `}
                  <span className="code-string">"lead_abc123"</span>
                  {`,
      `}
                  <span className="code-property">"name"</span>
                  {`: `}
                  <span className="code-string">"María García"</span>
                  {`,
      `}
                  <span className="code-property">"email"</span>
                  {`: `}
                  <span className="code-string">"maria@email.com"</span>
                  {`,
      `}
                  <span className="code-property">"phone"</span>
                  {`: `}
                  <span className="code-string">"+34 612 345 678"</span>
                  {`,
      `}
                  <span className="code-property">"message"</span>
                  {`: `}
                  <span className="code-string">"Interesada en el piso..."</span>
                  {`
    },
    `}
                  <span className="code-property">"property"</span>
                  {`: {
      `}
                  <span className="code-property">"id"</span>
                  {`: `}
                  <span className="code-string">"prop_xyz789"</span>
                  {`,
      `}
                  <span className="code-property">"title"</span>
                  {`: `}
                  <span className="code-string">"Piso en C/ Mayor 15"</span>
                  {`,
      `}
                  <span className="code-property">"price"</span>
                  {`: `}
                  <span className="code-number">1200</span>
                  {`
    },
    `}
                  <span className="code-property">"source"</span>
                  {`: {
      `}
                  <span className="code-property">"portal"</span>
                  {`: `}
                  <span className="code-string">"idealista"</span>
                  {`,
      `}
                  <span className="code-property">"listing_id"</span>
                  {`: `}
                  <span className="code-string">"12345678"</span>
                  {`
    },
    `}
                  <span className="code-property">"automation"</span>
                  {`: {
      `}
                  <span className="code-property">"auto_reply_sent"</span>
                  {`: `}
                  <span className="code-keyword">true</span>
                  {`,
      `}
                  <span className="code-property">"validation_score"</span>
                  {`: `}
                  <span className="code-number">85</span>
                  {`,
      `}
                  <span className="code-property">"next_action"</span>
                  {`: `}
                  <span className="code-string">"schedule_visit"</span>
                  {`
    }
  }
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        <div className="api-features">
          <div className="api-feature">
            <div className="api-feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
            </div>
            <h4 className="api-feature-title">OAuth 2.0</h4>
            <p className="api-feature-description">Autenticación segura con tokens JWT y refresh tokens automáticos</p>
          </div>
          <div className="api-feature">
            <div className="api-feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
            </div>
            <h4 className="api-feature-title">Webhooks en tiempo real</h4>
            <p className="api-feature-description">Recibe notificaciones instantáneas de nuevos leads y eventos</p>
          </div>
          <div className="api-feature">
            <div className="api-feature-icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                <line x1="8" y1="21" x2="16" y2="21" />
                <line x1="12" y1="17" x2="12" y2="21" />
              </svg>
            </div>
            <h4 className="api-feature-title">SDK Oficiales</h4>
            <p className="api-feature-description">Librerías para Node.js, Python, PHP y más lenguajes</p>
          </div>
        </div>
      </div>
    </section>
  )
}
