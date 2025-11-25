"use client"

import { useState } from "react"

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "api">("dashboard")

  return (
    <section className="product-preview" id="product-preview" aria-labelledby="product-preview-title">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Producto</span>
          <h2 id="product-preview-title" className="section-title text-balance">
            Una plataforma potente y fácil de usar
          </h2>
          <p className="section-subtitle">
            Interfaz intuitiva para tu equipo y API robusta para integraciones personalizadas.
          </p>
        </div>

        {/* Tabs */}
        <div className="preview-tabs" role="tablist" aria-label="Vistas del producto">
          <button
            role="tab"
            className={`preview-tab ${activeTab === "dashboard" ? "is-active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
            aria-selected={activeTab === "dashboard"}
          >
            Dashboard
          </button>
          <button
            role="tab"
            className={`preview-tab ${activeTab === "api" ? "is-active" : ""}`}
            onClick={() => setActiveTab("api")}
            aria-selected={activeTab === "api"}
          >
            API
          </button>
        </div>

        {/* Preview Window */}
        <div className="preview-window">
          <div className="preview-window__header">
            <span className="preview-window__dot preview-window__dot--red" aria-hidden="true"></span>
            <span className="preview-window__dot preview-window__dot--yellow" aria-hidden="true"></span>
            <span className="preview-window__dot preview-window__dot--green" aria-hidden="true"></span>
          </div>
          <div className="preview-window__content">
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
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div className="dashboard-sidebar__item is-active">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="7" height="7" />
            <rect x="14" y="3" width="7" height="7" />
            <rect x="14" y="14" width="7" height="7" />
            <rect x="3" y="14" width="7" height="7" />
          </svg>
          Dashboard
        </div>
        <div className="dashboard-sidebar__item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          Leads
        </div>
        <div className="dashboard-sidebar__item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
          </svg>
          Visitas
        </div>
        <div className="dashboard-sidebar__item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
          Documentos
        </div>
        <div className="dashboard-sidebar__item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7" />
          </svg>
          Mensajes
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {/* Stats Row */}
        <div className="dashboard-stats">
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-card__value">24</div>
            <div className="dashboard-stat-card__label">Nuevos Leads</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-card__value">8</div>
            <div className="dashboard-stat-card__label">Visitas Hoy</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-card__value">95%</div>
            <div className="dashboard-stat-card__label">Tasa Respuesta</div>
          </div>
          <div className="dashboard-stat-card">
            <div className="dashboard-stat-card__value">3</div>
            <div className="dashboard-stat-card__label">Contratos</div>
          </div>
        </div>

        {/* Lead List Preview */}
        <div
          style={{
            background: "var(--porcelain)",
            borderRadius: "var(--radius-md)",
            padding: "var(--space-md)",
            flex: 1,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "var(--space-md)",
              paddingBottom: "var(--space-md)",
              borderBottom: "1px solid var(--base)",
            }}
          >
            <span style={{ fontWeight: 600, color: "var(--text-dark)" }}>Leads Recientes</span>
            <span
              style={{
                fontSize: "var(--text-xs)",
                color: "var(--primary)",
                padding: "4px 8px",
                background: "rgba(74, 111, 165, 0.1)",
                borderRadius: "var(--radius-full)",
              }}
            >
              Ver todos
            </span>
          </div>

          {[
            { name: "María García", property: "Piso Calle Mayor 15", status: "Validado", statusColor: "#4CAF50" },
            { name: "Carlos López", property: "Apartamento Gran Vía", status: "Pendiente", statusColor: "#FF9800" },
            { name: "Ana Martínez", property: "Estudio Centro", status: "Visita", statusColor: "#2196F3" },
          ].map((lead, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "var(--space-sm) 0",
                borderBottom: i < 2 ? "1px solid var(--silk)" : "none",
              }}
            >
              <div>
                <div style={{ fontWeight: 500, fontSize: "var(--text-sm)", color: "var(--text-dark)" }}>
                  {lead.name}
                </div>
                <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{lead.property}</div>
              </div>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  padding: "2px 8px",
                  borderRadius: "var(--radius-full)",
                  background: `${lead.statusColor}20`,
                  color: lead.statusColor,
                }}
              >
                {lead.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ApiPreview() {
  return (
    <div className="api-preview">
      <code>
        <span className="api-preview__line">
          <span className="api-preview__comment">// Ejemplo: Obtener leads filtrados por estado</span>
        </span>
        <span className="api-preview__line">
          <span className="api-preview__keyword">const</span> response ={" "}
          <span className="api-preview__keyword">await</span> fetch(
        </span>
        <span className="api-preview__line">
          {"  "}
          <span className="api-preview__string">"https://api.rentaflow.io/v1/leads"</span>,
        </span>
        <span className="api-preview__line">
          {"  "}
          {"{"}
        </span>
        <span className="api-preview__line">
          {"    "}
          <span className="api-preview__property">method</span>: <span className="api-preview__string">"GET"</span>,
        </span>
        <span className="api-preview__line">
          {"    "}
          <span className="api-preview__property">headers</span>: {"{"}
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__string">"Authorization"</span>:{" "}
          <span className="api-preview__string">`Bearer ${"${API_KEY}"}`</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__string">"Content-Type"</span>:{" "}
          <span className="api-preview__string">"application/json"</span>
        </span>
        <span className="api-preview__line">
          {"    "}
          {"}"}
        </span>
        <span className="api-preview__line">
          {"  "}
          {"}"}
        </span>
        <span className="api-preview__line">);</span>
        <span className="api-preview__line"></span>
        <span className="api-preview__line">
          <span className="api-preview__comment">// Respuesta:</span>
        </span>
        <span className="api-preview__line">{"{"}</span>
        <span className="api-preview__line">
          {"  "}
          <span className="api-preview__property">"success"</span>: <span className="api-preview__keyword">true</span>,
        </span>
        <span className="api-preview__line">
          {"  "}
          <span className="api-preview__property">"data"</span>: [
        </span>
        <span className="api-preview__line">
          {"    "}
          {"{"}
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"id"</span>:{" "}
          <span className="api-preview__string">"lead_abc123"</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"name"</span>:{" "}
          <span className="api-preview__string">"María García"</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"email"</span>:{" "}
          <span className="api-preview__string">"maria@email.com"</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"phone"</span>:{" "}
          <span className="api-preview__string">"+34 612 345 678"</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"property_id"</span>:{" "}
          <span className="api-preview__string">"prop_xyz789"</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"status"</span>:{" "}
          <span className="api-preview__string">"validated"</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"score"</span>: <span className="api-preview__number">95</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"source"</span>:{" "}
          <span className="api-preview__string">"idealista"</span>,
        </span>
        <span className="api-preview__line">
          {"      "}
          <span className="api-preview__property">"created_at"</span>:{" "}
          <span className="api-preview__string">"2025-01-15T10:30:00Z"</span>
        </span>
        <span className="api-preview__line">
          {"    "}
          {"}"}
        </span>
        <span className="api-preview__line">{"  "}],</span>
        <span className="api-preview__line">
          {"  "}
          <span className="api-preview__property">"pagination"</span>: {"{"}{" "}
          <span className="api-preview__property">"page"</span>: <span className="api-preview__number">1</span>,{" "}
          <span className="api-preview__property">"total"</span>: <span className="api-preview__number">24</span> {"}"}
        </span>
        <span className="api-preview__line">{"}"}</span>
      </code>
    </div>
  )
}
