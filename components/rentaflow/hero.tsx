import { Icons } from "./icons"

export function Hero() {
  return (
    <section className="rf-hero">
      <div className="rf-container rf-hero-content">
        <div className="rf-hero-badge">
          <span className="rf-hero-badge-dot"></span>
          <span>+500 agencias ya automatizan sus alquileres</span>
        </div>

        <h1>
          Automatiza tu Gestión de <span>Alquileres</span> con IA
        </h1>

        <p className="rf-hero-subtitle">
          Desde el primer contacto hasta la firma del contrato. RentAFlow responde, filtra, agenda visitas y recopila
          documentación automáticamente. Todo con tu marca.
        </p>

        <div className="rf-hero-actions">
          <a href="#demo" className="rf-btn rf-btn-primary rf-btn-lg">
            Empezar Gratis
            <Icons.ArrowRight />
          </a>
          <a href="#video" className="rf-btn rf-btn-secondary rf-btn-lg">
            <Icons.Play />
            Ver Demo
          </a>
        </div>

        <div className="rf-hero-preview">
          <div className="rf-hero-preview-window">
            <div className="rf-hero-preview-header">
              <span className="rf-preview-dot red"></span>
              <span className="rf-preview-dot yellow"></span>
              <span className="rf-preview-dot green"></span>
            </div>
            <div className="rf-hero-preview-body">
              <DashboardPreview />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function DashboardPreview() {
  return (
    <div style={{ display: "flex", gap: "1.5rem", height: "100%" }}>
      {/* Sidebar Preview */}
      <div
        style={{
          width: "200px",
          background: "#1E293B",
          borderRadius: "12px",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
      >
        <div
          style={{
            color: "white",
            fontWeight: 700,
            fontSize: "1rem",
            marginBottom: "1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "24px",
              background: "linear-gradient(135deg, #4F46E5, #06B6D4)",
              borderRadius: "6px",
            }}
          ></div>
          RentAFlow
        </div>
        {["Dashboard", "Leads", "Visitas", "Documentos", "Propiedades", "Configuración"].map((item, i) => (
          <div
            key={item}
            style={{
              padding: "0.625rem 0.75rem",
              borderRadius: "8px",
              color: i === 0 ? "white" : "rgba(255,255,255,0.6)",
              background: i === 0 ? "rgba(79, 70, 229, 0.3)" : "transparent",
              fontSize: "0.875rem",
              cursor: "pointer",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1rem" }}>
        {/* Metrics Row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }}>
          {[
            { label: "Leads Activos", value: "127", change: "+12%" },
            { label: "Visitas Hoy", value: "8", change: "+3" },
            { label: "Contratos Mes", value: "23", change: "+18%" },
            { label: "Tiempo Respuesta", value: "< 2min", change: "-45%" },
          ].map((metric) => (
            <div
              key={metric.label}
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "1rem",
                border: "1px solid #EAE5E3",
              }}
            >
              <div style={{ fontSize: "0.75rem", color: "#64748B", marginBottom: "0.5rem" }}>{metric.label}</div>
              <div style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A" }}>{metric.value}</div>
              <div style={{ fontSize: "0.75rem", color: "#10B981", marginTop: "0.25rem" }}>{metric.change}</div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: "12px",
            padding: "1rem",
            border: "1px solid #EAE5E3",
          }}
        >
          <div style={{ fontSize: "0.875rem", fontWeight: 600, marginBottom: "1rem", color: "#0F172A" }}>
            Actividad Reciente
          </div>
          {[
            { time: "Hace 2 min", text: "Nuevo lead: María García - Piso Calle Mayor 23", status: "new" },
            { time: "Hace 15 min", text: "Visita confirmada: Juan Pérez - Mañana 10:00", status: "confirmed" },
            { time: "Hace 1h", text: "Documentación completa: Ana López - Listo para contrato", status: "complete" },
            { time: "Hace 2h", text: "Lead validado: Carlos Ruiz - Ingresos verificados", status: "validated" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.75rem 0",
                borderBottom: i < 3 ? "1px solid #F3F3F2" : "none",
              }}
            >
              <div
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background:
                    item.status === "new"
                      ? "#4F46E5"
                      : item.status === "confirmed"
                        ? "#F59E0B"
                        : item.status === "complete"
                          ? "#10B981"
                          : "#06B6D4",
                }}
              ></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "0.8125rem", color: "#0F172A" }}>{item.text}</div>
                <div style={{ fontSize: "0.6875rem", color: "#94A3B8" }}>{item.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
