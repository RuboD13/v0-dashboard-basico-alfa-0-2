"use client"

import { useState } from "react"

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState("dashboard")

  return (
    <section id="product-preview" className="product-preview section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Mira RentAFlow en acción</h2>
          <p>Una plataforma potente, intuitiva y diseñada para agencias inmobiliarias</p>
        </div>

        <div className="preview-tabs">
          <button
            className={`preview-tab ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button className={`preview-tab ${activeTab === "api" ? "active" : ""}`} onClick={() => setActiveTab("api")}>
            API Reference
          </button>
        </div>

        <div className="preview-container">
          {/* Dashboard Preview */}
          <div className="dashboard-preview" style={{ display: activeTab === "dashboard" ? "block" : "none" }}>
            <div className="dashboard-header">
              <h3 className="dashboard-title">Centro de Anuncios</h3>
              <div className="dashboard-actions">
                <button className="btn btn-sm btn-secondary">+ Crear Anuncio</button>
                <button className="btn btn-sm btn-primary">Cambiar Plan</button>
              </div>
            </div>

            <div className="dashboard-metrics">
              <div className="metric-card">
                <div className="metric-label">Nuevos Hoy</div>
                <div className="metric-value">24</div>
                <div className="metric-change">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  +12%
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Emails Enviados</div>
                <div className="metric-value">156</div>
                <div className="metric-change">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  +8%
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Completos HOY</div>
                <div className="metric-value">8</div>
                <div className="metric-change">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  +25%
                </div>
              </div>
              <div className="metric-card">
                <div className="metric-label">Tiempo Ahorrado</div>
                <div className="metric-value">4.5h</div>
                <div className="metric-change">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 15l-6-6-6 6" />
                  </svg>
                  +15%
                </div>
              </div>
            </div>

            <table className="leads-table">
              <thead>
                <tr>
                  <th>Lead</th>
                  <th>Propiedad</th>
                  <th>Estado</th>
                  <th>Origen</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <span className="lead-name">María García</span>
                    <br />
                    <span className="text-sm">maria@email.com</span>
                  </td>
                  <td>Piso Centro, 3hab</td>
                  <td>
                    <span className="lead-status nuevo">Nuevo</span>
                  </td>
                  <td>Idealista</td>
                  <td>Hace 5 min</td>
                </tr>
                <tr>
                  <td>
                    <span className="lead-name">Carlos López</span>
                    <br />
                    <span className="text-sm">carlos@email.com</span>
                  </td>
                  <td>Ático Salamanca</td>
                  <td>
                    <span className="lead-status validado">Validado</span>
                  </td>
                  <td>Fotocasa</td>
                  <td>Hace 1 hora</td>
                </tr>
                <tr>
                  <td>
                    <span className="lead-name">Ana Martínez</span>
                    <br />
                    <span className="text-sm">ana@email.com</span>
                  </td>
                  <td>Estudio Malasaña</td>
                  <td>
                    <span className="lead-status visita">Visita Prog.</span>
                  </td>
                  <td>Habitaclia</td>
                  <td>Hace 2 horas</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* API Preview */}
          <div className="api-preview" style={{ display: activeTab === "api" ? "block" : "none" }}>
            <div className="api-endpoint">
              <div className="api-endpoint-header">
                <span className="api-method get">GET</span>
                <span className="api-path">/api/v1/leads</span>
              </div>
              <div className="api-code">
                <pre>{`{
  "data": [
    {
      "id": "lead_abc123",
      "name": "María García",
      "email": "maria@email.com",
      "phone": "+34 612 345 678",
      "property_id": "prop_xyz789",
      "status": "validated",
      "source": "idealista",
      "created_at": "2024-01-15T10:30:00Z",
      "validation": {
        "income_verified": true,
        "documents_complete": true,
        "score": 85
      }
    }
  ],
  "meta": {
    "total": 156,
    "page": 1,
    "per_page": 20
  }
}`}</pre>
              </div>
            </div>

            <div className="api-endpoint">
              <div className="api-endpoint-header">
                <span className="api-method post">POST</span>
                <span className="api-path">/api/v1/visits/schedule</span>
              </div>
              <div className="api-code">
                <pre>{`// Request
{
  "lead_id": "lead_abc123",
  "property_id": "prop_xyz789",
  "preferred_dates": [
    "2024-01-20T10:00:00Z",
    "2024-01-20T16:00:00Z"
  ],
  "agent_id": "agent_456",
  "notifications": {
    "email": true,
    "whatsapp": true,
    "calendar_sync": true
  }
}

// Response
{
  "visit_id": "visit_def456",
  "confirmed_date": "2024-01-20T10:00:00Z",
  "calendar_event_id": "gcal_789",
  "notifications_sent": ["email", "whatsapp"]
}`}</pre>
              </div>
            </div>

            <div className="api-endpoint">
              <div className="api-endpoint-header">
                <span className="api-method put">PUT</span>
                <span className="api-path">/api/v1/documents/upload</span>
              </div>
              <div className="api-code">
                <pre>{`// Request
{
  "lead_id": "lead_abc123",
  "document_type": "dni",
  "file": "base64_encoded_file...",
  "verify": true
}

// Response
{
  "document_id": "doc_ghi789",
  "type": "dni",
  "status": "verified",
  "extracted_data": {
    "full_name": "María García López",
    "dni_number": "12345678A",
    "expiry_date": "2028-05-15"
  },
  "verification_score": 98
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
