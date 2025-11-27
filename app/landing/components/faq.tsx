"use client"

import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cuánto tiempo tarda la configuración inicial?",
      answer:
        "La configuración completa toma aproximadamente 15 minutos. Conectas tus portales inmobiliarios, configuras tus respuestas automáticas y ya estás listo para empezar a recibir y gestionar leads automáticamente.",
    },
    {
      question: "¿Qué pasa si excedo mi límite de ejecuciones?",
      answer:
        "Si alcanzas tu límite mensual, te notificamos con anticipación. Puedes actualizar tu plan en cualquier momento o comprar paquetes adicionales de ejecuciones según tus necesidades.",
    },
    {
      question: "¿Se integra con mi calendario existente?",
      answer:
        "Sí, RentAFlow se integra perfectamente con Google Calendar, Outlook y Apple Calendar. Las visitas programadas se sincronizan automáticamente y los recordatorios se envían a todas las partes.",
    },
    {
      question: "¿Cómo funciona la validación con IA?",
      answer:
        "Nuestra IA analiza las respuestas de los inquilinos potenciales basándose en tus criterios (ingresos mínimos, tipo de contrato, garantías). Solo los leads que cumplen tus requisitos pasan a la fase de programación de visitas.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, no hay compromisos a largo plazo. Puedes cancelar tu suscripción en cualquier momento desde tu panel de control. Tendrás acceso completo hasta el final de tu periodo de facturación actual.",
    },
    {
      question: "¿Ofrecen soporte en español?",
      answer:
        "Por supuesto. Todo nuestro equipo de soporte habla español y está disponible por email, chat y teléfono (según tu plan). Los planes Agency y Profesional incluyen soporte prioritario.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-text-dark mb-4 text-balance">Preguntas frecuentes</h2>
          <p className="text-xl text-text-muted text-pretty">Todo lo que necesitas saber sobre RentAFlow</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-porcelain rounded-xl border border-silk overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-silk/50 transition-colors"
              >
                <span className="font-bold text-text-dark pr-8">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-text-muted flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-text-muted leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-text-muted mb-4">¿No encuentras lo que buscas?</p>
          <a href="/contacto" className="inline-flex items-center space-x-2 text-primary font-medium hover:underline">
            <span>Contacta con nuestro equipo</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
