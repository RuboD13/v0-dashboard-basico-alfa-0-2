"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la integración con los portales?",
      answer:
        "La integración es inmediata. En menos de 15 minutos puedes tener conectados Idealista, Fotocasa, Habitaclia y otros portales principales. Solo necesitas tus credenciales de acceso.",
    },
    {
      question: "¿Qué pasa si supero las ejecuciones de mi plan?",
      answer:
        "Recibirás una notificación cuando alcances el 80% de tu límite. Puedes actualizar tu plan en cualquier momento o comprar ejecuciones adicionales sin cambiar de plan.",
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer:
        "Sí, no hay permanencia. Puedes cancelar tu suscripción cuando quieras y seguirás teniendo acceso hasta el final del período facturado.",
    },
    {
      question: "¿Es seguro subir documentos sensibles?",
      answer:
        "Absolutamente. Utilizamos encriptación de grado bancario (AES-256) y cumplimos con GDPR. Los documentos se almacenan en servidores europeos certificados ISO 27001.",
    },
    {
      question: "¿Ofrecen período de prueba?",
      answer:
        "Sí, ofrecemos 14 días de prueba gratuita con acceso completo a todas las funcionalidades. No se requiere tarjeta de crédito.",
    },
    {
      question: "¿Puedo personalizar los mensajes automáticos?",
      answer:
        "Por supuesto. Tienes control total sobre las plantillas de email, WhatsApp y SMS. Puedes usar variables dinámicas como nombre del inquilino, dirección de la propiedad, fecha de visita, etc.",
    },
  ]

  return (
    <section id="faq" className="faq section">
      <div className="container">
        <div className="section-header">
          <h2 className="heading-lg">Preguntas Frecuentes</h2>
          <p>Todo lo que necesitas saber para empezar</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.question}
                <span className="faq-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
