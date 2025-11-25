"use client"

import { useState } from "react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la configuración inicial?",
      answer:
        "La configuración básica toma menos de 15 minutos. Conectar tus portales inmobiliarios y configurar las primeras respuestas automáticas es un proceso guiado paso a paso. Para configuraciones más avanzadas con validación de documentos y flujos personalizados, nuestro equipo te acompaña en un onboarding de 1-2 horas.",
    },
    {
      question: "¿Qué portales inmobiliarios están integrados?",
      answer:
        "RentAFlow se integra con los principales portales de España: Idealista, Fotocasa, Habitaclia, Pisos.com, Yaencontre y Milanuncios. También conectamos con WhatsApp Business, Gmail, Google Calendar y sistemas de gestión documental. Si necesitas una integración específica, podemos desarrollarla para ti.",
    },
    {
      question: "¿Cómo funciona la validación automática de inquilinos?",
      answer:
        "Nuestro sistema de IA analiza la información proporcionada por el lead: datos de contacto, situación laboral, ingresos declarados y documentación adjunta. Asigna un score de solvencia y verifica que cumple los requisitos que has definido (renta mínima, tipo de contrato, etc.) antes de pasar a la fase de visita.",
    },
    {
      question: "¿Puedo personalizar las respuestas automáticas?",
      answer:
        "Sí, completamente. Puedes crear plantillas personalizadas para cada etapa del proceso: primer contacto, solicitud de documentos, confirmación de visita, recordatorios, etc. Las plantillas soportan variables dinámicas como nombre del lead, dirección del inmueble y fecha/hora de visita.",
    },
    {
      question: "¿Qué pasa si necesito más ejecuciones de las incluidas en mi plan?",
      answer:
        "Puedes actualizar tu plan en cualquier momento desde el panel de control. También ofrecemos paquetes de ejecuciones adicionales sin cambiar de plan. Si superas el límite, te avisamos antes de pausar las automatizaciones para que puedas decidir cómo proceder.",
    },
    {
      question: "¿Ofrecen periodo de prueba gratuito?",
      answer:
        "Sí, ofrecemos 14 días de prueba gratuita con todas las funcionalidades del plan Starter. No necesitas tarjeta de crédito para empezar. Al finalizar el periodo, puedes elegir el plan que mejor se adapte a tu negocio o seguir con la versión gratuita limitada.",
    },
    {
      question: "¿Mis datos y los de mis clientes están seguros?",
      answer:
        "Absolutamente. RentAFlow cumple con el RGPD y utiliza encriptación de extremo a extremo para toda la información sensible. Los documentos se almacenan en servidores europeos certificados y tenemos auditorías de seguridad regulares. Además, puedes eliminar datos de leads en cualquier momento.",
    },
  ]

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="faq" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FAQ</span>
          <h2 id="faq-title" className="section-title text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="section-subtitle">Todo lo que necesitas saber para empezar con RentAFlow</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "is-open" : ""}`}>
              <button
                className="faq-item__question"
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{faq.question}</span>
                <span className="faq-item__icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </span>
              </button>
              <div
                id={`faq-answer-${index}`}
                className="faq-item__answer"
                role="region"
                aria-labelledby={`faq-question-${index}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
