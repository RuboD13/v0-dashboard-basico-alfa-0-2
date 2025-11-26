"use client"

import { useState } from "react"
import "./landing.css"

const faqs = [
  {
    question: "¿Cómo funciona la integración con los portales inmobiliarios?",
    answer:
      "RentAFlow se conecta directamente con Idealista, Fotocasa, Habitaclia, Pisos.com y otros portales mediante integraciones oficiales. Una vez configurado, capturamos automáticamente todos los leads que llegan a tus anuncios y los procesamos según tus reglas de automatización.",
  },
  {
    question: "¿Qué incluye la validación de inquilinos con IA?",
    answer:
      "Nuestra IA analiza la información del inquilino, verifica documentos (DNI, nóminas, contratos), calcula un score de solvencia y detecta posibles inconsistencias. Todo esto de forma automática para que solo dediques tiempo a inquilinos cualificados.",
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer:
      "Sí, puedes cancelar tu suscripción cuando quieras. No hay permanencia ni penalizaciones. Si cancelas, mantendrás acceso hasta el final del período de facturación actual.",
  },
  {
    question: "¿Mis datos están seguros?",
    answer:
      "Absolutamente. Cumplimos con GDPR y aplicamos encriptación de extremo a extremo para todos los datos sensibles. Los documentos de inquilinos se almacenan de forma segura y solo son accesibles por usuarios autorizados de tu agencia.",
  },
  {
    question: "¿Cómo funciona la sincronización con Google Calendar?",
    answer:
      "Al programar una visita en RentAFlow, se crea automáticamente un evento en el calendario del agente asignado y se envían recordatorios al inquilino. Si hay cambios, todo se actualiza automáticamente en ambos lados.",
  },
  {
    question: "¿Ofrecen soporte en español?",
    answer:
      "Sí, todo nuestro equipo de soporte habla español nativo. Ofrecemos soporte por email en todos los planes y soporte prioritario 24/7 para planes Agency y Profesional.",
  },
  {
    question: "¿Puedo probar RentAFlow antes de pagar?",
    answer:
      "Todos los planes incluyen 14 días de prueba gratuita con acceso completo a todas las funcionalidades. No se requiere tarjeta de crédito para empezar.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">FAQ</span>
          <h2 className="section-title">Preguntas frecuentes</h2>
          <p className="section-subtitle">Resolvemos tus dudas más comunes sobre RentAFlow.</p>
        </div>

        <div className="faq-grid">
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
                <p className="faq-answer-content">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
