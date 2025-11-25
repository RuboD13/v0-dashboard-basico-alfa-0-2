"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cómo funciona la integración con los portales inmobiliarios?",
      answer:
        "RentAFlow se conecta directamente con las APIs de Idealista, Fotocasa, Habitaclia y otros portales. Una vez configurado, los leads se importan automáticamente en tiempo real a tu dashboard. No necesitas conocimientos técnicos, solo autorizar la conexión.",
    },
    {
      question: "¿Qué significa 'ejecuciones' en los planes?",
      answer:
        "Una ejecución es cada acción automatizada que realiza el sistema: enviar un email, validar un lead, programar una visita, etc. El plan Mini incluye 200 ejecuciones mensuales, suficientes para gestionar aproximadamente 50-100 leads al mes.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, no hay permanencia. Puedes cancelar tu suscripción cuando quieras desde tu panel de control. Seguirás teniendo acceso hasta el final del período de facturación actual.",
    },
    {
      question: "¿Es seguro subir documentos sensibles de inquilinos?",
      answer:
        "Absolutamente. Utilizamos encriptación de grado bancario (AES-256) para todos los documentos. Cumplimos con GDPR y la LOPDGDD. Los datos se almacenan en servidores europeos certificados ISO 27001.",
    },
    {
      question: "¿Ofrecen formación o soporte para configurar la plataforma?",
      answer:
        "Sí, todos los planes incluyen acceso a nuestra documentación y videotutoriales. Los planes Agency y Profesional incluyen onboarding personalizado con un especialista que te ayuda a configurar tus flujos de trabajo.",
    },
    {
      question: "¿Puedo probar RentAFlow antes de pagar?",
      answer:
        "Por supuesto. Ofrecemos 14 días de prueba gratuita con acceso completo a todas las funcionalidades del plan Starter. No se requiere tarjeta de crédito para empezar.",
    },
  ]

  return (
    <section id="faq" className="faq">
      <div className="section-header">
        <span className="section-label">FAQ</span>
        <h2 className="section-title text-balance">Preguntas frecuentes</h2>
        <p className="section-subtitle text-pretty">Todo lo que necesitas saber sobre RentAFlow.</p>
      </div>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
              {faq.question}
              <svg
                className="faq-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-content">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
