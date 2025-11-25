"use client"

import { useState } from "react"
import { Icons } from "./icons"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la configuración inicial?",
      answer:
        "La configuración básica tarda menos de 30 minutos. Solo necesitas conectar tu cuenta de correo y configurar tus requisitos por propiedad. Nuestro equipo te guía en todo el proceso sin necesidad de conocimientos técnicos.",
    },
    {
      question: "¿Es compatible con mi CRM actual?",
      answer:
        "RentAFlow se integra con los principales CRMs del mercado inmobiliario a través de nuestra API REST. Si tu CRM no está en nuestra lista de integraciones directas, podemos conectarlo mediante webhooks o Zapier.",
    },
    {
      question: "¿Qué pasa con los datos de mis clientes? ¿Es seguro?",
      answer:
        "Todos los datos se almacenan en servidores de la UE con cifrado en tránsito y reposo. Cumplimos con RGPD y disponemos de certificación ISO 27001. Además, puedes configurar políticas de retención de datos según tus necesidades.",
    },
    {
      question: "¿Puedo cancelar en cualquier momento?",
      answer:
        "Sí, todos nuestros planes son mensuales sin permanencia. Puedes cancelar cuando quieras desde tu panel de control. Tus datos se mantienen disponibles para exportación durante 30 días tras la cancelación.",
    },
    {
      question: "¿Funciona con propiedades de alquiler vacacional?",
      answer:
        "Actualmente RentAFlow está optimizado para alquileres de larga duración y temporada (3+ meses). Estamos desarrollando funcionalidades específicas para alquiler vacacional que estarán disponibles próximamente.",
    },
    {
      question: "¿Qué soporte ofrecéis?",
      answer:
        "Todos los planes incluyen soporte por email. Los planes Pro y Enterprise incluyen soporte prioritario con tiempos de respuesta garantizados, y Enterprise dispone de un Account Manager dedicado y soporte telefónico.",
    },
  ]

  return (
    <section className="rf-faq" id="faq">
      <div className="rf-container">
        <div className="rf-section-header">
          <span className="rf-section-label">FAQ</span>
          <h2 className="rf-section-title">Preguntas Frecuentes</h2>
          <p className="rf-section-description">Todo lo que necesitas saber para empezar</p>
        </div>

        <div className="rf-faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`rf-faq-item ${openIndex === index ? "active" : ""}`}>
              <button className="rf-faq-question" onClick={() => setOpenIndex(openIndex === index ? null : index)}>
                {faq.question}
                <span className="rf-faq-icon">
                  <Icons.ChevronDown />
                </span>
              </button>
              <div className="rf-faq-answer">
                <p className="rf-faq-answer-content">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
