import IntegrationIcon from "./IntegrationIcon" // Assuming IntegrationIcon is in the same directory

export function WorkflowVisualization() {
  const integrations = [
    { name: "Idealista", color: "#8BC53F" },
    { name: "Fotocasa", color: "#E31837" },
    { name: "Habitaclia", color: "#FF6600" },
    { name: "Pisos.com", color: "#0066CC" },
    { name: "WhatsApp", color: "#25D366" },
    { name: "Gmail", color: "#EA4335" },
    { name: "Calendar", color: "#4285F4" },
    { name: "Drive", color: "#FBBC04" },
  ]

  return (
    <div className="workflow-hub" aria-label="Diagrama de integraciones de RentAFlow">
      {/* Center Hub */}
      <div className="workflow-hub__center">
        <svg
          className="workflow-hub__center-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="12" cy="12" r="3" />
          <circle cx="12" cy="12" r="7" strokeDasharray="4 2" />
          <circle cx="12" cy="12" r="10" strokeDasharray="2 3" />
        </svg>
      </div>

      {/* Integration Nodes */}
      <div className="workflow-nodes">
        {integrations.map((integration, index) => (
          <div
            key={integration.name}
            className="workflow-node"
            title={integration.name}
            style={{
              borderColor: integration.color,
              borderWidth: "2px",
            }}
          >
            <IntegrationIcon name={integration.name} />
          </div>
        ))}
      </div>

      {/* Output Cards */}
      <div className="workflow-outputs">
        <div className="workflow-output">
          <div className="workflow-output__header">
            <span className="workflow-output__dot" style={{ background: "#4CAF50" }}></span>
            <span className="workflow-output__title">Lead Validado</span>
          </div>
          <div className="workflow-output__content">
            <span className="workflow-output__tag">Score: 95</span>
            <span className="workflow-output__tag">Docs OK</span>
          </div>
        </div>

        <div className="workflow-output">
          <div className="workflow-output__header">
            <span className="workflow-output__dot" style={{ background: "#2196F3" }}></span>
            <span className="workflow-output__title">Visita Programada</span>
          </div>
          <div className="workflow-output__content">
            <span className="workflow-output__tag">Mañana 10:00</span>
            <span className="workflow-output__tag">Agente: JM</span>
          </div>
        </div>

        <div className="workflow-output">
          <div className="workflow-output__header">
            <span className="workflow-output__dot" style={{ background: "#9C27B0" }}></span>
            <span className="workflow-output__title">Contrato Listo</span>
          </div>
          <div className="workflow-output__content">
            <span className="workflow-output__tag">Firmado</span>
            <span className="workflow-output__tag">Enviado</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// function IntegrationIcon({ name }: { name: string }) {
//   const icons: Record<string, JSX.Element> = {
//     Idealista: (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#8BC53F" />
//         <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">id</text>
//       </svg>
//     ),
//     Fotocasa: (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#E31837" />
//         <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">fc</text>
//       </svg>
//     ),
//     Habitaclia: (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#FF6600" />
//         <text x="16" y="21" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">hb</text>
//       </svg>
//     ),
//     "Pisos.com": (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#0066CC" />
//         <path d="M16 8c-4.4 0-8 3.6-8 8 0 1.4.4 2.8 1 4l-1 3.7 3.8-1c1.2.6 2.5 1 3.9 1 4.4 0 8-3.6 8-8s-3.6-8-7.7-8z" fill="white" />
//       </svg>
//     ),
//     WhatsApp: (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#25D366" />
//         <path d="M8 12l8 5 8-5v10H8z" fill="white" />
//         <path d="M8 12l8 5 8-5" stroke="white" strokeWidth="2" fill="none" />
//       </svg>
//     ),
//     Gmail: (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#EA4335" />
//         <path d="M8 12l8 5 8-5H8z" fill="white" />
//         <path d="M8 12l8 5 8-5" stroke="white" strokeWidth="2" fill="none" />
//       </svg>
//     ),
//     Calendar: (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#4285F4" />
//         <rect x="8" y="10" width="16" height="14" rx="2" fill="white" />
//         <rect x="10" y="8" width="2" height="4" fill="#4285F4" />
//         <rect x="20" y="8" width="2" height="4" fill="#4285F4" />
//         <rect x="10" y="16" width="4" height="4" fill="#4285F4" />
//       </svg>
//     ),
//     Drive: (
//       <svg viewBox="0 0 32 32" width="32" height="32">
//         <rect width="32" height="32" rx="4" fill="#FBBC04" />
//         <path d="M10 22l6-10 6 10H10z" fill="white" />
//       </svg>
//     ),
//   }

//   return icons[name] || (
//     <svg viewBox="0 0 32 32" width="32" height="32">
//       <rect width="32" height="32" rx="4" fill="#9CA3AF" />
//       <circle cx="16" cy="16" r="6" fill="white" />
//     </svg>
//   )
// }
