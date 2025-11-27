"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cómo funciona la captura automática de leads?",
      answer:
        "Nuestra IA monitoriza tus anuncios en todos los portales integrados 24/7. Cuando un usuario envía una consulta, respondemos automáticamente en menos de 60 segundos con información personalizada y programamos el siguiente paso según tus criterios.",
    },
    {
      question: "¿Qué portales inmobiliarios están soportados?",
      answer:
        "Actualmente tenemos integración con Idealista, Fotocasa, Habitaclia, Pisos.com, Yaencontre, Tucasa, Spotahome y Badi. Añadimos nuevos portales cada mes.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar RentAFlow?",
      answer:
        "No. La plataforma está diseñada para ser intuitiva y no requiere conocimientos técnicos. La configuración inicial toma menos de 10 minutos y ofrecemos soporte completo durante la integración.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, puedes cancelar tu suscripción en cualquier momento sin penalizaciones. No hay contratos de permanencia y puedes exportar todos tus datos antes de cancelar.",
    },
    {
      question: "¿Cómo se garantiza la seguridad de los datos sensibles?",
      answer:
        "Todos los datos están encriptados end-to-end. Cumplimos con GDPR y utilizamos servidores en Europa. Los documentos sensibles se almacenan con cifrado AES-256 y nunca compartimos información con terceros.",
    },
    {
      question: "¿Ofrecen período de prueba gratuito?",
      answer:
        "Sí, ofrecemos 14 días de prueba gratuita sin necesidad de tarjeta de crédito. Tendrás acceso completo a todas las funcionalidades del plan Starter.",
    },
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-porcelain">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4 text-balance">Preguntas frecuentes</h2>
          <p className="text-xl text-text-muted text-pretty">Todo lo que necesitas saber sobre RentAFlow</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-chalk rounded-xl border border-silk shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-porcelain transition-colors"
              >
                <span className="font-semibold text-text-dark pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
