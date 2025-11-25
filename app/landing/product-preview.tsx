"use client"

import { useState } from "react"

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "api">("dashboard")

  return (
    <section id="producto" className="product-preview">
      <div className="section-header">
        <span className="section-label">Producto</span>
        <h2 className="section-title text-balance">Una plataforma potente y fácil de usar</h2>
        <p className="section-subtitle text-pretty">
          Interfaz intuitiva para tu equipo y API robusta para integraciones avanzadas.
        </p>
      </div>

      <div className="preview-container">
        <div className="preview-tabs">
          <button
            className={`preview-tab ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </button>
          <button className={`preview-tab ${activeTab === "api" ? "active" : ""}`} onClick={() => setActiveTab("api")}>
            API
          </button>
        </div>

        <div className="preview-window">
          <div className="preview-window-header">
            <span className="preview-window-dot red"></span>
            <span className="preview-window-dot yellow"></span>
            <span className="preview-window-dot green"></span>
            <span className="preview-window-title">
              {activeTab === "dashboard" ? "app.rentaflow.com/dashboard" : "api.rentaflow.com/v1"}
            </span>
          </div>

          <div className="preview-window-content">
            {activeTab === "dashboard" ? <DashboardPreview /> : <ApiPreview />}
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar-item active">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Dashboard
        </div>
        <div className="dashboard-sidebar-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          Leads
        </div>
        <div className="dashboard-sidebar-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
          </svg>
          Visitas
        </div>
        <div className="dashboard-sidebar-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          </svg>
          Documentos
        </div>
        <div className="dashboard-sidebar-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
          Config
        </div>
      </div>

      <div className="dashboard-main">
        <div className="dashboard-stats">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-label">Leads Hoy</div>
            <div className="dashboard-stat-value">24</div>
            <div className="dashboard-stat-change">+12% vs ayer</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-label">Visitas Prog.</div>
            <div className="dashboard-stat-value">8</div>
            <div className="dashboard-stat-change">+3 esta semana</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-label">Tasa Conv.</div>
            <div className="dashboard-stat-value">34%</div>
            <div className="dashboard-stat-change">+5% vs mes</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-label">Tiempo Resp.</div>
            <div className="dashboard-stat-value">2m</div>
            <div className="dashboard-stat-change">-45% promedio</div>
          </div>
        </div>

        <div className="dashboard-table">
          <div className="dashboard-table-header">
            <span>Lead</span>
            <span>Portal</span>
            <span>Estado</span>
            <span>Fecha</span>
          </div>
          <div className="dashboard-table-row">
            <span>María García</span>
            <span>Idealista</span>
            <span>
              <span className="status-badge validated">Validado</span>
            </span>
            <span>Hoy, 14:32</span>
          </div>
          <div className="dashboard-table-row">
            <span>Carlos López</span>
            <span>Fotocasa</span>
            <span>
              <span className="status-badge scheduled">Visita Prog.</span>
            </span>
            <span>Hoy, 12:15</span>
          </div>
          <div className="dashboard-table-row">
            <span>Ana Martín</span>
            <span>Habitaclia</span>
            <span>
              <span className="status-badge pending">Pendiente</span>
            </span>
            <span>Hoy, 10:48</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function ApiPreview() {
  return (
    <div className="api-preview">
      <div className="api-endpoint">
        <div className="api-endpoint-header">
          <span className="api-method get">GET</span>
          <span className="api-path">/v1/leads</span>
        </div>
        <div className="api-endpoint-body">
          <pre className="api-code">
            {`{
  `}
            <span className="key">"data"</span>
            {`: [`}
            {`
    {
      `}
            <span className="key">"id"</span>
            {`: `}
            <span className="string">"lead_abc123"</span>
            {`,
      `}
            <span className="key">"name"</span>
            {`: `}
            <span className="string">"María García"</span>
            {`,
      `}
            <span className="key">"email"</span>
            {`: `}
            <span className="string">"maria@email.com"</span>
            {`,
      `}
            <span className="key">"status"</span>
            {`: `}
            <span className="string">"validated"</span>
            {`,
      `}
            <span className="key">"source"</span>
            {`: `}
            <span className="string">"idealista"</span>
            {`,
      `}
            <span className="key">"score"</span>
            {`: `}
            <span className="number">85</span>
            {`
    }
  ],
  `}
            <span className="key">"total"</span>
            {`: `}
            <span className="number">156</span>
            {`
}`}
          </pre>
        </div>
      </div>

      <div className="api-endpoint">
        <div className="api-endpoint-header">
          <span className="api-method post">POST</span>
          <span className="api-path">/v1/visits/schedule</span>
        </div>
        <div className="api-endpoint-body">
          <pre className="api-code">
            {`{
  `}
            <span className="key">"lead_id"</span>
            {`: `}
            <span className="string">"lead_abc123"</span>
            {`,
  `}
            <span className="key">"property_id"</span>
            {`: `}
            <span className="string">"prop_xyz789"</span>
            {`,
  `}
            <span className="key">"datetime"</span>
            {`: `}
            <span className="string">"2025-01-20T10:00:00Z"</span>
            {`,
  `}
            <span className="key">"notify"</span>
            {`: `}
            <span className="boolean">true</span>
            {`
}`}
          </pre>
        </div>
      </div>

      <div className="api-endpoint">
        <div className="api-endpoint-header">
          <span className="api-method put">PUT</span>
          <span className="api-path">/v1/leads/:id/validate</span>
        </div>
        <div className="api-endpoint-body">
          <pre className="api-code">
            {`{
  `}
            <span className="key">"validation_result"</span>
            {`: {
    `}
            <span className="key">"income_verified"</span>
            {`: `}
            <span className="boolean">true</span>
            {`,
    `}
            <span className="key">"documents_complete"</span>
            {`: `}
            <span className="boolean">true</span>
            {`,
    `}
            <span className="key">"credit_score"</span>
            {`: `}
            <span className="number">720</span>
            {`,
    `}
            <span className="key">"approved"</span>
            {`: `}
            <span className="boolean">true</span>
            {`
  }
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
