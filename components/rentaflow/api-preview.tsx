export function ApiPreview() {
  return (
    <section className="rf-api-preview">
      <div className="rf-container">
        <div className="rf-section-header">
          <span className="rf-section-label">Para Desarrolladores</span>
          <h2 className="rf-section-title">API REST Completa</h2>
          <p className="rf-section-description">
            Integra RentAFlow con tu CRM, ERP o cualquier sistema existente. Documentación completa y SDKs disponibles.
          </p>
        </div>

        <div className="rf-api-grid">
          {/* Request */}
          <div className="rf-api-code">
            <div className="rf-api-code-header">
              <div className="rf-api-code-tabs">
                <button className="rf-api-code-tab active">cURL</button>
                <button className="rf-api-code-tab">JavaScript</button>
                <button className="rf-api-code-tab">Python</button>
              </div>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>POST /api/leads</span>
            </div>
            <div className="rf-api-code-body">
              <code>
                <span className="rf-code-line">
                  <span className="rf-code-comment"># Crear nuevo lead con validación automática</span>
                </span>
                <span className="rf-code-line">
                  curl -X <span className="rf-code-string">POST</span> \
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-string">"https://api.rentaflow.io/v1/leads"</span> \
                </span>
                <span className="rf-code-line">
                  {" "}
                  -H <span className="rf-code-string">"Authorization: Bearer $API_KEY"</span> \
                </span>
                <span className="rf-code-line">
                  {" "}
                  -H <span className="rf-code-string">"Content-Type: application/json"</span> \
                </span>
                <span className="rf-code-line">
                  {" "}
                  -d <span className="rf-code-string">{"'{"}</span>
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"name"</span>:{" "}
                  <span className="rf-code-string">"María García"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"email"</span>:{" "}
                  <span className="rf-code-string">"maria@email.com"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"phone"</span>:{" "}
                  <span className="rf-code-string">"+34 612 345 678"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"property_id"</span>:{" "}
                  <span className="rf-code-string">"prop_abc123"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"auto_validate"</span>:{" "}
                  <span className="rf-code-keyword">true</span>
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-string">{"}'}"}</span>
                </span>
              </code>
            </div>
          </div>

          {/* Response */}
          <div className="rf-api-response">
            <div className="rf-api-response-header">
              <div className="rf-api-status">
                <span className="rf-api-status-dot"></span>
                200 OK
              </div>
              <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>Response (42ms)</span>
            </div>
            <div className="rf-api-code-body">
              <code>
                <span className="rf-code-line">{"{"}</span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"id"</span>: <span className="rf-code-string">"lead_xyz789"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"status"</span>:{" "}
                  <span className="rf-code-string">"validating"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"created_at"</span>:{" "}
                  <span className="rf-code-string">"2025-01-15T10:30:00Z"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"validation"</span>: {"{"}
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"dni_verified"</span>:{" "}
                  <span className="rf-code-keyword">null</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"income_verified"</span>:{" "}
                  <span className="rf-code-keyword">null</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"documents_pending"</span>: [
                  <span className="rf-code-string">"dni"</span>, <span className="rf-code-string">"nomina"</span>]
                </span>
                <span className="rf-code-line"> {"}"},</span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"next_action"</span>:{" "}
                  <span className="rf-code-string">"request_documents"</span>,
                </span>
                <span className="rf-code-line">
                  {" "}
                  <span className="rf-code-property">"auto_email_sent"</span>:{" "}
                  <span className="rf-code-keyword">true</span>
                </span>
                <span className="rf-code-line">{"}"}</span>
              </code>
            </div>
          </div>
        </div>

        {/* API Endpoints Quick Reference */}
        <div
          style={{
            marginTop: "2rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            { method: "GET", endpoint: "/leads", desc: "Listar todos los leads" },
            { method: "POST", endpoint: "/visits", desc: "Programar nueva visita" },
            { method: "PUT", endpoint: "/documents/:id", desc: "Actualizar documento" },
            { method: "GET", endpoint: "/analytics", desc: "Métricas en tiempo real" },
          ].map((api, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                padding: "1rem 1.25rem",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  padding: "0.25rem 0.5rem",
                  borderRadius: "4px",
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  background:
                    api.method === "GET"
                      ? "rgba(16, 185, 129, 0.2)"
                      : api.method === "POST"
                        ? "rgba(79, 70, 229, 0.2)"
                        : "rgba(245, 158, 11, 0.2)",
                  color: api.method === "GET" ? "#10B981" : api.method === "POST" ? "#818CF8" : "#F59E0B",
                }}
              >
                {api.method}
              </span>
              <div>
                <div style={{ fontSize: "0.875rem", fontWeight: 600, color: "white" }}>{api.endpoint}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)" }}>{api.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
