"use client"

import { useState } from "react"
import "./landing.css"

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "api">("dashboard")

  return (
    <section className="product-preview section" id="producto">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Producto</span>
          <h2 className="section-title">Una plataforma diseñada para agencias inmobiliarias</h2>
          <p className="section-subtitle">Interfaz intuitiva, datos en tiempo real y automatizaciones potentes.</p>
        </div>

        <div className="product-tabs">
          <button
            className={`product-tab ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button className={`product-tab ${activeTab === "api" ? "active" : ""}`} onClick={() => setActiveTab("api")}>
            API
          </button>
        </div>

        {activeTab === "dashboard" && (
          <div className="dashboard-preview">
            <div className="dashboard-window">
              <div className="dashboard-titlebar">
                <span className="dashboard-titlebar-dot red"></span>
                <span className="dashboard-titlebar-dot yellow"></span>
                <span className="dashboard-titlebar-dot green"></span>
                <span className="dashboard-titlebar-title">RentAFlow - Centro de Anuncios</span>
              </div>

              <div className="dashboard-content">
                <aside className="dashboard-sidebar">
                  <div className="dashboard-sidebar-logo">
                    <div className="dashboard-sidebar-logo-icon">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        <polyline points="9 22 9 12 15 12 15 22" />
                      </svg>
                    </div>
                    RentAFlow
                  </div>

                  <nav className="dashboard-nav">
                    <a href="#" className="dashboard-nav-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="3" width="7" height="7" />
                        <rect x="14" y="3" width="7" height="7" />
                        <rect x="14" y="14" width="7" height="7" />
                        <rect x="3" y="14" width="7" height="7" />
                      </svg>
                      Dashboard
                    </a>
                    <a href="#" className="dashboard-nav-item active">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                        <polyline points="17 8 12 3 7 8" />
                        <line x1="12" y1="3" x2="12" y2="15" />
                      </svg>
                      Anuncios
                    </a>
                    <a href="#" className="dashboard-nav-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                      Leads
                    </a>
                    <a href="#" className="dashboard-nav-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      Visitas
                    </a>
                    <a href="#" className="dashboard-nav-item">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      Documentos
                    </a>
                  </nav>
                </aside>

                <main className="dashboard-main">
                  <div className="dashboard-header">
                    <h2 className="dashboard-title">Centro de Anuncios</h2>
                    <div className="dashboard-actions">
                      <button className="btn btn-secondary">Ver todos</button>
                      <button className="btn btn-primary">+ Crear Anuncio</button>
                    </div>
                  </div>

                  <div className="dashboard-metrics">
                    <div className="metric-card">
                      <div className="metric-label">Nuevos hoy</div>
                      <div className="metric-value">24</div>
                      <div className="metric-change">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        </svg>
                        +12%
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Emails enviados</div>
                      <div className="metric-value">156</div>
                      <div className="metric-change">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        </svg>
                        +8%
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Visitas programadas</div>
                      <div className="metric-value">8</div>
                      <div className="metric-change">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        </svg>
                        +25%
                      </div>
                    </div>
                    <div className="metric-card">
                      <div className="metric-label">Tiempo ahorrado</div>
                      <div className="metric-value">03:49h</div>
                      <div className="metric-change">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                        </svg>
                        Hoy
                      </div>
                    </div>
                  </div>

                  <table className="leads-table">
                    <thead>
                      <tr>
                        <th>Lead</th>
                        <th>Propiedad</th>
                        <th>Estado</th>
                        <th>Portal</th>
                        <th>Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>María García</td>
                        <td>Piso C/ Mayor 15</td>
                        <td>
                          <span className="lead-status nuevo">Nuevo</span>
                        </td>
                        <td>Idealista</td>
                        <td>Hace 5 min</td>
                      </tr>
                      <tr>
                        <td>Carlos Ruiz</td>
                        <td>Ático Av. Diagonal</td>
                        <td>
                          <span className="lead-status validado">Validado</span>
                        </td>
                        <td>Fotocasa</td>
                        <td>Hace 1h</td>
                      </tr>
                      <tr>
                        <td>Ana López</td>
                        <td>Estudio C/ Serrano</td>
                        <td>
                          <span className="lead-status visita">Visita</span>
                        </td>
                        <td>Habitaclia</td>
                        <td>Hace 2h</td>
                      </tr>
                      <tr>
                        <td>Pedro Martín</td>
                        <td>Dúplex Pl. España</td>
                        <td>
                          <span className="lead-status completo">Completo</span>
                        </td>
                        <td>Pisos.com</td>
                        <td>Ayer</td>
                      </tr>
                    </tbody>
                  </table>
                </main>
              </div>
            </div>
          </div>
        )}

        {activeTab === "api" && <ApiShowcaseContent />}
      </div>
    </section>
  )
}

function ApiShowcaseContent() {
  return (
    <div className="api-showcase-inline">
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
            <span className="code-header-title">response.json</span>
            <button className="code-header-copy">Copiar</button>
          </div>
          <div className="code-content">
            <pre>
              <code>
                {`{
  `}
                <span className="code-property">"success"</span>
                {`: `}
                <span className="code-keyword">true</span>
                {`,
  `}
                <span className="code-property">"data"</span>
                {`: {
    `}
                <span className="code-property">"leads"</span>
                {`: [
      {
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
                <span className="code-property">"status"</span>
                {`: `}
                <span className="code-string">"validated"</span>
                {`,
        `}
                <span className="code-property">"property_id"</span>
                {`: `}
                <span className="code-string">"prop_xyz789"</span>
                {`,
        `}
                <span className="code-property">"source"</span>
                {`: `}
                <span className="code-string">"idealista"</span>
                {`,
        `}
                <span className="code-property">"score"</span>
                {`: `}
                <span className="code-number">85</span>
                {`,
        `}
                <span className="code-property">"created_at"</span>
                {`: `}
                <span className="code-string">"2024-01-15T10:30:00Z"</span>
                {`
      }
    ],
    `}
                <span className="code-property">"pagination"</span>
                {`: {
      `}
                <span className="code-property">"page"</span>
                {`: `}
                <span className="code-number">1</span>
                {`,
      `}
                <span className="code-property">"total"</span>
                {`: `}
                <span className="code-number">156</span>
                {`,
      `}
                <span className="code-property">"per_page"</span>
                {`: `}
                <span className="code-number">20</span>
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
          <p className="api-feature-description">Autenticación segura con tokens JWT y refresh tokens</p>
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
          <h4 className="api-feature-title">Webhooks</h4>
          <p className="api-feature-description">Notificaciones en tiempo real de eventos</p>
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
          <h4 className="api-feature-title">SDK Oficial</h4>
          <p className="api-feature-description">Librerías para Node.js, Python y PHP</p>
        </div>
      </div>
    </div>
  )
}
