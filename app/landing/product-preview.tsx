"use client"

import { useState } from "react"

export default function ProductPreview() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "api">("dashboard")

  return (
    <section id="demo" className="product-preview">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">Producto</span>
          <h2 className="section-title">Potente por dentro, simple por fuera</h2>
          <p className="section-subtitle">
            Un dashboard intuitivo respaldado por una API robusta para integraciones avanzadas.
          </p>
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

        <div className="preview-window">
          <div className="preview-window-header">
            <span className="hero-visual-dot red"></span>
            <span className="hero-visual-dot yellow"></span>
            <span className="hero-visual-dot green"></span>
          </div>

          {activeTab === "dashboard" ? <DashboardPreview /> : <APIPreview />}
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="dashboard-grid">
        <div className="dashboard-sidebar">
          <div style={{ marginBottom: "24px" }}>
            <div style={{ fontWeight: 700, fontSize: "14px", color: "#1A1A1A", marginBottom: "4px" }}>RentAFlow</div>
            <div style={{ fontSize: "12px", color: "#6B7280" }}>Aces Alquiler</div>
          </div>
          <div className="dashboard-nav-item active">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="7" height="7" />
              <rect x="14" y="3" width="7" height="7" />
              <rect x="14" y="14" width="7" height="7" />
              <rect x="3" y="14" width="7" height="7" />
            </svg>
            Dashboard
          </div>
          <div className="dashboard-nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            Anuncios
          </div>
          <div className="dashboard-nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
            </svg>
            Leads
          </div>
          <div className="dashboard-nav-item">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
            </svg>
            Visitas
          </div>
        </div>
        <div className="dashboard-main">
          <div className="dashboard-header">
            <span className="dashboard-title">Centro de Anuncios</span>
            <span style={{ fontSize: "12px", color: "#6B7280" }}>4 Activos | 214 Completos</span>
          </div>
          <div className="dashboard-metrics">
            <div className="metric-card">
              <div className="metric-value">4</div>
              <div className="metric-label">Nuevos hoy</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">101</div>
              <div className="metric-label">Emails enviados</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">5</div>
              <div className="metric-label">Completos HOY</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">3:49h</div>
              <div className="metric-label">Tiempo ahorrado</div>
            </div>
          </div>
          <div style={{ background: "#F8FAF5", borderRadius: "8px", padding: "16px" }}>
            <div
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "12px" }}
            >
              <div>
                <div style={{ fontWeight: 600, fontSize: "14px", color: "#1A1A1A" }}>Jose Maria de Pereda 2</div>
                <div style={{ fontSize: "12px", color: "#6B7280" }}>Calle Jose Maria de Pereda 17</div>
              </div>
              <span
                style={{
                  background: "#10B981",
                  color: "white",
                  fontSize: "10px",
                  padding: "2px 8px",
                  borderRadius: "12px",
                }}
              >
                Activo
              </span>
            </div>
            <div style={{ display: "flex", gap: "24px", fontSize: "12px", color: "#6B7280" }}>
              <span>59 leads filtrados</span>
              <span>160 ejecuciones</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function APIPreview() {
  return (
    <div className="preview-window-content">
      <code>
        <span className="code-line">
          <span className="code-comment">// RentAFlow API - Ejemplo de integración</span>
        </span>
        <span className="code-line"></span>
        <span className="code-line">
          <span className="code-keyword">const</span> <span className="code-property">response</span> ={" "}
          <span className="code-keyword">await</span> <span className="code-method">fetch</span>(
          <span className="code-string">'https://api.rentaflow.io/v1/leads'</span>, {"{"}
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">method</span>: <span className="code-string">'POST'</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">headers</span>: {"{"}
        </span>
        <span className="code-line">
          {" "}
          <span className="code-string">'Authorization'</span>:{" "}
          <span className="code-string">'Bearer YOUR_API_KEY'</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-string">'Content-Type'</span>: <span className="code-string">'application/json'</span>
        </span>
        <span className="code-line"> {"}"},</span>
        <span className="code-line">
          {" "}
          <span className="code-property">body</span>: <span className="code-method">JSON.stringify</span>({"{"}
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">source</span>: <span className="code-string">'idealista'</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">property_id</span>: <span className="code-string">'prop_12345'</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">contact</span>: {"{"}
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">name</span>: <span className="code-string">'María García'</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">email</span>: <span className="code-string">'maria@email.com'</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">phone</span>: <span className="code-string">'+34 612 345 678'</span>
        </span>
        <span className="code-line"> {"}"}</span>
        <span className="code-line"> {"}"})</span>
        <span className="code-line">{"}"});</span>
        <span className="code-line"></span>
        <span className="code-line">
          <span className="code-comment">// Respuesta</span>
        </span>
        <span className="code-line">{"{"}</span>
        <span className="code-line">
          {" "}
          <span className="code-property">"id"</span>: <span className="code-string">"lead_8x7k2m"</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">"status"</span>: <span className="code-string">"validated"</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">"score"</span>: <span className="code-number">85</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">"auto_response_sent"</span>: <span className="code-keyword">true</span>,
        </span>
        <span className="code-line">
          {" "}
          <span className="code-property">"next_action"</span>: <span className="code-string">"schedule_visit"</span>
        </span>
        <span className="code-line">{"}"}</span>
      </code>
    </div>
  )
}
