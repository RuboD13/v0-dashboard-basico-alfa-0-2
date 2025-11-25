"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la integración con los portales?",
      answer:
        "La integración es inmediata para la mayoría de portales. Solo necesitas conectar tu cuenta y en menos de 5 minutos estarás recibiendo leads automáticamente. Para integraciones personalizadas mediante API, nuestro equipo te asiste durante todo el proceso.",
    },
    {
      question: "¿Qué pasa si supero las ejecuciones de mi plan?",
      answer:
        "Te notificaremos cuando estés cerca del límite. Puedes actualizar tu plan en cualquier momento o adquirir ejecuciones adicionales. Nunca se detendrá tu flujo de trabajo sin previo aviso.",
    },
    {
      question: "¿Es seguro subir documentación sensible?",
      answer:
        "Absolutamente. Utilizamos encriptación de nivel bancario (AES-256) para todos los documentos. Cumplimos con RGPD y nuestros servidores están ubicados en la UE. Además, puedes configurar retención y eliminación automática de documentos.",
    },
    {
      question: "¿Puedo personalizar los mensajes automáticos?",
      answer:
        "Sí, todos los mensajes son completamente personalizables. Puedes crear plantillas diferentes según el portal de origen, el tipo de propiedad o cualquier criterio que definas. También soportamos variables dinámicas para personalización avanzada.",
    },
    {
      question: "¿Ofrecen período de prueba?",
      answer:
        "Sí, ofrecemos 14 días de prueba gratuita con acceso completo a todas las funcionalidades. No se requiere tarjeta de crédito para empezar. Si decides continuar, simplemente elige el plan que mejor se adapte a tus necesidades.",
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer:
        "Por supuesto. No hay permanencia ni penalizaciones. Puedes cancelar tu suscripción cuando quieras desde tu panel de control. Tendrás acceso hasta el final de tu período de facturación.",
    },
  ]

  return (
    <section id="faq" className="faq">
      <div className="landing-container">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle">
            ¿Tienes dudas? Aquí encontrarás las respuestas a las preguntas más comunes.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.question}
                <svg
                  className="faq-icon"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div className="faq-answer">
                <p className="faq-answer-content">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
