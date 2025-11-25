import { Icons } from "./icons"

export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Conecta tus fuentes",
      description: "Integra tu email, portales inmobiliarios y formularios web. Sin código, en 30 minutos.",
    },
    {
      number: "2",
      title: "Configura tus reglas",
      description: "Define requisitos por propiedad: ingresos mínimos, documentos necesarios, horarios de visita.",
    },
    {
      number: "3",
      title: "Deja que la IA trabaje",
      description: "RentAFlow responde, filtra, agenda y recopila. Tú solo validas y firmas contratos.",
    },
  ]

  return (
    <section className="rf-how-it-works" id="how-it-works">
      <div className="rf-container">
        <div className="rf-section-header">
          <span className="rf-section-label">Cómo Funciona</span>
          <h2 className="rf-section-title">De lead a contrato en 3 simples pasos</h2>
          <p className="rf-section-description">Configuración sin código. Resultados desde el primer día.</p>
        </div>

        <div className="rf-steps">
          {steps.map((step, index) => (
            <div key={index} className="rf-step">
              <div className="rf-step-number">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
              {index < steps.length - 1 && <div className="rf-step-connector"></div>}
            </div>
          ))}
        </div>

        {/* Workflow Visualization */}
        <div style={{ marginTop: "4rem" }}>
          <WorkflowVisualization />
        </div>
      </div>
    </section>
  )
}

function WorkflowVisualization() {
  const workflowSteps = [
    {
      icon: <Icons.Mail />,
      title: "Lead Entrante",
      desc: "Email, Idealista, Fotocasa...",
      color: "#4F46E5",
    },
    {
      icon: <Icons.Shield />,
      title: "Validación IA",
      desc: "DNI, ingresos, requisitos",
      color: "#06B6D4",
    },
    {
      icon: <Icons.Calendar />,
      title: "Agenda Visita",
      desc: "Sync con calendario",
      color: "#F59E0B",
    },
    {
      icon: <Icons.MessageSquare />,
      title: "Feedback",
      desc: "Automático post-visita",
      color: "#10B981",
    },
    {
      icon: <Icons.FileText />,
      title: "Documentación",
      desc: "Recogida centralizada",
      color: "#8B5CF6",
    },
  ]

  return (
    <div className="rf-workflow">
      {workflowSteps.map((step, index) => (
        <div key={index} className="rf-workflow-step">
          <div className="rf-workflow-step-icon" style={{ background: step.color }}>
            {step.icon}
          </div>
          <h5>{step.title}</h5>
          <p>{step.desc}</p>
        </div>
      ))}
    </div>
  )
}
